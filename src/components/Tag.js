import * as React from "react";

function Tag({ name, size }) {
  return (
    <button className={`btn btn-${size} btn-outline`}>{name}</button>
  );
}

export { Tag };
