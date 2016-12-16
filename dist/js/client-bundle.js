/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _require = __webpack_require__(1),
	    app = _require.app,
	    BrowserWindow = _require.BrowserWindow;
	
	var path = __webpack_require__(2);
	var url = __webpack_require__(3);
	
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

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("electron");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("url");

/***/ }
/******/ ]);
//# sourceMappingURL=client-bundle.js.map