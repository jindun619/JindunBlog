import * as React from "react";
import { graphql } from "gatsby";

import { Seo } from "../components/Seo"
import { Navbar } from "../components/Navbar";
import { Bio } from "../components/Bio"
import { CardsArea } from "../components/CardsArea";
import { Footer } from "../components/Footer"

import { useTheme } from "../hooks/useTheme"

function IndexPage( {data} ) {
  useTheme("")

  const postsData = data.posts
  const navbarData = data.navbar

  return (
    <div>
      <Seo title="Home" description="Home" url=""/>
      <div className="whole_container h-full">
        <Navbar data={navbarData} />
        <div className="max-w-2xl mx-auto">
          {/* BIO */}
          <div className="mt-16">
            <Bio />
          </div>
          <article className="prose">
            <figcaption className="ml-4 mt-4">{`총 ${postsData.edges.length}개의 포스트`}</figcaption>
          </article>
          <CardsArea data={postsData.edges} />
        {/* FOOTER */}
        <Footer />
        </div>
      </div>
    </div>
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
