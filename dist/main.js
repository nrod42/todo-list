/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Ubuntu-Regular.ttf */ "./src/fonts/Ubuntu-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/expand_icon.svg */ "./src/img/expand_icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/collapse_icon.svg */ "./src/img/collapse_icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Ubuntu-font';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Ubuntu-font', Arial, Helvetica, sans-serif;\n}\n\n:root {\n    --icon-width: 30px;\n}\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n    position: relative;\n}\n\n.mainWrapper {\n    min-height: 100%;\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr 6fr;\n    grid-template-rows: auto 1fr auto;\n}\n\n.nav {\n    margin: 5px;\n    grid-column: span 2;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.nav ul {\n    list-style-type: none;\n    display: flex;\n    align-items: center;\n}\n\n.nav li {\n    display: inline;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n}\n\n.icons {\n    width: var(--icon-width);\n    height: auto;\n    cursor: pointer;\n    margin: 0 5px;\n    transition: transform 0.2s ease;\n}\n\n.icons:active {\n    transform: scaleX(1.5) scaleY(1.5);\n}\n\n.profileIcon {\n    width: 45px;\n}\n\n.sidebar {\n    background-color: gainsboro;\n    display: flex;\n    flex-direction: column;\n}\n\n.sidebarBtns, .sidebarProjectBtns{\n    display: flex;\n    flex-direction: column;\n    margin: 10px;\n}\n\n.sidebarBtns button, .sidebarProjectBtns button {\n    padding: 10px;\n    cursor: pointer;\n    border: none;\n}\n\n.sidebarBtns button:hover, .sidebarProjectBtns button:hover {\n    filter: brightness(85%);\n}\n\n.sidebarTaskTitle, .sidebarProjectTitle {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\n\n.sidebar h3 {\n    padding-left: 10px;\n}\n\n.newTaskBtn, .newProjectBtn {\n    cursor: pointer;\n    width: calc(--icon-width * 1.2);\n    height: auto;\n    border: none;\n    color: white;\n    padding: 5px;\n}\n\n.currentProject {\n    background-color: whitesmoke;\n    padding: 10px;\n}\n\nfooter {\n    grid-column: span 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#newTaskForm, #editTaskForm, #newProjectForm, #selectProjectForm {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    top: 50%;\n    left: 50%;\n    width: auto;\n    height: auto;\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    opacity: 0;\n    visibility: hidden;\n    overflow: hidden;\n    transition: opacity 0.2s ease-in;\n}\n\n.priorities {\n    display: flex;\n    flex-direction: column;\n}\n\n.cardBtn {\n    color: black;\n    cursor: pointer;\n    width: 100%;\n    padding: 10px;\n    border: none;\n    text-align: left;\n    outline: none;\n    font-size: 20px;\n    font-weight: bold;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.activeCard, .cardBtn:hover {\n    filter: brightness(85%);\n}\n\n.cardBtnContent {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    \n}\n\n.cardBtnContent h3 {\n    padding-right: 10px;\n}\n\n.cardBtnContent p {\n\n    font-size: 1rem;\n}\n\n.cardActionBtns {\n    margin-left: auto;\n}\n\n.cardContent {\n    padding: 0 20px;\n    display: none;\n    flex-direction: column;\n    overflow: hidden;\n    background-color: lightgrey;\n    max-height: 0;\n    transition: max-height 0.2s ease-out;\n}\n\n.cardContent p {\n    padding: 15px 0;\n}\n\n.cardBtn:after {\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    font-size: 13px;\n    color: black;\n    float: right;\n    filter: brightness(85%);\n}\n\n.activeCard:after {\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    color: black;\n}\n\n.actionBtn {\n    width: var(--icon-width);\n    height: auto;\n    cursor: pointer;\n    margin: 0 5px;\n    transition: transform 0.2s ease;\n}\n\n.actionBtn:active {\n    transform: scaleX(1.5) scaleY(1.5);\n}\n\n.highPriority {\n    background-color: crimson;\n    color: white;\n}\n\n.mediumPriority {\n    background-color: gold;\n}\n\n.lowPriority {\n    background-color: darkblue;\n    color: white;\n}\n\n.nonePriority {\n    background-color: #bbb;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,+DAAyD;AAC7D;;AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,wDAAwD;AAC5D;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,iCAAiC;AACrC;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,eAAe;IACf,aAAa;IACb,+BAA+B;AACnC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,2BAA2B;IAC3B,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,+BAA+B;IAC/B,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,4BAA4B;IAC5B,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,SAAS;IACT,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,UAAU;IACV,kBAAkB;IAClB,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,WAAW;IACX,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,WAAW;IACX,aAAa;IACb,eAAe;IACf,mBAAmB;;AAEvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;;IAEI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,2BAA2B;IAC3B,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,gDAAmC;IACnC,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,gDAAqC;IACrC,YAAY;AAChB;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,eAAe;IACf,aAAa;IACb,+BAA+B;AACnC;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,0BAA0B;IAC1B,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":["@font-face {\n    font-family: 'Ubuntu-font';\n    src: url('./fonts/Ubuntu-Regular.ttf') format('truetype');\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Ubuntu-font', Arial, Helvetica, sans-serif;\n}\n\n:root {\n    --icon-width: 30px;\n}\n\nhtml, body {\n    width: 100%;\n    height: 100%;\n    position: relative;\n}\n\n.mainWrapper {\n    min-height: 100%;\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr 6fr;\n    grid-template-rows: auto 1fr auto;\n}\n\n.nav {\n    margin: 5px;\n    grid-column: span 2;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.nav ul {\n    list-style-type: none;\n    display: flex;\n    align-items: center;\n}\n\n.nav li {\n    display: inline;\n}\n\n.logo {\n    display: flex;\n    align-items: center;\n}\n\n.icons {\n    width: var(--icon-width);\n    height: auto;\n    cursor: pointer;\n    margin: 0 5px;\n    transition: transform 0.2s ease;\n}\n\n.icons:active {\n    transform: scaleX(1.5) scaleY(1.5);\n}\n\n.profileIcon {\n    width: 45px;\n}\n\n.sidebar {\n    background-color: gainsboro;\n    display: flex;\n    flex-direction: column;\n}\n\n.sidebarBtns, .sidebarProjectBtns{\n    display: flex;\n    flex-direction: column;\n    margin: 10px;\n}\n\n.sidebarBtns button, .sidebarProjectBtns button {\n    padding: 10px;\n    cursor: pointer;\n    border: none;\n}\n\n.sidebarBtns button:hover, .sidebarProjectBtns button:hover {\n    filter: brightness(85%);\n}\n\n.sidebarTaskTitle, .sidebarProjectTitle {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\n\n.sidebar h3 {\n    padding-left: 10px;\n}\n\n.newTaskBtn, .newProjectBtn {\n    cursor: pointer;\n    width: calc(--icon-width * 1.2);\n    height: auto;\n    border: none;\n    color: white;\n    padding: 5px;\n}\n\n.currentProject {\n    background-color: whitesmoke;\n    padding: 10px;\n}\n\nfooter {\n    grid-column: span 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#newTaskForm, #editTaskForm, #newProjectForm, #selectProjectForm {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    top: 50%;\n    left: 50%;\n    width: auto;\n    height: auto;\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    opacity: 0;\n    visibility: hidden;\n    overflow: hidden;\n    transition: opacity 0.2s ease-in;\n}\n\n.priorities {\n    display: flex;\n    flex-direction: column;\n}\n\n.cardBtn {\n    color: black;\n    cursor: pointer;\n    width: 100%;\n    padding: 10px;\n    border: none;\n    text-align: left;\n    outline: none;\n    font-size: 20px;\n    font-weight: bold;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.activeCard, .cardBtn:hover {\n    filter: brightness(85%);\n}\n\n.cardBtnContent {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    \n}\n\n.cardBtnContent h3 {\n    padding-right: 10px;\n}\n\n.cardBtnContent p {\n\n    font-size: 1rem;\n}\n\n.cardActionBtns {\n    margin-left: auto;\n}\n\n.cardContent {\n    padding: 0 20px;\n    display: none;\n    flex-direction: column;\n    overflow: hidden;\n    background-color: lightgrey;\n    max-height: 0;\n    transition: max-height 0.2s ease-out;\n}\n\n.cardContent p {\n    padding: 15px 0;\n}\n\n.cardBtn:after {\n    content: url(./img/expand_icon.svg);\n    font-size: 13px;\n    color: black;\n    float: right;\n    filter: brightness(85%);\n}\n\n.activeCard:after {\n    content: url(./img/collapse_icon.svg);\n    color: black;\n}\n\n.actionBtn {\n    width: var(--icon-width);\n    height: auto;\n    cursor: pointer;\n    margin: 0 5px;\n    transition: transform 0.2s ease;\n}\n\n.actionBtn:active {\n    transform: scaleX(1.5) scaleY(1.5);\n}\n\n.highPriority {\n    background-color: crimson;\n    color: white;\n}\n\n.mediumPriority {\n    background-color: gold;\n}\n\n.lowPriority {\n    background-color: darkblue;\n    color: white;\n}\n\n.nonePriority {\n    background-color: #bbb;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _img_completed_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/completed_icon.svg */ "./src/img/completed_icon.svg");
/* harmony import */ var _img_edit_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/edit_icon.svg */ "./src/img/edit_icon.svg");
/* harmony import */ var _img_delete_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/delete_icon.svg */ "./src/img/delete_icon.svg");
/* harmony import */ var _img_addToProject_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/addToProject_icon.svg */ "./src/img/addToProject_icon.svg");






