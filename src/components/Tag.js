import * as React from "react";

function Tag(props) {
  return (
    <button className="btn btn-outline btn-xs">{props.name}</button>
  );
}

export { Tag };
