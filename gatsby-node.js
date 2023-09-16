exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        distinct(field: {frontmatter: {tags: SELECT}})
      }
    }
  `)
  result.data.allMarkdownRemark.distinct.forEach((node) => {
    createPage({
      path: `/tags/${node}`,
      component: require.resolve(`./src/templates/tags.js`),
      context: { node: node }
    })
  })
}
