const path = require('path');
const cwd = __dirname;

module.exports = fs.readdir(cwd)
  .then(files => _.map(files, file => path.join(cwd, file)))
  .then(files => _.filter(files, file => fs.statSync(file).isDirectory()))
  .then(directories => _.each(directories, require));
