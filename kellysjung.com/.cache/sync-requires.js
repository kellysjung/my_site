const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/kelly/my_site/kellysjung.com/.cache/dev-404-page.js"))),
  "component---src-pages-app-tsx": hot(preferDefault(require("/Users/kelly/my_site/kellysjung.com/src/pages/app.tsx"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/kelly/my_site/kellysjung.com/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/kelly/my_site/kellysjung.com/src/pages/index.js"))),
  "component---src-pages-projects-tsx": hot(preferDefault(require("/Users/kelly/my_site/kellysjung.com/src/pages/projects.tsx")))
}

