const path = require("path")

module.exports = {
  // Give if condition to choose default path
  entry: ["babel-polyfill", path.resolve(__dirname, "frontend/src/index.js")],
  output: {
    // options related to how webpack emits results
    // 127.0.0.1/static/frontend/public/ where files are served from
    publicPath: "/static/frontend/public/",

    // where compiled files go
    path: path.resolve(__dirname, "frontend/static/frontend/public/"),

    filename: "main.js" // the same one we import in index.html
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    contentBase: path.join(__dirname, "frontend"), //Change here
    hot: true,
    historyApiFallback: { index: "/templates/frontend/index.html" }
  },
  module: {
    // configuration regarding modules
    rules: [
      {
        // regex test for js and jsx files
        test: /\.(js|jsx)?$/,
        // don't look in the node_modules/ folder
        exclude: /node_modules/,
        // for matching files, use the babel-loader
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "12" } }]]
          }
        }
      }
    ]
  }
}
