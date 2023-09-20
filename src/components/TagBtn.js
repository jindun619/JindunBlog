import * as React from "react";

function TagBtn({ name, noHover }) {
  var hover
  if(noHover) {
    hover = "hover:bg-transparent hover:text-base-content"
  }
  return (
    <button className={`btn btn-xs btn-outline rounded-full normal-case ${hover}`}>{name}</button>
  )
}

export { TagBtn };
