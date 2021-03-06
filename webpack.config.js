const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src', 'app-client.js'),
  output: {
    path: path.join(__dirname, 'src', 'public', 'js'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        exclude: 'node_modules',
        query: {
          cacheDirectory: 'babel_cache',
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false },
    //   mangle: true,
    //   sourcemap: false,
    //   beautify: false,
    //   dead_code: true,
    // }),
  ],
};
