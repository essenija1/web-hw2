const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './loadscript/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
},
plugins: [ 
    new ExtractTextPlugin(
      {filename: 'timer.css'}
    ),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './loadscript/timer.html',
      filename: 'timer.html'
    })
  ]
};
