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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root {\n\n}\n\nhtml {\n    height: 100vh;\n    width: 100vw;\n}\n\nbody {\n    height: 100%;\n    width: 100%;\n}\n\n.mainWrapper {\n    position: relative;\n    padding: 0 100px;\n    width: 100%;\n    height: 100%;  \n    display: grid;\n    grid-template-columns: minmax(150px, 15%) 1fr;\n    grid-template-rows: 5% 1fr;\n}\n\n.nav {\n    grid-column: span 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.nav div {\n    width: 50%;\n}\n\n.sidebar {\n    border: 1px solid black; \n}\n\n.mainGroup, .projectGroup {   \n    margin: 10px;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.mainGroup button, .projectGroup button {\n    margin: 10px 0;\n}\n\n.addTaskBtn {\n    position: absolute;\n    right: 0;\n    top: 0;\n}\n\n#projectForm {\n    width: 250px;\n    height: 250px;\n    position: fixed;\n    margin: 0 auto;\n    left: calc(50% - 125px);\n    top: calc(50% - 125px);\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    display: none;\n    flex-direction: column;\n}\n\n#taskForm, #editForm {\n    width: 370px;\n    height: 370px;\n    position: fixed;\n    margin: 0 auto;\n    left: calc(50% - 185px);\n    top: calc(50% - 185px);\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    display: none;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#addToProjectForm {\n    width: 250px;\n    height: 250px;\n    position: fixed;\n    margin: 0 auto;\n    left: calc(50% - 125px);\n    top: calc(50% - 125px);\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    display: none;\n    flex-direction: column;\n    justify-content: space-between;\n    z-index: 2;\n}\n\n.project {\n    border: 1px solid black;\n    display: none;\n    flex-direction: column;\n}\n\n.inbox {\n    display: flex;\n}\n\n.today {\n    display: none;\n}\n\n.upcoming {\n    display: none;\n}\n\n.completed {\n    display: none;\n}\n\n.card {\n    position: relative;\n    margin: 10px;\n    padding: 10px;\n}\n\n.card p {\n    padding: 5px;\n}\n\n.lowPriority {\n    background-color: blue;\n}\n\n.medPriority {\n    background-color: gold;\n}\n\n.highPriority {\n    background-color: rgb(228, 54, 54);\n}\n\n.btnWrapper {\n    display: flex;\n    gap: 10px;\n}\n\n.collapsible {\n    color: white;\n    cursor: pointer;\n    padding: 18px;\n    width: 100%;\n    border: none;\n    text-align: left;\n    outline: none;\n    font-size: 15px;\n}\n\n.activeCard, .collapsible:hover {\n    filter: brightness(85%);\n}\n\n.cardContent {\n    padding: 0 18px;\n    display: none;\n    flex-direction: column;\n    overflow: hidden;\n    background-color: #f1f1f1;\n    max-height: 0;\n    transition: max-height 0.2s ease-out;\n}\n\n.collapsible:after {\n    content: '\\02795';\n    font-size: 13px;\n    color: white;\n    float: right;\n    margin-left: 5px;\n}\n\n.activeCard:after {\n    content: \"\\2796\"; \n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,yCAAyC;AAC7C;;AAEA;;AAEA;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,6CAA6C;IAC7C,0BAA0B;AAC9B;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,MAAM;AACV;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;IACf,cAAc;IACd,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;IACf,cAAc;IACd,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;IACf,cAAc;IACd,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,UAAU;AACd;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,aAAa;IACb,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,yBAAyB;IACzB,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root {\n\n}\n\nhtml {\n    height: 100vh;\n    width: 100vw;\n}\n\nbody {\n    height: 100%;\n    width: 100%;\n}\n\n.mainWrapper {\n    position: relative;\n    padding: 0 100px;\n    width: 100%;\n    height: 100%;  \n    display: grid;\n    grid-template-columns: minmax(150px, 15%) 1fr;\n    grid-template-rows: 5% 1fr;\n}\n\n.nav {\n    grid-column: span 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.nav div {\n    width: 50%;\n}\n\n.sidebar {\n    border: 1px solid black; \n}\n\n.mainGroup, .projectGroup {   \n    margin: 10px;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.mainGroup button, .projectGroup button {\n    margin: 10px 0;\n}\n\n.addTaskBtn {\n    position: absolute;\n    right: 0;\n    top: 0;\n}\n\n#projectForm {\n    width: 250px;\n    height: 250px;\n    position: fixed;\n    margin: 0 auto;\n    left: calc(50% - 125px);\n    top: calc(50% - 125px);\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    display: none;\n    flex-direction: column;\n}\n\n#taskForm, #editForm {\n    width: 370px;\n    height: 370px;\n    position: fixed;\n    margin: 0 auto;\n    left: calc(50% - 185px);\n    top: calc(50% - 185px);\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    display: none;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#addToProjectForm {\n    width: 250px;\n    height: 250px;\n    position: fixed;\n    margin: 0 auto;\n    left: calc(50% - 125px);\n    top: calc(50% - 125px);\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    display: none;\n    flex-direction: column;\n    justify-content: space-between;\n    z-index: 2;\n}\n\n.project {\n    border: 1px solid black;\n    display: none;\n    flex-direction: column;\n}\n\n.inbox {\n    display: flex;\n}\n\n.today {\n    display: none;\n}\n\n.upcoming {\n    display: none;\n}\n\n.completed {\n    display: none;\n}\n\n.card {\n    position: relative;\n    margin: 10px;\n    padding: 10px;\n}\n\n.card p {\n    padding: 5px;\n}\n\n.lowPriority {\n    background-color: blue;\n}\n\n.medPriority {\n    background-color: gold;\n}\n\n.highPriority {\n    background-color: rgb(228, 54, 54);\n}\n\n.btnWrapper {\n    display: flex;\n    gap: 10px;\n}\n\n.collapsible {\n    color: white;\n    cursor: pointer;\n    padding: 18px;\n    width: 100%;\n    border: none;\n    text-align: left;\n    outline: none;\n    font-size: 15px;\n}\n\n.activeCard, .collapsible:hover {\n    filter: brightness(85%);\n}\n\n.cardContent {\n    padding: 0 18px;\n    display: none;\n    flex-direction: column;\n    overflow: hidden;\n    background-color: #f1f1f1;\n    max-height: 0;\n    transition: max-height 0.2s ease-out;\n}\n\n.collapsible:after {\n    content: '\\02795';\n    font-size: 13px;\n    color: white;\n    float: right;\n    margin-left: 5px;\n}\n\n.activeCard:after {\n    content: \"\\2796\"; \n}"],"sourceRoot":""}]);
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

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCollapsibles": () => (/* binding */ addCollapsibles),
/* harmony export */   "addProjectPages": () => (/* binding */ addProjectPages),
/* harmony export */   "del": () => (/* binding */ del),
/* harmony export */   "edit": () => (/* binding */ edit),
/* harmony export */   "markComplete": () => (/* binding */ markComplete),
/* harmony export */   "showAddToProjectForm": () => (/* binding */ showAddToProjectForm)
/* harmony export */ });
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ "./src/forms.js");
// bruh, we could make each of these functions as properties to an obj.
// like have an 'event' module which is just an obj
// and each obj prop is each of these functions:



const addCollapsibles = () => {
  const allCollapsibles = Array.from(document.querySelectorAll(".collapsible"));
  allCollapsibles.forEach((collapsible) => {
    collapsible.addEventListener("click", () => {
      collapsible.classList.toggle("activeCard");
      const cardContent = collapsible.nextElementSibling;
      if (cardContent.style.display === "flex") {
        cardContent.style.display = "none";
      } else {
        cardContent.style.display = "flex";
      }
      if (cardContent.style.maxHeight) {
        cardContent.style.maxHeight = null;
      } else {
        cardContent.style.maxHeight = `${cardContent.scrollHeight}px`;
      }
    });
  });
};

const markComplete = (mainArray, completedArray) => {
  const markCompleteBtns = Array.from(
    document.querySelectorAll(".addToCompletedBtn")
  );
  markCompleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.parentElement.parentElement.parentElement; // this is the card itself
      const cardId = parseInt(card.dataset.id, 10);
      mainArray.forEach((task) => {
        if (task.id === cardId) {
          completedArray.push(task);
          mainArray.splice(mainArray.indexOf(task), 1);
        }
      });
      removeCard(card);
    });
  });
};

const del = (mainArray) => {
  const delBtns = Array.from(document.querySelectorAll(".delBtn"));
  delBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.parentElement.parentElement.parentElement; // this is the card itself
      const cardId = parseInt(card.dataset.id, 10);
      mainArray.forEach((task) => {
        if (task.id === cardId) {
          mainArray.splice(mainArray.indexOf(task), 1);
        }
      });
      removeCard(card);
    });
  });
};

// click edit opens form
// get the cards id
// use cardid to get task in arrays id
// get that taks info and place it in form
// when that form is submitted, replace the same task in the array with this "new" task
const edit = (mainArray) => {
  const editBtns = Array.from(document.querySelectorAll(".editBtn"));
  editBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const editForm = document.getElementById("editForm");
      editForm.style.display = "flex";
      const card = e.target.parentElement.parentElement.parentElement;
      const cardId = parseInt(card.dataset.id, 10);
      mainArray.forEach((task) => {
        if (task.id === cardId) {
          editForm.title.value = task.title;
          editForm.description.value = task.description;
          editForm.dueDate.value = task.dueDate;
          editForm.priority.value = task.priority;
          updateTask(card, mainArray);
        }
      });
    });
  });
};

// Shows Add To Project Form
const showAddToProjectForm = (mainArray) => {
  const addToProjectBtns = Array.from(
    document.querySelectorAll(".addToProjectBtn")
  );
  addToProjectBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const allGroups = Array.from(
        document.querySelectorAll(".projectGroupBtn")
      );
      if (allGroups.length === 0) return;
      const addToProjectForm = document.getElementById("addToProjectForm"); // the form to select
      addToProjectForm.style.display = "flex"; // makes form visible
      const card = e.target.parentElement.parentElement.parentElement; // this is the card,
      addOptions(allGroups);
      addProjectToPage(card, mainArray);
    });
  });
};

