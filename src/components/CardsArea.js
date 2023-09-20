import * as React from "react";
import { useEffect } from "react"

import { Card } from "../components/Card";

function CardsArea({ data }) {
  useEffect(() => {
    const fadeInTransition = document.querySelector(".fadeInTransition")
    fadeInTransition.classList.remove("opacity-0")
  })

  return (
    <div className="mt-4 border-t-4 opacity-0 fadeInTransition">
      {data.map(({node}) => (
        <Card key={node.frontmatter.title} title={node.frontmatter.title} content={node.excerpt} date={node.frontmatter.date} tags={node.frontmatter.tags} link={node.frontmatter.slug} />
      ))}
    </div>
  );
}

export { CardsArea };
