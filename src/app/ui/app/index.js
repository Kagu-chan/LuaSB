const { icpRenderer, remote } = require('electron');
const _ = require('lodash');
const sharedObjects = {
  i18n: remote.getGlobal('i18n'),
};

_.each(sharedObjects, (value, key) => (global[key] = value));

angular.module('LuaSB', []);
