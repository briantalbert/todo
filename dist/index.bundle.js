/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./folder.svg */ "./src/folder.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./createnew.svg */ "./src/createnew.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --color-50: #f0fdfa;\r\n    --color-100: #ccfbf1;\r\n    --color-200: #99f6e4;\r\n    --color-300: #5eead4;\r\n    --color-400: #2dd4bf;\r\n    --color-500: #14b8a6;\r\n    --color-600: #0d9488;\r\n    --color-700: #0f766e;\r\n    --color-800: #115e59;\r\n    --color-900: #134e4a;\r\n}\r\n.container {\r\n    display: grid;\r\n    grid-template-rows: 15vh 85vh;\r\n    grid-template-columns: 1fr 3fr;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    background-color: var(--color-900);\r\n    border-bottom: 3px solid var(--color-300);\r\n    grid-row: 1 / 2;\r\n    grid-column: 1 / 3;\r\n    width: 100%;\r\n}\r\n\r\n.title {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: x-large;\r\n    font-weight: bolder;\r\n    color: var(--color-50);\r\n    margin: 1em;\r\n}\r\n\r\n.sidebar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row: 2 / 3;\r\n    grid-column: 1 / 2;\r\n    background-color: var(--color-700);\r\n    border-right: 3px solid var(--color-300);\r\n}\r\n\r\n.projects {\r\n    font-size: x-large;\r\n    margin: .5em;\r\n    border-bottom: 3px solid var(--color-500);\r\n    position: relative;\r\n    top: 5px;\r\n    color: var(--color-50);\r\n}\r\n\r\n.blankhomepage {\r\n    display: flex;\r\n    grid-row: 2 / 3;\r\n    grid-column: 2 / 3;\r\n    background-color: #0f766e;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n    color: var(--color-50);\r\n    font-size: medium;\r\n}\r\n\r\nli::before {\r\n    content: \"\";\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    display: inline-block;\r\n    position: relative;\r\n    top: .3em;\r\n    margin-right: .4em;\r\n    width: 24px;\r\n    height: 24px;\r\n}\r\n\r\nli:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.createnewwindow span::before {\r\n    content: \"\";\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    display: inline-block;\r\n    position: relative;\r\n    top: .3em;\r\n    margin-right: .4em;\r\n    width: 38px;\r\n    height: 38px;\r\n    color: var(--color-900);\r\n}\r\n\r\n.createnewwindow span {\r\n    background-color: var(--color-50);\r\n    height: 2em;\r\n    border: 2px solid var(--color-900);\r\n    border-radius: 8px;\r\n    box-shadow: 3px 3px 2px var(--color-900);\r\n    padding: 5px;\r\n    position: relative;\r\n}\r\n\r\n.createnewwindow span.clicked {\r\n    box-shadow: none;\r\n    top: 3px;\r\n    left: 3px;\r\n}\r\n\r\n.createnewwindow span:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.createnewwindow {\r\n    display: flex;\r\n    flex-direction: column;\r\n    color: var(--color-900);\r\n    height: 8em;\r\n    width: 15em;\r\n    font-size: x-large;\r\n    border: 2px solid var(--color-900);\r\n    border-radius: 8px;\r\n    box-shadow: 10px 10px 8px var(--color-900);\r\n    background-color: var(--color-500);\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding: 10px;\r\n}\r\n\r\n.makenewproject {\r\n    align-content: center;\r\n    justify-content: center;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,oBAAoB;IACpB,oBAAoB;IACpB,oBAAoB;IACpB,oBAAoB;IACpB,oBAAoB;IACpB,oBAAoB;IACpB,oBAAoB;IACpB,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,6BAA6B;IAC7B,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,mBAAmB;IACnB,kCAAkC;IAClC,yCAAyC;IACzC,eAAe;IACf,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,8CAA8C;IAC9C,kBAAkB;IAClB,mBAAmB;IACnB,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,kBAAkB;IAClB,kCAAkC;IAClC,wCAAwC;AAC5C;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,yCAAyC;IACzC,kBAAkB;IAClB,QAAQ;IACR,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,yBAAyB;IACzB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,yDAAqC;IACrC,qBAAqB;IACrB,kBAAkB;IAClB,SAAS;IACT,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,yDAAwC;IACxC,qBAAqB;IACrB,kBAAkB;IAClB,SAAS;IACT,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,iCAAiC;IACjC,WAAW;IACX,kCAAkC;IAClC,kBAAkB;IAClB,wCAAwC;IACxC,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,kCAAkC;IAClC,kBAAkB;IAClB,0CAA0C;IAC1C,kCAAkC;IAClC,6BAA6B;IAC7B,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,uBAAuB;AAC3B","sourcesContent":[":root {\r\n    --color-50: #f0fdfa;\r\n    --color-100: #ccfbf1;\r\n    --color-200: #99f6e4;\r\n    --color-300: #5eead4;\r\n    --color-400: #2dd4bf;\r\n    --color-500: #14b8a6;\r\n    --color-600: #0d9488;\r\n    --color-700: #0f766e;\r\n    --color-800: #115e59;\r\n    --color-900: #134e4a;\r\n}\r\n.container {\r\n    display: grid;\r\n    grid-template-rows: 15vh 85vh;\r\n    grid-template-columns: 1fr 3fr;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    background-color: var(--color-900);\r\n    border-bottom: 3px solid var(--color-300);\r\n    grid-row: 1 / 2;\r\n    grid-column: 1 / 3;\r\n    width: 100%;\r\n}\r\n\r\n.title {\r\n    font-family: 'Courier New', Courier, monospace;\r\n    font-size: x-large;\r\n    font-weight: bolder;\r\n    color: var(--color-50);\r\n    margin: 1em;\r\n}\r\n\r\n.sidebar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-row: 2 / 3;\r\n    grid-column: 1 / 2;\r\n    background-color: var(--color-700);\r\n    border-right: 3px solid var(--color-300);\r\n}\r\n\r\n.projects {\r\n    font-size: x-large;\r\n    margin: .5em;\r\n    border-bottom: 3px solid var(--color-500);\r\n    position: relative;\r\n    top: 5px;\r\n    color: var(--color-50);\r\n}\r\n\r\n.blankhomepage {\r\n    display: flex;\r\n    grid-row: 2 / 3;\r\n    grid-column: 2 / 3;\r\n    background-color: #0f766e;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n    color: var(--color-50);\r\n    font-size: medium;\r\n}\r\n\r\nli::before {\r\n    content: \"\";\r\n    background-image: url('./folder.svg');\r\n    display: inline-block;\r\n    position: relative;\r\n    top: .3em;\r\n    margin-right: .4em;\r\n    width: 24px;\r\n    height: 24px;\r\n}\r\n\r\nli:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.createnewwindow span::before {\r\n    content: \"\";\r\n    background-image: url('./createnew.svg');\r\n    display: inline-block;\r\n    position: relative;\r\n    top: .3em;\r\n    margin-right: .4em;\r\n    width: 38px;\r\n    height: 38px;\r\n    color: var(--color-900);\r\n}\r\n\r\n.createnewwindow span {\r\n    background-color: var(--color-50);\r\n    height: 2em;\r\n    border: 2px solid var(--color-900);\r\n    border-radius: 8px;\r\n    box-shadow: 3px 3px 2px var(--color-900);\r\n    padding: 5px;\r\n    position: relative;\r\n}\r\n\r\n.createnewwindow span.clicked {\r\n    box-shadow: none;\r\n    top: 3px;\r\n    left: 3px;\r\n}\r\n\r\n.createnewwindow span:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.createnewwindow {\r\n    display: flex;\r\n    flex-direction: column;\r\n    color: var(--color-900);\r\n    height: 8em;\r\n    width: 15em;\r\n    font-size: x-large;\r\n    border: 2px solid var(--color-900);\r\n    border-radius: 8px;\r\n    box-shadow: 10px 10px 8px var(--color-900);\r\n    background-color: var(--color-500);\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding: 10px;\r\n}\r\n\r\n.makenewproject {\r\n    align-content: center;\r\n    justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBlankMainPage": () => (/* binding */ createBlankMainPage)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");



