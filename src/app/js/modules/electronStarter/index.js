const environment = require('environment');
const electron = require('electron');
const url = require('url');
const renderer = require('modules/pageRenderer');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function configureLanguage() {
  i18n.setLocale(app.getLocale());
}

function createWindow() {
  let template = renderer.render(environment.startModule);

  mainWindow = new BrowserWindow({
    width: 1024,
    height: 720,
    show: false,
    backgroundColor: '#2e2c29',
    // TODO: Comment in for release builds!
    // webPreferences: {
    //   devTools: false
    // }
  });
  mainWindow.maximize();
  mainWindow.loadURL(url.format({
    pathname: `${environment.viewPath}/main.html`, // `text/html;charset=utf-8,${template}`,
    protocol: 'file:',
    slashes: true,
  }));
  mainWindow.on('ready-to-show', () => mainWindow.show());
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
  configureLanguage,
  start,
};