const createCard = (project, task) => {
  const card = document.createElement('div');
  const cardBtn = document.createElement('div');
  const cardBtnContent = document.createElement('div');
  const cardActionBtns = document.createElement('div');
  const cardContent = document.createElement('div');
  const taskName = document.createElement('h3');
  const taskInfo = document.createElement('p');
  const taskDueDate = document.createElement('p');
  const editTaskForm = document.getElementById('editTaskForm');
  const selectProjectForm = document.getElementById('selectProjectForm');
  const completeBtn = new Image();
  completeBtn.src = _img_completed_icon_svg__WEBPACK_IMPORTED_MODULE_1__;
  const editBtn = new Image();
  editBtn.src = _img_edit_icon_svg__WEBPACK_IMPORTED_MODULE_2__;
  const delBtn = new Image();
  delBtn.src = _img_delete_icon_svg__WEBPACK_IMPORTED_MODULE_3__;
  const addToProjectBtn = new Image();
  addToProjectBtn.src = _img_addToProject_icon_svg__WEBPACK_IMPORTED_MODULE_4__;

  card.classList.add('card');
  cardBtn.classList.add('cardBtn');
  cardBtnContent.classList.add('cardBtnContent');
  cardActionBtns.classList.add('cardActionBtns');
  cardContent.classList.add('cardContent');
  completeBtn.classList.add('actionBtn');
  editBtn.classList.add('actionBtn');
  delBtn.classList.add('actionBtn');
  addToProjectBtn.classList.add('actionBtn');
  card.setAttribute('data-id', task.getId());

  taskName.textContent = task.getName();
  taskDueDate.textContent = task.getDate();
  taskInfo.textContent = task.getInfo();
  editBtn.textContent = 'Edit';
  delBtn.textContent = 'Delete';
  addToProjectBtn.textContent = 'Add To Project';
  completeBtn.textContent = 'Complete';

  // Left Side of Card Button
  cardBtnContent.appendChild(taskName);
  cardBtnContent.appendChild(taskDueDate);

  // Right Side of Card Button
  cardActionBtns.appendChild(completeBtn);
  cardActionBtns.appendChild(editBtn);
  cardActionBtns.appendChild(delBtn);
  cardActionBtns.appendChild(addToProjectBtn);

  cardBtn.appendChild(cardBtnContent);
  cardContent.appendChild(taskInfo);
  card.appendChild(cardBtn);
  card.appendChild(cardContent);
  cardBtnContent.appendChild(cardActionBtns);

  // Collapsible Card Logic
  cardBtn.addEventListener('click', () => {
    cardBtn.classList.toggle('activeCard');
    const cardContent = cardBtn.nextElementSibling;
    if (cardContent.style.display === 'block') {
      cardContent.style.display = 'none';
      cardContent.style.maxHeight = '0';
    } else {
      cardContent.style.display = 'block';
      cardContent.style.maxHeight = `${cardContent.scrollHeight}px`;
    }
  });

  // Gives each card styling based on priority level
  switch (task.getPriority()) {
    case 'High':
      cardBtn.classList.add('highPriority');
      break;
    case 'Medium':
      cardBtn.classList.add('mediumPriority');
      break;
    case 'Low':
      cardBtn.classList.add('lowPriority');
      break;
    default:
      cardBtn.classList.add('nonePriority');
  }

  delBtn.addEventListener('click', () => {
    project.delTask(task.getName());
    (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(project.getName(), project, project.getTasks()); //* ***Name should should not be inbox. it should be the name of the project
  });

  addToProjectBtn.addEventListener('click', () => {
    selectProjectForm.style.opacity = '1';
    selectProjectForm.style.visibility = 'visible';
    selectProjectForm.setAttribute('data-id', card.getAttribute('data-id'));
  });

  completeBtn.addEventListener('click', () => {
    task.switchStatus();
    (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)('Inbox', project, project.getTasks()); //* ***Name should should not be inbox. it should be the name of the project
  });

  editBtn.addEventListener('click', () => {
    editTaskForm.style.opacity = '1';
    editTaskForm.style.visibility = 'visible';
    editTaskForm.taskName.value = task.getName();
    editTaskForm.taskInfo.value = task.getInfo();
    editTaskForm.taskDueDate.value = task.getDate();
    editTaskForm.taskPriority.value = task.getPriority();
    editTaskForm.setAttribute('data-id', card.getAttribute('data-id'));
  });

  return card;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCard);


/***/ }),

/***/ "./src/formatCurrentDate.js":
/*!**********************************!*\
  !*** ./src/formatCurrentDate.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const formatCurrentDate = () => {
  const currentDate = new Date();
  const dd = String(currentDate.getDate()).padStart(2, '0');
  const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
  const yyyy = currentDate.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatCurrentDate);


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _formatCurrentDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatCurrentDate */ "./src/formatCurrentDate.js");


