import * as React from "react";

import { Card } from "../components/Card";

function CardsArea(props) {
  const data = props.data;
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <Card key={node.frontmatter.title} title={node.frontmatter.title} content={node.excerpt} date={node.frontmatter.date} tags={node.frontmatter.tags} link={node.frontmatter.slug} />
      ))}
    </div>
  );
}

export { CardsArea };
