const path = require('path');

const config = {
  directory: path.join(__dirname, '..', '..', 'app', 'locales'),
  locales: ['en', 'de', 'ja'],
  defaultLocale: 'en',
  objectNotation: true,
  api: {
    __: 't',
  },
  register: global,
  updateFiles: false,
};

i18n.configure(config);
i18n.setLocale('de');

global.i18n = i18n;

module.exports = [
  'general',
  'app-title',
];
