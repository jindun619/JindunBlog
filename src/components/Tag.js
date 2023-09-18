import * as React from "react";

function Tag({ name, size, noHover }) {
  if(noHover) {
    var hover = "hover:bg-transparent hover:text-base-content"
  } else {
    var hover = ""
  }

  if(size === "xs") {
    var btnSize = "btn-xs"
  } else if(size === "sm") {
    var btnSize = "btn-sm"
  }

  return (
    <button className={`btn ${btnSize} btn-outline normal-case ${hover}`}>{name}</button>
  )
}

export { Tag };
