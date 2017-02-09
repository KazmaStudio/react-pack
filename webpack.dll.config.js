const webpack = require('webpack');
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

const vendors = [
  'react',
  'react-dom',
  'react-router'
];

module.exports = {
  output: {
    path:path.join(__dirname, 'dist'),
    filename: 'require.dll.js',
    library: 'require',
  },
  entry: {
    vendor: vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: 'require',
      context: __dirname,
    }),
    new CleanPlugin('dist')
  ],
};
