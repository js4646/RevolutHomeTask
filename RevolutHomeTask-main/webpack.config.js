const path = require("path");

module.exports = {
  entry: {
    script: "./src/script.js",
    orderStatus: "./src/order-status-script.js",
  },
  mode: "development",
  output: {
    filename: "[name].homeTask.js",
    path: path.resolve(__dirname, "dist/publicAppRevolut"),
  },
  devtool: "inline-source-map",
};
