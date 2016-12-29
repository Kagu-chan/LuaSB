const Promise = require('bluebird');
const storage = Promise.promisifyAll(require('electron-json-storage'));
const _ = require('lodash');

const lib = {
  data: null,
  init() {
    return storage.getAsync('usersettings')
      .then((data) => {
        lib.data = data;
        return Promise.resolve(lib.data);
      })
      // TODO: replace with log module
      .catch(console.log); // eslint-disable-line no-console
  },
  getOrDefault(key, defaultValue) {
    return Promise.resolve(lib.data || lib.init())
      .then((data) => _.get(data, key) || defaultValue);
  },
  getConfig(key) {
    return lib.getOrDefault(key, null);
  },
  setConfig(key, value) {
    return Promise.resolve(lib.data || lib.init())
      .then(() => _.set(lib.data, key, value))
      .then(() => storage.setAsync('usersettings', lib.data))
      // TODO: replace with log module
      .catch(console.log); // eslint-disable-line no-console
  },
};

module.exports = lib;