// Adds options to project form dropdown
function addOptions(allGroups) {
  // Deletes old options in case previous project pages were deleted or renamed
  const previousOptions = Array.from(document.querySelectorAll("option"));
  previousOptions.forEach((option) => option.remove());

  const addToProjectForm = document.getElementById("addToProjectForm");
  // Takes the name of each existing project & appends an option to the form dropdown
  allGroups.forEach((group) => {
    const option = document.createElement("option");
    option.textContent = group.textContent;
    option.value = group.textContent;
    addToProjectForm.currentProjects.appendChild(option);
  });
}

function addProjectToPage(card, mainArray) {
  const addToProjectForm = document.getElementById("addToProjectForm");
  addToProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const projectName = addToProjectForm.currentProjects.value;
    // gets the project page where the card will be moved to
    const projectPage = document.getElementById(projectName);

    //
    const cardId = parseInt(card.dataset.id, 10);
    mainArray.forEach((task) => {
      if (task.id === cardId) {
        mainArray.splice(mainArray.indexOf(task), 1);
      }
    });
    projectPage.appendChild(card); // moves the selected card to page
    (0,_forms__WEBPACK_IMPORTED_MODULE_0__.clearForm)(addToProjectForm);
  });
}

function removeCard(card) {
  // Deletes the card itself, seperate from the task being removed from the main
  const allPages = Array.from(document.querySelectorAll(".project"));
  allPages.forEach((page) => {
    const allCards = Array.from(page.children);
    const cardId = parseInt(card.dataset.id, 10);
    allCards.forEach((pageCard) => {
      if (parseInt(pageCard.dataset.id, 10) === cardId) {
        card.remove();
      }
    });
  });
}

function updateTask(card, mainArray) {
  const editForm = document.getElementById("editForm");
  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const cardId = parseInt(card.dataset.id, 10);
    mainArray.forEach((task) => {
      if (task.id === cardId) {
        task.title = editForm.title.value;
        task.description = editForm.description.value;
        task.dueDate = editForm.dueDate.value;
        task.priority = editForm.priority.value;
      }
    });
    (0,_forms__WEBPACK_IMPORTED_MODULE_0__.clearForm)(editForm);
  });
}

const addProjectPages = () => {
  const allGroupBtns = Array.from(
    document.querySelectorAll(".projectGroupBtn")
  );
  allGroupBtns.forEach((groupBtn) => {
    groupBtn.addEventListener("click", () => {
      const allProjects = document.querySelectorAll(".project");
      allProjects.forEach((project) => (project.style.display = "none"));
      const page = document.getElementById(groupBtn.textContent);
      page.style.display = "flex";
    });
  });
};




/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./src/buttons.js");



const createTask = (title, description, dueDate, priority, project) => ({
  title,
  description,
  dueDate,
  priority,
  project,
  id: Math.floor(Math.random() * 101),
  createCard() {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = this.id;

    const cardContent = document.createElement("div");
    cardContent.classList.add("cardContent");

    const collapsible = document.createElement("button");
    collapsible.classList.add("collapsible");
    collapsible.textContent = this.title;

    const cardDescription = document.createElement("p");
    cardDescription.textContent = `Note: ${this.description}`;

    const cardDueDate = document.createElement("p");
    cardDueDate.textContent = `Due Date: ${this.dueDate}`;

    if (this.priority === "low") {
      collapsible.classList.add("lowPriority");
    } else if (this.priority === "med") {
      collapsible.classList.add("medPriority");
    } else if (this.priority === "high") {
      collapsible.classList.add("highPriority");
    }

    cardContent.appendChild(cardDescription);
    cardContent.appendChild(cardDueDate);
    cardContent.appendChild((0,_render__WEBPACK_IMPORTED_MODULE_0__.actionBtns)());
    card.appendChild(collapsible);
    card.appendChild(cardContent);

    return card;
  },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);


/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearForm": () => (/* binding */ clearForm),
/* harmony export */   "createProjectForm": () => (/* binding */ createProjectForm),
/* harmony export */   "createSelectProjectForm": () => (/* binding */ createSelectProjectForm),
/* harmony export */   "createTaskForm": () => (/* binding */ createTaskForm)
/* harmony export */ });
const createTaskForm = () => {
  const form = document.createElement('form');

  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Title:';
  titleLabel.for = 'title';

  const titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.id = 'title';
  titleInput.name = 'title';

  const descriptionLabel = document.createElement('label');
  descriptionLabel.textContent = 'Description:';
  descriptionLabel.for = 'description';

  const descriptionInput = document.createElement('textarea');
  descriptionInput.id = 'description';
  descriptionInput.name = 'description';

  const dueDateLabel = document.createElement('label');
  dueDateLabel.textContent = 'Due Date:';
  dueDateLabel.for = 'dueDate';

  const dueDateInput = document.createElement('input');
  dueDateInput.type = 'date';
  dueDateInput.id = 'dueDate';
  dueDateInput.name = 'dueDate';

  const priorityLabel = document.createElement('label');
  priorityLabel.textContent = 'Priority:';
  priorityLabel.for = 'priority';

  const priorityInput = document.createElement('select');
  priorityInput.name = 'prorities';
  priorityInput.id = 'priority';

  const none = document.createElement('option');
  none.textContent = 'None';
  none.value = 'none';
  const low = document.createElement('option');
  low.textContent = 'Low';
  low.value = 'low';
  const med = document.createElement('option');
  med.textContent = 'Medium';
  med.value = 'med';
  const high = document.createElement('option');
  high.textContent = 'High';
  high.value = 'high';

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Add Task';

  form.appendChild(titleLabel);
  form.appendChild(titleInput);
  form.appendChild(descriptionLabel);
  form.appendChild(descriptionInput);
  form.appendChild(dueDateLabel);
  form.appendChild(dueDateInput);
  form.appendChild(priorityLabel);
  form.appendChild(priorityInput);
  priorityInput.appendChild(none);
  priorityInput.appendChild(low);
  priorityInput.appendChild(med);
  priorityInput.appendChild(high);
  form.appendChild(submitBtn);

  return form;
};

const createProjectForm = () => {
  const projectForm = document.createElement('form');
  projectForm.id = 'projectForm';

  const projectNameLabel = document.createElement('label');
  projectNameLabel.textContent = 'Project Name: ';
  projectNameLabel.for = 'projectName';

  const projectNameInput = document.createElement('input');
  projectNameInput.type = 'text';
  projectNameInput.id = 'projectName';
  projectNameInput.name = 'projectName';

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Create New Project';

  projectForm.appendChild(projectNameLabel);
  projectForm.appendChild(projectNameInput);
  projectForm.appendChild(submitBtn);

  return projectForm;
};

const createSelectProjectForm = () => {
  const addToProjectForm = document.createElement('form');
  addToProjectForm.id = 'addToProjectForm';

  const chooseProjectLabel = document.createElement('label');
  chooseProjectLabel.textContent = 'Select a project: ';
  chooseProjectLabel.for = 'currentProjects';

  const currentProjects = document.createElement('select');
  currentProjects.name = 'currentProjects';
  currentProjects.id = 'currentProjects';

  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Add to Project';

  addToProjectForm.appendChild(chooseProjectLabel);
  addToProjectForm.appendChild(currentProjects);
  addToProjectForm.appendChild(submitBtn);

  return addToProjectForm;
};

const clearForm = (form) => {
  form.style.display = 'none';
  const allElements = Array.from(form.querySelectorAll('input'));
  allElements.forEach((element) => (element.value = ''));
  const descriptionField = document.querySelector('textarea');
  descriptionField.value = '';
};




/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionBtns": () => (/* binding */ actionBtns),
/* harmony export */   "createNav": () => (/* binding */ createNav),
/* harmony export */   "createPage": () => (/* binding */ createPage),
/* harmony export */   "createProjectGroup": () => (/* binding */ createProjectGroup),
/* harmony export */   "createSidebar": () => (/* binding */ createSidebar)
/* harmony export */ });
const createNav = () => {
  const nav = document.createElement("div");
  nav.classList.add("nav");

  const navLeft = document.createElement("div");
  const navRight = document.createElement("div");

  navLeft.textContent = "Logo";

  const addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "Add New Task";
  addTaskBtn.classList.add("addTaskBtn");

  navRight.appendChild(addTaskBtn);
  nav.appendChild(navLeft);
  nav.appendChild(navRight);

  return nav;
};

const createSidebar = () => {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  const addProjectBtn = document.createElement("button");
  addProjectBtn.classList.add("addProjectBtn");
  addProjectBtn.textContent = "New Project";

  const mainGroup = document.createElement("div");
  mainGroup.classList.add("mainGroup");

  const inboxBtn = document.createElement("button");
  inboxBtn.textContent = "Inbox";

  const todayBtn = document.createElement("button");
  todayBtn.textContent = "Today";

  const upcomingBtn = document.createElement("button");
  upcomingBtn.textContent = "Upcoming";

  const completedBtn = document.createElement("button");
  completedBtn.textContent = "Completed";

  inboxBtn.classList.add("inboxBtn");
  todayBtn.classList.add("todayBtn");
  upcomingBtn.classList.add("upcomingBtn");
  completedBtn.classList.add("completedBtn");

  sidebar.appendChild(addProjectBtn);
  sidebar.appendChild(mainGroup);
  mainGroup.appendChild(inboxBtn);
  mainGroup.appendChild(todayBtn);
  mainGroup.appendChild(upcomingBtn);
  mainGroup.appendChild(completedBtn);

  return sidebar;
};

const createProjectGroup = () => {
  const projectGroup = document.createElement("div");
  projectGroup.classList.add("projectGroup");

  return projectGroup;
};

const createPage = () => {
  const page = document.createElement("div");
  page.classList.add("project");

  return page;
};

