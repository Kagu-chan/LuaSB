// TODO: Write send and recive method for exchange events
// const { icpRenderer, remote } = require('electron');
const { remote } = require('electron');

app
  .service('ExchangeService', function ExchangeService() {
    this.i18n = () => remote.getGlobal('i18n');
  });
