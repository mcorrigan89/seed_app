const path = require('path');
const { reactVendor, vendorList } = require('./vendor');

const { resolveProjectDirectory, projectRoot, projectSource, tsConfig, tsLint } = require('./paths');

// Plugins 
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const _index = projectSource + '/index.tsx';
const _html = projectSource + '/index.html';
const _dist = resolveProjectDirectory('dist');

const publicPath = '/';

module.exports = {
  devtool: 'cheap-module-source-map',
  mode: 'production',
  watch: false,
  watchOptions: {
    ignored: /node_modules/
  },
  entry:{
    react: reactVendor,
    vendor: vendorList,
    app: [
      _index,
    ]
  },
  output: {
    pathinfo: true,
    filename: '[name].[hash].js',
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
      new TsconfigPathsPlugin({ configFile: tsConfig }),
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
    sideEffects: false,
    runtimeChunk: true,
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([_dist], { root: projectRoot }),
    new ManifestPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: _html,
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      tsconfig: tsConfig,
      tslint: tsLint,
    }),
  ],
}
