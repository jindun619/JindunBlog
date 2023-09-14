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

function TagsArea() {
  return (
    <div>
      <TagH1 />
      <div className="flex flex-wrap gap-2 m-5">
        <Tag name="a" />
        <Tag name="ab" />
        <Tag name="abc" />
        <Tag name="abcd" />
        <Tag name="abc" />
        <Tag name="abcde" />
        <Tag name="a" />
        <Tag name="abc" />
        <Tag name="abcd efghi" />
        <Tag name="a" />
        <Tag name="abcd" />
      </div>
    </div>
  );
}

export { TagsArea };
