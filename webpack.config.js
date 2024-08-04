const path = require("path");

module.exports = {
  entry: "./src/script.js",
  mode: "development",
  output: {
    filename: "revolutHomeTask.js",
    path: path.resolve(__dirname, "dist/publicAppRevolut"),
  },
  devtool: "inline-source-map",
};
