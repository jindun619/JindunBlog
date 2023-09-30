import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { CardsArea } from "../components/CardsArea"
import { CategoryBtn } from "../components/CategoryBtn"

import { useTheme } from "../hooks/useTheme"

export default function ByCategoryTemplate({ pageContext, data }) {
  useTheme("")

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
        <Link key={node} to={`/category=${node}`} style={{textDecoration: 'none'}}>
          <CategoryBtn name={`${node}(${count})`} />
        </Link>
      )
    } else {
      return (
        <Link key={node} to={`/category=${node}`} style={{textDecoration: 'none'}}>
          <CategoryBtn name={`${node}(${count})`} isOutlined={true} />
        </Link>
      )
    }
  })

  return (
    <Layout navbarData={navbarData}>
      <Seo title={`category=${category}`} description={`category=${category}`} url={`/category=${category}`} />
      <div className="max-w-2xl pt-16 mx-auto">
        <article className="prose">
          <h1 className="ml-4">
            Category: <span className="text-primary">{`${selectedCategory}`}</span>
          </h1>
          <div className="flex flex-wrap gap-2 ml-4">
            {categories}
          </div>
          <figcaption className="ml-4">{`총 ${filteredData.length}개의 포스트`}</figcaption>
        </article>
        <CardsArea data={filteredData} />
      </div>
    </Layout>
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
          excerpt(truncate: true)
        }
      }
    }
    navbar: allMarkdownRemark {
      distinct(field: {frontmatter: {category: SELECT}})
    }
  }
`