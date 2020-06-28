// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const shiki = require("shiki");

const oneDarkPro = shiki.loadTheme("./static/one-dark-pro.json");

module.exports = {
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        // Name of the Template
        typeName: "Post",
        // Path to the markdown files
        path: "docs/**/*.md",
        remark: {
          plugins: [["gridsome-plugin-remark-shiki", { theme: oneDarkPro }]],
        },
      },
    },
  ],
  templates: {
    // This is what the url path will end up being
    Post: "/docs/:title",
  },
};
