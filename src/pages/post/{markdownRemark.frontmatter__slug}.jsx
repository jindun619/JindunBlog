import * as React from "react"
import { useEffect } from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/Layout"
import { CategoryBtn } from "../../components/CategoryBtn";
import { TagBtn } from "../../components/TagBtn"
import { Bio } from "../../components/Bio"
import { Comment } from "../../components/Comment"

import { useTheme } from "../../hooks/useTheme"

export default function BlogPostTemplate({data}) {
  useTheme("")
  useEffect(() => {
    // FADE IN TRANSITION
    const fadeInTransition = document.querySelector(".fadeInTransition")
    fadeInTransition.classList.remove("opacity-0")
  })

  const postData = data.post
  const navbarData = data.navbar
  
  const { frontmatter } = postData
  const { html } = postData
  
  const tags = frontmatter.tags.map((node) => (
    <Link key={node} to={`/tag=${node}`} style={{textDecoration: 'none'}}>
      <TagBtn name={node}/>
    </Link>
  ))

  const references = frontmatter.references.map((node) => (
    <div key={node}><a className="link">{node}</a></div>
  ))

  return (
    <Layout navbarData={navbarData} title={frontmatter.title} description={postData.excerpt} url={`/post${frontmatter.slug}`}>
      <div className="max-w-2xl mx-auto pt-16 px-4 md:px-0 opacity-0 fadeInTransition">
        <div className="mb-2">
          <Link to={`/category=${frontmatter.category}`}>
            <CategoryBtn name={frontmatter.category} isActive={true} />
          </Link>
        </div>
        <article className="prose">
          <header>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <div>{tags}</div>
          </header>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            className="mdSyntax pb-8 border-b-2"
          />
          <div className={frontmatter.references.length !== 0 ? "border-b-2 pb-8" : ""}>
            <h2>{frontmatter.references.length !== 0 ? "참고" : ""}</h2>
            {references}
          </div>
        </article>
        <div className="pt-8 pb-16">
          <Bio />
        </div>
        <Comment repo="jindun619/blog-comments" title={frontmatter.title} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
query MyQuery($id: String!) {
  post: markdownRemark(id: {eq: $id}) {
    frontmatter {
      date
      category
      tags
      title
      references
      slug
    }
    html
    excerpt
  }
  navbar: allMarkdownRemark {
    distinct(field: {frontmatter: {category: SELECT}})
  }
}
`