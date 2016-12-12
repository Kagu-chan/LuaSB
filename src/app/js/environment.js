global.i18n = require('i18n');

const base = `${__dirname}/..`;
const directorySeperator = '/';
const locales = `${base}/locales`;
const viewPath = `${base}/view`;
const startModule = `${viewPath}/main.html`;

module.exports = {
  base,
  directorySeperator,
  locales,
  viewPath,
  startModule,
};
