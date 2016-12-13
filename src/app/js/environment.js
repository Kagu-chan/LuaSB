global.i18n = require('i18n');

const base = `${__dirname}/..`;
const directorySeperator = '/';
const locales = `${base}/locales`;
const availableLocals = ['en', 'de', 'ja'];
const defaultLocal = 'en';
const viewPath = `${base}/view`;
const pagesPrefix = 'pages';
const startModule = `home`;

module.exports = {
  base,
  directorySeperator,
  locales,
  availableLocals,
  defaultLocal,
  viewPath,
  pagesPrefix,
  startModule,
};
