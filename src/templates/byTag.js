import * as React from "react"
import { useEffect } from "react"
import { graphql, Link } from "gatsby"
import { Navbar } from "../components/Navbar"
import { CardsArea } from "../components/CardsArea"
import { TagBtn } from "../components/TagBtn"

export default function ByTagTemplate({ pageContext, data }) {
  useEffect(() => {
    const systemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const curTheme = window.localStorage.getItem('theme') || systemTheme
    window.localStorage.setItem('theme', curTheme)

    const whole_container = document.querySelector("html")
    const newTheme = curTheme === 'light' ? 'winter' : 'night'
    whole_container.setAttribute('data-theme', newTheme)
  })
  
  const postsData = data.posts
  const navbarData = data.navbar
  const tagsData = data.tags

  const tag = pageContext.node
  const filteredData = postsData.edges.filter(({node}) => {
    return node.frontmatter.tags.includes(tag)
  })

  const tags = tagsData.distinct.map((it, idx) => {
    if(it === tag) {
      return (
        <TagBtn key={idx} name={`# ${it}`} isActive={true} />
      )
    } else {
      return (
        <Link key={idx} to={`/tag=${it}`}>
          <TagBtn name={`# ${it}`} />
        </Link>
      )
    }
  }
  )
  
    return (
      <div className="whole_container h-full">
        <Navbar data={navbarData} />
        <div className="listByTag max-w-2xl pt-16 mx-auto">
          <article className="prose prose1">
            <h1>{`# ${tag}`}</h1>
          </article>
          <div className="flex flex-wrap gap-2">
            {tags}
          </div>
          <article className="prose prose2">
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
    tags: allMarkdownRemark {
      distinct(field: {frontmatter: {tags: SELECT}})
    }
  }
`