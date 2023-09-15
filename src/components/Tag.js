import * as React from "react";

function Tag(props) {
  return (
    <button className="btn btn-outline btn-sm">{props.name}</button>
  );
}

export { Tag };
