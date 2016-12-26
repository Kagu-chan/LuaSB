const { app, BrowserWindow } = require('electron');
const url = require('url');

const base = `${__dirname}/../..`;
const core = `${base}/core`;
const ui = `${base}/ui`;
const localization = {
  directory: `${base}/locales`,
  locales: ['en', 'de', 'ja'],
  defaultLocale: 'en',
  objectNotation: true,
  api: {
    __: 't',
  },
  register: global,
};
const runner = `${ui}/index.html`;
const startupParams = {
  width: 1024,
  height: 720,
  show: false,
  backgroundColor: '#2e2c29',
  // TODO: Comment in for release builds!
  // webPreferences: {
  //   devTools: false
  // }
};

let mainWindow;

const createAppWindow = () => {
  i18n.setLocale(app.getLocale());
  mainWindow = new BrowserWindow(startupParams);
  mainWindow.loadURL(url.format({
    pathname: runner,
    protocol: 'file:',
    slashes: true,
  }));
  mainWindow.maximize();
  mainWindow.on('ready-to-show', mainWindow.show);
  mainWindow.on('closed', () => (mainWindow = null));
};

const registerAppEvents = () => {
  app.on('window-all-closed', () => ((process.platform !== 'darwin') ? app.quit() : null));
  app.on('activate', () => ((mainWindow === null) ? createAppWindow() : null));
  app.on('ready', createAppWindow);
};

module.exports = {
  base,
  core,
  ui,
  localization,
  registerAppEvents,
};
