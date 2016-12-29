module.exports = () => {
  describe('localization:general', function () {
    it('check translation working in general', () => {
      const check = {
        prop: 'navigation.projects',
        lang: {
          de: 'Projekte',
          ja: 'プロジェクト',
          en: 'Projects',
        },
      };

      return Promise.all(
        _.map(check.lang, (text, lang) =>
          Promise.resolve()
            .then(() => i18n.__({ phrase: check.prop, locale: lang }))
            .then(expect)
            .then((chai) => chai.to.equal(text))
        )
      );
    });
  });
};
