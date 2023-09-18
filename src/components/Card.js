import * as React from "react";
import { Tag } from "../components/Tag";
import { Link } from "gatsby";

function Card(props) {
  const tags = props.tags.map((tagName) => (<Tag key={tagName} name={tagName} size="xs" noHover={true} />))

  return (
    <div className="card-normal font-sans cursor-pointer hover:bg-primary-content">
      <Link to={`/blog${props.link}`} className="no-underline">
        <div className="card-body">
          <h2 className="card-titles text-3xl font-bold text-primary">{props.title}</h2>
          <p className="text-base-content font-semibold mb-0">{props.content}</p>
          <div className="flex flex-wrap gap-2">
            <div><p className="text-base-content mb-0">{props.date}</p></div>
            {tags}
          </div>
        </div>
      </Link>
    </div>
  );
}

export { Card };
