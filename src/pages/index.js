import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import { Navbar } from "../components/Navbar";
import { Bio } from "../components/Bio"
import { CardsArea } from "../components/CardsArea";
import { Footer } from "../components/Footer"

function IndexPage( {data} ) {
  // SETTING THEME
  const systemTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'winter'
  const curTheme = window.localStorage.getItem('theme') || systemTheme
  document.querySelector("html").setAttribute('data-theme', curTheme)
  window.localStorage.setItem('theme', curTheme)

  const postsData = data.posts
  const navbarData = data.navbar

  return (
    <div>
      <Helmet>
        <meta name="google-site-verification" content="_ugXUv4-9ZFkQIhcRLxyyHKcnw1eQKy6qIrko9xhsak" />
        <meta name="naver-site-verification" content="1ac14aae744cb6ea0e41eb304d628d302ba07e60" />
      </Helmet>
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
