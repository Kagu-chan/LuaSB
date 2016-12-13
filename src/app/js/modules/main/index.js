const environment = require('environment');
const electronStarter = require('modules/electronStarter');

module.exports = {
  configure: () => {
    i18n.configure({
      locales: environment.availableLocals,
      defaultLocale: environment.defaultLocale,
      directory: environment.locales,
      register: global
    });
  },
  run: () => electronStarter.start(),
};
