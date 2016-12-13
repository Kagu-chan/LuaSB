const handlebars = require('handlebars');
const environment = require('environment');
const FS = require('fs');
const _ = require('lodash');

const render = (pageToRender) => {
  const mod = require(_.join([environment.pagesPrefix, pageToRender], environment.directorySeperator));
  const path = _.join([environment.viewPath, mod.template], environment.directorySeperator) + '.html';
  const template = handlebars.compile(FS.readFileSync(path, 'utf-8'));
  const data = _.merge(environment, mod.data);
  
  return template(data);
}

module.exports = {
  render,
}
