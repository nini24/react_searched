const HtmlWebPackPlugin = require("html-webpack-plugin");
var StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 
                    ["babel-loader", "eslint-loader"],
                
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
          ]},         
    plugins: [
      new HtmlWebPackPlugin({
        template: "./index.html",
        filename: "./index.html"
      }), new StyleLintPlugin({
        configFile: '.stylelintrc',
        context: 'src',
        files: '**/*.css',
        failOnError: false,
        quiet: false,
        emitErrors: true }),
    ]
  }
  