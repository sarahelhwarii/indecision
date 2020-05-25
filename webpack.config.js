const path = require("path");

console.log(__dirname);
module.exports = {
  entry: "./app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
};