const actionBtns = () => {
  const btnWrapper = document.createElement("div");
  btnWrapper.classList.add("btnWrapper");

  const addToCompletedBtn = document.createElement("button");
  addToCompletedBtn.textContent = "Completed";
  addToCompletedBtn.classList.add("addToCompletedBtn");

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("editBtn");

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delBtn");

  const addToProjectBtn = document.createElement("button");
  addToProjectBtn.textContent = "Add To Project";
  addToProjectBtn.classList.add("addToProjectBtn");

  btnWrapper.appendChild(addToCompletedBtn);
  btnWrapper.appendChild(editBtn);
  btnWrapper.appendChild(delBtn);
  btnWrapper.appendChild(addToProjectBtn);

  return btnWrapper;
};




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
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms */ "./src/forms.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons */ "./src/buttons.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* eslint-disable max-len */






const mainWrapper = document.querySelector(".mainWrapper");

// Renders all needed DOM elements
const nav = (0,_render__WEBPACK_IMPORTED_MODULE_0__.createNav)();
const sidebar = (0,_render__WEBPACK_IMPORTED_MODULE_0__.createSidebar)();
const taskForm = (0,_forms__WEBPACK_IMPORTED_MODULE_2__.createTaskForm)();
const editForm = (0,_forms__WEBPACK_IMPORTED_MODULE_2__.createTaskForm)();
const projectForm = (0,_forms__WEBPACK_IMPORTED_MODULE_2__.createProjectForm)();
const selectProjectForm = (0,_forms__WEBPACK_IMPORTED_MODULE_2__.createSelectProjectForm)();
const inbox = (0,_render__WEBPACK_IMPORTED_MODULE_0__.createPage)();
const today = (0,_render__WEBPACK_IMPORTED_MODULE_0__.createPage)();
const upcoming = (0,_render__WEBPACK_IMPORTED_MODULE_0__.createPage)();
const completed = (0,_render__WEBPACK_IMPORTED_MODULE_0__.createPage)();

inbox.classList.add("inbox");
today.classList.add("today");
upcoming.classList.add("upcoming");
completed.classList.add("completed");
taskForm.setAttribute("id", "taskForm");
editForm.setAttribute("id", "editForm");

mainWrapper.appendChild(nav);
mainWrapper.appendChild(sidebar);
mainWrapper.appendChild(taskForm);
mainWrapper.appendChild(editForm);
mainWrapper.appendChild(projectForm);
mainWrapper.appendChild(selectProjectForm);
mainWrapper.appendChild(inbox);
mainWrapper.appendChild(today);
mainWrapper.appendChild(upcoming);
mainWrapper.appendChild(completed);

const addTaskBtn = document.querySelector(".addTaskBtn");
const inboxBtn = document.querySelector(".inboxBtn");
const todayBtn = document.querySelector(".todayBtn");
const upcomingBtn = document.querySelector(".upcomingBtn");
const completedBtn = document.querySelector(".completedBtn");
const addProjectBtn = document.querySelector(".addProjectBtn");

// Initializes main task array
const taskList = [];
const completedTasks = [];

// Gets current date in ISO format
let currentDate = new Date();
const dd = String(currentDate.getDate()).padStart(2, "0");
const mm = String(currentDate.getMonth() + 1).padStart(2, "0");
const yyyy = currentDate.getFullYear();
currentDate = `${yyyy}-${mm}-${dd}`;

// Inbox heading
const inboxHeading = document.createElement("h1");
inboxHeading.textContent = "All Tasks";
inbox.appendChild(inboxHeading);

// Adds default example task to To-Do list
const defaultTask = (0,_createTask__WEBPACK_IMPORTED_MODULE_1__["default"])(
  "First",
  "This is my first task",
  currentDate,
  "high",
  "Project1"
);
taskList.push(defaultTask);
taskList.forEach((task) => {
  const card = task.createCard();
  inbox.appendChild(card);
  (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.addCollapsibles)();
  (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.markComplete)(taskList, completedTasks);
  (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.del)(taskList);
  // edit(taskList);
  (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.showAddToProjectForm)(taskList);
});

// Hides all pages
const hidePages = () => {
  const allProjects = document.querySelectorAll(".project");
  allProjects.forEach((project) => (project.style.display = "none"));
};

/* ----------------------------- EVENT LISTENERS ---------------------------- */

// Shows Task Form
addTaskBtn.addEventListener("click", () => {
  taskForm.style.display = "flex";
});

// Shows Project Form
addProjectBtn.addEventListener("click", () => {
  projectForm.style.display = "flex";
});

// Task Form Submit Event Listener - Adds new tasks to inbox section
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  while (inbox.firstChild) {
    inbox.firstChild.remove();
  }
  inbox.appendChild(inboxHeading);
  const newTask = (0,_createTask__WEBPACK_IMPORTED_MODULE_1__["default"])(
    taskForm.title.value,
    taskForm.description.value,
    taskForm.dueDate.value,
    taskForm.priority.value
  );
  taskList.push(newTask);
  taskList.forEach((task) => {
    const card = task.createCard();
    inbox.appendChild(card);
  });
  (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.addCollapsibles)();
  (0,_forms__WEBPACK_IMPORTED_MODULE_2__.clearForm)(taskForm);
  (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.markComplete)(taskList, completedTasks);
  (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.del)(taskList);
  // edit(taskList);
  (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.showAddToProjectForm)(taskList);
});

// Project Form Submit Event Listener - Adds a new group section with corresponding button
projectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const group = (0,_render__WEBPACK_IMPORTED_MODULE_0__.createProjectGroup)();
  const projectGroupBtn = document.createElement("button");
  projectGroupBtn.classList.add("projectGroupBtn");

  projectGroupBtn.textContent = projectForm.projectName.value;
  group.appendChild(projectGroupBtn);
  sidebar.appendChild(group);
  (0,_forms__WEBPACK_IMPORTED_MODULE_2__.clearForm)(projectForm);

  const projectPage = (0,_render__WEBPACK_IMPORTED_MODULE_0__.createPage)();
  projectPage.setAttribute("id", projectGroupBtn.textContent);

  const heading = document.createElement("h1");
  heading.textContent = projectGroupBtn.textContent;

  projectPage.appendChild(heading);
  mainWrapper.appendChild(projectPage);

  (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.addProjectPages)();
});

// Shows inbox section which shows all imcomplete tasks regardless of date
inboxBtn.addEventListener("click", () => {
  while (inbox.firstChild) {
    inbox.firstChild.remove();
  }
  inbox.appendChild(inboxHeading);
  taskList.forEach((task) => {
    const card = task.createCard();
    inbox.appendChild(card);
    (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.edit)(taskList);
  });
  (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.addCollapsibles)();
  hidePages();
  inbox.style.display = "flex";
});

// Today Section - Shows all non-completed tasks due today
todayBtn.addEventListener("click", () => {
  // Wipes old array and replaces it with most current one
  while (today.firstChild) {
    today.firstChild.remove();
  }
  // Section Heading
  const heading = document.createElement("h1");
  heading.textContent = "Today's Tasks";
  today.appendChild(heading);

  // Checks the main array and creates/appends cards for those with due dates of today
  const todayTasks = taskList.filter((task) => task.dueDate === currentDate);
  todayTasks.forEach((task) => {
    if (task.completionStatus === "yes") return;
    const card = task.createCard();
    today.appendChild(card);
  });
  (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.addCollapsibles)();
  (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.markComplete)(taskList, completedTasks);
  (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.del)(taskList);
  // edit(taskList);
  (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.showAddToProjectForm)(taskList);
  hidePages();
  today.style.display = "flex";
});

// Upcoming Section - Shows all non-completed tasks arranged from soonest to latest.
upcomingBtn.addEventListener("click", () => {
  // Since the main array is "scanned" on every click, the cards on this page are wiped to avoid duplicates each time
  while (upcoming.firstChild) {
    upcoming.firstChild.remove();
  }
  // Section Heading
  const heading = document.createElement("h1");
  heading.textContent = "Upcoming Tasks";
  upcoming.appendChild(heading);

  // Sorts main array tasks by due date
  const sortedTasks = taskList
    .slice()
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  sortedTasks.forEach((task) => {
    // If the task has been marked completed or has no due date, skip it and as it is not upcooming
    if (task.completionStatus === "yes" || task.dueDate === "") return;
    const card = task.createCard();
    upcoming.appendChild(card);
  });
  (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.addCollapsibles)();
  (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.markComplete)(taskList, completedTasks);
  (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.del)(taskList);
  // edit(taskList);
  (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.showAddToProjectForm)(taskList);
  hidePages();
  upcoming.style.display = "flex";
});

// Completed Section - Shows completed section with all completed tasks
completedBtn.addEventListener("click", () => {
  // Since the main array is "scanned" on every click, the cards on this page are wiped to avoid duplicates each time
  while (completed.firstChild) {
    completed.firstChild.remove();
  }
  // Section Heading
  const heading = document.createElement("h1");
  heading.textContent = "Completed Tasks";
  completed.appendChild(heading);

  // Scans completed tasks array and creates/appends cards into the completed section
  completedTasks.forEach((task) => {
    completed.appendChild(task.createCard());
    // const btnWrapper = completed.querySelector(".btnWrapper");
    // const allBtns = Array.from(btnWrapper.querySelectorAll("button"));
    // allBtns.forEach((btn) => {
    //   btn.remove();
    // });
    // const incompleteBtn = document.createElement("button");
    // incompleteBtn.classList.add("incompleteBtn");
    // incompleteBtn.textContent = "Mark As Incomplete";
    // btnWrapper.appendChild(incompleteBtn);
    // incompleteBtn.addEventListener("click", (e) => {
    //   taskList.push(task);
    //   completedTasks.splice(completedTasks.indexOf(task), 1);
    //   e.target.parentElement.parentElement.parentElement.remove();
    // });
  });
  (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.addCollapsibles)();
  hidePages();
  completed.style.display = "flex";
});

