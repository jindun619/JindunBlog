import React, { createRef, useEffect } from "react"

function Comment({ repo, title }) {
  const theme = "github-light" //dark blue

  const containerRef = createRef()
  useEffect(() => {
    const utterances = document.createElement("script")
    const attributes = {
      src: "https://utteranc.es/client.js",
      repo: "jindun619/blog-comments",
      "issue-term": title,
      label: "comments",
      theme: theme,
      crossOrigin: "anonymous",
      async: "true",
    }
    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })
    containerRef.current.appendChild(utterances)
  }, [repo, theme])
  return <div id="comment" ref={containerRef} />
}

export { Comment }