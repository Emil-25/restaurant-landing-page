const path = require('path');
var webpack = require("webpack");
new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
  });
  
module.exports = {
    entry: "./src/restaurant.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "main.js"
    },
    mode: "production",

    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              }
            }
          },
        ]
      }
}
