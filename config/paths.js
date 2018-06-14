const path = require('path');
const projectRoot = process.cwd();
const selfRoot = path.resolve(__dirname, '..');

const resolveProjectDirectory = relativePath => 
  path.resolve(projectRoot, relativePath)

const resolveSelfDirectory = relativePath => 
  path.resolve(selfRoot, relativePath)

module.exports = {
  resolveProjectDirectory,
  resolveSelfDirectory,
  projectRoot,
  projectSource: resolveProjectDirectory('src'),
  tsConfig: resolveProjectDirectory('tsconfig.json'),
  tsConfigDev: resolveProjectDirectory('tsconfig.dev.json'),
  tsLint: resolveProjectDirectory('tslint.json'),
  webpackConfig: resolveSelfDirectory('config/webpack.config.js'),
}