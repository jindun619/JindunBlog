import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout"
import { Bio } from "../components/Bio"
import { CardsArea } from "../components/CardsArea";

import { useTheme } from "../hooks/useTheme"

function IndexPage( {data} ) {
  console.log("209.97.174.119")
  useTheme("")

  const postsData = data.posts
  const navbarData = data.navbar

  return (
    <Layout navbarData={navbarData} title="Home" description="Home" url="">
      <div className="max-w-2xl mx-auto">
        {/* BIO */}
        <div className="mt-16">
          <Bio />
        </div>
        <article className="prose">
          <figcaption className="ml-4 mt-4">{`총 ${postsData.edges.length}개의 포스트`}</figcaption>
        </article>
        <CardsArea data={postsData.edges} />
      </div>
    </Layout>
  );
}

export default IndexPage;

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
          excerpt(truncate: true)
        }
      }
    }
    navbar: allMarkdownRemark {
      distinct(field: {frontmatter: {category: SELECT}})
    }
  }
`
