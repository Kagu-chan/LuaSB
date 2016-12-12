const environment = require('environment');
const electron = require('electron');
const url = require('url');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 1024, height: 720 });
  mainWindow.loadURL(url.format({
    pathname: environment.startModule,
    protocol: 'file:',
    slashes: true,
  }));
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function start() {
  app.on('ready', createWindow);
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow();
    }
  });
}

module.exports = {
  start,
};
