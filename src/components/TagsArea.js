import * as React from "react";
import { Tag } from "../components/Tag.js";

function TagH1(props) {
  return (
    <article className="prose m-5">
      <h1>
        Tags<div className="badge badge-ghost">{props.count}</div>
      </h1>
    </article>
  );
}

function TagsArea(props) {
  const data = props.data;
  const tags = data.allMarkdownRemark.distinct.map((it, idx) => (
    <Tag key={idx} name={it} />
  ))
  const count = data.allMarkdownRemark.totalCount;

  return (
    <div>
      <TagH1 count={count} />
      <div className="flex flex-wrap gap-2 m-5">
        {tags}
      </div>
    </div>
  );
}

export { TagsArea };
