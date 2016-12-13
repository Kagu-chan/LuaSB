global.i18n = require('i18n');

const base = `${__dirname}/..`;
const directorySeperator = '/';
const locales = `${base}/locales`;
const availableLocals = ['en', 'de', 'ja'];
const defaultLocal = 'en';
const viewPath = `${base}/view`;
const startModule = `${viewPath}/main.html`;

module.exports = {
  base,
  directorySeperator,
  locales,
  availableLocals,
  defaultLocal,
  viewPath,
  startModule,
};
