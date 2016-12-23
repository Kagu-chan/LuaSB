angular.module('LuaSB')
  .filter('i18n', () =>
    (label) => i18n.__(label)
  );
