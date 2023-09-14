import * as React from "react";
import { graphql } from "gatsby";

import { Navbar } from "../components/Navbar";
import { TagsArea } from "../components/TagsArea";
import { CardsArea } from "../components/CardsArea";

function IndexPage( {data} ) {
  return (
    <div data-theme="light" className="whole_container">
      <Navbar />
      <div className="max-w-2xl mx-auto">
        <TagsArea />
        <CardsArea data={data} />
      </div>
    </div>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
            slug
          }
          excerpt
        }
      }
    }
  }
`
