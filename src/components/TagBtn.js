import * as React from "react";

function TagBtn({ name, isActive }) {
  var active
  if(isActive) {
    active = "btn-active"
  }
  return (
    <button className={`btn btn-xs btn-outline rounded-full normal-case ${active}`}>{name}</button>
  )
}

export { TagBtn };
