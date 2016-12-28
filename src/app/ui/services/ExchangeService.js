// TODO: Write send and recive method for exchange events

app
  .service('ExchangeService', function ExchangeService(ipcRenderer, remote) {
    this.i18n = () => remote.getGlobal('i18n');
  });
