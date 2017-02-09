var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const sourcePath = path.join(__dirname, './src');
const staticsPath = path.join(__dirname, './dist');
const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';
const jsEntry = [
  'index',
  'pages/Home'
];
const extractCSS = new ExtractTextPlugin({ filename: 'bundle_[hash:8].css', disable: false, allChunks: true });

const config = {
  devtool: isProd ? 'source-map' : 'cheap-module-source-map',
  context: sourcePath,
  entry: {
    js: jsEntry,
    vendor: [
      'react',
      'react-dom',
      'react-router'
    ]
  },
  output: {
    path: staticsPath,
    filename: 'bundle_[hash:8].js',
    publicPath: '/',
    chunkFilename: 'bundle_[chunkhash:8].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor_[hash:8].js",
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: sourcePath + '/index.html',
      production: isProd,
      inject: true,
    }),
    new CleanPlugin('dist'),
    extractCSS
  ],
  module: {
    //noParse: [new RegExp(pathToReact, 'i'),new RegExp(pathToReactDom, 'i')],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      include: [
                path.join(process.cwd(), './src')
              ]
    },
    {
      test: /\.less$/,
      loader: extractCSS.extract({
        fallbackLoader: 'style-loader',
        loader: [
          'css-loader',
          'less-loader'
        ]
      })
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      sourcePath,
      'node_modules'
    ],
    // alias: {
    //       'react$': pathToReact,
    //       'react-dom$': pathToReactDom
    //     }
  },
  devServer: {
    contentBase: './client',
    historyApiFallback: true,
    port: 3303,
    hot: true,
    compress: isProd,
    stats: { colors: true },
  }
}

module.exports = config;
