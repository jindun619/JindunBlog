import * as React from "react";

function TagBtn({ name, noHover, isActive }) {
  var hover, active
  if(noHover) {
    hover = "hover:bg-transparent hover:text-base-content"
  }
  if(isActive) {
    active = "btn-active"
  }
  return (
    <button className={`btn btn-xs btn-outline rounded-full normal-case ${hover} ${active}`}>{name}</button>
  )
}

export { TagBtn };
