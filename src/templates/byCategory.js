import * as React from "react"
import { useEffect } from "react"
import { graphql } from "gatsby"

import { Navbar } from "../components/Navbar"
import { CardsArea } from "../components/CardsArea"

export default function ByCategoryTemplate({ pageContext, data }) {
  useEffect(() => {
    const curTheme = window.localStorage.getItem('theme') || 'light'
    window.localStorage.setItem('theme', curTheme)

    const whole_container = document.querySelector("html")
    const newTheme = curTheme === 'light' ? 'winter' : 'night'
    whole_container.setAttribute('data-theme', newTheme)
  })

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