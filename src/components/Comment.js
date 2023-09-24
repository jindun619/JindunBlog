import React, { createRef, useEffect } from "react"

function Comment({ repo, title }) {
  const containerRef = createRef()
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")

    const utterances = document.createElement("script")
    const attributes = {
      src: "https://utteranc.es/client.js",
      repo: "jindun619/blog-comments",
      "issue-term": title,
      label: "comments",
      theme: localTheme==='winter' ? 'github-light' : 'dark-blue',
      crossOrigin: "anonymous",
      async: "true",
    }
    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })
    containerRef.current.appendChild(utterances)
  }, [repo])
  return <div id="comment" ref={containerRef} />
}

export { Comment }