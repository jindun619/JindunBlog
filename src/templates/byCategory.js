import * as React from "react"
import { useEffect } from "react"
import { graphql, Link } from "gatsby"

import { Navbar } from "../components/Navbar"
import { CardsArea } from "../components/CardsArea"
import { CategoryBtn } from "../components/CategoryBtn"

export default function ByCategoryTemplate({ pageContext, data }) {
  useEffect(() => {
    const curTheme = window.localStorage.getItem('theme') || 'light'
    window.localStorage.setItem('theme', curTheme)

    const whole_container = document.querySelector("html")
    const newTheme = curTheme === 'light' ? 'winter' : 'night'
    whole_container.setAttribute('data-theme', newTheme)
  })

  const category = pageContext.node

  const postsData = data.posts
  const navbarData = data.navbar

  const selectedCategory = pageContext.node
  const filteredData = postsData.edges.filter(({node}) => {
    return node.frontmatter.category[0] === selectedCategory
  })

  const categories = navbarData.distinct.map((node) => {
    var count = 0;
    postsData.edges.forEach((n) => {
      const node2 = n.node
      if(node === node2.frontmatter.category[0]) {
        count++
      }
    })

    if(category === node) {
      return (
        <Link key={node} to={`/category=${node}`}>
          <CategoryBtn key={node} name={`${node}(${count})`} isActive={true} />
        </Link>
      )
    } else {
      return (
        <Link key={node} to={`/category=${node}`}>
          <CategoryBtn key={node} name={`${node}(${count})`} />
        </Link>
      )
    }
  })

  return (
    <div className="whole_container h-full">
      <Navbar data={navbarData} />
      <div className="listByCategory max-w-2xl pt-16 mx-auto">
        <article className="prose">
          <h1>
            Category: <span className="text-primary">{`${selectedCategory}`}</span>
          </h1>
          <div className="flex flex-wrap gap-2">
            {categories}
          </div>
          <figcaption>{`총 ${filteredData.length}개의 포스트`}</figcaption>
        </article>
        <CardsArea data={filteredData} />
      </div>
    </div>
  );
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
            category
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