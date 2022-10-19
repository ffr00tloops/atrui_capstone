// gatsby-node.js
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.

// DISCLAIMER "/^\/user\/home\/posts" do not work dont try it again please. you can only do two routes  I imagine "/user/home/*" works.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/user\/home/)) {
    page.matchPath = "/user/home/*"

    // Update the page.
    createPage(page)
  }

  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"

    // Update the page.
    createPage(page)
  }
}