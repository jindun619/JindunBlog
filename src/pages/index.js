import * as React from "react";
import { graphql } from "gatsby";

import { Navbar } from "../components/Navbar";
import { TagsArea } from "../components/TagsArea";
import { CardsArea } from "../components/CardsArea";

function IndexPage( {data} ) {
  return (
    <div data-theme="winter" className="whole_container h-full"> {/* night */}
      <Navbar data={data} />
      <div className="max-w-2xl mx-auto">
        <TagsArea data={data} />
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
