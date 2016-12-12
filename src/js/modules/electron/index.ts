import Globals from '../../globals';

const electron = require('electron');
const path = require('path');
const url = require('url');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 1024, height: 720 });
  mainWindow.loadURL(url.format({
    pathname: Globals.startModule,
    protocol: 'file:',
    slashes: true
  }));
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

function registerAppEvents() {
  app.on('ready', createWindow);
  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
  });
  app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
  });
}

export default class Electron {
  static registerAppEvents() { return registerAppEvents(); }
}
