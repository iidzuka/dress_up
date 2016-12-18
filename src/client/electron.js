const { app, BrowserWindow } = require('electron');

const path = require('path');
const url = require('url');

let win;
const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    useContentSize: true,
  });
  win.loadURL(url.format({
    pathname: path.join(path.resolve(''), '/dist/index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
