
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/Tonye/Sites/website/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/Tonye/Sites/website/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Tonye/Sites/website/src/pages/index.js")),
  "component---src-pages-pixels-js": preferDefault(require("/Users/Tonye/Sites/website/src/pages/pixels.js")),
  "component---src-pages-rova-js": preferDefault(require("/Users/Tonye/Sites/website/src/pages/rova.js")),
  "component---src-pages-writing-how-to-setup-react-project-on-a-virtual-private-server-js": preferDefault(require("/Users/Tonye/Sites/website/src/pages/writing/how-to-setup-react-project-on-a-virtual-private-server.js")),
  "component---src-pages-writing-index-js": preferDefault(require("/Users/Tonye/Sites/website/src/pages/writing/index.js")),
  "component---src-pages-writing-window-document-not-defined-gatsby-build-js": preferDefault(require("/Users/Tonye/Sites/website/src/pages/writing/window-document-not-defined-gatsby-build.js"))
}

