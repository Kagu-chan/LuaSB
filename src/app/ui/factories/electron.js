app
  .factory('electron', () => require('electron'))
  .factory('remote', (electron) => electron.remote)
  .factory('ipcRenderer', (electron) => electron.ipcRenderer);
