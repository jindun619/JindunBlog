import * as React from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby"

function Seo ({ title, description, url }) {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
          title
          description
        }
      }
    }
  `)
  
  const { site } = data
  const { siteMetadata } = site

	return (
		<Helmet>
			<title>{`${title} | ${siteMetadata.title}`}</title>
			<meta name="description" content={description} />

            <meta property="og:title" content={title} />
            <meta property="og:url" content={`${siteMetadata.siteUrl}${url}`} />
            {/* <meta property="og:image" content={image} /> */}
            <meta property="og:description" content={description} />

            {/* Search Engine Verifications */}
            <meta name="google-site-verification" content="_ugXUv4-9ZFkQIhcRLxyyHKcnw1eQKy6qIrko9xhsak" />
            <meta name="naver-site-verification" content="1ac14aae744cb6ea0e41eb304d628d302ba07e60" />
		</Helmet>
	);
};

export { Seo };