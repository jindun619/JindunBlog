import * as React from "react";

function CategoryBtn({ name }) {
  return (
    <button className={`btn btn-sm btn-outline normal-case`}>{name}</button>
  )
}

export { CategoryBtn };
