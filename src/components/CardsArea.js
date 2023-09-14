import * as React from "react";

import { Card } from "../components/Card";

function CardsArea(props) {
  const data = props.data;
  console.log(data);
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <Card title={node.frontmatter.title} content={node.excerpt} date={node.frontmatter.date} tags={["a","b"]} link={node.frontmatter.slug} />
      ))}
      {/* <Card title="Death of the Fake Viper" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.." date="2023-09-11" tags={["a","b","c"]} />
      <Card title="title2" content="content" date="date" tags={["a","b"]} />
      <Card title="title3" content="content" date="date" tags={["c"]} /> */}
    </div>
  );
}

export { CardsArea };
