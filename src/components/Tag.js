import * as React from "react";
import { Link } from "gatsby"

function Tag({ name, size }) {
  return (
    <button className={`btn btn-outline btn-${size}`}>{name}</button>
  );
}

export { Tag };
