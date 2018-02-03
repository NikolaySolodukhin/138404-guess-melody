const pkg = require("./package.json");

module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-url")({
        url: "rebase",
        assetsPath: ".../../",
        useHash: true
    }),
    require("postcss-cssnext")
  ]
};
