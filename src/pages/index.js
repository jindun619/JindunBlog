import * as React from "react";
import { graphql } from "gatsby";

import { Navbar } from "../components/Navbar";
import { CardsArea } from "../components/CardsArea";

function IndexPage( {data} ) {
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
