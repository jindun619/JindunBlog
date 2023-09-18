import * as React from "react"
import { useEffect } from "react"
import { graphql } from "gatsby"
import { Navbar } from "../../components/Navbar";
import { Tag } from "../../components/Tag"

export default function BlogPostTemplate({data}) {
  useEffect(() => {
    const fadeInTransition = document.querySelector(".fadeInTransition")
    fadeInTransition.classList.remove("opacity-0")

    const curTheme = window.localStorage.getItem('theme') || 'light'
    window.localStorage.setItem('theme', curTheme)

    const whole_container = document.querySelector("html")
    const newTheme = curTheme === 'light' ? 'winter' : 'night'
    whole_container.setAttribute('data-theme', newTheme)
  })

  const {markdownRemark} = data
  const {frontmatter, html} = markdownRemark

  const tags = frontmatter.tags.map((node) => (
    <Tag key={node} name={node} size="xs" noHover={true} />
  ))
  return (
    <div className="whole_container h-full"> {/* night */}
      <Navbar data={data} />
      <div className="max-w-2xl pt-16 mx-auto px-4 md:px-0 opacity-0 fadeInTransition">
        <article className="prose">
          <header>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <div>{tags}</div>
          </header>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            className="mdSyntax"
          />
        </article>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
query MyQuery($id: String!) {
  markdownRemark(id: { eq: $id }) {
    frontmatter {
      date
      tags
      title
    }
    html
  }
  allMarkdownRemark {
    distinct(field: {frontmatter: {tags: SELECT}})
    totalCount
  }
}
`