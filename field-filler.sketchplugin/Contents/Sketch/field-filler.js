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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/field-filler.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/classes/bigbrand-field.js":
/*!***************************************!*\
  !*** ./src/classes/bigbrand-field.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BigbrandField; });
/* harmony import */ var _field_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field-group */ "./src/classes/field-group.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var BigbrandField =
/*#__PURE__*/
function (_FieldGroup) {
  _inherits(BigbrandField, _FieldGroup);

  function BigbrandField() {
    _classCallCheck(this, BigbrandField);

    return _possibleConstructorReturn(this, _getPrototypeOf(BigbrandField).apply(this, arguments));
  }

  _createClass(BigbrandField, [{
    key: "outputName",
    value: function outputName() {
      return 'bigbrand';
    }
  }, {
    key: "outputText",
    value: function outputText() {
      return "We make “big brand” ads available to " + this.getInputElement().text + " agents";
    }
  }]);

  return BigbrandField;
}(_field_group__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/classes/color-swatch.js":
/*!*************************************!*\
  !*** ./src/classes/color-swatch.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorSwatch; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ColorSwatch =
/*#__PURE__*/
function () {
  function ColorSwatch(document, hideTertiary) {
    _classCallCheck(this, ColorSwatch);

    this.document = document;
    this.symbols = document.getSymbols();
    this.hideTertiary = hideTertiary;
  }

  _createClass(ColorSwatch, [{
    key: "swatchWith",
    value: function swatchWith() {
      return this.symbols.filter(function (symbol) {
        return symbol.name === "color swatch";
      })[0];
    }
  }, {
    key: "swatchWithOut",
    value: function swatchWithOut() {
      return this.symbols.filter(function (symbol) {
        return symbol.name === "color swatch wo tertiary";
      })[0];
    }
  }, {
    key: "getSwatchSymbolId",
    value: function getSwatchSymbolId() {
      if (this.hideTertiary) {
        return this.swatchWithOut().symbolId;
      } else {
        return this.swatchWith().symbolId;
      }
    }
  }, {
    key: "update",
    value: function update() {
      var symbolId = this.getSwatchSymbolId();
      this.swatchWith().getAllInstances().forEach(function (instance) {
        instance.symbolId = symbolId;
      });
      this.swatchWithOut().getAllInstances().forEach(function (instance) {
        instance.symbolId = symbolId;
      });
    }
  }]);

  return ColorSwatch;
}();



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

/***/ "./src/classes/field-group.js":
/*!************************************!*\
  !*** ./src/classes/field-group.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FieldGroup; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FieldGroup =
/*#__PURE__*/
function () {
  function FieldGroup(document, fieldName) {
    _classCallCheck(this, FieldGroup);

    this.document = document;
    this.fieldName = fieldName;
    this.inputName = fieldName + "-input";
  }

  _createClass(FieldGroup, [{
    key: "outputName",
    value: function outputName() {
      return this.fieldName;
    }
  }, {
    key: "filterName",
    value: function filterName() {
      return this.outputName() + "-filter";
    }
  }, {
    key: "outputText",
    value: function outputText() {
      return this.getInputElement() == null ? '' : this.getInputElement().text;
    }
  }, {
    key: "getInputElement",
    value: function getInputElement() {
      return this.document.getLayersNamed(this.inputName)[0];
    }
  }, {
    key: "setField",
    value: function setField(optionalInput) {
      var input = this.outputText(optionalInput);
      var layers = this.document.getLayersNamed(this.outputName());

      for (var i = 0; i < layers.length; i++) {
        layers[i].text = input;
      }

      var filters = this.document.getLayersNamed(this.filterName());

      for (var j = 0; j < filters.length; j++) {
        filters[j].text = this.fieldLength().toString();
      }
    }
  }, {
    key: "fieldLength",
    value: function fieldLength() {
      return this.outputText().length || 0;
    }
  }]);

  return FieldGroup;
}();



/***/ }),