const project = (name) => ({
  name,
  id: Math.floor(Math.random() * 200) + 1,
  tasks: [],

  setName(newName) {
    this.name = newName;
  },

  getName() {
    return this.name;
  },

  getId() {
    return this.id;
  },

  setTasks(newTasks) {
    this.tasks = newTasks;
  },

  getTasks() {
    const incompletedTasks = this.tasks.filter((task) => task.getStatus() === 'incomplete');
    return incompletedTasks;
  },

  getTask(taskName) {
    return this.tasks.find((task) => task.getName() === taskName);
  },

  addTask(newTask) {
    if (this.tasks.find((task) => task.getName() === newTask.name)) return;
    this.tasks.push(newTask);
  },

  delTask(taskName) {
    this.tasks = this.tasks.filter((task) => task.getName() !== taskName);
  },

  getTodayTasks() {
    const currentDate = (0,_formatCurrentDate__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const incompletedTasks = this.tasks.filter((task) => task.getStatus() === 'incomplete');
    return incompletedTasks.filter((task) => task.getDate() === currentDate);
  },

  getUpcomingTasks() {
    const incompletedTasks = this.tasks.filter((task) => task.getStatus() === 'incomplete');
    return incompletedTasks.sort((a, b) => new Date(a.getDate()) - new Date(b.getDate()));
  },

  getCompletedTasks() {
    return this.tasks.filter((task) => task.getStatus() !== 'incomplete');
  },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);


/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectBtn": () => (/* binding */ projectBtn),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/card.js");


const projectBtn = (newProject) => {
  const newProjectBtn = document.createElement('button');
  newProjectBtn.classList.add('projectBtn');
  newProjectBtn.textContent = newProject.getName();

  return newProjectBtn;
};

// Generates tab page
const render = (name, project, tasks) => {
  const currentProject = document.querySelector('.currentProject');
  currentProject.setAttribute('data-id', project.getId());
  while (currentProject.firstChild) {
    currentProject.firstChild.remove();
  }
  // currentProject.classList.toggle() change from rander = (name, taks) to render (project, tasks).
  // this way we have project.getName which we can feed to toggle class.
  // Then, we can use class name in index to immidiately render
  // the page depending on what current page is displayed
  // If we're on todays tasks screen and we add a new task thats due today,
  // it should refresh immidiately

  const heading = document.createElement('h1');
  heading.textContent = name;
  currentProject.appendChild(heading);

  tasks.forEach((task) => {
    currentProject.appendChild((0,_card__WEBPACK_IMPORTED_MODULE_0__["default"])(project, task));
  });
};




/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const task = (name, info, dueDate, priority) => ({
  name,
  info,
  dueDate,
  priority,
  status: 'incomplete',
  id: Math.floor(Math.random() * 100) + 1,

  setName(newName) {
    this.name = newName;
  },

  getName() {
    return this.name;
  },

  setInfo(newInfo) {
    this.info = newInfo;
  },

  getInfo() {
    return this.info;
  },

  setDate(newDate) {
    this.dueDate = newDate;
  },

  getDate() {
    return this.dueDate;
  },

  setPriority(newPriority) {
    this.priority = newPriority;
  },

  getPriority() {
    return this.priority;
  },

  getId() {
    return this.id;
  },

  getStatus() {
    return this.status;
  },

  switchStatus() {
    this.status === 'incomplete' ? (this.status = 'complete') : (this.status = 'incomplete');
  },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (task);


/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


const todo = () => ({
  projects: [(0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])('Inbox')],

  setProjects(project) {
    this.projects = project;
  },

  getProjects() {
    return this.projects;
  },

  getProject(projectName) {
    return this.projects.find((project) => project.getName() === projectName);
  },

  addProject(newProject) {
    if (this.projects.find((project) => project.getName() === newProject.getName())) {
      return;
    }
    this.projects.push(newProject);
  },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);


/***/ }),

/***/ "./src/fonts/Ubuntu-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Ubuntu-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cbb1b79a23478cc89ad.ttf";

/***/ }),

/***/ "./src/img/addToProject_icon.svg":
/*!***************************************!*\
  !*** ./src/img/addToProject_icon.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a7bccde8ffd5ffcc46a.svg";

/***/ }),

/***/ "./src/img/collapse_icon.svg":
/*!***********************************!*\
  !*** ./src/img/collapse_icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e2c3cc6c7d3dd5d2cd51.svg";

/***/ }),

/***/ "./src/img/completed_icon.svg":
/*!************************************!*\
  !*** ./src/img/completed_icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "983207f640fb42a9d859.svg";

/***/ }),

/***/ "./src/img/delete_icon.svg":
/*!*********************************!*\
  !*** ./src/img/delete_icon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9791eda45730d66280b3.svg";

/***/ }),

/***/ "./src/img/edit_icon.svg":
/*!*******************************!*\
  !*** ./src/img/edit_icon.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "618f2ea846e5766ecb49.svg";

/***/ }),

/***/ "./src/img/expand_icon.svg":
/*!*********************************!*\
  !*** ./src/img/expand_icon.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7dd0cb697b666a745cd5.svg";

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
/******/ 			"main": 0
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
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _formatCurrentDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatCurrentDate */ "./src/formatCurrentDate.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");







const newTaskForm = document.getElementById('newTaskForm');
const newTaskBtn = document.querySelector('.newTaskBtn');
const newProjectForm = document.getElementById('newProjectForm');
const newProjectBtn = document.querySelector('.newProjectBtn');
const editTaskForm = document.getElementById('editTaskForm');
const selectProjectForm = document.getElementById('selectProjectForm');
const inboxBtn = document.querySelector('.inboxBtn');
const todayBtn = document.querySelector('.todayBtn');
const upcomingBtn = document.querySelector('.upcomingBtn');
const completedBtn = document.querySelector('.completedBtn');
const sidebarProjectBtns = document.querySelector('.sidebarProjectBtns');
const currentProject = document.querySelector('.currentProject');

const todoList = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])();

// Creates Default Task to display
todoList
  .getProject('Inbox')
  .addTask((0,_task__WEBPACK_IMPORTED_MODULE_2__["default"])('First Task', 'This is my first task!', (0,_formatCurrentDate__WEBPACK_IMPORTED_MODULE_4__["default"])(), 'High'));
(0,_render__WEBPACK_IMPORTED_MODULE_3__.render)('Inbox', todoList.getProject('Inbox'), todoList.getProject('Inbox').getTasks());

newTaskBtn.addEventListener('click', () => {
  newTaskForm.style.opacity = '1';
  newTaskForm.style.visibility = 'visible';
});

newTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTask = (0,_task__WEBPACK_IMPORTED_MODULE_2__["default"])(
    newTaskForm.taskName.value,
    newTaskForm.taskInfo.value,
    newTaskForm.taskDueDate.value,
    newTaskForm.taskPriority.value,
  );

  todoList.getProject('Inbox').addTask(newTask);
  (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)('Inbox', todoList.getProject('Inbox'), todoList.getProject('Inbox').getTasks());

  newTaskForm.style.opacity = '0';
  newTaskForm.style.visibility = 'hidden';
  newTaskForm.reset();
});

newProjectBtn.addEventListener('click', () => {
  newProjectForm.style.opacity = '1';
  newProjectForm.style.visibility = 'visible';
});

newProjectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = newProjectForm.projectName.value;
  const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])(name);
  todoList.addProject(newProject);
  const newProjectBtn = (0,_render__WEBPACK_IMPORTED_MODULE_3__.projectBtn)(newProject);
  newProjectBtn.addEventListener('click', () => {
    (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)(name, todoList.getProject(name), todoList.getProject(name).getTasks());
  });

  // Adds new projects to the add to project form
  const projectOption = document.createElement('option');
  projectOption.textContent = name;
  selectProjectForm.querySelector('select').appendChild(projectOption);

  sidebarProjectBtns.appendChild(newProjectBtn);

  newProjectForm.reset();
  newProjectForm.style.opacity = '0';
  newProjectForm.style.visibility = 'hidden';
});

inboxBtn.addEventListener('click', () =>
  (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)('Inbox', todoList.getProject('Inbox'), todoList.getProject('Inbox').getTasks()),
);
todayBtn.addEventListener('click', () =>
  (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)(
    "Today's Tasks",
    todoList.getProject('Inbox'),
    todoList.getProject('Inbox').getTodayTasks(),
  ),
);
upcomingBtn.addEventListener('click', () =>
  (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)(
    "This Week's Tasks",
    todoList.getProject('Inbox'),
    todoList.getProject('Inbox').getUpcomingTasks(),
  ),
);
completedBtn.addEventListener('click', () => {
  (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)(
    'Completed',
    todoList.getProject('Inbox'),
    todoList.getProject('Inbox').getCompletedTasks(),
  );
  // const completeBtn = document.querySelector('.currentProject button');
  // // if (completeBtn) completeBtn.textContent = 'Mark As Incomplete'
  const allBtns = Array.from(document.querySelectorAll('.currentProject img:not(:first-child)'));
  allBtns.forEach((btn) => btn.remove());
});

editTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const activeProject = todoList
    .getProjects()
    .find((project) => project.getId() === parseInt(currentProject.getAttribute('data-id'), 10));
  const editTaskFormId = editTaskForm.getAttribute('data-id');

  const editedTask = activeProject
    .getTasks()
    .find((task) => task.getId() === parseInt(editTaskFormId, 10));

  editedTask.setName(editTaskForm.taskName.value);
  editedTask.setInfo(editTaskForm.taskInfo.value);
  editedTask.setDate(editTaskForm.taskDueDate.value);
  editedTask.setPriority(editTaskForm.taskPriority.value);

  editTaskForm.style.opacity = '0';
  editTaskForm.style.visibility = 'hidden';
  (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)(activeProject.getName(), activeProject, activeProject.getTasks());
});

selectProjectForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const activeProject = todoList
    .getProjects()
    .find((project) => project.getId() === parseInt(currentProject.getAttribute('data-id'), 10));
  const selectProjectFormId = selectProjectForm.getAttribute('data-id');
  const selectedTask = activeProject
    .getTasks()
    .find((task) => task.getId() === parseInt(selectProjectFormId, 10));

  todoList.getProject(selectProjectForm.projectList.value).addTask(selectedTask);

  todoList.getProject(activeProject.getName()).delTask(selectedTask.getName());

  selectProjectForm.style.opacity = '0';
  selectProjectForm.style.visibility = 'hidden';
  (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)(activeProject.getName(), activeProject, activeProject.getTasks());
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN6RSwrQ0FBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxrQkFBa0IsaURBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsK0NBQU07O0FBRVI7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvREFBTztBQUM1QjtBQUNBLHdCQUF3QixtREFBVTtBQUNsQztBQUNBLElBQUksK0NBQU07QUFDVixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxFQUFFLCtDQUFNO0FBQ1I7QUFDQTtBQUNBLEVBQUUsK0NBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLCtDQUFNO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrQ0FBTTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsK0NBQU07QUFDUixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSwrQ0FBTTtBQUNSLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3JtYXRDdXJyZW50RGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1VidW50dS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL2V4cGFuZF9pY29uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1nL2NvbGxhcHNlX2ljb24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUtZm9udCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1LWZvbnQnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0taWNvbi13aWR0aDogMzBweDtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1haW5XcmFwcGVyIHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG59XFxuXFxuLm5hdiB7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5uYXYgdWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYgbGkge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmljb25zIHtcXG4gICAgd2lkdGg6IHZhcigtLWljb24td2lkdGgpO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAwIDVweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcXG59XFxuXFxuLmljb25zOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuNSkgc2NhbGVZKDEuNSk7XFxufVxcblxcbi5wcm9maWxlSWNvbiB7XFxuICAgIHdpZHRoOiA0NXB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNpZGViYXJCdG5zLCAuc2lkZWJhclByb2plY3RCdG5ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyQnRucyBidXR0b24sIC5zaWRlYmFyUHJvamVjdEJ0bnMgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyQnRucyBidXR0b246aG92ZXIsIC5zaWRlYmFyUHJvamVjdEJ0bnMgYnV0dG9uOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XFxufVxcblxcbi5zaWRlYmFyVGFza1RpdGxlLCAuc2lkZWJhclByb2plY3RUaXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaWRlYmFyIGgzIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ubmV3VGFza0J0biwgLm5ld1Byb2plY3RCdG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiBjYWxjKC0taWNvbi13aWR0aCAqIDEuMik7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmN1cnJlbnRQcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNuZXdUYXNrRm9ybSwgI2VkaXRUYXNrRm9ybSwgI25ld1Byb2plY3RGb3JtLCAjc2VsZWN0UHJvamVjdEZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW47XFxufVxcblxcbi5wcmlvcml0aWVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhcmRCdG4ge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWN0aXZlQ2FyZCwgLmNhcmRCdG46aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXG59XFxuXFxuLmNhcmRCdG5Db250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5jYXJkQnRuQ29udGVudCBoMyB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5jYXJkQnRuQ29udGVudCBwIHtcXG5cXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uY2FyZEFjdGlvbkJ0bnMge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmNhcmRDb250ZW50IHtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcXG59XFxuXFxuLmNhcmRDb250ZW50IHAge1xcbiAgICBwYWRkaW5nOiAxNXB4IDA7XFxufVxcblxcbi5jYXJkQnRuOmFmdGVyIHtcXG4gICAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XFxufVxcblxcbi5hY3RpdmVDYXJkOmFmdGVyIHtcXG4gICAgY29udGVudDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYWN0aW9uQnRuIHtcXG4gICAgd2lkdGg6IHZhcigtLWljb24td2lkdGgpO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAwIDVweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcXG59XFxuXFxuLmFjdGlvbkJ0bjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjUpIHNjYWxlWSgxLjUpO1xcbn1cXG5cXG4uaGlnaFByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWVkaXVtUHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcbn1cXG5cXG4ubG93UHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubm9uZVByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsK0RBQXlEO0FBQzdEOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsd0RBQXdEO0FBQzVEOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2Isb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdEQUFtQztJQUNuQyxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnREFBcUM7SUFDckMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1VidW50dS1mb250JztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvVWJ1bnR1LVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1VidW50dS1mb250JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWljb24td2lkdGg6IDMwcHg7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tYWluV3JhcHBlciB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxufVxcblxcbi5uYXYge1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubmF2IHVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2IGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pY29ucyB7XFxuICAgIHdpZHRoOiB2YXIoLS1pY29uLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMCA1cHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XFxufVxcblxcbi5pY29uczphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjUpIHNjYWxlWSgxLjUpO1xcbn1cXG5cXG4ucHJvZmlsZUljb24ge1xcbiAgICB3aWR0aDogNDVweDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaWRlYmFyQnRucywgLnNpZGViYXJQcm9qZWN0QnRuc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhckJ0bnMgYnV0dG9uLCAuc2lkZWJhclByb2plY3RCdG5zIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2lkZWJhckJ0bnMgYnV0dG9uOmhvdmVyLCAuc2lkZWJhclByb2plY3RCdG5zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbn1cXG5cXG4uc2lkZWJhclRhc2tUaXRsZSwgLnNpZGViYXJQcm9qZWN0VGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhciBoMyB7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLm5ld1Rhc2tCdG4sIC5uZXdQcm9qZWN0QnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogY2FsYygtLWljb24td2lkdGggKiAxLjIpO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5jdXJyZW50UHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jbmV3VGFza0Zvcm0sICNlZGl0VGFza0Zvcm0sICNuZXdQcm9qZWN0Rm9ybSwgI3NlbGVjdFByb2plY3RGb3JtIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluO1xcbn1cXG5cXG4ucHJpb3JpdGllcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jYXJkQnRuIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFjdGl2ZUNhcmQsIC5jYXJkQnRuOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XFxufVxcblxcbi5jYXJkQnRuQ29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4uY2FyZEJ0bkNvbnRlbnQgaDMge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uY2FyZEJ0bkNvbnRlbnQgcCB7XFxuXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmNhcmRBY3Rpb25CdG5zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5jYXJkQ29udGVudCB7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbi5jYXJkQ29udGVudCBwIHtcXG4gICAgcGFkZGluZzogMTVweCAwO1xcbn1cXG5cXG4uY2FyZEJ0bjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IHVybCguL2ltZy9leHBhbmRfaWNvbi5zdmcpO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXG59XFxuXFxuLmFjdGl2ZUNhcmQ6YWZ0ZXIge1xcbiAgICBjb250ZW50OiB1cmwoLi9pbWcvY29sbGFwc2VfaWNvbi5zdmcpO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5hY3Rpb25CdG4ge1xcbiAgICB3aWR0aDogdmFyKC0taWNvbi13aWR0aCk7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xcbn1cXG5cXG4uYWN0aW9uQnRuOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuNSkgc2NhbGVZKDEuNSk7XFxufVxcblxcbi5oaWdoUHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmltc29uO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tZWRpdW1Qcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxufVxcblxcbi5sb3dQcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ub25lUHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tICcuL3JlbmRlcic7XG5pbXBvcnQgY29tcGxldGVJY29uIGZyb20gJy4vaW1nL2NvbXBsZXRlZF9pY29uLnN2Zyc7XG5pbXBvcnQgZWRpdEljb24gZnJvbSAnLi9pbWcvZWRpdF9pY29uLnN2Zyc7XG5pbXBvcnQgZGVsSWNvbiBmcm9tICcuL2ltZy9kZWxldGVfaWNvbi5zdmcnO1xuaW1wb3J0IGFkZFRvUHJvamVjdEljb24gZnJvbSAnLi9pbWcvYWRkVG9Qcm9qZWN0X2ljb24uc3ZnJztcblxuY29uc3QgY3JlYXRlQ2FyZCA9IChwcm9qZWN0LCB0YXNrKSA9PiB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY2FyZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjYXJkQnRuQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjYXJkQWN0aW9uQnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNvbnN0IHRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUYXNrRm9ybScpO1xuICBjb25zdCBzZWxlY3RQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3RQcm9qZWN0Rm9ybScpO1xuICBjb25zdCBjb21wbGV0ZUJ0biA9IG5ldyBJbWFnZSgpO1xuICBjb21wbGV0ZUJ0bi5zcmMgPSBjb21wbGV0ZUljb247XG4gIGNvbnN0IGVkaXRCdG4gPSBuZXcgSW1hZ2UoKTtcbiAgZWRpdEJ0bi5zcmMgPSBlZGl0SWNvbjtcbiAgY29uc3QgZGVsQnRuID0gbmV3IEltYWdlKCk7XG4gIGRlbEJ0bi5zcmMgPSBkZWxJY29uO1xuICBjb25zdCBhZGRUb1Byb2plY3RCdG4gPSBuZXcgSW1hZ2UoKTtcbiAgYWRkVG9Qcm9qZWN0QnRuLnNyYyA9IGFkZFRvUHJvamVjdEljb247XG5cbiAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gIGNhcmRCdG4uY2xhc3NMaXN0LmFkZCgnY2FyZEJ0bicpO1xuICBjYXJkQnRuQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjYXJkQnRuQ29udGVudCcpO1xuICBjYXJkQWN0aW9uQnRucy5jbGFzc0xpc3QuYWRkKCdjYXJkQWN0aW9uQnRucycpO1xuICBjYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjYXJkQ29udGVudCcpO1xuICBjb21wbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdhY3Rpb25CdG4nKTtcbiAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdhY3Rpb25CdG4nKTtcbiAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGlvbkJ0bicpO1xuICBhZGRUb1Byb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aW9uQnRuJyk7XG4gIGNhcmQuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgdGFzay5nZXRJZCgpKTtcblxuICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0TmFtZSgpO1xuICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGF0ZSgpO1xuICB0YXNrSW5mby50ZXh0Q29udGVudCA9IHRhc2suZ2V0SW5mbygpO1xuICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICBkZWxCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgYWRkVG9Qcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0FkZCBUbyBQcm9qZWN0JztcbiAgY29tcGxldGVCdG4udGV4dENvbnRlbnQgPSAnQ29tcGxldGUnO1xuXG4gIC8vIExlZnQgU2lkZSBvZiBDYXJkIEJ1dHRvblxuICBjYXJkQnRuQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gIGNhcmRCdG5Db250ZW50LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcblxuICAvLyBSaWdodCBTaWRlIG9mIENhcmQgQnV0dG9uXG4gIGNhcmRBY3Rpb25CdG5zLmFwcGVuZENoaWxkKGNvbXBsZXRlQnRuKTtcbiAgY2FyZEFjdGlvbkJ0bnMuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gIGNhcmRBY3Rpb25CdG5zLmFwcGVuZENoaWxkKGRlbEJ0bik7XG4gIGNhcmRBY3Rpb25CdG5zLmFwcGVuZENoaWxkKGFkZFRvUHJvamVjdEJ0bik7XG5cbiAgY2FyZEJ0bi5hcHBlbmRDaGlsZChjYXJkQnRuQ29udGVudCk7XG4gIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKHRhc2tJbmZvKTtcbiAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQnRuKTtcbiAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQ29udGVudCk7XG4gIGNhcmRCdG5Db250ZW50LmFwcGVuZENoaWxkKGNhcmRBY3Rpb25CdG5zKTtcblxuICAvLyBDb2xsYXBzaWJsZSBDYXJkIExvZ2ljXG4gIGNhcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2FyZEJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmVDYXJkJyk7XG4gICAgY29uc3QgY2FyZENvbnRlbnQgPSBjYXJkQnRuLm5leHRFbGVtZW50U2libGluZztcbiAgICBpZiAoY2FyZENvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgY2FyZENvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGNhcmRDb250ZW50LnN0eWxlLm1heEhlaWdodCA9ICcwJztcbiAgICB9IGVsc2Uge1xuICAgICAgY2FyZENvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBjYXJkQ29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBgJHtjYXJkQ29udGVudC5zY3JvbGxIZWlnaHR9cHhgO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gR2l2ZXMgZWFjaCBjYXJkIHN0eWxpbmcgYmFzZWQgb24gcHJpb3JpdHkgbGV2ZWxcbiAgc3dpdGNoICh0YXNrLmdldFByaW9yaXR5KCkpIHtcbiAgICBjYXNlICdIaWdoJzpcbiAgICAgIGNhcmRCdG4uY2xhc3NMaXN0LmFkZCgnaGlnaFByaW9yaXR5Jyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdNZWRpdW0nOlxuICAgICAgY2FyZEJ0bi5jbGFzc0xpc3QuYWRkKCdtZWRpdW1Qcmlvcml0eScpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnTG93JzpcbiAgICAgIGNhcmRCdG4uY2xhc3NMaXN0LmFkZCgnbG93UHJpb3JpdHknKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBjYXJkQnRuLmNsYXNzTGlzdC5hZGQoJ25vbmVQcmlvcml0eScpO1xuICB9XG5cbiAgZGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByb2plY3QuZGVsVGFzayh0YXNrLmdldE5hbWUoKSk7XG4gICAgcmVuZGVyKHByb2plY3QuZ2V0TmFtZSgpLCBwcm9qZWN0LCBwcm9qZWN0LmdldFRhc2tzKCkpOyAvLyogKioqTmFtZSBzaG91bGQgc2hvdWxkIG5vdCBiZSBpbmJveC4gaXQgc2hvdWxkIGJlIHRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0XG4gIH0pO1xuXG4gIGFkZFRvUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzZWxlY3RQcm9qZWN0Rm9ybS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgIHNlbGVjdFByb2plY3RGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgc2VsZWN0UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gIH0pO1xuXG4gIGNvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRhc2suc3dpdGNoU3RhdHVzKCk7XG4gICAgcmVuZGVyKCdJbmJveCcsIHByb2plY3QsIHByb2plY3QuZ2V0VGFza3MoKSk7IC8vKiAqKipOYW1lIHNob3VsZCBzaG91bGQgbm90IGJlIGluYm94LiBpdCBzaG91bGQgYmUgdGhlIG5hbWUgb2YgdGhlIHByb2plY3RcbiAgfSk7XG5cbiAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBlZGl0VGFza0Zvcm0uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICBlZGl0VGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICBlZGl0VGFza0Zvcm0udGFza05hbWUudmFsdWUgPSB0YXNrLmdldE5hbWUoKTtcbiAgICBlZGl0VGFza0Zvcm0udGFza0luZm8udmFsdWUgPSB0YXNrLmdldEluZm8oKTtcbiAgICBlZGl0VGFza0Zvcm0udGFza0R1ZURhdGUudmFsdWUgPSB0YXNrLmdldERhdGUoKTtcbiAgICBlZGl0VGFza0Zvcm0udGFza1ByaW9yaXR5LnZhbHVlID0gdGFzay5nZXRQcmlvcml0eSgpO1xuICAgIGVkaXRUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNhcmQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYXJkO1xuIiwiY29uc3QgZm9ybWF0Q3VycmVudERhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZGQgPSBTdHJpbmcoY3VycmVudERhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCBtbSA9IFN0cmluZyhjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgY29uc3QgeXl5eSA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG4gIHJldHVybiBgJHt5eXl5fS0ke21tfS0ke2RkfWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRDdXJyZW50RGF0ZTtcbiIsImltcG9ydCBmb3JtYXRDdXJyZW50RGF0ZSBmcm9tICcuL2Zvcm1hdEN1cnJlbnREYXRlJztcblxuY29uc3QgcHJvamVjdCA9IChuYW1lKSA9PiAoe1xuICBuYW1lLFxuICBpZDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjAwKSArIDEsXG4gIHRhc2tzOiBbXSxcblxuICBzZXROYW1lKG5ld05hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICB9LFxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfSxcblxuICBnZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZDtcbiAgfSxcblxuICBzZXRUYXNrcyhuZXdUYXNrcykge1xuICAgIHRoaXMudGFza3MgPSBuZXdUYXNrcztcbiAgfSxcblxuICBnZXRUYXNrcygpIHtcbiAgICBjb25zdCBpbmNvbXBsZXRlZFRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0U3RhdHVzKCkgPT09ICdpbmNvbXBsZXRlJyk7XG4gICAgcmV0dXJuIGluY29tcGxldGVkVGFza3M7XG4gIH0sXG5cbiAgZ2V0VGFzayh0YXNrTmFtZSkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSB0YXNrTmFtZSk7XG4gIH0sXG5cbiAgYWRkVGFzayhuZXdUYXNrKSB7XG4gICAgaWYgKHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IG5ld1Rhc2submFtZSkpIHJldHVybjtcbiAgICB0aGlzLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gIH0sXG5cbiAgZGVsVGFzayh0YXNrTmFtZSkge1xuICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5nZXROYW1lKCkgIT09IHRhc2tOYW1lKTtcbiAgfSxcblxuICBnZXRUb2RheVRhc2tzKCkge1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gZm9ybWF0Q3VycmVudERhdGUoKTtcbiAgICBjb25zdCBpbmNvbXBsZXRlZFRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0U3RhdHVzKCkgPT09ICdpbmNvbXBsZXRlJyk7XG4gICAgcmV0dXJuIGluY29tcGxldGVkVGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldERhdGUoKSA9PT0gY3VycmVudERhdGUpO1xuICB9LFxuXG4gIGdldFVwY29taW5nVGFza3MoKSB7XG4gICAgY29uc3QgaW5jb21wbGV0ZWRUYXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldFN0YXR1cygpID09PSAnaW5jb21wbGV0ZScpO1xuICAgIHJldHVybiBpbmNvbXBsZXRlZFRhc2tzLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGEuZ2V0RGF0ZSgpKSAtIG5ldyBEYXRlKGIuZ2V0RGF0ZSgpKSk7XG4gIH0sXG5cbiAgZ2V0Q29tcGxldGVkVGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldFN0YXR1cygpICE9PSAnaW5jb21wbGV0ZScpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3Q7XG4iLCJpbXBvcnQgY3JlYXRlQ2FyZCBmcm9tICcuL2NhcmQnO1xuXG5jb25zdCBwcm9qZWN0QnRuID0gKG5ld1Byb2plY3QpID0+IHtcbiAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RCdG4nKTtcbiAgbmV3UHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QuZ2V0TmFtZSgpO1xuXG4gIHJldHVybiBuZXdQcm9qZWN0QnRuO1xufTtcblxuLy8gR2VuZXJhdGVzIHRhYiBwYWdlXG5jb25zdCByZW5kZXIgPSAobmFtZSwgcHJvamVjdCwgdGFza3MpID0+IHtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudFByb2plY3QnKTtcbiAgY3VycmVudFByb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgcHJvamVjdC5nZXRJZCgpKTtcbiAgd2hpbGUgKGN1cnJlbnRQcm9qZWN0LmZpcnN0Q2hpbGQpIHtcbiAgICBjdXJyZW50UHJvamVjdC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICB9XG4gIC8vIGN1cnJlbnRQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoKSBjaGFuZ2UgZnJvbSByYW5kZXIgPSAobmFtZSwgdGFrcykgdG8gcmVuZGVyIChwcm9qZWN0LCB0YXNrcykuXG4gIC8vIHRoaXMgd2F5IHdlIGhhdmUgcHJvamVjdC5nZXROYW1lIHdoaWNoIHdlIGNhbiBmZWVkIHRvIHRvZ2dsZSBjbGFzcy5cbiAgLy8gVGhlbiwgd2UgY2FuIHVzZSBjbGFzcyBuYW1lIGluIGluZGV4IHRvIGltbWlkaWF0ZWx5IHJlbmRlclxuICAvLyB0aGUgcGFnZSBkZXBlbmRpbmcgb24gd2hhdCBjdXJyZW50IHBhZ2UgaXMgZGlzcGxheWVkXG4gIC8vIElmIHdlJ3JlIG9uIHRvZGF5cyB0YXNrcyBzY3JlZW4gYW5kIHdlIGFkZCBhIG5ldyB0YXNrIHRoYXRzIGR1ZSB0b2RheSxcbiAgLy8gaXQgc2hvdWxkIHJlZnJlc2ggaW1taWRpYXRlbHlcblxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IG5hbWU7XG4gIGN1cnJlbnRQcm9qZWN0LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjdXJyZW50UHJvamVjdC5hcHBlbmRDaGlsZChjcmVhdGVDYXJkKHByb2plY3QsIHRhc2spKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBwcm9qZWN0QnRuLCByZW5kZXIgfTtcbiIsImNvbnN0IHRhc2sgPSAobmFtZSwgaW5mbywgZHVlRGF0ZSwgcHJpb3JpdHkpID0+ICh7XG4gIG5hbWUsXG4gIGluZm8sXG4gIGR1ZURhdGUsXG4gIHByaW9yaXR5LFxuICBzdGF0dXM6ICdpbmNvbXBsZXRlJyxcbiAgaWQ6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxLFxuXG4gIHNldE5hbWUobmV3TmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gIH0sXG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9LFxuXG4gIHNldEluZm8obmV3SW5mbykge1xuICAgIHRoaXMuaW5mbyA9IG5ld0luZm87XG4gIH0sXG5cbiAgZ2V0SW5mbygpIHtcbiAgICByZXR1cm4gdGhpcy5pbmZvO1xuICB9LFxuXG4gIHNldERhdGUobmV3RGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0RhdGU7XG4gIH0sXG5cbiAgZ2V0RGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICB9LFxuXG4gIHNldFByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICB9LFxuXG4gIGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICB9LFxuXG4gIGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9LFxuXG4gIGdldFN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXM7XG4gIH0sXG5cbiAgc3dpdGNoU3RhdHVzKCkge1xuICAgIHRoaXMuc3RhdHVzID09PSAnaW5jb21wbGV0ZScgPyAodGhpcy5zdGF0dXMgPSAnY29tcGxldGUnKSA6ICh0aGlzLnN0YXR1cyA9ICdpbmNvbXBsZXRlJyk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGFzaztcbiIsImltcG9ydCBwcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XG5cbmNvbnN0IHRvZG8gPSAoKSA9PiAoe1xuICBwcm9qZWN0czogW3Byb2plY3QoJ0luYm94JyldLFxuXG4gIHNldFByb2plY3RzKHByb2plY3QpIHtcbiAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdDtcbiAgfSxcblxuICBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgfSxcblxuICBnZXRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKTtcbiAgfSxcblxuICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcbiAgICBpZiAodGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gbmV3UHJvamVjdC5nZXROYW1lKCkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0b2RvO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB0b2RvIGZyb20gJy4vdG9kbyc7XG5pbXBvcnQgcHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHRhc2sgZnJvbSAnLi90YXNrJztcbmltcG9ydCB7IHByb2plY3RCdG4sIHJlbmRlciB9IGZyb20gJy4vcmVuZGVyJztcbmltcG9ydCBmb3JtYXRDdXJyZW50RGF0ZSBmcm9tICcuL2Zvcm1hdEN1cnJlbnREYXRlJztcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFza0Zvcm0nKTtcbmNvbnN0IG5ld1Rhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VGFza0J0bicpO1xuY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdEZvcm0nKTtcbmNvbnN0IG5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3UHJvamVjdEJ0bicpO1xuY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRUYXNrRm9ybScpO1xuY29uc3Qgc2VsZWN0UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0UHJvamVjdEZvcm0nKTtcbmNvbnN0IGluYm94QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94QnRuJyk7XG5jb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheUJ0bicpO1xuY29uc3QgdXBjb21pbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXBjb21pbmdCdG4nKTtcbmNvbnN0IGNvbXBsZXRlZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWRCdG4nKTtcbmNvbnN0IHNpZGViYXJQcm9qZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyUHJvamVjdEJ0bnMnKTtcbmNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRQcm9qZWN0Jyk7XG5cbmNvbnN0IHRvZG9MaXN0ID0gdG9kbygpO1xuXG4vLyBDcmVhdGVzIERlZmF1bHQgVGFzayB0byBkaXNwbGF5XG50b2RvTGlzdFxuICAuZ2V0UHJvamVjdCgnSW5ib3gnKVxuICAuYWRkVGFzayh0YXNrKCdGaXJzdCBUYXNrJywgJ1RoaXMgaXMgbXkgZmlyc3QgdGFzayEnLCBmb3JtYXRDdXJyZW50RGF0ZSgpLCAnSGlnaCcpKTtcbnJlbmRlcignSW5ib3gnLCB0b2RvTGlzdC5nZXRQcm9qZWN0KCdJbmJveCcpLCB0b2RvTGlzdC5nZXRQcm9qZWN0KCdJbmJveCcpLmdldFRhc2tzKCkpO1xuXG5uZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBuZXdUYXNrRm9ybS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICBuZXdUYXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xufSk7XG5cbm5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbmV3VGFzayA9IHRhc2soXG4gICAgbmV3VGFza0Zvcm0udGFza05hbWUudmFsdWUsXG4gICAgbmV3VGFza0Zvcm0udGFza0luZm8udmFsdWUsXG4gICAgbmV3VGFza0Zvcm0udGFza0R1ZURhdGUudmFsdWUsXG4gICAgbmV3VGFza0Zvcm0udGFza1ByaW9yaXR5LnZhbHVlLFxuICApO1xuXG4gIHRvZG9MaXN0LmdldFByb2plY3QoJ0luYm94JykuYWRkVGFzayhuZXdUYXNrKTtcbiAgcmVuZGVyKCdJbmJveCcsIHRvZG9MaXN0LmdldFByb2plY3QoJ0luYm94JyksIHRvZG9MaXN0LmdldFByb2plY3QoJ0luYm94JykuZ2V0VGFza3MoKSk7XG5cbiAgbmV3VGFza0Zvcm0uc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgbmV3VGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICBuZXdUYXNrRm9ybS5yZXNldCgpO1xufSk7XG5cbm5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG5ld1Byb2plY3RGb3JtLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gIG5ld1Byb2plY3RGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG59KTtcblxubmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBuYW1lID0gbmV3UHJvamVjdEZvcm0ucHJvamVjdE5hbWUudmFsdWU7XG4gIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KG5hbWUpO1xuICB0b2RvTGlzdC5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICBjb25zdCBuZXdQcm9qZWN0QnRuID0gcHJvamVjdEJ0bihuZXdQcm9qZWN0KTtcbiAgbmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZW5kZXIobmFtZSwgdG9kb0xpc3QuZ2V0UHJvamVjdChuYW1lKSwgdG9kb0xpc3QuZ2V0UHJvamVjdChuYW1lKS5nZXRUYXNrcygpKTtcbiAgfSk7XG5cbiAgLy8gQWRkcyBuZXcgcHJvamVjdHMgdG8gdGhlIGFkZCB0byBwcm9qZWN0IGZvcm1cbiAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gbmFtZTtcbiAgc2VsZWN0UHJvamVjdEZvcm0ucXVlcnlTZWxlY3Rvcignc2VsZWN0JykuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG5cbiAgc2lkZWJhclByb2plY3RCdG5zLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdG4pO1xuXG4gIG5ld1Byb2plY3RGb3JtLnJlc2V0KCk7XG4gIG5ld1Byb2plY3RGb3JtLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gIG5ld1Byb2plY3RGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbn0pO1xuXG5pbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gIHJlbmRlcignSW5ib3gnLCB0b2RvTGlzdC5nZXRQcm9qZWN0KCdJbmJveCcpLCB0b2RvTGlzdC5nZXRQcm9qZWN0KCdJbmJveCcpLmdldFRhc2tzKCkpLFxuKTtcbnRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgcmVuZGVyKFxuICAgIFwiVG9kYXkncyBUYXNrc1wiLFxuICAgIHRvZG9MaXN0LmdldFByb2plY3QoJ0luYm94JyksXG4gICAgdG9kb0xpc3QuZ2V0UHJvamVjdCgnSW5ib3gnKS5nZXRUb2RheVRhc2tzKCksXG4gICksXG4pO1xudXBjb21pbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICByZW5kZXIoXG4gICAgXCJUaGlzIFdlZWsncyBUYXNrc1wiLFxuICAgIHRvZG9MaXN0LmdldFByb2plY3QoJ0luYm94JyksXG4gICAgdG9kb0xpc3QuZ2V0UHJvamVjdCgnSW5ib3gnKS5nZXRVcGNvbWluZ1Rhc2tzKCksXG4gICksXG4pO1xuY29tcGxldGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICByZW5kZXIoXG4gICAgJ0NvbXBsZXRlZCcsXG4gICAgdG9kb0xpc3QuZ2V0UHJvamVjdCgnSW5ib3gnKSxcbiAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KCdJbmJveCcpLmdldENvbXBsZXRlZFRhc2tzKCksXG4gICk7XG4gIC8vIGNvbnN0IGNvbXBsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnRQcm9qZWN0IGJ1dHRvbicpO1xuICAvLyAvLyBpZiAoY29tcGxldGVCdG4pIGNvbXBsZXRlQnRuLnRleHRDb250ZW50ID0gJ01hcmsgQXMgSW5jb21wbGV0ZSdcbiAgY29uc3QgYWxsQnRucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1cnJlbnRQcm9qZWN0IGltZzpub3QoOmZpcnN0LWNoaWxkKScpKTtcbiAgYWxsQnRucy5mb3JFYWNoKChidG4pID0+IGJ0bi5yZW1vdmUoKSk7XG59KTtcblxuZWRpdFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgYWN0aXZlUHJvamVjdCA9IHRvZG9MaXN0XG4gICAgLmdldFByb2plY3RzKClcbiAgICAuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRJZCgpID09PSBwYXJzZUludChjdXJyZW50UHJvamVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSwgMTApKTtcbiAgY29uc3QgZWRpdFRhc2tGb3JtSWQgPSBlZGl0VGFza0Zvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG5cbiAgY29uc3QgZWRpdGVkVGFzayA9IGFjdGl2ZVByb2plY3RcbiAgICAuZ2V0VGFza3MoKVxuICAgIC5maW5kKCh0YXNrKSA9PiB0YXNrLmdldElkKCkgPT09IHBhcnNlSW50KGVkaXRUYXNrRm9ybUlkLCAxMCkpO1xuXG4gIGVkaXRlZFRhc2suc2V0TmFtZShlZGl0VGFza0Zvcm0udGFza05hbWUudmFsdWUpO1xuICBlZGl0ZWRUYXNrLnNldEluZm8oZWRpdFRhc2tGb3JtLnRhc2tJbmZvLnZhbHVlKTtcbiAgZWRpdGVkVGFzay5zZXREYXRlKGVkaXRUYXNrRm9ybS50YXNrRHVlRGF0ZS52YWx1ZSk7XG4gIGVkaXRlZFRhc2suc2V0UHJpb3JpdHkoZWRpdFRhc2tGb3JtLnRhc2tQcmlvcml0eS52YWx1ZSk7XG5cbiAgZWRpdFRhc2tGb3JtLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gIGVkaXRUYXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIHJlbmRlcihhY3RpdmVQcm9qZWN0LmdldE5hbWUoKSwgYWN0aXZlUHJvamVjdCwgYWN0aXZlUHJvamVjdC5nZXRUYXNrcygpKTtcbn0pO1xuXG5zZWxlY3RQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGFjdGl2ZVByb2plY3QgPSB0b2RvTGlzdFxuICAgIC5nZXRQcm9qZWN0cygpXG4gICAgLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0SWQoKSA9PT0gcGFyc2VJbnQoY3VycmVudFByb2plY3QuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyksIDEwKSk7XG4gIGNvbnN0IHNlbGVjdFByb2plY3RGb3JtSWQgPSBzZWxlY3RQcm9qZWN0Rm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gYWN0aXZlUHJvamVjdFxuICAgIC5nZXRUYXNrcygpXG4gICAgLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0SWQoKSA9PT0gcGFyc2VJbnQoc2VsZWN0UHJvamVjdEZvcm1JZCwgMTApKTtcblxuICB0b2RvTGlzdC5nZXRQcm9qZWN0KHNlbGVjdFByb2plY3RGb3JtLnByb2plY3RMaXN0LnZhbHVlKS5hZGRUYXNrKHNlbGVjdGVkVGFzayk7XG5cbiAgdG9kb0xpc3QuZ2V0UHJvamVjdChhY3RpdmVQcm9qZWN0LmdldE5hbWUoKSkuZGVsVGFzayhzZWxlY3RlZFRhc2suZ2V0TmFtZSgpKTtcblxuICBzZWxlY3RQcm9qZWN0Rm9ybS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICBzZWxlY3RQcm9qZWN0Rm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIHJlbmRlcihhY3RpdmVQcm9qZWN0LmdldE5hbWUoKSwgYWN0aXZlUHJvamVjdCwgYWN0aXZlUHJvamVjdC5nZXRUYXNrcygpKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9