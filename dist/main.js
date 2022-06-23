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
  const card = document.createElement("div");
  const cardBtn = document.createElement("div");
  const cardBtnContent = document.createElement("div");
  const cardActionBtns = document.createElement("div");
  const cardContent = document.createElement("div");
  const taskName = document.createElement("h3");
  const taskInfo = document.createElement("p");
  const taskDueDate = document.createElement("p");
  const editTaskForm = document.getElementById("editTaskForm");
  const selectProjectForm = document.getElementById("selectProjectForm");
  const completeBtn = new Image();
  completeBtn.src = _img_completed_icon_svg__WEBPACK_IMPORTED_MODULE_1__;
  const editBtn = new Image();
  editBtn.src = _img_edit_icon_svg__WEBPACK_IMPORTED_MODULE_2__;
  const delBtn = new Image();
  delBtn.src = _img_delete_icon_svg__WEBPACK_IMPORTED_MODULE_3__;
  const addToProjectBtn = new Image();
  addToProjectBtn.src = _img_addToProject_icon_svg__WEBPACK_IMPORTED_MODULE_4__;

  card.classList.add("card");
  cardBtn.classList.add("cardBtn");
  cardBtnContent.classList.add("cardBtnContent");
  cardActionBtns.classList.add("cardActionBtns");
  cardContent.classList.add("cardContent");
  completeBtn.classList.add("actionBtn");
  editBtn.classList.add("actionBtn");
  delBtn.classList.add("actionBtn");
  addToProjectBtn.classList.add("actionBtn");
  card.setAttribute("data-id", task.getId());

  taskName.textContent = task.getName();
  taskDueDate.textContent = task.getDate();
  taskInfo.textContent = task.getInfo();
  editBtn.textContent = "Edit";
  delBtn.textContent = "Delete";
  addToProjectBtn.textContent = "Add To Project";
  completeBtn.textContent = "Complete";

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
  cardBtn.addEventListener("click", () => {
    cardBtn.classList.toggle("activeCard");
    const cardContent = cardBtn.nextElementSibling;
    if (cardContent.style.display === "block") {
      cardContent.style.display = "none";
      cardContent.style.maxHeight = "0";
    } else {
      cardContent.style.display = "block";
      cardContent.style.maxHeight = `${cardContent.scrollHeight}px`;
    }
  });

  // Gives each card styling based on priority level
  switch (task.getPriority()) {
    case "High":
      cardBtn.classList.add("highPriority");
      break;
    case "Medium":
      cardBtn.classList.add("mediumPriority");
      break;
    case "Low":
      cardBtn.classList.add("lowPriority");
      break;
    default:
      cardBtn.classList.add("nonePriority");
  }

  delBtn.addEventListener("click", () => {
    project.delTask(task.getName());
    (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)("Inbox", project, project.getTasks()); // causing error since i think render is expecting something else. Also, name should be inbox always
  });

  addToProjectBtn.addEventListener("click", () => {
    // should show the form
    selectProjectForm.style.opacity = "1";
    selectProjectForm.style.visibility = "visible";
    selectProjectForm.setAttribute("data-id", card.getAttribute("data-id"));
  });

  completeBtn.addEventListener("click", () => {
    task.switchStatus();
    (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)("Inbox", project, project.getTasks()); //* ***Name should should not be inbox. it should be the name of the project
  });

  editBtn.addEventListener("click", () => {
    editTaskForm.style.opacity = "1";
    editTaskForm.style.visibility = "visible";
    editTaskForm.taskName.value = task.getName();
    editTaskForm.taskInfo.value = task.getInfo();
    editTaskForm.taskDueDate.value = task.getDate();
    editTaskForm.taskPriority.value = task.getPriority();
    editTaskForm.setAttribute("data-id", card.getAttribute("data-id"));
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
  const dd = String(currentDate.getDate()).padStart(2, "0");
  const mm = String(currentDate.getMonth() + 1).padStart(2, "0");
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

  setName(name) {
    this.name = name;
  },

  getName() {
    return this.name;
  },

  getId() {
    return this.id;
  },

  setTasks(tasks) {
    this.tasks = tasks;
  },

  getTasks() {
    const incompletedTasks = this.tasks.filter(
      (task) => task.getStatus() === "incomplete"
    );
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
    const incompletedTasks = this.tasks.filter(
      (task) => task.getStatus() === "incomplete"
    );
    return incompletedTasks.filter((task) => task.getDate() === currentDate);
  },

  getUpcomingTasks() {
    const incompletedTasks = this.tasks.filter(
      (task) => task.getStatus() === "incomplete"
    );
    return incompletedTasks.sort(
      (a, b) => new Date(a.getDate()) - new Date(b.getDate())
    );
  },

  getCompletedTasks() {
    return this.tasks.filter((task) => task.getStatus() !== "incomplete");
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
  const newProjectBtn = document.createElement("button");
  newProjectBtn.classList.add("projectBtn");
  newProjectBtn.textContent = newProject.getName();

  return newProjectBtn;
};

// Generates tab page
const render = (name, project, tasks) => {
  const currentProject = document.querySelector(".currentProject");
  currentProject.setAttribute("data-id", project.getId());
  while (currentProject.firstChild) {
    currentProject.firstChild.remove();
  }
  // currentProject.classList.toggle() change from rander = (name, taks) to render (project, tasks).
  // this way we have project.getName which we can feed to toggle class.
  // Then, we can use class name in index to immidiately render
  // the page depending on what current page is displayed
  // If we're on todays tasks screen and we add a new task thats due today,
  // it should refresh immidiately

  const heading = document.createElement("h1");
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
  status: "incomplete",
  id: Math.floor(Math.random() * 100) + 1,

  setName(name) {
    this.name = name;
  },

  getName() {
    return this.name;
  },

  setInfo(info) {
    this.info = info;
  },

  getInfo() {
    return this.info;
  },

  setDate(dueDate) {
    this.dueDate = dueDate;
  },

  getDate() {
    return this.dueDate;
  },

  setPriority(priority) {
    this.priority = priority;
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
    this.status === "incomplete"
      ? (this.status = "complete")
      : (this.status = "incomplete");
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
  projects: [(0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])("Inbox")],

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
    if (
      this.projects.find(
        (project) => project.getName() === newProject.getName()
      )
    ) {
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







const newTaskForm = document.getElementById("newTaskForm");
const newTaskBtn = document.querySelector(".newTaskBtn");
const newProjectForm = document.getElementById("newProjectForm");
const newProjectBtn = document.querySelector(".newProjectBtn");
const editTaskForm = document.getElementById("editTaskForm");
const selectProjectForm = document.getElementById("selectProjectForm");
const inboxBtn = document.querySelector(".inboxBtn");
const todayBtn = document.querySelector(".todayBtn");
const upcomingBtn = document.querySelector(".upcomingBtn");
const completedBtn = document.querySelector(".completedBtn");
const sidebarProjectBtns = document.querySelector(".sidebarProjectBtns");
const currentProject = document.querySelector(".currentProject");

const todoList = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])();

// Creates Default Task to display
todoList
  .getProject("Inbox")
  .addTask(
    (0,_task__WEBPACK_IMPORTED_MODULE_2__["default"])("First Task", "This is my first task!", (0,_formatCurrentDate__WEBPACK_IMPORTED_MODULE_4__["default"])(), "High")
  );
(0,_render__WEBPACK_IMPORTED_MODULE_3__.render)(
  "Inbox",
  todoList.getProject("Inbox"),
  todoList.getProject("Inbox").getTasks()
);

newTaskBtn.addEventListener("click", () => {
  newTaskForm.style.opacity = "1";
  newTaskForm.style.visibility = "visible";
});

newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTask = (0,_task__WEBPACK_IMPORTED_MODULE_2__["default"])(
    newTaskForm.taskName.value,
    newTaskForm.taskInfo.value,
    newTaskForm.taskDueDate.value,
    newTaskForm.taskPriority.value
  );

  todoList.getProject("Inbox").addTask(newTask);
  (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)(
    "Inbox",
    todoList.getProject("Inbox"),
    todoList.getProject("Inbox").getTasks()
  );

  newTaskForm.style.opacity = "0";
  newTaskForm.style.visibility = "hidden";
  newTaskForm.reset();
});

