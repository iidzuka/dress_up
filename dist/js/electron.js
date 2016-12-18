'use strict';

var _require = require('electron'),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow;

var path = require('path');
var url = require('url');

var win = void 0;
var createWindow = function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    useContentSize: true
  });
  win.loadURL(url.format({
    pathname: path.join(path.resolve(''), '/dist/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  win.webContents.openDevTools();

  win.on('closed', function () {
    win = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  app.quit();
});

app.on('activate', function () {
  if (win === null) {
    createWindow();
  }
});