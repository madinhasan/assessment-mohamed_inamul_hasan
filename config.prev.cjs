/** @type {import('@maizzle/framework').Config} */

/*
|-------------------------------------------------------------------------------
| Development config                      https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run `maizzle build` or `maizzle serve` and it has
| the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  build: {
    templates: {
      source: "src/templates",
      destination: {
        path: "build_local",
      },
      assets: {
        source: "src/images",
        destination: "images",
      },
    },
    posthtml: {
      plugins: [require("./posthtml-add-align-center.cjs")()],
      expressions: {
        delimiters: ["[[", "]]"],
        unescapeDelimiters: ["[[[", "]]]"],
      },
      options: {
        singleTags: ["img", "br"],
        closingSingleTag: "slash",
      },
    },
    tailwind: {
      config: require("./tailwind.config.cjs"),
    },
  },
};
