import * as React from "react"
import { useEffect } from "react"
import { graphql } from "gatsby"
import { Navbar } from "../components/Navbar"
import { CardsArea } from "../components/CardsArea"
import { TagBtn } from "../components/TagBtn"

export default function ByTagTemplate({ pageContext, data }) {
  useEffect(() => {
    const curTheme = window.localStorage.getItem('theme') || 'light'
    window.localStorage.setItem('theme', curTheme)

    const whole_container = document.querySelector("html")
    const newTheme = curTheme === 'light' ? 'winter' : 'night'
    whole_container.setAttribute('data-theme', newTheme)
  })
  
  const postsData = data.posts
  const navbarData = data.navbar

  const tag = pageContext.node
  const filteredData = postsData.edges.filter(({node}) => {
    return node.frontmatter.tags.includes(tag)
  })
  
  
    return (
      <div className="whole_container h-full">
        <Navbar data={navbarData} />
        <div className="listByTag max-w-2xl pt-16 mx-auto">
          <div className="flex flex-wrap gat-3">
          </div>
          <article className="prose">
            <h1>{`# ${tag}`}</h1>
            <figcaption>{`총 ${filteredData.length}개의 포스트`}</figcaption>
          </article>
          <CardsArea data={filteredData} />
        </div>
      </div>
    )
}

export const pageQuery = graphql`
  query MyQuery {
    posts: allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
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
    }
    navbar: allMarkdownRemark {
      distinct(field: {frontmatter: {category: SELECT}})
    }
  }
`