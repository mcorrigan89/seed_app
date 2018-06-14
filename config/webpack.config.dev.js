const path = require('path');
const webpack = require('webpack');
const { reactVendor, vendorList } = require('./vendor');

const { resolveProjectDirectory, projectSource, tsConfigDev, tsLint } = require('./paths');

// Plugins 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const _index = projectSource + '/index.tsx';
const _html = projectSource + '/index.html';
const _dist = resolveProjectDirectory('dist');

const publicPath = '/';

module.exports = {
  devtool: 'cheap-module-source-map',
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  entry:{
    react: reactVendor,
    vendor: vendorList,
    app: [
      require.resolve('react-dev-utils/webpackHotDevClient'),
      _index,
    ]
  },
  output: {
    pathinfo: true,
    filename: '[name].js',
    publicPath,
    path: _dist,
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  resolve: {
    extensions: [
      '.mjs',
      '.web.ts',
      '.ts',
      '.web.tsx',
      '.tsx',
      '.web.js',
      '.js',
      '.json',
      '.web.jsx',
      '.jsx',
    ],
    plugins: [
      new TsconfigPathsPlugin({ configFile: tsConfigDev }),
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          reuseExistingChunk: true,
          chunks: 'initial',
          name: 'react',
          test: 'react',
          enforce: true
        },
        vendor: {
          reuseExistingChunk: true,
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        },
      }
    },
    runtimeChunk: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              plugins: ['react-hot-loader/babel', 'syntax-dynamic-import'],
            },
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: _html,
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      tsconfig: tsConfigDev,
      tslint: tsLint,
    }),
  ],
  devServer: {
    contentBase: _dist,
    historyApiFallback: true,
    hot: true
  }
}
