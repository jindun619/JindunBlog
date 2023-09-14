import * as React from "react";
import { Tag } from "../components/Tag.js";

function TagH1() {
  return (
    <article className="prose m-5">
      <h1>
        Tags<div className="badge badge-ghost">11</div>
      </h1>
    </article>
  );
}

function TagsArea(props) {
  const data = props.data;
  const tags = data.allMarkdownRemark.distinct.map((it, idx) => (
    <Tag key={idx} name={it} />
  ))
  return (
    <div>
      <TagH1 />
      <div className="flex flex-wrap gap-2 m-5">
        {tags}
      </div>
    </div>
  );
}

export { TagsArea };
