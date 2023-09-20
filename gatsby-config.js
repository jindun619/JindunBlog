/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Hoojun.Kim`,
    description: `This is a blog`,
    author: `@gatsbyjs`,
    siteUrl: `https://hoojun.kim/`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                "heading[depth=1]": "title",
                "heading[depth=2]": "subtitle",
                paragraph: "para",
              }
            }
          },
          'gatsby-remark-prismjs',
        ]
      }
    },
    {
      resolve: `gatsby-plugin-fusejs`,
        options: {
          // 인덱스를 만들고자 하는 데이터의 쿼리
          query: `
            {
              allMarkdownRemark {
                nodes {
                  id
                  rawMarkdownBody
                  frontmatter {
                    title
                  }
                }
              }
            }
          `,
 
          // 인덱스를 만들고자 하는 데이터의 프로퍼티
          keys: ['title', 'body'],
  
          // graphql의 결과물을 단순 객체 배열로 변환하는 함수
          normalizer: ({ data }) =>
            data.allMarkdownRemark.nodes.map((node) => ({
              id: node.id,
              title: node.frontmatter.title,
              body: node.rawMarkdownBody,
            })),
          }
      },
  ],
}
