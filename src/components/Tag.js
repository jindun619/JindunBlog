import * as React from "react";

function Tag({ name, size, noHover }) {
  if(noHover) {
    var hover = "hover:bg-transparent hover:text-base-content"
  } else {
    var hover = ""
  }
  return (
    <button className={`btn btn-${size} btn-outline normal-case ${hover}`}>{name}</button>
  )
}

export { Tag };
