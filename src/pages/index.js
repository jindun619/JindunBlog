import * as React from "react";
import { useEffect } from "react"
import { graphql } from "gatsby";

import { Navbar } from "../components/Navbar";
import { CardsArea } from "../components/CardsArea";

function IndexPage( {data} ) {
  useEffect(() => {
    const curTheme = window.localStorage.getItem('theme') || 'light'
    window.localStorage.setItem('theme', curTheme)

    const whole_container = document.querySelector("html")
    const newTheme = curTheme=='light' ? 'winter' : 'night'
    whole_container.setAttribute('data-theme', newTheme)
  })

  return (
    <div className="whole_container h-full"> {/* night */}
      <Navbar data={data} />
      <div className="max-w-2xl mx-auto">
        <article className="prose">
          <figcaption className="pl-8 mt-4">{`총 ${data.allMarkdownRemark.edges.length}개의 포스트`}</figcaption>
        </article>
        <CardsArea data={data.allMarkdownRemark.edges} />
      </div>
    </div>
  );
}

export default IndexPage;

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
