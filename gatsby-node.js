exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result1 = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        distinct(field: {frontmatter: {tags: SELECT}})
      }
    }
  `)
  result1.data.allMarkdownRemark.distinct.forEach((node) => {
    createPage({
      path: `/tag=${node}`,
      component: require.resolve(`./src/templates/byTag.js`),
      context: { node: node }
    })
  })

  const result2 = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        distinct(field: {frontmatter: {category: SELECT}})
      }
    }
  `)
  result2.data.allMarkdownRemark.distinct.forEach((node) => {
    createPage({
      path: `/category=${node}`,
      component: require.resolve(`./src/templates/byCategory.js`),
      context: { node: node }
    })
  })
}
