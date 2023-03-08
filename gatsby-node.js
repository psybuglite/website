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