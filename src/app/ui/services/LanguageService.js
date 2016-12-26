app
  .service('LanguageService', function LanguageService(ExchangeService) {
    this.translate = (label) => ExchangeService.i18n().__(label);
  });