// TOMORROW: IN COMPLETED SECTION, DELETE BUTTONS, ADD NEW BUTTON THAT SAYS MARK INCOMPLETE, THEN WE SIMPLY FIND THE IN THE COMPLETED ARRAY, and push it to the main array
// EVERY EVENT LISTENER CAN BE A APRT OF AN EVENT LISTENER OBJ WHERE WE PASS IT THE MAIN AND COMPLETE ARRAYS AND THEN WE JUST CALL THE OBJ FUNCTION IN HERE, INDEX.
// EX: OBJ.UPCOMING WOULD STILL DO EVERYYTHING IT DOES HERE BUT NOW ITS NOTE HERE ATT ALL. THERE SHOULD BE NO ISSUES BECAUSE, IT STILL HAS ACCESS TO MAIN ARRAY.

// but if on completed page, then we would want it to only have a "mark as incomplete" button which would re-add it to the main array.
// to do this, we can make a function which checks to see the parent of the card (which should be the page) and append the buttons accordingly.

// when edit is clicked, maybe a new copy of the main form can be opened and when submit is hit these could "set" the properties of that object

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbjpyb290IHtcXG5cXG59XFxuXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluV3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMCAxMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTsgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNTBweCwgMTUlKSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNSUgMWZyO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5uYXYgZGl2IHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgXFxufVxcblxcbi5tYWluR3JvdXAsIC5wcm9qZWN0R3JvdXAgeyAgIFxcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tYWluR3JvdXAgYnV0dG9uLCAucHJvamVjdEdyb3VwIGJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4uYWRkVGFza0J0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG59XFxuXFxuI3Byb2plY3RGb3JtIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEyNXB4KTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDEyNXB4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Rhc2tGb3JtLCAjZWRpdEZvcm0ge1xcbiAgICB3aWR0aDogMzcwcHg7XFxuICAgIGhlaWdodDogMzcwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTg1cHgpO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMTg1cHgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNhZGRUb1Byb2plY3RGb3JtIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEyNXB4KTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDEyNXB4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaW5ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9kYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udXBjb21pbmcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNhcmQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmNhcmQgcCB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmxvd1ByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLm1lZFByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXG59XFxuXFxuLmhpZ2hQcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDU0LCA1NCk7XFxufVxcblxcbi5idG5XcmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY29sbGFwc2libGUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMThweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4uYWN0aXZlQ2FyZCwgLmNvbGxhcHNpYmxlOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XFxufVxcblxcbi5jYXJkQ29udGVudCB7XFxuICAgIHBhZGRpbmc6IDAgMThweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gICAgbWF4LWhlaWdodDogMDtcXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4uY29sbGFwc2libGU6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnXFxcXDAyNzk1JztcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLmFjdGl2ZUNhcmQ6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXDI3OTZcXFwiOyBcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULHlDQUF5QztBQUM3Qzs7QUFFQTs7QUFFQTs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkNBQTZDO0lBQzdDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE1BQU07QUFDVjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuXFxufVxcblxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubWFpbldyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDAgMTAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7ICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTUwcHgsIDE1JSkgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUlIDFmcjtcXG59XFxuXFxuLm5hdiB7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubmF2IGRpdiB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7IFxcbn1cXG5cXG4ubWFpbkdyb3VwLCAucHJvamVjdEdyb3VwIHsgICBcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWFpbkdyb3VwIGJ1dHRvbiwgLnByb2plY3RHcm91cCBidXR0b24ge1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuLmFkZFRhc2tCdG4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxufVxcblxcbiNwcm9qZWN0Rm9ybSB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMjVweCk7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAxMjVweCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiN0YXNrRm9ybSwgI2VkaXRGb3JtIHtcXG4gICAgd2lkdGg6IDM3MHB4O1xcbiAgICBoZWlnaHQ6IDM3MHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDE4NXB4KTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDE4NXB4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jYWRkVG9Qcm9qZWN0Rm9ybSB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMjVweCk7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAxMjVweCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmluYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvZGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnVwY29taW5nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5jYXJkIHAge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5sb3dQcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5tZWRQcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxufVxcblxcbi5oaWdoUHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCA1NCwgNTQpO1xcbn1cXG5cXG4uYnRuV3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmNvbGxhcHNpYmxlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDE4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmFjdGl2ZUNhcmQsIC5jb2xsYXBzaWJsZTpob3ZlciB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xcbn1cXG5cXG4uY2FyZENvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAwIDE4cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcXG59XFxuXFxuLmNvbGxhcHNpYmxlOmFmdGVyIHtcXG4gICAgY29udGVudDogJ1xcXFwwMjc5NSc7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5hY3RpdmVDYXJkOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXFwyNzk2XFxcIjsgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBicnVoLCB3ZSBjb3VsZCBtYWtlIGVhY2ggb2YgdGhlc2UgZnVuY3Rpb25zIGFzIHByb3BlcnRpZXMgdG8gYW4gb2JqLlxuLy8gbGlrZSBoYXZlIGFuICdldmVudCcgbW9kdWxlIHdoaWNoIGlzIGp1c3QgYW4gb2JqXG4vLyBhbmQgZWFjaCBvYmogcHJvcCBpcyBlYWNoIG9mIHRoZXNlIGZ1bmN0aW9uczpcblxuaW1wb3J0IHsgY2xlYXJGb3JtLCBjcmVhdGVUYXNrRm9ybSB9IGZyb20gXCIuL2Zvcm1zXCI7XG5cbmNvbnN0IGFkZENvbGxhcHNpYmxlcyA9ICgpID0+IHtcbiAgY29uc3QgYWxsQ29sbGFwc2libGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbGxhcHNpYmxlXCIpKTtcbiAgYWxsQ29sbGFwc2libGVzLmZvckVhY2goKGNvbGxhcHNpYmxlKSA9PiB7XG4gICAgY29sbGFwc2libGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbGxhcHNpYmxlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVDYXJkXCIpO1xuICAgICAgY29uc3QgY2FyZENvbnRlbnQgPSBjb2xsYXBzaWJsZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICBpZiAoY2FyZENvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gXCJmbGV4XCIpIHtcbiAgICAgICAgY2FyZENvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FyZENvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgfVxuICAgICAgaWYgKGNhcmRDb250ZW50LnN0eWxlLm1heEhlaWdodCkge1xuICAgICAgICBjYXJkQ29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FyZENvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gYCR7Y2FyZENvbnRlbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBtYXJrQ29tcGxldGUgPSAobWFpbkFycmF5LCBjb21wbGV0ZWRBcnJheSkgPT4ge1xuICBjb25zdCBtYXJrQ29tcGxldGVCdG5zID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZFRvQ29tcGxldGVkQnRuXCIpXG4gICk7XG4gIG1hcmtDb21wbGV0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgY2FyZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50OyAvLyB0aGlzIGlzIHRoZSBjYXJkIGl0c2VsZlxuICAgICAgY29uc3QgY2FyZElkID0gcGFyc2VJbnQoY2FyZC5kYXRhc2V0LmlkLCAxMCk7XG4gICAgICBtYWluQXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBpZiAodGFzay5pZCA9PT0gY2FyZElkKSB7XG4gICAgICAgICAgY29tcGxldGVkQXJyYXkucHVzaCh0YXNrKTtcbiAgICAgICAgICBtYWluQXJyYXkuc3BsaWNlKG1haW5BcnJheS5pbmRleE9mKHRhc2spLCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZW1vdmVDYXJkKGNhcmQpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGRlbCA9IChtYWluQXJyYXkpID0+IHtcbiAgY29uc3QgZGVsQnRucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxCdG5cIikpO1xuICBkZWxCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGNhcmQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDsgLy8gdGhpcyBpcyB0aGUgY2FyZCBpdHNlbGZcbiAgICAgIGNvbnN0IGNhcmRJZCA9IHBhcnNlSW50KGNhcmQuZGF0YXNldC5pZCwgMTApO1xuICAgICAgbWFpbkFycmF5LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgaWYgKHRhc2suaWQgPT09IGNhcmRJZCkge1xuICAgICAgICAgIG1haW5BcnJheS5zcGxpY2UobWFpbkFycmF5LmluZGV4T2YodGFzayksIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJlbW92ZUNhcmQoY2FyZCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gY2xpY2sgZWRpdCBvcGVucyBmb3JtXG4vLyBnZXQgdGhlIGNhcmRzIGlkXG4vLyB1c2UgY2FyZGlkIHRvIGdldCB0YXNrIGluIGFycmF5cyBpZFxuLy8gZ2V0IHRoYXQgdGFrcyBpbmZvIGFuZCBwbGFjZSBpdCBpbiBmb3JtXG4vLyB3aGVuIHRoYXQgZm9ybSBpcyBzdWJtaXR0ZWQsIHJlcGxhY2UgdGhlIHNhbWUgdGFzayBpbiB0aGUgYXJyYXkgd2l0aCB0aGlzIFwibmV3XCIgdGFza1xuY29uc3QgZWRpdCA9IChtYWluQXJyYXkpID0+IHtcbiAgY29uc3QgZWRpdEJ0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdEJ0blwiKSk7XG4gIGVkaXRCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0Rm9ybVwiKTtcbiAgICAgIGVkaXRGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGNvbnN0IGNhcmQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIGNvbnN0IGNhcmRJZCA9IHBhcnNlSW50KGNhcmQuZGF0YXNldC5pZCwgMTApO1xuICAgICAgbWFpbkFycmF5LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgaWYgKHRhc2suaWQgPT09IGNhcmRJZCkge1xuICAgICAgICAgIGVkaXRGb3JtLnRpdGxlLnZhbHVlID0gdGFzay50aXRsZTtcbiAgICAgICAgICBlZGl0Rm9ybS5kZXNjcmlwdGlvbi52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgICAgICAgZWRpdEZvcm0uZHVlRGF0ZS52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgICBlZGl0Rm9ybS5wcmlvcml0eS52YWx1ZSA9IHRhc2sucHJpb3JpdHk7XG4gICAgICAgICAgdXBkYXRlVGFzayhjYXJkLCBtYWluQXJyYXkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLyBTaG93cyBBZGQgVG8gUHJvamVjdCBGb3JtXG5jb25zdCBzaG93QWRkVG9Qcm9qZWN0Rm9ybSA9IChtYWluQXJyYXkpID0+IHtcbiAgY29uc3QgYWRkVG9Qcm9qZWN0QnRucyA9IEFycmF5LmZyb20oXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hZGRUb1Byb2plY3RCdG5cIilcbiAgKTtcbiAgYWRkVG9Qcm9qZWN0QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCBhbGxHcm91cHMgPSBBcnJheS5mcm9tKFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RHcm91cEJ0blwiKVxuICAgICAgKTtcbiAgICAgIGlmIChhbGxHcm91cHMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICBjb25zdCBhZGRUb1Byb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUb1Byb2plY3RGb3JtXCIpOyAvLyB0aGUgZm9ybSB0byBzZWxlY3RcbiAgICAgIGFkZFRvUHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyAvLyBtYWtlcyBmb3JtIHZpc2libGVcbiAgICAgIGNvbnN0IGNhcmQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDsgLy8gdGhpcyBpcyB0aGUgY2FyZCxcbiAgICAgIGFkZE9wdGlvbnMoYWxsR3JvdXBzKTtcbiAgICAgIGFkZFByb2plY3RUb1BhZ2UoY2FyZCwgbWFpbkFycmF5KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLyBBZGRzIG9wdGlvbnMgdG8gcHJvamVjdCBmb3JtIGRyb3Bkb3duXG5mdW5jdGlvbiBhZGRPcHRpb25zKGFsbEdyb3Vwcykge1xuICAvLyBEZWxldGVzIG9sZCBvcHRpb25zIGluIGNhc2UgcHJldmlvdXMgcHJvamVjdCBwYWdlcyB3ZXJlIGRlbGV0ZWQgb3IgcmVuYW1lZFxuICBjb25zdCBwcmV2aW91c09wdGlvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIikpO1xuICBwcmV2aW91c09wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiBvcHRpb24ucmVtb3ZlKCkpO1xuXG4gIGNvbnN0IGFkZFRvUHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRvUHJvamVjdEZvcm1cIik7XG4gIC8vIFRha2VzIHRoZSBuYW1lIG9mIGVhY2ggZXhpc3RpbmcgcHJvamVjdCAmIGFwcGVuZHMgYW4gb3B0aW9uIHRvIHRoZSBmb3JtIGRyb3Bkb3duXG4gIGFsbEdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gZ3JvdXAudGV4dENvbnRlbnQ7XG4gICAgb3B0aW9uLnZhbHVlID0gZ3JvdXAudGV4dENvbnRlbnQ7XG4gICAgYWRkVG9Qcm9qZWN0Rm9ybS5jdXJyZW50UHJvamVjdHMuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb1BhZ2UoY2FyZCwgbWFpbkFycmF5KSB7XG4gIGNvbnN0IGFkZFRvUHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRvUHJvamVjdEZvcm1cIik7XG4gIGFkZFRvUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGFkZFRvUHJvamVjdEZvcm0uY3VycmVudFByb2plY3RzLnZhbHVlO1xuICAgIC8vIGdldHMgdGhlIHByb2plY3QgcGFnZSB3aGVyZSB0aGUgY2FyZCB3aWxsIGJlIG1vdmVkIHRvXG4gICAgY29uc3QgcHJvamVjdFBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qZWN0TmFtZSk7XG5cbiAgICAvL1xuICAgIGNvbnN0IGNhcmRJZCA9IHBhcnNlSW50KGNhcmQuZGF0YXNldC5pZCwgMTApO1xuICAgIG1haW5BcnJheS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay5pZCA9PT0gY2FyZElkKSB7XG4gICAgICAgIG1haW5BcnJheS5zcGxpY2UobWFpbkFycmF5LmluZGV4T2YodGFzayksIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHByb2plY3RQYWdlLmFwcGVuZENoaWxkKGNhcmQpOyAvLyBtb3ZlcyB0aGUgc2VsZWN0ZWQgY2FyZCB0byBwYWdlXG4gICAgY2xlYXJGb3JtKGFkZFRvUHJvamVjdEZvcm0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2FyZChjYXJkKSB7XG4gIC8vIERlbGV0ZXMgdGhlIGNhcmQgaXRzZWxmLCBzZXBlcmF0ZSBmcm9tIHRoZSB0YXNrIGJlaW5nIHJlbW92ZWQgZnJvbSB0aGUgbWFpblxuICBjb25zdCBhbGxQYWdlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpKTtcbiAgYWxsUGFnZXMuZm9yRWFjaCgocGFnZSkgPT4ge1xuICAgIGNvbnN0IGFsbENhcmRzID0gQXJyYXkuZnJvbShwYWdlLmNoaWxkcmVuKTtcbiAgICBjb25zdCBjYXJkSWQgPSBwYXJzZUludChjYXJkLmRhdGFzZXQuaWQsIDEwKTtcbiAgICBhbGxDYXJkcy5mb3JFYWNoKChwYWdlQ2FyZCkgPT4ge1xuICAgICAgaWYgKHBhcnNlSW50KHBhZ2VDYXJkLmRhdGFzZXQuaWQsIDEwKSA9PT0gY2FyZElkKSB7XG4gICAgICAgIGNhcmQucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrKGNhcmQsIG1haW5BcnJheSkge1xuICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdEZvcm1cIik7XG4gIGVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY2FyZElkID0gcGFyc2VJbnQoY2FyZC5kYXRhc2V0LmlkLCAxMCk7XG4gICAgbWFpbkFycmF5LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLmlkID09PSBjYXJkSWQpIHtcbiAgICAgICAgdGFzay50aXRsZSA9IGVkaXRGb3JtLnRpdGxlLnZhbHVlO1xuICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gZWRpdEZvcm0uZGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgIHRhc2suZHVlRGF0ZSA9IGVkaXRGb3JtLmR1ZURhdGUudmFsdWU7XG4gICAgICAgIHRhc2sucHJpb3JpdHkgPSBlZGl0Rm9ybS5wcmlvcml0eS52YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjbGVhckZvcm0oZWRpdEZvcm0pO1xuICB9KTtcbn1cblxuY29uc3QgYWRkUHJvamVjdFBhZ2VzID0gKCkgPT4ge1xuICBjb25zdCBhbGxHcm91cEJ0bnMgPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdEdyb3VwQnRuXCIpXG4gICk7XG4gIGFsbEdyb3VwQnRucy5mb3JFYWNoKChncm91cEJ0bikgPT4ge1xuICAgIGdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcbiAgICAgIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IChwcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIikpO1xuICAgICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdyb3VwQnRuLnRleHRDb250ZW50KTtcbiAgICAgIHBhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIGFkZENvbGxhcHNpYmxlcyxcbiAgbWFya0NvbXBsZXRlLFxuICBkZWwsXG4gIGVkaXQsXG4gIHNob3dBZGRUb1Byb2plY3RGb3JtLFxuICBhZGRQcm9qZWN0UGFnZXMsXG59O1xuIiwiaW1wb3J0IHsgYWN0aW9uQnRucyB9IGZyb20gXCIuL3JlbmRlclwiO1xuaW1wb3J0IHsgYWRkQ29sbGFwc2libGVzIH0gZnJvbSBcIi4vYnV0dG9uc1wiO1xuXG5jb25zdCBjcmVhdGVUYXNrID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpID0+ICh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgcHJpb3JpdHksXG4gIHByb2plY3QsXG4gIGlkOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDEpLFxuICBjcmVhdGVDYXJkKCkge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgY2FyZC5kYXRhc2V0LmlkID0gdGhpcy5pZDtcblxuICAgIGNvbnN0IGNhcmRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiY2FyZENvbnRlbnRcIik7XG5cbiAgICBjb25zdCBjb2xsYXBzaWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29sbGFwc2libGUuY2xhc3NMaXN0LmFkZChcImNvbGxhcHNpYmxlXCIpO1xuICAgIGNvbGxhcHNpYmxlLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcblxuICAgIGNvbnN0IGNhcmREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNhcmREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBOb3RlOiAke3RoaXMuZGVzY3JpcHRpb259YDtcblxuICAgIGNvbnN0IGNhcmREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY2FyZER1ZURhdGUudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7dGhpcy5kdWVEYXRlfWA7XG5cbiAgICBpZiAodGhpcy5wcmlvcml0eSA9PT0gXCJsb3dcIikge1xuICAgICAgY29sbGFwc2libGUuY2xhc3NMaXN0LmFkZChcImxvd1ByaW9yaXR5XCIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcmlvcml0eSA9PT0gXCJtZWRcIikge1xuICAgICAgY29sbGFwc2libGUuY2xhc3NMaXN0LmFkZChcIm1lZFByaW9yaXR5XCIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcbiAgICAgIGNvbGxhcHNpYmxlLmNsYXNzTGlzdC5hZGQoXCJoaWdoUHJpb3JpdHlcIik7XG4gICAgfVxuXG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZERlc2NyaXB0aW9uKTtcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChjYXJkRHVlRGF0ZSk7XG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoYWN0aW9uQnRucygpKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNvbGxhcHNpYmxlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDb250ZW50KTtcblxuICAgIHJldHVybiBjYXJkO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2s7XG4iLCJjb25zdCBjcmVhdGVUYXNrRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTonO1xuICB0aXRsZUxhYmVsLmZvciA9ICd0aXRsZSc7XG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZSc7XG4gIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcbiAgZGVzY3JpcHRpb25MYWJlbC5mb3IgPSAnZGVzY3JpcHRpb24nO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ2Rlc2NyaXB0aW9uJztcbiAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uJztcblxuICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6JztcbiAgZHVlRGF0ZUxhYmVsLmZvciA9ICdkdWVEYXRlJztcblxuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgZHVlRGF0ZUlucHV0LmlkID0gJ2R1ZURhdGUnO1xuICBkdWVEYXRlSW5wdXQubmFtZSA9ICdkdWVEYXRlJztcblxuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xuICBwcmlvcml0eUxhYmVsLmZvciA9ICdwcmlvcml0eSc7XG5cbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBwcmlvcml0eUlucHV0Lm5hbWUgPSAncHJvcml0aWVzJztcbiAgcHJpb3JpdHlJbnB1dC5pZCA9ICdwcmlvcml0eSc7XG5cbiAgY29uc3Qgbm9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBub25lLnRleHRDb250ZW50ID0gJ05vbmUnO1xuICBub25lLnZhbHVlID0gJ25vbmUnO1xuICBjb25zdCBsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgbG93LnRleHRDb250ZW50ID0gJ0xvdyc7XG4gIGxvdy52YWx1ZSA9ICdsb3cnO1xuICBjb25zdCBtZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgbWVkLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gIG1lZC52YWx1ZSA9ICdtZWQnO1xuICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGhpZ2gudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gIGhpZ2gudmFsdWUgPSAnaGlnaCc7XG5cbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHN1Ym1pdEJ0bi50eXBlID0gJ3N1Ym1pdCc7XG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobm9uZSk7XG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobG93KTtcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChtZWQpO1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGhpZ2gpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgcmV0dXJuIGZvcm07XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIHByb2plY3RGb3JtLmlkID0gJ3Byb2plY3RGb3JtJztcblxuICBjb25zdCBwcm9qZWN0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgcHJvamVjdE5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0IE5hbWU6ICc7XG4gIHByb2plY3ROYW1lTGFiZWwuZm9yID0gJ3Byb2plY3ROYW1lJztcblxuICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcHJvamVjdE5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xuICBwcm9qZWN0TmFtZUlucHV0LmlkID0gJ3Byb2plY3ROYW1lJztcbiAgcHJvamVjdE5hbWVJbnB1dC5uYW1lID0gJ3Byb2plY3ROYW1lJztcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0QnRuLnR5cGUgPSAnc3VibWl0JztcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBOZXcgUHJvamVjdCc7XG5cbiAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVMYWJlbCk7XG4gIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lSW5wdXQpO1xuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gIHJldHVybiBwcm9qZWN0Rm9ybTtcbn07XG5cbmNvbnN0IGNyZWF0ZVNlbGVjdFByb2plY3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCBhZGRUb1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBhZGRUb1Byb2plY3RGb3JtLmlkID0gJ2FkZFRvUHJvamVjdEZvcm0nO1xuXG4gIGNvbnN0IGNob29zZVByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGNob29zZVByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9ICdTZWxlY3QgYSBwcm9qZWN0OiAnO1xuICBjaG9vc2VQcm9qZWN0TGFiZWwuZm9yID0gJ2N1cnJlbnRQcm9qZWN0cyc7XG5cbiAgY29uc3QgY3VycmVudFByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGN1cnJlbnRQcm9qZWN0cy5uYW1lID0gJ2N1cnJlbnRQcm9qZWN0cyc7XG4gIGN1cnJlbnRQcm9qZWN0cy5pZCA9ICdjdXJyZW50UHJvamVjdHMnO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXRCdG4udHlwZSA9ICdzdWJtaXQnO1xuICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnQWRkIHRvIFByb2plY3QnO1xuXG4gIGFkZFRvUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY2hvb3NlUHJvamVjdExhYmVsKTtcbiAgYWRkVG9Qcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChjdXJyZW50UHJvamVjdHMpO1xuICBhZGRUb1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgcmV0dXJuIGFkZFRvUHJvamVjdEZvcm07XG59O1xuXG5jb25zdCBjbGVhckZvcm0gPSAoZm9ybSkgPT4ge1xuICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnN0IGFsbEVsZW1lbnRzID0gQXJyYXkuZnJvbShmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpO1xuICBhbGxFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC52YWx1ZSA9ICcnKSk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xuICBkZXNjcmlwdGlvbkZpZWxkLnZhbHVlID0gJyc7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVUYXNrRm9ybSxcbiAgY3JlYXRlUHJvamVjdEZvcm0sXG4gIGNyZWF0ZVNlbGVjdFByb2plY3RGb3JtLFxuICBjbGVhckZvcm0sXG59O1xuIiwiY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcblxuICBjb25zdCBuYXZMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbmF2UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIG5hdkxlZnQudGV4dENvbnRlbnQgPSBcIkxvZ29cIjtcblxuICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIE5ldyBUYXNrXCI7XG4gIGFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZChcImFkZFRhc2tCdG5cIik7XG5cbiAgbmF2UmlnaHQuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gIG5hdi5hcHBlbmRDaGlsZChuYXZMZWZ0KTtcbiAgbmF2LmFwcGVuZENoaWxkKG5hdlJpZ2h0KTtcblxuICByZXR1cm4gbmF2O1xufTtcblxuY29uc3QgY3JlYXRlU2lkZWJhciA9ICgpID0+IHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJcIik7XG5cbiAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImFkZFByb2plY3RCdG5cIik7XG4gIGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCI7XG5cbiAgY29uc3QgbWFpbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkdyb3VwLmNsYXNzTGlzdC5hZGQoXCJtYWluR3JvdXBcIik7XG5cbiAgY29uc3QgaW5ib3hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBpbmJveEJ0bi50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcblxuICBjb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRvZGF5QnRuLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuXG4gIGNvbnN0IHVwY29taW5nQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdXBjb21pbmdCdG4udGV4dENvbnRlbnQgPSBcIlVwY29taW5nXCI7XG5cbiAgY29uc3QgY29tcGxldGVkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29tcGxldGVkQnRuLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZWRcIjtcblxuICBpbmJveEJ0bi5jbGFzc0xpc3QuYWRkKFwiaW5ib3hCdG5cIik7XG4gIHRvZGF5QnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RheUJ0blwiKTtcbiAgdXBjb21pbmdCdG4uY2xhc3NMaXN0LmFkZChcInVwY29taW5nQnRuXCIpO1xuICBjb21wbGV0ZWRCdG4uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZEJ0blwiKTtcblxuICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKG1haW5Hcm91cCk7XG4gIG1haW5Hcm91cC5hcHBlbmRDaGlsZChpbmJveEJ0bik7XG4gIG1haW5Hcm91cC5hcHBlbmRDaGlsZCh0b2RheUJ0bik7XG4gIG1haW5Hcm91cC5hcHBlbmRDaGlsZCh1cGNvbWluZ0J0bik7XG4gIG1haW5Hcm91cC5hcHBlbmRDaGlsZChjb21wbGV0ZWRCdG4pO1xuXG4gIHJldHVybiBzaWRlYmFyO1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEdyb3VwID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0R3JvdXAuY2xhc3NMaXN0LmFkZChcInByb2plY3RHcm91cFwiKTtcblxuICByZXR1cm4gcHJvamVjdEdyb3VwO1xufTtcblxuY29uc3QgY3JlYXRlUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBhZ2UuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG5cbiAgcmV0dXJuIHBhZ2U7XG59O1xuXG5jb25zdCBhY3Rpb25CdG5zID0gKCkgPT4ge1xuICBjb25zdCBidG5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnRuV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiYnRuV3JhcHBlclwiKTtcblxuICBjb25zdCBhZGRUb0NvbXBsZXRlZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFRvQ29tcGxldGVkQnRuLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZWRcIjtcbiAgYWRkVG9Db21wbGV0ZWRCdG4uY2xhc3NMaXN0LmFkZChcImFkZFRvQ29tcGxldGVkQnRuXCIpO1xuXG4gIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcImVkaXRCdG5cIik7XG5cbiAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxCdG5cIik7XG5cbiAgY29uc3QgYWRkVG9Qcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVG9Qcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJBZGQgVG8gUHJvamVjdFwiO1xuICBhZGRUb1Byb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImFkZFRvUHJvamVjdEJ0blwiKTtcblxuICBidG5XcmFwcGVyLmFwcGVuZENoaWxkKGFkZFRvQ29tcGxldGVkQnRuKTtcbiAgYnRuV3JhcHBlci5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgYnRuV3JhcHBlci5hcHBlbmRDaGlsZChkZWxCdG4pO1xuICBidG5XcmFwcGVyLmFwcGVuZENoaWxkKGFkZFRvUHJvamVjdEJ0bik7XG5cbiAgcmV0dXJuIGJ0bldyYXBwZXI7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVOYXYsIGNyZWF0ZVNpZGViYXIsIGNyZWF0ZVByb2plY3RHcm91cCwgY3JlYXRlUGFnZSwgYWN0aW9uQnRucyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IHtcbiAgY3JlYXRlTmF2LFxuICBjcmVhdGVTaWRlYmFyLFxuICBjcmVhdGVQcm9qZWN0R3JvdXAsXG4gIGNyZWF0ZVBhZ2UsXG59IGZyb20gXCIuL3JlbmRlclwiO1xuaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSBcIi4vY3JlYXRlVGFza1wiO1xuaW1wb3J0IHtcbiAgY3JlYXRlVGFza0Zvcm0sXG4gIGNyZWF0ZVByb2plY3RGb3JtLFxuICBjcmVhdGVTZWxlY3RQcm9qZWN0Rm9ybSxcbiAgY2xlYXJGb3JtLFxufSBmcm9tIFwiLi9mb3Jtc1wiO1xuaW1wb3J0IHtcbiAgYWRkQ29sbGFwc2libGVzLFxuICBtYXJrQ29tcGxldGUsXG4gIGRlbCxcbiAgZWRpdCxcbiAgc2hvd0FkZFRvUHJvamVjdEZvcm0sXG4gIGFkZFByb2plY3RQYWdlcyxcbn0gZnJvbSBcIi4vYnV0dG9uc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmNvbnN0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluV3JhcHBlclwiKTtcblxuLy8gUmVuZGVycyBhbGwgbmVlZGVkIERPTSBlbGVtZW50c1xuY29uc3QgbmF2ID0gY3JlYXRlTmF2KCk7XG5jb25zdCBzaWRlYmFyID0gY3JlYXRlU2lkZWJhcigpO1xuY29uc3QgdGFza0Zvcm0gPSBjcmVhdGVUYXNrRm9ybSgpO1xuY29uc3QgZWRpdEZvcm0gPSBjcmVhdGVUYXNrRm9ybSgpO1xuY29uc3QgcHJvamVjdEZvcm0gPSBjcmVhdGVQcm9qZWN0Rm9ybSgpO1xuY29uc3Qgc2VsZWN0UHJvamVjdEZvcm0gPSBjcmVhdGVTZWxlY3RQcm9qZWN0Rm9ybSgpO1xuY29uc3QgaW5ib3ggPSBjcmVhdGVQYWdlKCk7XG5jb25zdCB0b2RheSA9IGNyZWF0ZVBhZ2UoKTtcbmNvbnN0IHVwY29taW5nID0gY3JlYXRlUGFnZSgpO1xuY29uc3QgY29tcGxldGVkID0gY3JlYXRlUGFnZSgpO1xuXG5pbmJveC5jbGFzc0xpc3QuYWRkKFwiaW5ib3hcIik7XG50b2RheS5jbGFzc0xpc3QuYWRkKFwidG9kYXlcIik7XG51cGNvbWluZy5jbGFzc0xpc3QuYWRkKFwidXBjb21pbmdcIik7XG5jb21wbGV0ZWQuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbnRhc2tGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza0Zvcm1cIik7XG5lZGl0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXRGb3JtXCIpO1xuXG5tYWluV3JhcHBlci5hcHBlbmRDaGlsZChuYXYpO1xubWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XG5tYWluV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG5tYWluV3JhcHBlci5hcHBlbmRDaGlsZChlZGl0Rm9ybSk7XG5tYWluV3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG5tYWluV3JhcHBlci5hcHBlbmRDaGlsZChzZWxlY3RQcm9qZWN0Rm9ybSk7XG5tYWluV3JhcHBlci5hcHBlbmRDaGlsZChpbmJveCk7XG5tYWluV3JhcHBlci5hcHBlbmRDaGlsZCh0b2RheSk7XG5tYWluV3JhcHBlci5hcHBlbmRDaGlsZCh1cGNvbWluZyk7XG5tYWluV3JhcHBlci5hcHBlbmRDaGlsZChjb21wbGV0ZWQpO1xuXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrQnRuXCIpO1xuY29uc3QgaW5ib3hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluYm94QnRuXCIpO1xuY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5QnRuXCIpO1xuY29uc3QgdXBjb21pbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVwY29taW5nQnRuXCIpO1xuY29uc3QgY29tcGxldGVkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wbGV0ZWRCdG5cIik7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0QnRuXCIpO1xuXG4vLyBJbml0aWFsaXplcyBtYWluIHRhc2sgYXJyYXlcbmNvbnN0IHRhc2tMaXN0ID0gW107XG5jb25zdCBjb21wbGV0ZWRUYXNrcyA9IFtdO1xuXG4vLyBHZXRzIGN1cnJlbnQgZGF0ZSBpbiBJU08gZm9ybWF0XG5sZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuY29uc3QgZGQgPSBTdHJpbmcoY3VycmVudERhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG5jb25zdCBtbSA9IFN0cmluZyhjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuY29uc3QgeXl5eSA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG5jdXJyZW50RGF0ZSA9IGAke3l5eXl9LSR7bW19LSR7ZGR9YDtcblxuLy8gSW5ib3ggaGVhZGluZ1xuY29uc3QgaW5ib3hIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuaW5ib3hIZWFkaW5nLnRleHRDb250ZW50ID0gXCJBbGwgVGFza3NcIjtcbmluYm94LmFwcGVuZENoaWxkKGluYm94SGVhZGluZyk7XG5cbi8vIEFkZHMgZGVmYXVsdCBleGFtcGxlIHRhc2sgdG8gVG8tRG8gbGlzdFxuY29uc3QgZGVmYXVsdFRhc2sgPSBjcmVhdGVUYXNrKFxuICBcIkZpcnN0XCIsXG4gIFwiVGhpcyBpcyBteSBmaXJzdCB0YXNrXCIsXG4gIGN1cnJlbnREYXRlLFxuICBcImhpZ2hcIixcbiAgXCJQcm9qZWN0MVwiXG4pO1xudGFza0xpc3QucHVzaChkZWZhdWx0VGFzayk7XG50YXNrTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gIGNvbnN0IGNhcmQgPSB0YXNrLmNyZWF0ZUNhcmQoKTtcbiAgaW5ib3guYXBwZW5kQ2hpbGQoY2FyZCk7XG4gIGFkZENvbGxhcHNpYmxlcygpO1xuICBtYXJrQ29tcGxldGUodGFza0xpc3QsIGNvbXBsZXRlZFRhc2tzKTtcbiAgZGVsKHRhc2tMaXN0KTtcbiAgLy8gZWRpdCh0YXNrTGlzdCk7XG4gIHNob3dBZGRUb1Byb2plY3RGb3JtKHRhc2tMaXN0KTtcbn0pO1xuXG4vLyBIaWRlcyBhbGwgcGFnZXNcbmNvbnN0IGhpZGVQYWdlcyA9ICgpID0+IHtcbiAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XG4gIGFsbFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IChwcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIikpO1xufTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRVZFTlQgTElTVEVORVJTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLy8gU2hvd3MgVGFzayBGb3JtXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn0pO1xuXG4vLyBTaG93cyBQcm9qZWN0IEZvcm1cbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufSk7XG5cbi8vIFRhc2sgRm9ybSBTdWJtaXQgRXZlbnQgTGlzdGVuZXIgLSBBZGRzIG5ldyB0YXNrcyB0byBpbmJveCBzZWN0aW9uXG50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgd2hpbGUgKGluYm94LmZpcnN0Q2hpbGQpIHtcbiAgICBpbmJveC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICB9XG4gIGluYm94LmFwcGVuZENoaWxkKGluYm94SGVhZGluZyk7XG4gIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKFxuICAgIHRhc2tGb3JtLnRpdGxlLnZhbHVlLFxuICAgIHRhc2tGb3JtLmRlc2NyaXB0aW9uLnZhbHVlLFxuICAgIHRhc2tGb3JtLmR1ZURhdGUudmFsdWUsXG4gICAgdGFza0Zvcm0ucHJpb3JpdHkudmFsdWVcbiAgKTtcbiAgdGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgdGFza0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSB0YXNrLmNyZWF0ZUNhcmQoKTtcbiAgICBpbmJveC5hcHBlbmRDaGlsZChjYXJkKTtcbiAgfSk7XG4gIGFkZENvbGxhcHNpYmxlcygpO1xuICBjbGVhckZvcm0odGFza0Zvcm0pO1xuICBtYXJrQ29tcGxldGUodGFza0xpc3QsIGNvbXBsZXRlZFRhc2tzKTtcbiAgZGVsKHRhc2tMaXN0KTtcbiAgLy8gZWRpdCh0YXNrTGlzdCk7XG4gIHNob3dBZGRUb1Byb2plY3RGb3JtKHRhc2tMaXN0KTtcbn0pO1xuXG4vLyBQcm9qZWN0IEZvcm0gU3VibWl0IEV2ZW50IExpc3RlbmVyIC0gQWRkcyBhIG5ldyBncm91cCBzZWN0aW9uIHdpdGggY29ycmVzcG9uZGluZyBidXR0b25cbnByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBncm91cCA9IGNyZWF0ZVByb2plY3RHcm91cCgpO1xuICBjb25zdCBwcm9qZWN0R3JvdXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwcm9qZWN0R3JvdXBCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3RHcm91cEJ0blwiKTtcblxuICBwcm9qZWN0R3JvdXBCdG4udGV4dENvbnRlbnQgPSBwcm9qZWN0Rm9ybS5wcm9qZWN0TmFtZS52YWx1ZTtcbiAgZ3JvdXAuYXBwZW5kQ2hpbGQocHJvamVjdEdyb3VwQnRuKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChncm91cCk7XG4gIGNsZWFyRm9ybShwcm9qZWN0Rm9ybSk7XG5cbiAgY29uc3QgcHJvamVjdFBhZ2UgPSBjcmVhdGVQYWdlKCk7XG4gIHByb2plY3RQYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3RHcm91cEJ0bi50ZXh0Q29udGVudCk7XG5cbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IHByb2plY3RHcm91cEJ0bi50ZXh0Q29udGVudDtcblxuICBwcm9qZWN0UGFnZS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgbWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdFBhZ2UpO1xuXG4gIGFkZFByb2plY3RQYWdlcygpO1xufSk7XG5cbi8vIFNob3dzIGluYm94IHNlY3Rpb24gd2hpY2ggc2hvd3MgYWxsIGltY29tcGxldGUgdGFza3MgcmVnYXJkbGVzcyBvZiBkYXRlXG5pbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB3aGlsZSAoaW5ib3guZmlyc3RDaGlsZCkge1xuICAgIGluYm94LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cbiAgaW5ib3guYXBwZW5kQ2hpbGQoaW5ib3hIZWFkaW5nKTtcbiAgdGFza0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSB0YXNrLmNyZWF0ZUNhcmQoKTtcbiAgICBpbmJveC5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICBlZGl0KHRhc2tMaXN0KTtcbiAgfSk7XG4gIGFkZENvbGxhcHNpYmxlcygpO1xuICBoaWRlUGFnZXMoKTtcbiAgaW5ib3guc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufSk7XG5cbi8vIFRvZGF5IFNlY3Rpb24gLSBTaG93cyBhbGwgbm9uLWNvbXBsZXRlZCB0YXNrcyBkdWUgdG9kYXlcbnRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIC8vIFdpcGVzIG9sZCBhcnJheSBhbmQgcmVwbGFjZXMgaXQgd2l0aCBtb3N0IGN1cnJlbnQgb25lXG4gIHdoaWxlICh0b2RheS5maXJzdENoaWxkKSB7XG4gICAgdG9kYXkuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgfVxuICAvLyBTZWN0aW9uIEhlYWRpbmdcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiVG9kYXkncyBUYXNrc1wiO1xuICB0b2RheS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAvLyBDaGVja3MgdGhlIG1haW4gYXJyYXkgYW5kIGNyZWF0ZXMvYXBwZW5kcyBjYXJkcyBmb3IgdGhvc2Ugd2l0aCBkdWUgZGF0ZXMgb2YgdG9kYXlcbiAgY29uc3QgdG9kYXlUYXNrcyA9IHRhc2tMaXN0LmZpbHRlcigodGFzaykgPT4gdGFzay5kdWVEYXRlID09PSBjdXJyZW50RGF0ZSk7XG4gIHRvZGF5VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmNvbXBsZXRpb25TdGF0dXMgPT09IFwieWVzXCIpIHJldHVybjtcbiAgICBjb25zdCBjYXJkID0gdGFzay5jcmVhdGVDYXJkKCk7XG4gICAgdG9kYXkuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gIH0pO1xuICBhZGRDb2xsYXBzaWJsZXMoKTtcbiAgbWFya0NvbXBsZXRlKHRhc2tMaXN0LCBjb21wbGV0ZWRUYXNrcyk7XG4gIGRlbCh0YXNrTGlzdCk7XG4gIC8vIGVkaXQodGFza0xpc3QpO1xuICBzaG93QWRkVG9Qcm9qZWN0Rm9ybSh0YXNrTGlzdCk7XG4gIGhpZGVQYWdlcygpO1xuICB0b2RheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59KTtcblxuLy8gVXBjb21pbmcgU2VjdGlvbiAtIFNob3dzIGFsbCBub24tY29tcGxldGVkIHRhc2tzIGFycmFuZ2VkIGZyb20gc29vbmVzdCB0byBsYXRlc3QuXG51cGNvbWluZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAvLyBTaW5jZSB0aGUgbWFpbiBhcnJheSBpcyBcInNjYW5uZWRcIiBvbiBldmVyeSBjbGljaywgdGhlIGNhcmRzIG9uIHRoaXMgcGFnZSBhcmUgd2lwZWQgdG8gYXZvaWQgZHVwbGljYXRlcyBlYWNoIHRpbWVcbiAgd2hpbGUgKHVwY29taW5nLmZpcnN0Q2hpbGQpIHtcbiAgICB1cGNvbWluZy5maXJzdENoaWxkLnJlbW92ZSgpO1xuICB9XG4gIC8vIFNlY3Rpb24gSGVhZGluZ1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJVcGNvbWluZyBUYXNrc1wiO1xuICB1cGNvbWluZy5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAvLyBTb3J0cyBtYWluIGFycmF5IHRhc2tzIGJ5IGR1ZSBkYXRlXG4gIGNvbnN0IHNvcnRlZFRhc2tzID0gdGFza0xpc3RcbiAgICAuc2xpY2UoKVxuICAgIC5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShhLmR1ZURhdGUpIC0gbmV3IERhdGUoYi5kdWVEYXRlKSk7XG4gIHNvcnRlZFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAvLyBJZiB0aGUgdGFzayBoYXMgYmVlbiBtYXJrZWQgY29tcGxldGVkIG9yIGhhcyBubyBkdWUgZGF0ZSwgc2tpcCBpdCBhbmQgYXMgaXQgaXMgbm90IHVwY29vbWluZ1xuICAgIGlmICh0YXNrLmNvbXBsZXRpb25TdGF0dXMgPT09IFwieWVzXCIgfHwgdGFzay5kdWVEYXRlID09PSBcIlwiKSByZXR1cm47XG4gICAgY29uc3QgY2FyZCA9IHRhc2suY3JlYXRlQ2FyZCgpO1xuICAgIHVwY29taW5nLmFwcGVuZENoaWxkKGNhcmQpO1xuICB9KTtcbiAgYWRkQ29sbGFwc2libGVzKCk7XG4gIG1hcmtDb21wbGV0ZSh0YXNrTGlzdCwgY29tcGxldGVkVGFza3MpO1xuICBkZWwodGFza0xpc3QpO1xuICAvLyBlZGl0KHRhc2tMaXN0KTtcbiAgc2hvd0FkZFRvUHJvamVjdEZvcm0odGFza0xpc3QpO1xuICBoaWRlUGFnZXMoKTtcbiAgdXBjb21pbmcuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufSk7XG5cbi8vIENvbXBsZXRlZCBTZWN0aW9uIC0gU2hvd3MgY29tcGxldGVkIHNlY3Rpb24gd2l0aCBhbGwgY29tcGxldGVkIHRhc2tzXG5jb21wbGV0ZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgLy8gU2luY2UgdGhlIG1haW4gYXJyYXkgaXMgXCJzY2FubmVkXCIgb24gZXZlcnkgY2xpY2ssIHRoZSBjYXJkcyBvbiB0aGlzIHBhZ2UgYXJlIHdpcGVkIHRvIGF2b2lkIGR1cGxpY2F0ZXMgZWFjaCB0aW1lXG4gIHdoaWxlIChjb21wbGV0ZWQuZmlyc3RDaGlsZCkge1xuICAgIGNvbXBsZXRlZC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICB9XG4gIC8vIFNlY3Rpb24gSGVhZGluZ1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZWQgVGFza3NcIjtcbiAgY29tcGxldGVkLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gIC8vIFNjYW5zIGNvbXBsZXRlZCB0YXNrcyBhcnJheSBhbmQgY3JlYXRlcy9hcHBlbmRzIGNhcmRzIGludG8gdGhlIGNvbXBsZXRlZCBzZWN0aW9uXG4gIGNvbXBsZXRlZFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb21wbGV0ZWQuYXBwZW5kQ2hpbGQodGFzay5jcmVhdGVDYXJkKCkpO1xuICAgIC8vIGNvbnN0IGJ0bldyYXBwZXIgPSBjb21wbGV0ZWQucXVlcnlTZWxlY3RvcihcIi5idG5XcmFwcGVyXCIpO1xuICAgIC8vIGNvbnN0IGFsbEJ0bnMgPSBBcnJheS5mcm9tKGJ0bldyYXBwZXIucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKSk7XG4gICAgLy8gYWxsQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAvLyAgIGJ0bi5yZW1vdmUoKTtcbiAgICAvLyB9KTtcbiAgICAvLyBjb25zdCBpbmNvbXBsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAvLyBpbmNvbXBsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJpbmNvbXBsZXRlQnRuXCIpO1xuICAgIC8vIGluY29tcGxldGVCdG4udGV4dENvbnRlbnQgPSBcIk1hcmsgQXMgSW5jb21wbGV0ZVwiO1xuICAgIC8vIGJ0bldyYXBwZXIuYXBwZW5kQ2hpbGQoaW5jb21wbGV0ZUJ0bik7XG4gICAgLy8gaW5jb21wbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAvLyAgIHRhc2tMaXN0LnB1c2godGFzayk7XG4gICAgLy8gICBjb21wbGV0ZWRUYXNrcy5zcGxpY2UoY29tcGxldGVkVGFza3MuaW5kZXhPZih0YXNrKSwgMSk7XG4gICAgLy8gICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAvLyB9KTtcbiAgfSk7XG4gIGFkZENvbGxhcHNpYmxlcygpO1xuICBoaWRlUGFnZXMoKTtcbiAgY29tcGxldGVkLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn0pO1xuXG4vLyBUT01PUlJPVzogSU4gQ09NUExFVEVEIFNFQ1RJT04sIERFTEVURSBCVVRUT05TLCBBREQgTkVXIEJVVFRPTiBUSEFUIFNBWVMgTUFSSyBJTkNPTVBMRVRFLCBUSEVOIFdFIFNJTVBMWSBGSU5EIFRIRSBJTiBUSEUgQ09NUExFVEVEIEFSUkFZLCBhbmQgcHVzaCBpdCB0byB0aGUgbWFpbiBhcnJheVxuLy8gRVZFUlkgRVZFTlQgTElTVEVORVIgQ0FOIEJFIEEgQVBSVCBPRiBBTiBFVkVOVCBMSVNURU5FUiBPQkogV0hFUkUgV0UgUEFTUyBJVCBUSEUgTUFJTiBBTkQgQ09NUExFVEUgQVJSQVlTIEFORCBUSEVOIFdFIEpVU1QgQ0FMTCBUSEUgT0JKIEZVTkNUSU9OIElOIEhFUkUsIElOREVYLlxuLy8gRVg6IE9CSi5VUENPTUlORyBXT1VMRCBTVElMTCBETyBFVkVSWVlUSElORyBJVCBET0VTIEhFUkUgQlVUIE5PVyBJVFMgTk9URSBIRVJFIEFUVCBBTEwuIFRIRVJFIFNIT1VMRCBCRSBOTyBJU1NVRVMgQkVDQVVTRSwgSVQgU1RJTEwgSEFTIEFDQ0VTUyBUTyBNQUlOIEFSUkFZLlxuXG4vLyBidXQgaWYgb24gY29tcGxldGVkIHBhZ2UsIHRoZW4gd2Ugd291bGQgd2FudCBpdCB0byBvbmx5IGhhdmUgYSBcIm1hcmsgYXMgaW5jb21wbGV0ZVwiIGJ1dHRvbiB3aGljaCB3b3VsZCByZS1hZGQgaXQgdG8gdGhlIG1haW4gYXJyYXkuXG4vLyB0byBkbyB0aGlzLCB3ZSBjYW4gbWFrZSBhIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyB0byBzZWUgdGhlIHBhcmVudCBvZiB0aGUgY2FyZCAod2hpY2ggc2hvdWxkIGJlIHRoZSBwYWdlKSBhbmQgYXBwZW5kIHRoZSBidXR0b25zIGFjY29yZGluZ2x5LlxuXG4vLyB3aGVuIGVkaXQgaXMgY2xpY2tlZCwgbWF5YmUgYSBuZXcgY29weSBvZiB0aGUgbWFpbiBmb3JtIGNhbiBiZSBvcGVuZWQgYW5kIHdoZW4gc3VibWl0IGlzIGhpdCB0aGVzZSBjb3VsZCBcInNldFwiIHRoZSBwcm9wZXJ0aWVzIG9mIHRoYXQgb2JqZWN0XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=