function createBlankMainPage() {
    if (document.querySelector('.blankhomepage')) {
        document.querySelector('.blankhomepage').innerHTML = "";
    }
    const container = document.querySelector('.container');
    const blankMainPageDiv = document.createElement('div');
    blankMainPageDiv.classList.add('blankhomepage');

    const createNew = document.createElement('div');
    createNew.classList.add('createnewwindow');

    const newProjSpan = document.createElement('span');
    newProjSpan.classList.add('newproject');
    newProjSpan.textContent = 'New Project';

    const newTaskSpan = document.createElement('span');
    newTaskSpan.classList.add('newtask');
    newTaskSpan.textContent = 'New Task';

    createNew.appendChild(newProjSpan);
    createNew.appendChild(newTaskSpan);

    blankMainPageDiv.appendChild(createNew);
    container.appendChild(blankMainPageDiv);
    addNewButtonEventListeners();

}

function addNewButtonEventListeners() {
    const newProjOrTask = document.querySelectorAll('.createnewwindow span');
    newProjOrTask.forEach(button => {
        button.addEventListener('mousedown', (e) => {
            button.classList.add('clicked')
        })

        button.addEventListener('mouseup', (e) => {
            button.classList.remove('clicked');
            switch (e.target.classList[0]) {
                case "newproject":
                    (0,_project__WEBPACK_IMPORTED_MODULE_0__.buildNewProjectWindow)();
                    break;
            
                case "newtask":
                    (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.buildNewTaskWindow)();
                    break;
            
                default:
                    break;
            }
        })
    });
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "buildNewProjectWindow": () => (/* binding */ buildNewProjectWindow),
/* harmony export */   "getProjList": () => (/* binding */ getProjList)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


class Project {
    constructor(projName) {
        this.name = projName;
        this.taskList = [];
    }
    
    getName() {
        return this.name;
    }

    addTask(task) {
        this.taskList.push(task);
    }

}

let projList = [];

function buildNewProjectWindow() {
    const container = document.querySelector('.createnewwindow');
    container.innerHTML = "";
    const template = document.querySelector(".newprojectform");
    const clone = template.content.cloneNode(true);

    container.appendChild(clone);
    
    addEventListeners();
}

function getProjList() {
    return projList;
}

function addEventListeners () {
    const createNewButton = document.querySelector('button.createnew');
    const createAndAddButton = document.querySelector('button.createandadd');

    createNewButton.addEventListener('click', (e) => {
        e.preventDefault();
        var projectName = document.getElementById("projectname").value;
        if (projectName != "") {    
            const newProj = new Project(projectName);
            projList.push(newProj);
            document.getElementById("projectname").value = "";
            addProjectToPage(newProj);
        }
        
    })
}

function addProjectToPage(newProj) {
    let listItem = document.createElement('li');
    listItem.textContent = newProj.getName();
    let listContainer = document.querySelector('.projectitems');
    listContainer.appendChild(listItem);
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.createBlankMainPage)();
}


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "buildNewTaskWindow": () => (/* binding */ buildNewTaskWindow)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");



