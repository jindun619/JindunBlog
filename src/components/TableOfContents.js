import React from "react"

export default function TableOfContents({ content }) {
  return (
    <div className="sticky top-20 left-0 max-h-screen hidden lg:block" dangerouslySetInnerHTML={{ __html: content }} />
  )
}