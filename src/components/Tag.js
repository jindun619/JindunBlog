import * as React from "react";

function Tag({ name, size, noHover }) {
  var hover, btnSize
  
  if(noHover) {
    hover = "hover:bg-transparent hover:text-base-content"
  } else {
    hover = ""
  }

  if(size === "xs") {
    btnSize = "btn-xs"
  } else if(size === "sm") {
    btnSize = "btn-sm"
  }

  return (
    <button className={`btn ${btnSize} btn-outline normal-case ${hover}`}>{name}</button>
  )
}

export { Tag };
