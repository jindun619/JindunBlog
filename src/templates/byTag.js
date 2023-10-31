import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { CardsArea } from "../components/CardsArea"
import { TagBtn } from "../components/TagBtn"

import { useTheme } from "../hooks/useTheme"

export default function ByTagTemplate({ pageContext, data }) {
  useTheme("")

  const postsData = data.posts
  const navbarData = data.navbar
  const tagsData = data.tags

  const tag = pageContext.node
  const filteredData = postsData.edges.filter(({ node }) => {
    return node.frontmatter.tags.includes(tag)
  })

  const tags = tagsData.distinct.map((it, idx) => {
    if (it === tag) {
      return <TagBtn key={idx} name={it} isActive={true} />
    } else {
      return (
        <Link key={idx} to={`/tag=${it}`}>
          <TagBtn name={it} />
        </Link>
      )
    }
  })

  return (
    <Layout navbarData={navbarData}>
      <Seo
        title={`category=${tag}`}
        description={`category=${tag}`}
        url={`/category=${tag}`}
      />
      <div className="listByTag max-w-2xl pt-16 mx-auto">
        <article className="prose prose1">
          <h1 className="ml-4">{`# ${tag}`}</h1>
        </article>
        <div className="flex flex-wrap gap-2 ml-4">{tags}</div>
        <article className="prose prose2">
          <figcaption className="ml-4">{`총 ${filteredData.length}개의 포스트`}</figcaption>
        </article>
        <CardsArea data={filteredData} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    posts: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          frontmatter {
            date
            title
            slug
            tags
            category
          }
          excerpt(truncate: true)
        }
      }
    }
    navbar: allMarkdownRemark {
      distinct(field: { frontmatter: { category: SELECT } })
    }
    tags: allMarkdownRemark {
      distinct(field: { frontmatter: { tags: SELECT } })
    }
  }
`
