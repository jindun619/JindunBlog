import * as React from "react"
import { graphql } from "gatsby"

import { Navbar } from "../components/Navbar"
import { CardsArea } from "../components/CardsArea"

export default function byCategoryTemplate({ pageContext, data }) {
  const selectedCategory = pageContext.node
  const filteredData = data.allMarkdownRemark.edges.filter(({node}) => {
    return node.frontmatter.category[0] === selectedCategory
  })

  return (
    <div className="whole_container h-full">
      <Navbar data={data} />
      <div className="listByTag max-w-2xl pt-16 mx-auto">
        <article className="prose">
          <h1>{`# ${selectedCategory}`}</h1>
          <figcaption>{`총 ${filteredData.length}개의 포스트`}</figcaption>
        </article>
        <CardsArea data={filteredData} />
      </div>
    </div>
  );
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
            category
          }
          excerpt
        }
      }
      distinct(field: {frontmatter: {category: SELECT}})
      totalCount
    }
  }
`