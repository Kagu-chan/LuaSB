module.exports = () => {
  describe('localization:app-title', function () {
    init(this);

    it('check apps title to users language', () =>
      Promise.resolve()
        .then(() => [
          app.client.waitUntilWindowLoaded().getTitle(),
          app.client.execute(() => require('electron').remote.getGlobal('i18n')),
        ])
          .all()
          .spread((title, locale) =>
            expect(title).to.equal(i18n.__({ phrase: 'app.name', locale: locale.value.locale }))
          )
    );
  });
};