newProjectBtn.addEventListener("click", () => {
  newProjectForm.style.opacity = "1";
  newProjectForm.style.visibility = "visible";
});

newProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = newProjectForm.projectName.value;
  const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__["default"])(name);
  todoList.addProject(newProject);
  const newProjectBtn = (0,_render__WEBPACK_IMPORTED_MODULE_3__.projectBtn)(newProject);
  newProjectBtn.addEventListener("click", () => {
    (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)(
      name,
      todoList.getProject(name),
      todoList.getProject(name).getTasks()
    );
  });

  // Adds new projects to the add to project form
  const projectOption = document.createElement("option");
  projectOption.textContent = name;
  selectProjectForm.querySelector("select").appendChild(projectOption);

  sidebarProjectBtns.appendChild(newProjectBtn);

  newProjectForm.reset();
  newProjectForm.style.opacity = "0";
  newProjectForm.style.visibility = "hidden";
});

inboxBtn.addEventListener("click", () =>
  (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)(
    "Inbox",
    todoList.getProject("Inbox"),
    todoList.getProject("Inbox").getTasks()
  )
);
todayBtn.addEventListener("click", () =>
  (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)(
    "Today's Tasks",
    todoList.getProject("Inbox"),
    todoList.getProject("Inbox").getTodayTasks()
  )
);
upcomingBtn.addEventListener("click", () =>
  (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)(
    "This Week's Tasks",
    todoList.getProject("Inbox"),
    todoList.getProject("Inbox").getUpcomingTasks()
  )
);
completedBtn.addEventListener("click", () => {
  (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)(
    "Completed",
    todoList.getProject("Inbox"),
    todoList.getProject("Inbox").getCompletedTasks()
  );
  const completeBtn = document.querySelector(".currentProject button");
  // if (completeBtn) completeBtn.textContent = 'Mark As Incomplete'
  const allBtns = Array.from(
    document.querySelectorAll(".currentProject img:not(:first-child)")
  );
  allBtns.forEach((btn) => btn.remove());
});

editTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const activeProject = todoList
    .getProjects()
    .find(
      (project) => project.getId() == currentProject.getAttribute("data-id")
    );
  const editTaskFormId = editTaskForm.getAttribute("data-id");

  const editedTask = activeProject
    .getTasks()
    .find((task) => task.getId() == editTaskFormId);

  editedTask.setName(editTaskForm.taskName.value);
  editedTask.setInfo(editTaskForm.taskInfo.value);
  editedTask.setDate(editTaskForm.taskDueDate.value);
  editedTask.setPriority(editTaskForm.taskPriority.value);

  editTaskForm.style.opacity = "0";
  editTaskForm.style.visibility = "hidden";
  (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)(activeProject.getName(), activeProject, activeProject.getTasks());
});

selectProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const activeProject = todoList
    .getProjects()
    .find(
      (project) => project.getId() == currentProject.getAttribute("data-id")
    );
  const selectProjectFormId = selectProjectForm.getAttribute("data-id");
  const selectedTask = activeProject
    .getTasks()
    .find((task) => task.getId() == selectProjectFormId);

  todoList
    .getProject(selectProjectForm.projectList.value)
    .addTask(selectedTask);

  todoList.getProject(activeProject.getName()).delTask(selectedTask.getName());

  selectProjectForm.style.opacity = "0";
  selectProjectForm.style.visibility = "hidden";
  (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)(activeProject.getName(), activeProject, activeProject.getTasks());
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybWF0Q3VycmVudERhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9VYnVudHUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9leHBhbmRfaWNvbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9jb2xsYXBzZV9pY29uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1LWZvbnQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1VidW50dS1mb250JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWljb24td2lkdGg6IDMwcHg7XFxufVxcblxcbmh0bWwsIGJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tYWluV3JhcHBlciB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxufVxcblxcbi5uYXYge1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubmF2IHVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2IGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pY29ucyB7XFxuICAgIHdpZHRoOiB2YXIoLS1pY29uLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMCA1cHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XFxufVxcblxcbi5pY29uczphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjUpIHNjYWxlWSgxLjUpO1xcbn1cXG5cXG4ucHJvZmlsZUljb24ge1xcbiAgICB3aWR0aDogNDVweDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaWRlYmFyQnRucywgLnNpZGViYXJQcm9qZWN0QnRuc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uc2lkZWJhckJ0bnMgYnV0dG9uLCAuc2lkZWJhclByb2plY3RCdG5zIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uc2lkZWJhckJ0bnMgYnV0dG9uOmhvdmVyLCAuc2lkZWJhclByb2plY3RCdG5zIGJ1dHRvbjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbn1cXG5cXG4uc2lkZWJhclRhc2tUaXRsZSwgLnNpZGViYXJQcm9qZWN0VGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhciBoMyB7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLm5ld1Rhc2tCdG4sIC5uZXdQcm9qZWN0QnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogY2FsYygtLWljb24td2lkdGggKiAxLjIpO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5jdXJyZW50UHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jbmV3VGFza0Zvcm0sICNlZGl0VGFza0Zvcm0sICNuZXdQcm9qZWN0Rm9ybSwgI3NlbGVjdFByb2plY3RGb3JtIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluO1xcbn1cXG5cXG4ucHJpb3JpdGllcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jYXJkQnRuIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFjdGl2ZUNhcmQsIC5jYXJkQnRuOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XFxufVxcblxcbi5jYXJkQnRuQ29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4uY2FyZEJ0bkNvbnRlbnQgaDMge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uY2FyZEJ0bkNvbnRlbnQgcCB7XFxuXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmNhcmRBY3Rpb25CdG5zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5jYXJkQ29udGVudCB7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbi5jYXJkQ29udGVudCBwIHtcXG4gICAgcGFkZGluZzogMTVweCAwO1xcbn1cXG5cXG4uY2FyZEJ0bjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbn1cXG5cXG4uYWN0aXZlQ2FyZDphZnRlciB7XFxuICAgIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmFjdGlvbkJ0biB7XFxuICAgIHdpZHRoOiB2YXIoLS1pY29uLXdpZHRoKTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbjogMCA1cHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XFxufVxcblxcbi5hY3Rpb25CdG46YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMS41KSBzY2FsZVkoMS41KTtcXG59XFxuXFxuLmhpZ2hQcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNyaW1zb247XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1lZGl1bVByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXG59XFxuXFxuLmxvd1ByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5vbmVQcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMu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O0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUtZm9udCc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1VidW50dS1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdVYnVudHUtZm9udCcsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1pY29uLXdpZHRoOiAzMHB4O1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubWFpbldyYXBwZXIge1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm5hdiB1bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdiBsaSB7XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaWNvbnMge1xcbiAgICB3aWR0aDogdmFyKC0taWNvbi13aWR0aCk7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xcbn1cXG5cXG4uaWNvbnM6YWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMS41KSBzY2FsZVkoMS41KTtcXG59XFxuXFxuLnByb2ZpbGVJY29uIHtcXG4gICAgd2lkdGg6IDQ1cHg7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2lkZWJhckJ0bnMsIC5zaWRlYmFyUHJvamVjdEJ0bnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLnNpZGViYXJCdG5zIGJ1dHRvbiwgLnNpZGViYXJQcm9qZWN0QnRucyBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnNpZGViYXJCdG5zIGJ1dHRvbjpob3ZlciwgLnNpZGViYXJQcm9qZWN0QnRucyBidXR0b246aG92ZXIge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoODUlKTtcXG59XFxuXFxuLnNpZGViYXJUYXNrVGl0bGUsIC5zaWRlYmFyUHJvamVjdFRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGViYXIgaDMge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5uZXdUYXNrQnRuLCAubmV3UHJvamVjdEJ0biB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IGNhbGMoLS1pY29uLXdpZHRoICogMS4yKTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uY3VycmVudFByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI25ld1Rhc2tGb3JtLCAjZWRpdFRhc2tGb3JtLCAjbmV3UHJvamVjdEZvcm0sICNzZWxlY3RQcm9qZWN0Rm9ybSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbjtcXG59XFxuXFxuLnByaW9yaXRpZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2FyZEJ0biB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hY3RpdmVDYXJkLCAuY2FyZEJ0bjpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbn1cXG5cXG4uY2FyZEJ0bkNvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLmNhcmRCdG5Db250ZW50IGgzIHtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLmNhcmRCdG5Db250ZW50IHAge1xcblxcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5jYXJkQWN0aW9uQnRucyB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uY2FyZENvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgbWF4LWhlaWdodDogMDtcXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4uY2FyZENvbnRlbnQgcCB7XFxuICAgIHBhZGRpbmc6IDE1cHggMDtcXG59XFxuXFxuLmNhcmRCdG46YWZ0ZXIge1xcbiAgICBjb250ZW50OiB1cmwoLi9pbWcvZXhwYW5kX2ljb24uc3ZnKTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XFxufVxcblxcbi5hY3RpdmVDYXJkOmFmdGVyIHtcXG4gICAgY29udGVudDogdXJsKC4vaW1nL2NvbGxhcHNlX2ljb24uc3ZnKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uYWN0aW9uQnRuIHtcXG4gICAgd2lkdGg6IHZhcigtLWljb24td2lkdGgpO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luOiAwIDVweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcXG59XFxuXFxuLmFjdGlvbkJ0bjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjUpIHNjYWxlWSgxLjUpO1xcbn1cXG5cXG4uaGlnaFByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWVkaXVtUHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcbn1cXG5cXG4ubG93UHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubm9uZVByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5pbXBvcnQgY29tcGxldGVJY29uIGZyb20gXCIuL2ltZy9jb21wbGV0ZWRfaWNvbi5zdmdcIjtcbmltcG9ydCBlZGl0SWNvbiBmcm9tIFwiLi9pbWcvZWRpdF9pY29uLnN2Z1wiO1xuaW1wb3J0IGRlbEljb24gZnJvbSBcIi4vaW1nL2RlbGV0ZV9pY29uLnN2Z1wiO1xuaW1wb3J0IGFkZFRvUHJvamVjdEljb24gZnJvbSBcIi4vaW1nL2FkZFRvUHJvamVjdF9pY29uLnN2Z1wiO1xuXG5jb25zdCBjcmVhdGVDYXJkID0gKHByb2plY3QsIHRhc2spID0+IHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhcmRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYXJkQnRuQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhcmRBY3Rpb25CdG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgdGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0VGFza0Zvcm1cIik7XG4gIGNvbnN0IHNlbGVjdFByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RQcm9qZWN0Rm9ybVwiKTtcbiAgY29uc3QgY29tcGxldGVCdG4gPSBuZXcgSW1hZ2UoKTtcbiAgY29tcGxldGVCdG4uc3JjID0gY29tcGxldGVJY29uO1xuICBjb25zdCBlZGl0QnRuID0gbmV3IEltYWdlKCk7XG4gIGVkaXRCdG4uc3JjID0gZWRpdEljb247XG4gIGNvbnN0IGRlbEJ0biA9IG5ldyBJbWFnZSgpO1xuICBkZWxCdG4uc3JjID0gZGVsSWNvbjtcbiAgY29uc3QgYWRkVG9Qcm9qZWN0QnRuID0gbmV3IEltYWdlKCk7XG4gIGFkZFRvUHJvamVjdEJ0bi5zcmMgPSBhZGRUb1Byb2plY3RJY29uO1xuXG4gIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIGNhcmRCdG4uY2xhc3NMaXN0LmFkZChcImNhcmRCdG5cIik7XG4gIGNhcmRCdG5Db250ZW50LmNsYXNzTGlzdC5hZGQoXCJjYXJkQnRuQ29udGVudFwiKTtcbiAgY2FyZEFjdGlvbkJ0bnMuY2xhc3NMaXN0LmFkZChcImNhcmRBY3Rpb25CdG5zXCIpO1xuICBjYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiY2FyZENvbnRlbnRcIik7XG4gIGNvbXBsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJhY3Rpb25CdG5cIik7XG4gIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImFjdGlvbkJ0blwiKTtcbiAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJhY3Rpb25CdG5cIik7XG4gIGFkZFRvUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aW9uQnRuXCIpO1xuICBjYXJkLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgdGFzay5nZXRJZCgpKTtcblxuICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0TmFtZSgpO1xuICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZ2V0RGF0ZSgpO1xuICB0YXNrSW5mby50ZXh0Q29udGVudCA9IHRhc2suZ2V0SW5mbygpO1xuICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gIGRlbEJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gIGFkZFRvUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRvIFByb2plY3RcIjtcbiAgY29tcGxldGVCdG4udGV4dENvbnRlbnQgPSBcIkNvbXBsZXRlXCI7XG5cbiAgLy8gTGVmdCBTaWRlIG9mIENhcmQgQnV0dG9uXG4gIGNhcmRCdG5Db250ZW50LmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgY2FyZEJ0bkNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpO1xuXG4gIC8vIFJpZ2h0IFNpZGUgb2YgQ2FyZCBCdXR0b25cbiAgY2FyZEFjdGlvbkJ0bnMuYXBwZW5kQ2hpbGQoY29tcGxldGVCdG4pO1xuICBjYXJkQWN0aW9uQnRucy5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgY2FyZEFjdGlvbkJ0bnMuYXBwZW5kQ2hpbGQoZGVsQnRuKTtcbiAgY2FyZEFjdGlvbkJ0bnMuYXBwZW5kQ2hpbGQoYWRkVG9Qcm9qZWN0QnRuKTtcblxuICBjYXJkQnRuLmFwcGVuZENoaWxkKGNhcmRCdG5Db250ZW50KTtcbiAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0luZm8pO1xuICBjYXJkLmFwcGVuZENoaWxkKGNhcmRCdG4pO1xuICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDb250ZW50KTtcbiAgY2FyZEJ0bkNvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZEFjdGlvbkJ0bnMpO1xuXG4gIC8vIENvbGxhcHNpYmxlIENhcmQgTG9naWNcbiAgY2FyZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNhcmRCdG4uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZUNhcmRcIik7XG4gICAgY29uc3QgY2FyZENvbnRlbnQgPSBjYXJkQnRuLm5leHRFbGVtZW50U2libGluZztcbiAgICBpZiAoY2FyZENvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgICBjYXJkQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBjYXJkQ29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBcIjBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FyZENvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIGNhcmRDb250ZW50LnN0eWxlLm1heEhlaWdodCA9IGAke2NhcmRDb250ZW50LnNjcm9sbEhlaWdodH1weGA7XG4gICAgfVxuICB9KTtcblxuICAvLyBHaXZlcyBlYWNoIGNhcmQgc3R5bGluZyBiYXNlZCBvbiBwcmlvcml0eSBsZXZlbFxuICBzd2l0Y2ggKHRhc2suZ2V0UHJpb3JpdHkoKSkge1xuICAgIGNhc2UgXCJIaWdoXCI6XG4gICAgICBjYXJkQnRuLmNsYXNzTGlzdC5hZGQoXCJoaWdoUHJpb3JpdHlcIik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiTWVkaXVtXCI6XG4gICAgICBjYXJkQnRuLmNsYXNzTGlzdC5hZGQoXCJtZWRpdW1Qcmlvcml0eVwiKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJMb3dcIjpcbiAgICAgIGNhcmRCdG4uY2xhc3NMaXN0LmFkZChcImxvd1ByaW9yaXR5XCIpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGNhcmRCdG4uY2xhc3NMaXN0LmFkZChcIm5vbmVQcmlvcml0eVwiKTtcbiAgfVxuXG4gIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3QuZGVsVGFzayh0YXNrLmdldE5hbWUoKSk7XG4gICAgcmVuZGVyKFwiSW5ib3hcIiwgcHJvamVjdCwgcHJvamVjdC5nZXRUYXNrcygpKTsgLy8gY2F1c2luZyBlcnJvciBzaW5jZSBpIHRoaW5rIHJlbmRlciBpcyBleHBlY3Rpbmcgc29tZXRoaW5nIGVsc2UuIEFsc28sIG5hbWUgc2hvdWxkIGJlIGluYm94IGFsd2F5c1xuICB9KTtcblxuICBhZGRUb1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBzaG91bGQgc2hvdyB0aGUgZm9ybVxuICAgIHNlbGVjdFByb2plY3RGb3JtLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICBzZWxlY3RQcm9qZWN0Rm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgc2VsZWN0UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBjYXJkLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpO1xuICB9KTtcblxuICBjb21wbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2suc3dpdGNoU3RhdHVzKCk7XG4gICAgcmVuZGVyKFwiSW5ib3hcIiwgcHJvamVjdCwgcHJvamVjdC5nZXRUYXNrcygpKTsgLy8qICoqKk5hbWUgc2hvdWxkIHNob3VsZCBub3QgYmUgaW5ib3guIGl0IHNob3VsZCBiZSB0aGUgbmFtZSBvZiB0aGUgcHJvamVjdFxuICB9KTtcblxuICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZWRpdFRhc2tGb3JtLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICBlZGl0VGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIGVkaXRUYXNrRm9ybS50YXNrTmFtZS52YWx1ZSA9IHRhc2suZ2V0TmFtZSgpO1xuICAgIGVkaXRUYXNrRm9ybS50YXNrSW5mby52YWx1ZSA9IHRhc2suZ2V0SW5mbygpO1xuICAgIGVkaXRUYXNrRm9ybS50YXNrRHVlRGF0ZS52YWx1ZSA9IHRhc2suZ2V0RGF0ZSgpO1xuICAgIGVkaXRUYXNrRm9ybS50YXNrUHJpb3JpdHkudmFsdWUgPSB0YXNrLmdldFByaW9yaXR5KCk7XG4gICAgZWRpdFRhc2tGb3JtLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgY2FyZC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNhcmQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYXJkO1xuIiwiY29uc3QgZm9ybWF0Q3VycmVudERhdGUgPSAoKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZGQgPSBTdHJpbmcoY3VycmVudERhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIGNvbnN0IG1tID0gU3RyaW5nKGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIGNvbnN0IHl5eXkgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICByZXR1cm4gYCR7eXl5eX0tJHttbX0tJHtkZH1gO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0Q3VycmVudERhdGU7XG4iLCJpbXBvcnQgZm9ybWF0Q3VycmVudERhdGUgZnJvbSBcIi4vZm9ybWF0Q3VycmVudERhdGVcIjtcblxuY29uc3QgcHJvamVjdCA9IChuYW1lKSA9PiAoe1xuICBuYW1lLFxuICBpZDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjAwKSArIDEsXG4gIHRhc2tzOiBbXSxcblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9LFxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfSxcblxuICBnZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZDtcbiAgfSxcblxuICBzZXRUYXNrcyh0YXNrcykge1xuICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgfSxcblxuICBnZXRUYXNrcygpIHtcbiAgICBjb25zdCBpbmNvbXBsZXRlZFRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoXG4gICAgICAodGFzaykgPT4gdGFzay5nZXRTdGF0dXMoKSA9PT0gXCJpbmNvbXBsZXRlXCJcbiAgICApO1xuICAgIHJldHVybiBpbmNvbXBsZXRlZFRhc2tzO1xuICB9LFxuXG4gIGdldFRhc2sodGFza05hbWUpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gdGFza05hbWUpO1xuICB9LFxuXG4gIGFkZFRhc2sobmV3VGFzaykge1xuICAgIGlmICh0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSBuZXdUYXNrLm5hbWUpKSByZXR1cm47XG4gICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICB9LFxuXG4gIGRlbFRhc2sodGFza05hbWUpIHtcbiAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpICE9PSB0YXNrTmFtZSk7XG4gIH0sXG5cbiAgZ2V0VG9kYXlUYXNrcygpIHtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IGZvcm1hdEN1cnJlbnREYXRlKCk7XG4gICAgY29uc3QgaW5jb21wbGV0ZWRUYXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKFxuICAgICAgKHRhc2spID0+IHRhc2suZ2V0U3RhdHVzKCkgPT09IFwiaW5jb21wbGV0ZVwiXG4gICAgKTtcbiAgICByZXR1cm4gaW5jb21wbGV0ZWRUYXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0RGF0ZSgpID09PSBjdXJyZW50RGF0ZSk7XG4gIH0sXG5cbiAgZ2V0VXBjb21pbmdUYXNrcygpIHtcbiAgICBjb25zdCBpbmNvbXBsZXRlZFRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoXG4gICAgICAodGFzaykgPT4gdGFzay5nZXRTdGF0dXMoKSA9PT0gXCJpbmNvbXBsZXRlXCJcbiAgICApO1xuICAgIHJldHVybiBpbmNvbXBsZXRlZFRhc2tzLnNvcnQoXG4gICAgICAoYSwgYikgPT4gbmV3IERhdGUoYS5nZXREYXRlKCkpIC0gbmV3IERhdGUoYi5nZXREYXRlKCkpXG4gICAgKTtcbiAgfSxcblxuICBnZXRDb21wbGV0ZWRUYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suZ2V0U3RhdHVzKCkgIT09IFwiaW5jb21wbGV0ZVwiKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0O1xuIiwiaW1wb3J0IGNyZWF0ZUNhcmQgZnJvbSBcIi4vY2FyZFwiO1xuXG5jb25zdCBwcm9qZWN0QnRuID0gKG5ld1Byb2plY3QpID0+IHtcbiAgY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG5ld1Byb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3RCdG5cIik7XG4gIG5ld1Byb2plY3RCdG4udGV4dENvbnRlbnQgPSBuZXdQcm9qZWN0LmdldE5hbWUoKTtcblxuICByZXR1cm4gbmV3UHJvamVjdEJ0bjtcbn07XG5cbi8vIEdlbmVyYXRlcyB0YWIgcGFnZVxuY29uc3QgcmVuZGVyID0gKG5hbWUsIHByb2plY3QsIHRhc2tzKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50UHJvamVjdFwiKTtcbiAgY3VycmVudFByb2plY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBwcm9qZWN0LmdldElkKCkpO1xuICB3aGlsZSAoY3VycmVudFByb2plY3QuZmlyc3RDaGlsZCkge1xuICAgIGN1cnJlbnRQcm9qZWN0LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cbiAgLy8gY3VycmVudFByb2plY3QuY2xhc3NMaXN0LnRvZ2dsZSgpIGNoYW5nZSBmcm9tIHJhbmRlciA9IChuYW1lLCB0YWtzKSB0byByZW5kZXIgKHByb2plY3QsIHRhc2tzKS5cbiAgLy8gdGhpcyB3YXkgd2UgaGF2ZSBwcm9qZWN0LmdldE5hbWUgd2hpY2ggd2UgY2FuIGZlZWQgdG8gdG9nZ2xlIGNsYXNzLlxuICAvLyBUaGVuLCB3ZSBjYW4gdXNlIGNsYXNzIG5hbWUgaW4gaW5kZXggdG8gaW1taWRpYXRlbHkgcmVuZGVyXG4gIC8vIHRoZSBwYWdlIGRlcGVuZGluZyBvbiB3aGF0IGN1cnJlbnQgcGFnZSBpcyBkaXNwbGF5ZWRcbiAgLy8gSWYgd2UncmUgb24gdG9kYXlzIHRhc2tzIHNjcmVlbiBhbmQgd2UgYWRkIGEgbmV3IHRhc2sgdGhhdHMgZHVlIHRvZGF5LFxuICAvLyBpdCBzaG91bGQgcmVmcmVzaCBpbW1pZGlhdGVseVxuXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBuYW1lO1xuICBjdXJyZW50UHJvamVjdC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY3VycmVudFByb2plY3QuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FyZChwcm9qZWN0LCB0YXNrKSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgcHJvamVjdEJ0biwgcmVuZGVyIH07XG4iLCJjb25zdCB0YXNrID0gKG5hbWUsIGluZm8sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiAoe1xuICBuYW1lLFxuICBpbmZvLFxuICBkdWVEYXRlLFxuICBwcmlvcml0eSxcbiAgc3RhdHVzOiBcImluY29tcGxldGVcIixcbiAgaWQ6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAxLFxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH0sXG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9LFxuXG4gIHNldEluZm8oaW5mbykge1xuICAgIHRoaXMuaW5mbyA9IGluZm87XG4gIH0sXG5cbiAgZ2V0SW5mbygpIHtcbiAgICByZXR1cm4gdGhpcy5pbmZvO1xuICB9LFxuXG4gIHNldERhdGUoZHVlRGF0ZSkge1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIH0sXG5cbiAgZ2V0RGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICB9LFxuXG4gIHNldFByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9LFxuXG4gIGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICB9LFxuXG4gIGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9LFxuXG4gIGdldFN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0dXM7XG4gIH0sXG5cbiAgc3dpdGNoU3RhdHVzKCkge1xuICAgIHRoaXMuc3RhdHVzID09PSBcImluY29tcGxldGVcIlxuICAgICAgPyAodGhpcy5zdGF0dXMgPSBcImNvbXBsZXRlXCIpXG4gICAgICA6ICh0aGlzLnN0YXR1cyA9IFwiaW5jb21wbGV0ZVwiKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0YXNrO1xuIiwiaW1wb3J0IHByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jb25zdCB0b2RvID0gKCkgPT4gKHtcbiAgcHJvamVjdHM6IFtwcm9qZWN0KFwiSW5ib3hcIildLFxuXG4gIHNldFByb2plY3RzKHByb2plY3QpIHtcbiAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdDtcbiAgfSxcblxuICBnZXRQcm9qZWN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcbiAgfSxcblxuICBnZXRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lKTtcbiAgfSxcblxuICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb2plY3RzLmZpbmQoXG4gICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gbmV3UHJvamVjdC5nZXROYW1lKClcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG87XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHRhc2sgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgcHJvamVjdEJ0biwgcmVuZGVyIH0gZnJvbSBcIi4vcmVuZGVyXCI7XG5pbXBvcnQgZm9ybWF0Q3VycmVudERhdGUgZnJvbSBcIi4vZm9ybWF0Q3VycmVudERhdGVcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5jb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3VGFza0Zvcm1cIik7XG5jb25zdCBuZXdUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdUYXNrQnRuXCIpO1xuY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RGb3JtXCIpO1xuY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3UHJvamVjdEJ0blwiKTtcbmNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFRhc2tGb3JtXCIpO1xuY29uc3Qgc2VsZWN0UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdFByb2plY3RGb3JtXCIpO1xuY29uc3QgaW5ib3hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluYm94QnRuXCIpO1xuY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5QnRuXCIpO1xuY29uc3QgdXBjb21pbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwY29taW5nQnRuXCIpO1xuY29uc3QgY29tcGxldGVkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wbGV0ZWRCdG5cIik7XG5jb25zdCBzaWRlYmFyUHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJQcm9qZWN0QnRuc1wiKTtcbmNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50UHJvamVjdFwiKTtcblxuY29uc3QgdG9kb0xpc3QgPSB0b2RvKCk7XG5cbi8vIENyZWF0ZXMgRGVmYXVsdCBUYXNrIHRvIGRpc3BsYXlcbnRvZG9MaXN0XG4gIC5nZXRQcm9qZWN0KFwiSW5ib3hcIilcbiAgLmFkZFRhc2soXG4gICAgdGFzayhcIkZpcnN0IFRhc2tcIiwgXCJUaGlzIGlzIG15IGZpcnN0IHRhc2shXCIsIGZvcm1hdEN1cnJlbnREYXRlKCksIFwiSGlnaFwiKVxuICApO1xucmVuZGVyKFxuICBcIkluYm94XCIsXG4gIHRvZG9MaXN0LmdldFByb2plY3QoXCJJbmJveFwiKSxcbiAgdG9kb0xpc3QuZ2V0UHJvamVjdChcIkluYm94XCIpLmdldFRhc2tzKClcbik7XG5cbm5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbmV3VGFza0Zvcm0uc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICBuZXdUYXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG59KTtcblxubmV3VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IG5ld1Rhc2sgPSB0YXNrKFxuICAgIG5ld1Rhc2tGb3JtLnRhc2tOYW1lLnZhbHVlLFxuICAgIG5ld1Rhc2tGb3JtLnRhc2tJbmZvLnZhbHVlLFxuICAgIG5ld1Rhc2tGb3JtLnRhc2tEdWVEYXRlLnZhbHVlLFxuICAgIG5ld1Rhc2tGb3JtLnRhc2tQcmlvcml0eS52YWx1ZVxuICApO1xuXG4gIHRvZG9MaXN0LmdldFByb2plY3QoXCJJbmJveFwiKS5hZGRUYXNrKG5ld1Rhc2spO1xuICByZW5kZXIoXG4gICAgXCJJbmJveFwiLFxuICAgIHRvZG9MaXN0LmdldFByb2plY3QoXCJJbmJveFwiKSxcbiAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KFwiSW5ib3hcIikuZ2V0VGFza3MoKVxuICApO1xuXG4gIG5ld1Rhc2tGb3JtLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgbmV3VGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gIG5ld1Rhc2tGb3JtLnJlc2V0KCk7XG59KTtcblxubmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBuZXdQcm9qZWN0Rm9ybS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gIG5ld1Byb2plY3RGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbn0pO1xuXG5uZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbmFtZSA9IG5ld1Byb2plY3RGb3JtLnByb2plY3ROYW1lLnZhbHVlO1xuICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdChuYW1lKTtcbiAgdG9kb0xpc3QuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgY29uc3QgbmV3UHJvamVjdEJ0biA9IHByb2plY3RCdG4obmV3UHJvamVjdCk7XG4gIG5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZW5kZXIoXG4gICAgICBuYW1lLFxuICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdChuYW1lKSxcbiAgICAgIHRvZG9MaXN0LmdldFByb2plY3QobmFtZSkuZ2V0VGFza3MoKVxuICAgICk7XG4gIH0pO1xuXG4gIC8vIEFkZHMgbmV3IHByb2plY3RzIHRvIHRoZSBhZGQgdG8gcHJvamVjdCBmb3JtXG4gIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gbmFtZTtcbiAgc2VsZWN0UHJvamVjdEZvcm0ucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKS5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcblxuICBzaWRlYmFyUHJvamVjdEJ0bnMuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ0bik7XG5cbiAgbmV3UHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgbmV3UHJvamVjdEZvcm0uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICBuZXdQcm9qZWN0Rm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbn0pO1xuXG5pbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgcmVuZGVyKFxuICAgIFwiSW5ib3hcIixcbiAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KFwiSW5ib3hcIiksXG4gICAgdG9kb0xpc3QuZ2V0UHJvamVjdChcIkluYm94XCIpLmdldFRhc2tzKClcbiAgKVxuKTtcbnRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICByZW5kZXIoXG4gICAgXCJUb2RheSdzIFRhc2tzXCIsXG4gICAgdG9kb0xpc3QuZ2V0UHJvamVjdChcIkluYm94XCIpLFxuICAgIHRvZG9MaXN0LmdldFByb2plY3QoXCJJbmJveFwiKS5nZXRUb2RheVRhc2tzKClcbiAgKVxuKTtcbnVwY29taW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxuICByZW5kZXIoXG4gICAgXCJUaGlzIFdlZWsncyBUYXNrc1wiLFxuICAgIHRvZG9MaXN0LmdldFByb2plY3QoXCJJbmJveFwiKSxcbiAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KFwiSW5ib3hcIikuZ2V0VXBjb21pbmdUYXNrcygpXG4gIClcbik7XG5jb21wbGV0ZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcmVuZGVyKFxuICAgIFwiQ29tcGxldGVkXCIsXG4gICAgdG9kb0xpc3QuZ2V0UHJvamVjdChcIkluYm94XCIpLFxuICAgIHRvZG9MaXN0LmdldFByb2plY3QoXCJJbmJveFwiKS5nZXRDb21wbGV0ZWRUYXNrcygpXG4gICk7XG4gIGNvbnN0IGNvbXBsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50UHJvamVjdCBidXR0b25cIik7XG4gIC8vIGlmIChjb21wbGV0ZUJ0bikgY29tcGxldGVCdG4udGV4dENvbnRlbnQgPSAnTWFyayBBcyBJbmNvbXBsZXRlJ1xuICBjb25zdCBhbGxCdG5zID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmN1cnJlbnRQcm9qZWN0IGltZzpub3QoOmZpcnN0LWNoaWxkKVwiKVxuICApO1xuICBhbGxCdG5zLmZvckVhY2goKGJ0bikgPT4gYnRuLnJlbW92ZSgpKTtcbn0pO1xuXG5lZGl0VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGFjdGl2ZVByb2plY3QgPSB0b2RvTGlzdFxuICAgIC5nZXRQcm9qZWN0cygpXG4gICAgLmZpbmQoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5nZXRJZCgpID09IGN1cnJlbnRQcm9qZWN0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIilcbiAgICApO1xuICBjb25zdCBlZGl0VGFza0Zvcm1JZCA9IGVkaXRUYXNrRm9ybS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpO1xuXG4gIGNvbnN0IGVkaXRlZFRhc2sgPSBhY3RpdmVQcm9qZWN0XG4gICAgLmdldFRhc2tzKClcbiAgICAuZmluZCgodGFzaykgPT4gdGFzay5nZXRJZCgpID09IGVkaXRUYXNrRm9ybUlkKTtcblxuICBlZGl0ZWRUYXNrLnNldE5hbWUoZWRpdFRhc2tGb3JtLnRhc2tOYW1lLnZhbHVlKTtcbiAgZWRpdGVkVGFzay5zZXRJbmZvKGVkaXRUYXNrRm9ybS50YXNrSW5mby52YWx1ZSk7XG4gIGVkaXRlZFRhc2suc2V0RGF0ZShlZGl0VGFza0Zvcm0udGFza0R1ZURhdGUudmFsdWUpO1xuICBlZGl0ZWRUYXNrLnNldFByaW9yaXR5KGVkaXRUYXNrRm9ybS50YXNrUHJpb3JpdHkudmFsdWUpO1xuXG4gIGVkaXRUYXNrRm9ybS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gIGVkaXRUYXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgcmVuZGVyKGFjdGl2ZVByb2plY3QuZ2V0TmFtZSgpLCBhY3RpdmVQcm9qZWN0LCBhY3RpdmVQcm9qZWN0LmdldFRhc2tzKCkpO1xufSk7XG5cbnNlbGVjdFByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gdG9kb0xpc3RcbiAgICAuZ2V0UHJvamVjdHMoKVxuICAgIC5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0SWQoKSA9PSBjdXJyZW50UHJvamVjdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpXG4gICAgKTtcbiAgY29uc3Qgc2VsZWN0UHJvamVjdEZvcm1JZCA9IHNlbGVjdFByb2plY3RGb3JtLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG4gIGNvbnN0IHNlbGVjdGVkVGFzayA9IGFjdGl2ZVByb2plY3RcbiAgICAuZ2V0VGFza3MoKVxuICAgIC5maW5kKCh0YXNrKSA9PiB0YXNrLmdldElkKCkgPT0gc2VsZWN0UHJvamVjdEZvcm1JZCk7XG5cbiAgdG9kb0xpc3RcbiAgICAuZ2V0UHJvamVjdChzZWxlY3RQcm9qZWN0Rm9ybS5wcm9qZWN0TGlzdC52YWx1ZSlcbiAgICAuYWRkVGFzayhzZWxlY3RlZFRhc2spO1xuXG4gIHRvZG9MaXN0LmdldFByb2plY3QoYWN0aXZlUHJvamVjdC5nZXROYW1lKCkpLmRlbFRhc2soc2VsZWN0ZWRUYXNrLmdldE5hbWUoKSk7XG5cbiAgc2VsZWN0UHJvamVjdEZvcm0uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICBzZWxlY3RQcm9qZWN0Rm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgcmVuZGVyKGFjdGl2ZVByb2plY3QuZ2V0TmFtZSgpLCBhY3RpdmVQcm9qZWN0LCBhY3RpdmVQcm9qZWN0LmdldFRhc2tzKCkpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=