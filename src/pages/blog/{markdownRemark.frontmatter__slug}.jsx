import * as React from "react"
import { graphql } from "gatsby"
import { Navbar } from "../../components/Navbar";

export default function BlogPostTemplate({data}) {
  const {markdownRemark} = data
  const {frontmatter, html} = markdownRemark
  return (
    <div data-theme="winter" className="whole_container h-screen"> {/* night */}
      <Navbar data={data} />
      <div className="max-w-2xl pt-16 mx-auto px-4 md:px-0">
        <article className="prose">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
query MyQuery {
  markdownRemark {
    frontmatter {
      date
      tags
      title
    }
    html
  }
  allMarkdownRemark {
    distinct(field: {frontmatter: {tags: SELECT}})
    totalCount
  }
}
`