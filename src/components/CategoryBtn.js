import * as React from "react";

function CategoryBtn({ name, isActive, isOutlined }) {
  var size, active, outline
  if(isActive) {
    active="btn-actives"
  }
  if(isOutlined) {
    outline = "btn-outline"
  }

  return (
    <button className={`btn btn-sm btn-info normal-case ${active} ${outline}`}>{name}</button>
  )
}

export { CategoryBtn };
