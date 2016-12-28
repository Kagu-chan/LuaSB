const path = require('path');
const cwd = __dirname;
const _ = require('lodash');
const Promise = require('bluebird');
const fs = require('fs.promised/promisify')(Promise);

module.exports = fs.readdir(cwd)
  .then(files => _.map(files, file => path.join(cwd, file)))
  .then(files => _.filter(files, file => fs.statSync(file).isDirectory()))
  .then(directories => _.each(directories, require));