class Task {
    constructor(taskName, project, dueDate) {
        this.name = taskName;
        this.project = project;
        this.dueDate = dueDate;
    }
}

function buildNewTaskWindow() {
    const container = document.querySelector('.createnewwindow');
    container.innerHTML = "";

    const template = document.querySelector(".newtaskform");
    const clone = template.content.cloneNode(true);

    //add projects to select list
    const projList = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.getProjList)();
    const select = clone.querySelector("#projects");

    let newOption = document.createElement('option');
    newOption.value = 'new';
    newOption.text = '--Create New--';
    select.appendChild(newOption);

    projList.forEach(proj => {
        let listItem = proj.getName();
        let option = document.createElement('option');
        option.value = listItem;
        option.text = listItem;

        select.appendChild(option);
    });

    container.appendChild(clone);
}

/***/ }),

/***/ "./src/createnew.svg":
/*!***************************!*\
  !*** ./src/createnew.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69e2a363c45bc6aae80a.svg";

/***/ }),

/***/ "./src/folder.svg":
/*!************************!*\
  !*** ./src/folder.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0c379f2cda1bb527784.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");



(0,_home__WEBPACK_IMPORTED_MODULE_1__.createBlankMainPage)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMscUdBQStCO0FBQzNFLDRDQUE0QywyR0FBa0M7QUFDOUUsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxpREFBaUQsNEJBQTRCLDZCQUE2Qiw2QkFBNkIsNkJBQTZCLDZCQUE2Qiw2QkFBNkIsNkJBQTZCLDZCQUE2Qiw2QkFBNkIsNkJBQTZCLEtBQUssZ0JBQWdCLHNCQUFzQixzQ0FBc0MsdUNBQXVDLEtBQUssaUJBQWlCLHNCQUFzQiw0QkFBNEIsb0NBQW9DLDRCQUE0QiwyQ0FBMkMsa0RBQWtELHdCQUF3QiwyQkFBMkIsb0JBQW9CLEtBQUssZ0JBQWdCLHVEQUF1RCwyQkFBMkIsNEJBQTRCLCtCQUErQixvQkFBb0IsS0FBSyxrQkFBa0Isc0JBQXNCLCtCQUErQix3QkFBd0IsMkJBQTJCLDJDQUEyQyxpREFBaUQsS0FBSyxtQkFBbUIsMkJBQTJCLHFCQUFxQixrREFBa0QsMkJBQTJCLGlCQUFpQiwrQkFBK0IsS0FBSyx3QkFBd0Isc0JBQXNCLHdCQUF3QiwyQkFBMkIsa0NBQWtDLGdDQUFnQyw0QkFBNEIsS0FBSyxZQUFZLHlCQUF5QiwrQkFBK0IsMEJBQTBCLEtBQUssb0JBQW9CLHNCQUFzQiwwRUFBMEUsOEJBQThCLDJCQUEyQixrQkFBa0IsMkJBQTJCLG9CQUFvQixxQkFBcUIsS0FBSyxrQkFBa0Isd0JBQXdCLEtBQUssdUNBQXVDLHNCQUFzQiwwRUFBMEUsOEJBQThCLDJCQUEyQixrQkFBa0IsMkJBQTJCLG9CQUFvQixxQkFBcUIsZ0NBQWdDLEtBQUssK0JBQStCLDBDQUEwQyxvQkFBb0IsMkNBQTJDLDJCQUEyQixpREFBaUQscUJBQXFCLDJCQUEyQixLQUFLLHVDQUF1Qyx5QkFBeUIsaUJBQWlCLGtCQUFrQixLQUFLLHFDQUFxQyx3QkFBd0IsS0FBSywwQkFBMEIsc0JBQXNCLCtCQUErQixnQ0FBZ0Msb0JBQW9CLG9CQUFvQiwyQkFBMkIsMkNBQTJDLDJCQUEyQixtREFBbUQsMkNBQTJDLHNDQUFzQyw0QkFBNEIsc0JBQXNCLEtBQUsseUJBQXlCLDhCQUE4QixnQ0FBZ0MsS0FBSyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsaUNBQWlDLDRCQUE0Qiw2QkFBNkIsNkJBQTZCLDZCQUE2Qiw2QkFBNkIsNkJBQTZCLDZCQUE2Qiw2QkFBNkIsNkJBQTZCLDZCQUE2QixLQUFLLGdCQUFnQixzQkFBc0Isc0NBQXNDLHVDQUF1QyxLQUFLLGlCQUFpQixzQkFBc0IsNEJBQTRCLG9DQUFvQyw0QkFBNEIsMkNBQTJDLGtEQUFrRCx3QkFBd0IsMkJBQTJCLG9CQUFvQixLQUFLLGdCQUFnQix1REFBdUQsMkJBQTJCLDRCQUE0QiwrQkFBK0Isb0JBQW9CLEtBQUssa0JBQWtCLHNCQUFzQiwrQkFBK0Isd0JBQXdCLDJCQUEyQiwyQ0FBMkMsaURBQWlELEtBQUssbUJBQW1CLDJCQUEyQixxQkFBcUIsa0RBQWtELDJCQUEyQixpQkFBaUIsK0JBQStCLEtBQUssd0JBQXdCLHNCQUFzQix3QkFBd0IsMkJBQTJCLGtDQUFrQyxnQ0FBZ0MsNEJBQTRCLEtBQUssWUFBWSx5QkFBeUIsK0JBQStCLDBCQUEwQixLQUFLLG9CQUFvQixzQkFBc0IsOENBQThDLDhCQUE4QiwyQkFBMkIsa0JBQWtCLDJCQUEyQixvQkFBb0IscUJBQXFCLEtBQUssa0JBQWtCLHdCQUF3QixLQUFLLHVDQUF1QyxzQkFBc0IsaURBQWlELDhCQUE4QiwyQkFBMkIsa0JBQWtCLDJCQUEyQixvQkFBb0IscUJBQXFCLGdDQUFnQyxLQUFLLCtCQUErQiwwQ0FBMEMsb0JBQW9CLDJDQUEyQywyQkFBMkIsaURBQWlELHFCQUFxQiwyQkFBMkIsS0FBSyx1Q0FBdUMseUJBQXlCLGlCQUFpQixrQkFBa0IsS0FBSyxxQ0FBcUMsd0JBQXdCLEtBQUssMEJBQTBCLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLG9CQUFvQixvQkFBb0IsMkJBQTJCLDJDQUEyQywyQkFBMkIsbURBQW1ELDJDQUEyQyxzQ0FBc0MsNEJBQTRCLHNCQUFzQixLQUFLLHlCQUF5Qiw4QkFBOEIsZ0NBQWdDLEtBQUssbUJBQW1CO0FBQ3puUDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1oxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZrRDtBQUNFO0FBQ3BEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0RBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0REFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEQ2QztBQUM3QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDBEQUFtQjtBQUN2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRHFCO0FBQ3NCO0FBQzNDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0RBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0E4QjtBQUNlO0FBQzdDO0FBQ0EsMERBQW1CO0FBQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9sZGVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vY3JlYXRlbmV3LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIC0tY29sb3ItNTA6ICNmMGZkZmE7XFxyXFxuICAgIC0tY29sb3ItMTAwOiAjY2NmYmYxO1xcclxcbiAgICAtLWNvbG9yLTIwMDogIzk5ZjZlNDtcXHJcXG4gICAgLS1jb2xvci0zMDA6ICM1ZWVhZDQ7XFxyXFxuICAgIC0tY29sb3ItNDAwOiAjMmRkNGJmO1xcclxcbiAgICAtLWNvbG9yLTUwMDogIzE0YjhhNjtcXHJcXG4gICAgLS1jb2xvci02MDA6ICMwZDk0ODg7XFxyXFxuICAgIC0tY29sb3ItNzAwOiAjMGY3NjZlO1xcclxcbiAgICAtLWNvbG9yLTgwMDogIzExNWU1OTtcXHJcXG4gICAgLS1jb2xvci05MDA6ICMxMzRlNGE7XFxyXFxufVxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1dmggODV2aDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci05MDApO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tY29sb3ItMzAwKTtcXHJcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci01MCk7XFxyXFxuICAgIG1hcmdpbjogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci03MDApO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB2YXIoLS1jb2xvci0zMDApO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICAgIG1hcmdpbjogLjVlbTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWNvbG9yLTUwMCk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiA1cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci01MCk7XFxyXFxufVxcclxcblxcclxcbi5ibGFua2hvbWVwYWdlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjc2NmU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci01MCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbn1cXHJcXG5cXHJcXG5saTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IC4zZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogLjRlbTtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxubGk6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGVuZXd3aW5kb3cgc3Bhbjo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IC4zZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogLjRlbTtcXHJcXG4gICAgd2lkdGg6IDM4cHg7XFxyXFxuICAgIGhlaWdodDogMzhweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLTkwMCk7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGVuZXd3aW5kb3cgc3BhbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTUwKTtcXHJcXG4gICAgaGVpZ2h0OiAyZW07XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLTkwMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAycHggdmFyKC0tY29sb3ItOTAwKTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGVuZXd3aW5kb3cgc3Bhbi5jbGlja2VkIHtcXHJcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgdG9wOiAzcHg7XFxyXFxuICAgIGxlZnQ6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZW5ld3dpbmRvdyBzcGFuOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlbmV3d2luZG93IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLTkwMCk7XFxyXFxuICAgIGhlaWdodDogOGVtO1xcclxcbiAgICB3aWR0aDogMTVlbTtcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci05MDApO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA4cHggdmFyKC0tY29sb3ItOTAwKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNTAwKTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWtlbmV3cHJvamVjdCB7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyx5Q0FBeUM7SUFDekMsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseURBQXFDO0lBQ3JDLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseURBQXdDO0lBQ3hDLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsMENBQTBDO0lBQzFDLGtDQUFrQztJQUNsQyw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1jb2xvci01MDogI2YwZmRmYTtcXHJcXG4gICAgLS1jb2xvci0xMDA6ICNjY2ZiZjE7XFxyXFxuICAgIC0tY29sb3ItMjAwOiAjOTlmNmU0O1xcclxcbiAgICAtLWNvbG9yLTMwMDogIzVlZWFkNDtcXHJcXG4gICAgLS1jb2xvci00MDA6ICMyZGQ0YmY7XFxyXFxuICAgIC0tY29sb3ItNTAwOiAjMTRiOGE2O1xcclxcbiAgICAtLWNvbG9yLTYwMDogIzBkOTQ4ODtcXHJcXG4gICAgLS1jb2xvci03MDA6ICMwZjc2NmU7XFxyXFxuICAgIC0tY29sb3ItODAwOiAjMTE1ZTU5O1xcclxcbiAgICAtLWNvbG9yLTkwMDogIzEzNGU0YTtcXHJcXG59XFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTV2aCA4NXZoO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTkwMCk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1jb2xvci0zMDApO1xcclxcbiAgICBncmlkLXJvdzogMSAvIDI7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLTUwKTtcXHJcXG4gICAgbWFyZ2luOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLTcwMCk7XFxyXFxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHZhcigtLWNvbG9yLTMwMCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gICAgbWFyZ2luOiAuNWVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tY29sb3ItNTAwKTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDVweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLTUwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJsYW5raG9tZXBhZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBncmlkLXJvdzogMiAvIDM7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmNzY2ZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLTUwKTtcXHJcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxyXFxufVxcclxcblxcclxcbmxpOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ZvbGRlci5zdmcnKTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogLjNlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAuNGVtO1xcclxcbiAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5saTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZW5ld3dpbmRvdyBzcGFuOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2NyZWF0ZW5ldy5zdmcnKTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogLjNlbTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAuNGVtO1xcclxcbiAgICB3aWR0aDogMzhweDtcXHJcXG4gICAgaGVpZ2h0OiAzOHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItOTAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZW5ld3dpbmRvdyBzcGFuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItNTApO1xcclxcbiAgICBoZWlnaHQ6IDJlbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItOTAwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDJweCB2YXIoLS1jb2xvci05MDApO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0ZW5ld3dpbmRvdyBzcGFuLmNsaWNrZWQge1xcclxcbiAgICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgICB0b3A6IDNweDtcXHJcXG4gICAgbGVmdDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uY3JlYXRlbmV3d2luZG93IHNwYW46aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jcmVhdGVuZXd3aW5kb3cge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItOTAwKTtcXHJcXG4gICAgaGVpZ2h0OiA4ZW07XFxyXFxuICAgIHdpZHRoOiAxNWVtO1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLTkwMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDhweCB2YXIoLS1jb2xvci05MDApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci01MDApO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1ha2VuZXdwcm9qZWN0IHtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGJ1aWxkTmV3UHJvamVjdFdpbmRvdyB9IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IHsgVGFzaywgYnVpbGROZXdUYXNrV2luZG93fSBmcm9tIFwiLi90YXNrLmpzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQmxhbmtNYWluUGFnZSgpIHtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxhbmtob21lcGFnZScpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsYW5raG9tZXBhZ2UnKS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgYmxhbmtNYWluUGFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmxhbmtNYWluUGFnZURpdi5jbGFzc0xpc3QuYWRkKCdibGFua2hvbWVwYWdlJyk7XHJcblxyXG4gICAgY29uc3QgY3JlYXRlTmV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjcmVhdGVOZXcuY2xhc3NMaXN0LmFkZCgnY3JlYXRlbmV3d2luZG93Jyk7XHJcblxyXG4gICAgY29uc3QgbmV3UHJvalNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBuZXdQcm9qU3Bhbi5jbGFzc0xpc3QuYWRkKCduZXdwcm9qZWN0Jyk7XHJcbiAgICBuZXdQcm9qU3Bhbi50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XHJcblxyXG4gICAgY29uc3QgbmV3VGFza1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBuZXdUYXNrU3Bhbi5jbGFzc0xpc3QuYWRkKCduZXd0YXNrJyk7XHJcbiAgICBuZXdUYXNrU3Bhbi50ZXh0Q29udGVudCA9ICdOZXcgVGFzayc7XHJcblxyXG4gICAgY3JlYXRlTmV3LmFwcGVuZENoaWxkKG5ld1Byb2pTcGFuKTtcclxuICAgIGNyZWF0ZU5ldy5hcHBlbmRDaGlsZChuZXdUYXNrU3Bhbik7XHJcblxyXG4gICAgYmxhbmtNYWluUGFnZURpdi5hcHBlbmRDaGlsZChjcmVhdGVOZXcpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJsYW5rTWFpblBhZ2VEaXYpO1xyXG4gICAgYWRkTmV3QnV0dG9uRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE5ld0J1dHRvbkV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgbmV3UHJvak9yVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jcmVhdGVuZXd3aW5kb3cgc3BhbicpO1xyXG4gICAgbmV3UHJvak9yVGFzay5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbGlja2VkJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJyk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZS50YXJnZXQuY2xhc3NMaXN0WzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibmV3cHJvamVjdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGJ1aWxkTmV3UHJvamVjdFdpbmRvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJuZXd0YXNrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYnVpbGROZXdUYXNrV2luZG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufSIsImltcG9ydCB7IGNyZWF0ZUJsYW5rTWFpblBhZ2UgfSBmcm9tICcuL2hvbWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IocHJvak5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBwcm9qTmFtZTtcclxuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gW107XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKHRhc2spIHtcclxuICAgICAgICB0aGlzLnRhc2tMaXN0LnB1c2godGFzayk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5sZXQgcHJvakxpc3QgPSBbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZE5ld1Byb2plY3RXaW5kb3coKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlbmV3d2luZG93Jyk7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdwcm9qZWN0Zm9ybVwiKTtcclxuICAgIGNvbnN0IGNsb25lID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNsb25lKTtcclxuICAgIFxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2pMaXN0KCkge1xyXG4gICAgcmV0dXJuIHByb2pMaXN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycyAoKSB7XHJcbiAgICBjb25zdCBjcmVhdGVOZXdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY3JlYXRlbmV3Jyk7XHJcbiAgICBjb25zdCBjcmVhdGVBbmRBZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uY3JlYXRlYW5kYWRkJyk7XHJcblxyXG4gICAgY3JlYXRlTmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0bmFtZVwiKS52YWx1ZTtcclxuICAgICAgICBpZiAocHJvamVjdE5hbWUgIT0gXCJcIikgeyAgICBcclxuICAgICAgICAgICAgY29uc3QgbmV3UHJvaiA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgICAgICAgICAgcHJvakxpc3QucHVzaChuZXdQcm9qKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0bmFtZVwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGFkZFByb2plY3RUb1BhZ2UobmV3UHJvaik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdFRvUGFnZShuZXdQcm9qKSB7XHJcbiAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBuZXdQcm9qLmdldE5hbWUoKTtcclxuICAgIGxldCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RpdGVtcycpO1xyXG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XHJcbiAgICBjcmVhdGVCbGFua01haW5QYWdlKCk7XHJcbn1cclxuIiwiaW1wb3J0IFwiLi9wcm9qZWN0LmpzXCJcclxuaW1wb3J0IHsgZ2V0UHJvakxpc3QgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXNrTmFtZSwgcHJvamVjdCwgZHVlRGF0ZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IHRhc2tOYW1lO1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTmV3VGFza1dpbmRvdygpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVuZXd3aW5kb3cnKTtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXd0YXNrZm9ybVwiKTtcclxuICAgIGNvbnN0IGNsb25lID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gICAgLy9hZGQgcHJvamVjdHMgdG8gc2VsZWN0IGxpc3RcclxuICAgIGNvbnN0IHByb2pMaXN0ID0gZ2V0UHJvakxpc3QoKTtcclxuICAgIGNvbnN0IHNlbGVjdCA9IGNsb25lLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XHJcblxyXG4gICAgbGV0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgbmV3T3B0aW9uLnZhbHVlID0gJ25ldyc7XHJcbiAgICBuZXdPcHRpb24udGV4dCA9ICctLUNyZWF0ZSBOZXctLSc7XHJcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQobmV3T3B0aW9uKTtcclxuXHJcbiAgICBwcm9qTGlzdC5mb3JFYWNoKHByb2ogPT4ge1xyXG4gICAgICAgIGxldCBsaXN0SXRlbSA9IHByb2ouZ2V0TmFtZSgpO1xyXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBsaXN0SXRlbTtcclxuICAgICAgICBvcHRpb24udGV4dCA9IGxpc3RJdGVtO1xyXG5cclxuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9uZSk7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVCbGFua01haW5QYWdlIH0gZnJvbSAnLi9ob21lJztcclxuXHJcbmNyZWF0ZUJsYW5rTWFpblBhZ2UoKTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==