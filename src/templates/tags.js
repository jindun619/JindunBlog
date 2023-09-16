import * as React from "react"
import { graphql } from "gatsby"
import { Navbar } from "../components/Navbar"
import { CardsArea } from "../components/CardsArea"

export default function tagsPageTemplate({ pageContext, data }) {
  const tag = pageContext.node
  const filteredData = data.allMarkdownRemark.edges.filter(({node}) => {
    return node.frontmatter.tags.includes(tag)
  })

    return (
      <div data-theme="winter" className="whole_container h-full"> {/* night */}
        <Navbar data={data} />
        <div className="max-w-2xl pt-16 mx-auto">
          <div className="p-8">
            <article className="prose">
              <h1>{`# ${tag}`}</h1>
              <figcaption>{`총 ${filteredData.length}개의 포스트`}</figcaption>
            </article>
          </div>
          <CardsArea data={filteredData} />
        </div>
      </div>
    )
}

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      edges {
        node {
          frontmatter {
            date
            title
            slug
            tags
          }
          excerpt
        }
      }
      distinct(field: {frontmatter: {tags: SELECT}})
      totalCount
    }
  }
`