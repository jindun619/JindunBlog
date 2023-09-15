import * as React from "react";
import { useEffect } from "react"
import { graphql } from "gatsby";

import { Navbar } from "../components/Navbar";
import { CardsArea } from "../components/CardsArea";

function IndexPage( {data} ) {
  useEffect(() => {
    const curTheme = window.localStorage.getItem('theme') || 'light'
    window.localStorage.setItem('theme', curTheme)

    const whole_container = document.querySelector(".whole_container")
    const newTheme = curTheme=='light' ? 'winter' : 'night'
    whole_container.setAttribute('data-theme', newTheme)
  })

  return (
    <div data-theme="winter" className="whole_container h-full"> {/* night */}
      <Navbar data={data} />
      <div className="max-w-2xl pt-16 mx-auto">
        <CardsArea data={data} />
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
