const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'docs')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
    port: 9000
  }
};
