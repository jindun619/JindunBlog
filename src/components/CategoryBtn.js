import * as React from "react";

function CategoryBtn({ name, isActive }) {
  var active
  if(isActive) {
    active="btn-active"
  }

  return (
    <button className={`btn btn-sm btn-outline normal-case hover:bg-base-content hover:text-primary-content ${active}`}>{name}</button>
  )
}

export { CategoryBtn };
