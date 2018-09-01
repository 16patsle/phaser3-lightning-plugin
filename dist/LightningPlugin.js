(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("LightningPlugin", [], factory);
	else if(typeof exports === 'object')
		exports["LightningPlugin"] = factory();
	else
		root["LightningPlugin"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LightningGenerator__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * @author       Patrick Sletvold
 * @author       Richard Davey
 * @license      {@link https://github.com/photonstorm/phaser3-plugin-template/blob/master/LICENSE|MIT License}
 */

/**
 * The Lightning Plugin can make lightning
 */

var LightningPlugin =
/*#__PURE__*/
function (_Phaser$Plugins$Scene) {
  _inherits(LightningPlugin, _Phaser$Plugins$Scene);

  /**
   * @param {Phaser.Scene} scene - A reference to the Phaser.Scene instance.
   * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to the
   *  Phaser.Plugins.PluginManager instance.
   */
  function LightningPlugin(scene, pluginManager) {
    _classCallCheck(this, LightningPlugin);

    return _possibleConstructorReturn(this, _getPrototypeOf(LightningPlugin).call(this, scene, pluginManager)); // Register our new Game Object type
    // pluginManager.registerGameObject('lightning', this.add);
  }
  /**
   * 
   * @param {number} generations - Number of times to run the division code
   * @param {String} maximumOffset - Maximum amount of pixels to offset the segments
   * @param {String} lengthScale - The factor to scale the lenght of the branches
   * @returns {LightningGenerator}
   */


  _createClass(LightningPlugin, [{
    key: "add",
    value: function add() {
      var generations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
      var maximumOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
      var lengthScale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.8;
      return new __WEBPACK_IMPORTED_MODULE_0__LightningGenerator__["a" /* default */](generations, maximumOffset, lengthScale);
    }
    /**
     * Called by the PluginManager when this plugin is started.
     * If a plugin is stopped, and then started again, this will get called again.
     * Typically called immediately after `BasePlugin.init`.
     *
     * @private
     * @returns {void}
     */

  }, {
    key: "start",
    value: function start() {
      this.systems.events.on('postrender', this.postRender, this);
    }
    /**
     * If this is a Scene Plugin (i.e. installed into a Scene) then this method is called when the Scene boots.
     * By this point the plugin properties `scene` and `systems` will have already been set.
     * In here you can listen for Scene events and set-up whatever you need for this plugin to run.
     * @private
     * @returns {void}
     */

  }, {
    key: "boot",
    value: function boot() {
      var eventEmitter = this.systems.events; //  Listening to the following events is entirely optional,
      //  although we would recommend cleanly shutting down and destroying at least.
      //  If you don't need any of these events then remove the listeners and the relevant methods too.

      eventEmitter.on('preupdate', this.preUpdate, this);
      eventEmitter.on('update', this.update, this);
      eventEmitter.on('postupdate', this.postUpdate, this);
      eventEmitter.on('pause', this.pause, this);
      eventEmitter.on('resume', this.resume, this);
      eventEmitter.on('sleep', this.sleep, this);
      eventEmitter.on('wake', this.wake, this);
      eventEmitter.on('shutdown', this.shutdown, this);
      eventEmitter.on('destroy', this.destroy, this);
    }
    /**
     * Called every Scene step - phase 1
     * 
     * @private
     * @param {number} time - Current game time
     * @param {number} delta - Time since last call
     * @returns {void}
     */

  }, {
    key: "preUpdate",
    value: function preUpdate(time, delta) {} // Empty

    /**
     * Internal update method, called by the PluginManager.
     * Called every Scene step - phase 2
     *
     * @private
     * @param {number} time - Current game time
     * @param {number} delta - Time since last call
     * @returns {void}
     */

  }, {
    key: "update",
    value: function update(time, delta) {} // Empty

    /**
     * Called every Scene step - phase 3
     * 
     * @private
     * @param {number} time - Current game time
     * @param {number} delta - Time since last call
     * @returns {void}
     */

  }, {
    key: "postUpdate",
    value: function postUpdate(time, delta) {} // Empty

    /**
     * Internal update method, called by the PluginManager.
     *
     * @private
     * @returns {void}
     */

  }, {
    key: "postRender",
    value: function postRender() {} // Empty

    /**
     * Called when a Scene is paused. A paused scene doesn't have its Step run, but still renders.
     *
     * @private
     * @returns {void}
     */

  }, {
    key: "pause",
    value: function pause() {} // Empty

    /**
     * Called when a Scene is resumed from a paused state.
     *
     * @private
     * @returns {void}
     */

  }, {
    key: "resume",
    value: function resume() {} // Empty

    /**
     * Called when a Scene is put to sleep.
     * A sleeping scene doesn't update or render, but isn't destroyed or shutdown. preUpdate events still fire.
     *
     * @private
     * @returns {void}
     */

  }, {
    key: "sleep",
    value: function sleep() {} // Empty

    /**
     * Called when a Scene is woken from a sleeping state.
     *
     * @private
     * @returns {void}
     */

  }, {
    key: "wake",
    value: function wake() {} // Empty

    /**
     * Called when a Scene shuts down,
     * it may then come back again later (which will invoke the 'start' event) but should be considered dormant.
     *
     * @private
     * @returns {void}
     */

  }, {
    key: "shutdown",
    value: function shutdown() {} // Empty

    /**
     * Destroys this Plugin.
     * You must release everything in here, all references, all objects, free it all up.
     * @private
     * @returns {void}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.pluginManager = null;
      this.game = null;
      this.scene = null;
      this.systems = null;
    }
  }]);

  return LightningPlugin;
}(Phaser.Plugins.ScenePlugin);
/**
 * Shortcut to the LightningGenerator class
 * @type {LightningGenerator}
 */


LightningPlugin.LightningGenerator = __WEBPACK_IMPORTED_MODULE_0__LightningGenerator__["a" /* default */];
/* harmony default export */ __webpack_exports__["default"] = (LightningPlugin);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Segment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRandomArbitrary__ = __webpack_require__(3);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @author       Patrick Sletvold
 * @license      {@link https://github.com/photonstorm/phaser3-plugin-template/blob/master/LICENSE|MIT License}
 */



var LightningGenerator =
/*#__PURE__*/
function () {
  function LightningGenerator(generations, maximumOffset, lengthScale) {
    _classCallCheck(this, LightningGenerator);

    this.generations = generations;
    this.maximumOffset = maximumOffset;
    this.lengthScale = lengthScale;
  }

  _createClass(LightningGenerator, [{
    key: "generate",
    value: function generate(startPoint, endPoint) {
      var segmentList = [];
      segmentList.push(new __WEBPACK_IMPORTED_MODULE_0__Segment__["a" /* default */](startPoint, endPoint, 1));
      var offsetAmount = this.maximumOffset; // the maximum amount to offset a lightning vertex.

      for (var i = 0; i < this.generations; i++) {
        var newList = [];

        for (var _i = 0; _i < segmentList.length; _i++) {
          var segmentOld = segmentList[_i];
          var segment = segmentOld.clone();
          var midPoint = {
            x: Phaser.Math.Average([segment.startPoint.x, segment.endPoint.x]),
            y: Phaser.Math.Average([segment.startPoint.y, segment.endPoint.y])
          }; // Offset the midpoint by a random amount along the normal.

          var angle = Math.atan2(segment.endPoint.y - segment.startPoint.y, segment.endPoint.x - segment.startPoint.x);
          var randOffset = Object(__WEBPACK_IMPORTED_MODULE_1__getRandomArbitrary__["a" /* default */])(-offsetAmount, offsetAmount);
          var x1 = Math.sin(angle) * randOffset + midPoint.x;
          var y1 = -Math.cos(angle) * randOffset + midPoint.y;
          var x2 = -Math.sin(angle) * randOffset + midPoint.x;
          var y2 = Math.cos(angle) * randOffset + midPoint.y;

          if (Object(__WEBPACK_IMPORTED_MODULE_1__getRandomArbitrary__["a" /* default */])(-1, 1) < 0) {
            midPoint.x = x1;
            midPoint.y = y1;
          } else {
            midPoint.x = x2;
            midPoint.y = y2;
          } // Create two new segments that span from the start point to the end point,
          // but with the new (randomly-offset) midpoint.


          newList.push(new __WEBPACK_IMPORTED_MODULE_0__Segment__["a" /* default */](startPoint, midPoint, segment.level));
          newList.push(new __WEBPACK_IMPORTED_MODULE_0__Segment__["a" /* default */](midPoint, endPoint, segment.level));

          if (
          /*getRandomArbitrary(0, 2) < 1 && i % 2 == 0*/
          i === 0 || i === 2) {
            var distance = Math.sqrt(Math.pow(midPoint.x - segment.startPoint.x, 2) + Math.pow(midPoint.y - segment.startPoint.y, 2));
            var splitEnd = {
              x: segment.endPoint.x,
              y: segment.endPoint.y
            };
            var branchAngle = void 0;

            if (Object(__WEBPACK_IMPORTED_MODULE_1__getRandomArbitrary__["a" /* default */])(0, 2) < 1) {
              branchAngle = Object(__WEBPACK_IMPORTED_MODULE_1__getRandomArbitrary__["a" /* default */])(-0.8, -0.2);
            } else {
              branchAngle = Object(__WEBPACK_IMPORTED_MODULE_1__getRandomArbitrary__["a" /* default */])(0.2, 0.8);
            }

            Phaser.Math.RotateAroundDistance(splitEnd, midPoint.x, midPoint.y, branchAngle, this.lengthScale * distance); // lengthScale is, for best results, < 1.  0.7 is a good value.

            /*
                                  direction = midPoint - startPoint;
                                  splitEnd = Rotate(direction, randomSmallAngle)*lengthScale + midPoint;
                                  */

            newList.push(new __WEBPACK_IMPORTED_MODULE_0__Segment__["a" /* default */](midPoint, splitEnd, segment.level + 1));
          }
        } // Each subsequent generation offsets at max half as much as the generation before.


        offsetAmount /= 2;
        segmentList = newList;
      }

      return segmentList;
    }
  }]);

  return LightningGenerator;
}();

/* harmony default export */ __webpack_exports__["a"] = (LightningGenerator);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @author       Patrick Sletvold
 * @license      {@link https://github.com/photonstorm/phaser3-plugin-template/blob/master/LICENSE|MIT License}
 */
var Segment =
/*#__PURE__*/
function () {
  function Segment(startPoint, endPoint, level) {
    _classCallCheck(this, Segment);

    this.startPoint = {
      x: startPoint[0],
      y: startPoint[1]
    };
    this.endPoint = {
      x: endPoint[0],
      y: endPoint[1]
    };
    this.level = level;
  }

  _createClass(Segment, [{
    key: "clone",
    value: function clone() {
      return new Segment({
        x: this.startPoint.x,
        y: this.startPoint.y
      }, {
        x: this.endPoint.x,
        y: this.endPoint.y
      }, this.level);
    }
  }]);

  return Segment;
}();

/* harmony default export */ __webpack_exports__["a"] = (Segment);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getRandomArbitrary;
/**
 * Returns a random number between min (inclusive) and max (exclusive)
 * https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range/1527820#1527820
 */
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=LightningPlugin.js.map