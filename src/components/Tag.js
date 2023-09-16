import * as React from "react";

function Tag({ name, size }) {
  if(size ==="xs") {
    return (
      <button className="btn btn-xs btn-outline">{name}</button>
    )
  } else if(size === "sm") {
    return (
      <button className="btn btn-sm btn-outline">{name}</button>
    )
  }
}

export { Tag };
