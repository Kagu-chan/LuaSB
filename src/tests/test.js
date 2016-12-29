'use strict';

const Application = require('spectron').Application;
const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const _ = require('lodash');

let electronPath = path.join(__dirname, '..', 'node_modules', '.bin', 'electron');

if (process.platform === 'win32') {
  electronPath += '.cmd';
}

const appPath = path.join(__dirname, '..', 'app');

const app = new Application({
  path: electronPath,
  args: [appPath],
  startTimeout: 5000,
});

global.before(() => {
  chai.should();
  chai.use(chaiAsPromised);
});

global.app = app;
global.init = (obj) => {
  obj.timeout(10000);
  beforeEach(() => app.start());
  afterEach(() => app.stop());
};

_.each([
  'window',
  'localization',
], (dir) => {
  _.each(require(`./${dir}`), (test) => {
    require(`./${dir}/${test}`)();
  });
});

require('./window');
