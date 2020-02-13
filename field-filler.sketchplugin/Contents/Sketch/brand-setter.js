var globalThis = this;
function __skpm_run (key, context) {
  globalThis.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/brand-setter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/brand-setter.js":
/*!*****************************!*\
  !*** ./src/brand-setter.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/color */ "./src/classes/color.js");


var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");

var document = __webpack_require__(/*! sketch/dom */ "sketch/dom").getSelectedDocument();

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var brandCode = '';
  var colors = ['#ffffff', '#ffffff', '#ffffff'];
  UI.getInputFromUser("Brand Name?", {
    type: UI.INPUT_TYPE.selection,
    possibleValues: ['Coldwell Banker', 'Century 21', 'Sotheby\'s International Realty', 'ERA']
  }, function (err, value) {
    brandCode = value;

    if (err) {
      // most likely the user canceled the input
      throw err.message;
    }
  });

  switch (brandCode) {
    case 'Coldwell Banker':
      colors = ['#012169', '#97999b', '#7d9bc1'];
      break;

    case 'Century 21':
      colors = ['#BEAF87', '#252526', '#E6E7E8'];
      break;

    case 'ERA':
      colors = ['#C8120E', '#250E62', '#8A1538'];
      break;

    case 'Sotheby\'s International Realty':
      colors = ['#002349', '#999999', '#666666'];
      break;

    default:
      colors = ['#ffffff', '#ffffff', '#ffffff'];
  }

  var primary = new _classes_color__WEBPACK_IMPORTED_MODULE_0__["default"](document, 'primary');
  var secondary = new _classes_color__WEBPACK_IMPORTED_MODULE_0__["default"](document, 'secondary');
  var tertiary = new _classes_color__WEBPACK_IMPORTED_MODULE_0__["default"](document, 'tertiary');
  primary.setDefaultColor(colors[0]).update();
  secondary.setDefaultColor(colors[1]).update();
  tertiary.setDefaultColor(colors[2]).update();
});

/***/ }),

/***/ "./src/classes/color.js":
/*!******************************!*\
  !*** ./src/classes/color.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Color; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Color =
/*#__PURE__*/
function () {
  function Color(document, fieldName) {
    _classCallCheck(this, Color);

    this.document = document;
    this.input = fieldName + "-color-input";
    this.text = fieldName + "-color-text";
    this.display = fieldName + "-color-display";
    this.font = fieldName + "-font-color";
  }

  _createClass(Color, [{
    key: "update",
    value: function update() {
      this.setColor();
      this.setText();
      this.setFontColor();
    }
  }, {
    key: "getColorLayer",
    value: function getColorLayer() {
      return this.document.getLayersNamed(this.input)[0];
    }
  }, {
    key: "getTextLayer",
    value: function getTextLayer() {
      return this.document.getLayersNamed(this.text)[0];
    }
  }, {
    key: "getSharedStyle",
    value: function getSharedStyle() {
      var sharedStyleId = this.getColorLayer().sharedStyleId;
      return this.document.getSharedLayerStyleWithID(sharedStyleId);
    }
  }, {
    key: "setSharedStyle",
    value: function setSharedStyle() {
      this.getSharedStyle().style.fills[0].color = this.localColor();
    }
  }, {
    key: "getDisplayLayer",
    value: function getDisplayLayer() {
      return this.document.getLayersNamed(this.display)[0];
    }
  }, {
    key: "setFontColor",
    value: function setFontColor() {
      var text = this.document.getLayersNamed(this.font);

      for (var i = 0; i < text.length; i++) {
        text[i].style.textColor = this.localColor();
      }
    }
  }, {
    key: "localColor",
    value: function localColor() {
      return this.getColorLayer().style.fills[0].color;
    }
  }, {
    key: "setDefaultColor",
    value: function setDefaultColor(color) {
      this.getColorLayer().style.fills[0].color = color;
      return this;
    }
  }, {
    key: "setColor",
    value: function setColor() {
      this.setSharedStyle();
      var layers = this.getSharedStyle().getAllInstancesLayers();

      for (var i = 0; i < layers.length; i++) {
        layers[i].style.syncWithSharedStyle(this.getSharedStyle());
        var textOverlaid = this.findLocalText(layers[i]);

        for (var j = 0; j < textOverlaid.length; j++) {
          textOverlaid[j].style.textColor = this.outputColor(this.localColor());
        }

        var phoneBorderOverlaid = this.findLocalPhoneBorder(layers[i]);

        for (var j = 0; j < phoneBorderOverlaid.length; j++) {
          phoneBorderOverlaid[j].style.borders[0].color = this.outputColor(this.localColor());
        }
      }
    }
  }, {
    key: "findLocalText",
    value: function findLocalText(colorLayer) {
      var artboard = colorLayer.getParentArtboard();
      return artboard.layers.filter(function (layer) {
        return layer.type === 'Text' && layer.frame.y >= colorLayer.frame.y && layer.frame.y <= colorLayer.frame.y + colorLayer.frame.height && layer.frame.x >= colorLayer.frame.x && layer.frame.x <= colorLayer.frame.x + colorLayer.frame.width;
      });
    }
  }, {
    key: "findLocalPhoneBorder",
    value: function findLocalPhoneBorder(colorLayer) {
      var artboard = colorLayer.getParentArtboard();
      return artboard.layers.filter(function (layer) {
        return layer.type === 'ShapePath' && layer.name === 'phone-border' && layer.frame.y >= colorLayer.frame.y && layer.frame.y <= colorLayer.frame.y + colorLayer.frame.height && layer.frame.x >= colorLayer.frame.x && layer.frame.x <= colorLayer.frame.x + colorLayer.frame.width;
      });
    }
  }, {
    key: "isWhite",
    value: function isWhite() {
      return this.localColor() === '#ffffffff';
    }
  }, {
    key: "setText",
    value: function setText() {
      this.getTextLayer().text = this.localColor().slice(0, -2);
      this.getTextLayer().hidden = this.isWhite();
      this.getDisplayLayer().hidden = this.isWhite();
    }
  }, {
    key: "outputColor",
    value: function outputColor(backgroundColor) {
      var rgb = this.hexToRgb(backgroundColor.slice(0, -2));

      if (rgb && rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114 > 186) {
        return '#000000';
      } else {
        return '#ffffff';
      }
    }
  }, {
    key: "hexToRgb",
    value: function hexToRgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
  }]);

  return Color;
}();



/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
globalThis['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=brand-setter.js.map