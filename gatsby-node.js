const path = require("path")
const _ = require("lodash")

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}


// create the blog pages

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions


  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {} // additional data can be passed via context
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    
  actions.setWebpackConfig({
      node: {
          fs: 'empty'
      }
  })

  if(stage === 'build-html'){
      actions.setWebpackConfig({
          module: {
              rules: [{
                  test: /canvas/,
                  use: loaders.null()
              }]
          }
      })
  }
}