import * as React from "react"
import { graphql } from "gatsby"
import { Navbar } from "../../components/Navbar";

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  console.log(frontmatter);
  return (
    <div data-theme="winter" className="whole_container"> {/* night */}
      <Navbar />
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
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`