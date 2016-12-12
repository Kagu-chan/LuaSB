const _ = require('lodash');
const electron = require('electron');

const retrieveData = () => {
  return {
    i18n: electron.remote.getGlobal('i18n'),
  }
}

const load = () => {
  _.each(retrieveData(), (current, key) => global[key] = current);
}

module.exports = {
  load,
}