/***/ "./src/classes/logo-locator.js":
/*!*************************************!*\
  !*** ./src/classes/logo-locator.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LogoLocator; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LogoLocator =
/*#__PURE__*/
function () {
  function LogoLocator(document, logo) {
    _classCallCheck(this, LogoLocator);

    this.document = document;
    this.logo = logo;
  }

  _createClass(LogoLocator, [{
    key: "sizeToFit",
    value: function sizeToFit() {
      var logoImage = this.logo.layers[0];
      logoImage.frame.x = 0;
      logoImage.frame.y = 0;
      var initial_height = logoImage.frame.height;
      var initial_width = logoImage.frame.width;
      var frame_height = this.logo.frame.height;
      logoImage.frame.height = frame_height;
      var end_width = initial_width * frame_height / initial_height;
      this.logo.frame.width = end_width;
      logoImage.frame.width = end_width;
    }
  }, {
    key: "aspectRatio",
    value: function aspectRatio(width, height) {
      return width / height;
    }
  }, {
    key: "maxWidth",
    value: function maxWidth() {
      return this.wrap.width - this.padding * 2;
    }
  }, {
    key: "maxHeight",
    value: function maxHeight() {
      return this.wrap.height - this.padding * 2;
    }
  }, {
    key: "imageAspectRatio",
    value: function imageAspectRatio() {
      return this.aspectRatio(this.logo.frame.width, this.logo.frame.height);
    }
  }, {
    key: "maxAspectRatio",
    value: function maxAspectRatio() {
      return this.aspectRatio(this.maxWidth(), this.maxHeight());
    }
  }, {
    key: "displayHeight",
    value: function displayHeight() {
      if (this.imageAspectRatio() < this.maxAspectRatio()) {
        return this.maxHeight();
      } else {
        return this.maxWidth() / this.imageAspectRatio();
      }
    }
  }, {
    key: "displayWidth",
    value: function displayWidth() {
      if (this.imageAspectRatio() < this.maxAspectRatio()) {
        return this.maxHeight() * this.imageAspectRatio();
      } else {
        return this.maxWidth();
      }
    }
  }, {
    key: "displayLeft",
    value: function displayLeft() {
      switch (this.alignHorizontal) {
        case 'left':
          return this.wrap.x + this.padding;

        case 'right':
          return this.wrap.x + this.padding + this.maxWidth() - this.displayWidth();

        case 'center':
          return this.wrap.x + this.padding + (this.maxWidth() - this.displayWidth()) / 2;
      }
    }
  }, {
    key: "displayTop",
    value: function displayTop() {
      switch (this.alignVertical) {
        case 'top':
          return this.wrap.y + this.padding;

        case 'bottom':
          return this.wrap.y + this.padding + this.maxHeight() - this.displayHeight();

        case 'middle':
          return this.wrap.y + this.padding + (this.maxHeight() - this.displayHeight()) / 2;
      }
    }
  }, {
    key: "rect",
    value: function rect() {
      return {
        x: this.displayLeft(),
        y: this.displayTop(),
        width: this.displayWidth(),
        height: this.displayHeight()
      };
    }
  }, {
    key: "findArtboardLogo",
    value: function findArtboardLogo(artboardName) {
      return this.logo.getAllInstances().filter(function (local) {
        return local.getParentArtboard().name === artboardName;
      })[0];
    }
  }, {
    key: "setWrapper",
    value: function setWrapper(wrapperName, artboardName) {
      var wrappers = this.document.getLayersNamed(wrapperName);
      this.wrap = wrappers.filter(function (wrapper) {
        return wrapper.getParentArtboard().name === artboardName;
      })[0].frame;
    }
  }, {
    key: "centerAlign",
    value: function centerAlign(artboardName, padding) {
      this.alignVertical = 'middle';
      this.alignHorizontal = 'center';
      this.padding = padding || 5;
      var localLogo = this.findArtboardLogo(artboardName);
      this.setWrapper('logo-wrapper', artboardName);
      localLogo.frame = this.rect();
    }
  }, {
    key: "leftAlign",
    value: function leftAlign(artboardName, padding) {
      this.alignVertical = 'middle';
      this.alignHorizontal = 'left';
      this.padding = padding || 5;
      var localLogo = this.findArtboardLogo(artboardName);
      this.setWrapper('logo-wrapper', artboardName);
      localLogo.frame = this.rect();
      var office = this.getLayer('office', artboardName);
      var location = this.getLayer('location', artboardName);
      var agentTitle = this.getLayer('agent-title', artboardName);
      location.frame.x = this.displayLeft() + this.displayWidth() + this.padding;

      if (office) {
        office.frame.x = this.displayLeft() + this.displayWidth() + this.padding;
      }

      if (agentTitle) {
        agentTitle.frame.x = this.displayLeft() + this.displayWidth() + this.padding;
      }
    }
  }, {
    key: "getLayer",
    value: function getLayer(name, artboardName) {
      var layers = this.document.getLayersNamed(name);
      return layers.filter(function (layer) {
        return layer.getParentArtboard().name === artboardName;
      })[0];
    }
  }, {
    key: "rightAlign",
    value: function rightAlign(artboardName, padding) {
      this.alignVertical = 'middle';
      this.alignHorizontal = 'right';
      this.padding = padding || 5;
      var localLogo = this.findArtboardLogo(artboardName);
      this.setWrapper('logo-wrapper', artboardName);
      localLogo.frame = this.rect();
    }
  }]);

  return LogoLocator;
}();



