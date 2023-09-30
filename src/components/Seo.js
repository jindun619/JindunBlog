import * as React from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby"

export default function Seo ({ title, description, url }) {
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
  const { siteMetadata } = site //

	return (
		<Helmet>
			<title>{`${title} | ${siteMetadata.title}`}</title>
			<meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={`${siteMetadata.siteUrl}${url}`} />
      {/* <meta property="og:image" content={""} /> */}
      <meta property="og:description" content={description} />
      <link rel="sitemap" type="application/xml" href="/sitemap-index.xml" />

      {/* Search Engine Verifications */}
      <meta name="google-site-verification" content="_ugXUv4-9ZFkQIhcRLxyyHKcnw1eQKy6qIrko9xhsak" />
      <meta name="naver-site-verification" content="1ac14aae744cb6ea0e41eb304d628d302ba07e60" />

      <link rel="apple-touch-icon" sizes="180x180" href="/asset/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/asset/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/asset/favicon-16x16.png" />
		</Helmet>
	);
};