"use strict";
var globals_1 = require("../../globals");
var electron = require('electron');
var path = require('path');
var url = require('url');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({ width: 1024, height: 720 });
    mainWindow.loadURL(url.format({
        pathname: globals_1.default.startModule,
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
var Electron = (function () {
    function Electron() {
    }
    Electron.registerAppEvents = function () { return registerAppEvents(); };
    return Electron;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Electron;