/***/ }),

/***/ "./src/classes/phone-field.js":
/*!************************************!*\
  !*** ./src/classes/phone-field.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhoneField; });
/* harmony import */ var _field_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field-group */ "./src/classes/field-group.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PhoneField =
/*#__PURE__*/
function (_FieldGroup) {
  _inherits(PhoneField, _FieldGroup);

  function PhoneField() {
    _classCallCheck(this, PhoneField);

    return _possibleConstructorReturn(this, _getPrototypeOf(PhoneField).apply(this, arguments));
  }

  _createClass(PhoneField, [{
    key: "outputName",
    value: function outputName() {
      return 'phone-number';
    }
  }, {
    key: "outputText",
    value: function outputText() {
      return "(" + this.getInputElement().text + ") 555-5555";
    }
  }]);

  return PhoneField;
}(_field_group__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/classes/tagline-field.js":
/*!**************************************!*\
  !*** ./src/classes/tagline-field.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaglineField; });
/* harmony import */ var _field_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field-group */ "./src/classes/field-group.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var TaglineField =
/*#__PURE__*/
function (_FieldGroup) {
  _inherits(TaglineField, _FieldGroup);

  function TaglineField() {
    _classCallCheck(this, TaglineField);

    return _possibleConstructorReturn(this, _getPrototypeOf(TaglineField).apply(this, arguments));
  }

  _createClass(TaglineField, [{
    key: "outputName",
    value: function outputName() {
      return 'tagline';
    }
  }, {
    key: "outputText",
    value: function outputText(vertical) {
      return "Your local " + vertical + " professional for " + this.getInputElement().text;
    }
  }]);

  return TaglineField;
}(_field_group__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/classes/title-field.js":
/*!************************************!*\
  !*** ./src/classes/title-field.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TitleField; });
/* harmony import */ var _field_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field-group */ "./src/classes/field-group.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var TitleField =
/*#__PURE__*/
function (_FieldGroup) {
  _inherits(TitleField, _FieldGroup);

  function TitleField() {
    _classCallCheck(this, TitleField);

    return _possibleConstructorReturn(this, _getPrototypeOf(TitleField).apply(this, arguments));
  }

  _createClass(TitleField, [{
    key: "outputName",
    value: function outputName() {
      return 'title';
    }
  }, {
    key: "outputText",
    value: function outputText() {
      return this.getInputElement().text + " negotiated a 15% discount for all of your ads!";
    }
  }]);

  return TitleField;
}(_field_group__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/field-filler.js":
/*!*****************************!*\
  !*** ./src/field-filler.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_logo_locator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/logo-locator */ "./src/classes/logo-locator.js");
/* harmony import */ var _classes_field_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/field-group */ "./src/classes/field-group.js");
/* harmony import */ var _classes_phone_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/phone-field */ "./src/classes/phone-field.js");
/* harmony import */ var _classes_tagline_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/tagline-field */ "./src/classes/tagline-field.js");
/* harmony import */ var _classes_title_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/title-field */ "./src/classes/title-field.js");
/* harmony import */ var _classes_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classes/color */ "./src/classes/color.js");
/* harmony import */ var _classes_bigbrand_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classes/bigbrand-field */ "./src/classes/bigbrand-field.js");
/* harmony import */ var _classes_color_swatch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classes/color-swatch */ "./src/classes/color-swatch.js");








 // documentation: https://developer.sketchapp.com/reference/api/

