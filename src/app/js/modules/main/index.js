const environment = require('environment');
const electronStarter = require('modules/electronStarter');

module.exports = {
  configure: () => {
    i18n.configure({
      locales: ['en', 'de', 'jp'],
      defaultLocale: 'de',
      directory: environment.locales,
    });
    i18n.init();
  },
  run: () => electronStarter.start(),
};
