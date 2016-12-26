app
  .filter('i18n', (LanguageService) =>
    (label) => LanguageService.translate(label)
  );