var document = __webpack_require__(/*! sketch/dom */ "sketch/dom").getSelectedDocument();

var symbols = document.getSymbols();
var logo = symbols.filter(function (symbol) {
  return symbol.name === "Logo";
})[0];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var vertical = new _classes_field_group__WEBPACK_IMPORTED_MODULE_2__["default"](document, 'vertical').outputText();
  var logoLocator = new _classes_logo_locator__WEBPACK_IMPORTED_MODULE_1__["default"](document, logo);
  logoLocator.sizeToFit();

  switch (vertical) {
    case 'Real Estate':
      new _classes_phone_field__WEBPACK_IMPORTED_MODULE_3__["default"](document, 'area-code').setField();
      new _classes_field_group__WEBPACK_IMPORTED_MODULE_2__["default"](document, 'vertical').setField();
      new _classes_title_field__WEBPACK_IMPORTED_MODULE_5__["default"](document, 'office').setField();
      new _classes_bigbrand_field__WEBPACK_IMPORTED_MODULE_7__["default"](document, 'office').setField();
      logoLocator.centerAlign('listings-awd');
      logoLocator.centerAlign('fb/insta image listing');

      try {
        logoLocator.centerAlign('homepage');
      } catch (err) {
        console.log(err);
      }

      break;

    default:
  }

  new _classes_tagline_field__WEBPACK_IMPORTED_MODULE_4__["default"](document, 'location').setField(vertical.toLowerCase());
  new _classes_color__WEBPACK_IMPORTED_MODULE_6__["default"](document, 'primary').update();
  new _classes_color__WEBPACK_IMPORTED_MODULE_6__["default"](document, 'secondary').update();
  var tertiary = new _classes_color__WEBPACK_IMPORTED_MODULE_6__["default"](document, 'tertiary');
  tertiary.update();
  var hideTertiary = tertiary.isWhite();
  new _classes_color_swatch__WEBPACK_IMPORTED_MODULE_8__["default"](document, hideTertiary).update();
  new _classes_field_group__WEBPACK_IMPORTED_MODULE_2__["default"](document, 'location').setField();
  new _classes_field_group__WEBPACK_IMPORTED_MODULE_2__["default"](document, 'office').setField();
  logoLocator.centerAlign('sphere-ad-builder', 1);
  logoLocator.centerAlign('fb/insta image brand');
  logoLocator.leftAlign('brand-awd');
  logoLocator.leftAlign('sphere-awd');

  try {
    logoLocator.rightAlign('tv-awd', 10);
  } catch (err) {
    console.log(err);
  }

  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message('everything worked!');
  console.log('completed!');
});

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
globalThis['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=field-filler.js.map