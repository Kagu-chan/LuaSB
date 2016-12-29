module.exports = () => {
  describe('localization:app-title', function () {
    init(this);

    it('check apps title to users language', () =>
      Promise.resolve()
        .then(() => [
          app.client.waitUntilWindowLoaded().getTitle(),
          app.remote,
        ])
          .all()
          .spread((title, locale) => {
            console.log(locale);
            return expect(title).to.equal(i18n.__({ phrase: 'app.name', locale }));
          })
    );
  });
};
