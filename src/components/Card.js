import * as React from "react";
import { TagBtn } from "../components/TagBtn";
import { Link } from "gatsby";

function Card(props) {
  const tags = props.tags.map((tagName) => (<TagBtn key={tagName} name={tagName} noHover={true} />))

  return (
    <div className="card-normal font-sans cursor-pointer hover:bg-primary-content border-b">
      <Link to={`/blog${props.link}`} className="no-underline">
        <div className="card-body">
          <h2 className="card-titles text-3xl font-bold text-primary">{props.title}</h2>
          <p className="text-base text-base-content font-semibold mb-0">{props.content}</p>
          <div className="flex flex-wrap gap-2">
            <div><p className="text-sm text-neutral-content font-semibold mb-0">{props.date}</p></div>
            {tags}
          </div>
        </div>
      </Link>
    </div>
  );
}

export { Card };
