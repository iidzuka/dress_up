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
	
	var _Menu = __webpack_require__(1);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var menu = new _Menu2.default();
	
	menu.addMenu({ tabName: 'mainMenu', name: 'config' });
	menu.addMenu({ tabName: 'mainMenu', name: 'config2' });
	menu.addMenu({ tabName: 'mainMenu', name: 'config3' });
	menu.addMenu({ tabName: 'headDress', name: 'headDress' });
	console.log(menu);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Tab = function Tab(option) {
	  _classCallCheck(this, Tab);
	
	  this.name = option.name || '';
	};
	
	var TabManager = function () {
	  function TabManager() {
	    _classCallCheck(this, TabManager);
	
	    this.tabList = [];
	  }
	
	  _createClass(TabManager, [{
	    key: 'getByName',
	    value: function getByName(name) {
	      var present = this.tabList.findIndex(function (tab) {
	        return tab.name === name;
	      });
	      if (present >= 0) return this.tabList[present];
	      var newTab = new Tab({ name: name });
	      this.tabList.push(newTab);
	      return newTab;
	    }
	  }]);
	
	  return TabManager;
	}();
	
	var MenuItem = function MenuItem(option) {
	  _classCallCheck(this, MenuItem);
	
	  this.name = option.name || '';
	  this.tab = option.tab || '';
	};
	
	var Menu = function () {
	  function Menu() {
	    _classCallCheck(this, Menu);
	
	    this.list = [];
	    this.tabManager = new TabManager();
	    this.active = null;
	  }
	
	  _createClass(Menu, [{
	    key: 'addMenu',
	    value: function addMenu(option) {
	      var tab = this.tabManager.getByName(option.tabName);
	      var newItem = new MenuItem({
	        name: option.name,
	        tab: tab
	      });
	      this.list.push(newItem);
	    }
	  }]);
	
	  return Menu;
	}();
	
	exports.default = Menu;

/***/ }
/******/ ]);
//# sourceMappingURL=client-bundle.js.map