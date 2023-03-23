import React, { useEffect } from "react";
import Layout from "../../components/layout";
import { marked } from "marked";
import hljs from "highlight.js";


const gatsbyBuildMarkdown1 = `
  \`\`\`javascript
    if (typeof document !== "undefined") {
      return {
        // Do something with the document
        // Call your modules and libraries
      };
    } else {
        return {
          // Do something different while window and document are not defined on the server
        };
      }
    }
  \`\`\`
`;

const gatsbyBuildMarkdown2 = `
  \`\`\`javascript
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
  \`\`\`
`;

const Article = () => {

  useEffect(() => {
    hljs.highlightAll();
  }, []);


  return (
    <Layout>
      <main className="w-full">
        <section className="border-b-2 border-[#323232] px-4 gap-16 max-w-[780px] pt-64 mx-auto">
          <div className=""></div>
          <div className="mb-8">
              <h2 className="text-[32px]">
            How to fix 'document not defined' in Gatsby Build
            </h2>
          </div>
          <article className="wrapper-y will-grow articletext article-content">
            <p className="py-4">
              The error <span className="small-code">`document is not defined`</span> or <span className="small-code">`window is not defined`</span> you see when building a gatsby project is as a result of gatsby attempting to query the DOM on the server as it is server-side rendering. This can occur either when you're trying to manipulate or query the DOM.
            </p>

            <p className="py-4">
              Note: When querying elements in the DOM in Gatsby or React in general, it is recommended to do this inside of the Component lifecycle method, or inside the <span className="small-code">`useEffect`</span> hook when the page is rendered. This ensures that the DOM is ready before querying DOM elements.
            </p>

            <p className="py-4">
              In a scenario where you want to make use of the document or window outside of the useEffect hook, you will run into a problem as neither of them are defined on the server. A quick fix for this problem is to set a condition to check if the document or window is defined.
            </p>

            <div className="code-snippet py-12">
              <div dangerouslySetInnerHTML={{ __html: marked(gatsbyBuildMarkdown1) }}></div>
            </div>

            <p className="py-4">
              If you observe that the error you're getting is coming from a node module, you can simply ignore the module during server-side rendering to avoid the error during the build process by adding the following code snippet to the <span className="small-code">`gatsby-node.js`</span> file. For my example, I'm using the canvas module. You can change the module to any one of your choice.
            </p>

            <div className="code-snippet py-12">
              <div dangerouslySetInnerHTML={{ __html: marked(gatsbyBuildMarkdown2) }}></div>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default Article;

