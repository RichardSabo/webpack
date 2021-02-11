const baseWebpackConfig = require("./webpack.base.conf");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  plugins: [new CleanWebpackPlugin()],
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
