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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root {\n\n}\n\nhtml {\n    height: 100vh;\n    width: 100vw;\n}\n\nbody {\n    height: 100%;\n    min-width: 100%;\n    \n}\n\n.mainWrapper {\n    padding: 0 40px;\n    width: 100vw;\n    height: 100vh;  \n    display: grid;\n    grid-template-columns: minmax(150px, 15%) 1fr;\n    grid-template-rows: 5% 1fr;\n    \n}\n\n.nav {\n    grid-column: span 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.nav div {\n    width: 50%;\n}\n\n.sidebar {\n    border: 1px solid black; \n}\n\n.mainGroup, .projectGroup {   \n    margin: 10px;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.mainGroup button, .projectGroup button {\n    margin: 10px 0;\n}\n\n.addTaskBtn {\n    position: absolute;\n    right: 0;\n    top: 0;\n}\n\n#projectForm {\n    width: 250px;\n    height: 250px;\n    position: fixed;\n    margin: 0 auto;\n    left: calc(50% - 125px);\n    top: calc(50% - 125px);\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    display: none;\n    flex-direction: column;\n}\n\n#taskForm {\n    width: 370px;\n    height: 370px;\n    position: fixed;\n    margin: 0 auto;\n    left: calc(50% - 185px);\n    top: calc(50% - 185px);\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    display: none;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#addToProjectForm {\n    width: 250px;\n    height: 250px;\n    position: fixed;\n    margin: 0 auto;\n    left: calc(50% - 125px);\n    top: calc(50% - 125px);\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.project {\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n}\n\n.today {\n    display: none;\n}\n\n.upcoming {\n    display: none;\n}\n\n.completed {\n    display: none;\n}\n\n.card {\n    position: relative;\n    margin: 10px;\n    padding: 10px;\n    border: 1px solid black;\n    border-radius: 5px;;\n}\n\n.card p {\n    padding: 5px;\n}\n\n.lowPriority {\n    border: 1px solid blue;\n}\n\n.medPriority {\n    border: 1px solid gold;\n}\n\n.highPriority {\n    border: 1px solid red;\n}\n\n.btnWrapper {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: flex;\n    gap: 10px;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,yCAAyC;AAC7C;;AAEA;;AAEA;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,eAAe;;AAEnB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,aAAa;IACb,aAAa;IACb,6CAA6C;IAC7C,0BAA0B;;AAE9B;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,MAAM;AACV;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;IACf,cAAc;IACd,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;IACf,cAAc;IACd,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;IACf,cAAc;IACd,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,aAAa;IACb,SAAS;AACb","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root {\n\n}\n\nhtml {\n    height: 100vh;\n    width: 100vw;\n}\n\nbody {\n    height: 100%;\n    min-width: 100%;\n    \n}\n\n.mainWrapper {\n    padding: 0 40px;\n    width: 100vw;\n    height: 100vh;  \n    display: grid;\n    grid-template-columns: minmax(150px, 15%) 1fr;\n    grid-template-rows: 5% 1fr;\n    \n}\n\n.nav {\n    grid-column: span 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.nav div {\n    width: 50%;\n}\n\n.sidebar {\n    border: 1px solid black; \n}\n\n.mainGroup, .projectGroup {   \n    margin: 10px;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.mainGroup button, .projectGroup button {\n    margin: 10px 0;\n}\n\n.addTaskBtn {\n    position: absolute;\n    right: 0;\n    top: 0;\n}\n\n#projectForm {\n    width: 250px;\n    height: 250px;\n    position: fixed;\n    margin: 0 auto;\n    left: calc(50% - 125px);\n    top: calc(50% - 125px);\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    display: none;\n    flex-direction: column;\n}\n\n#taskForm {\n    width: 370px;\n    height: 370px;\n    position: fixed;\n    margin: 0 auto;\n    left: calc(50% - 185px);\n    top: calc(50% - 185px);\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    display: none;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#addToProjectForm {\n    width: 250px;\n    height: 250px;\n    position: fixed;\n    margin: 0 auto;\n    left: calc(50% - 125px);\n    top: calc(50% - 125px);\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.project {\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n}\n\n.today {\n    display: none;\n}\n\n.upcoming {\n    display: none;\n}\n\n.completed {\n    display: none;\n}\n\n.card {\n    position: relative;\n    margin: 10px;\n    padding: 10px;\n    border: 1px solid black;\n    border-radius: 5px;;\n}\n\n.card p {\n    padding: 5px;\n}\n\n.lowPriority {\n    border: 1px solid blue;\n}\n\n.medPriority {\n    border: 1px solid gold;\n}\n\n.highPriority {\n    border: 1px solid red;\n}\n\n.btnWrapper {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: flex;\n    gap: 10px;\n}"],"sourceRoot":""}]);
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

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask)
/* harmony export */ });


const createTask  = (title, description, dueDate, priority, project) => {
    return {
        title: title,
        description: description,
        dueDate: dueDate,  
        priority: priority,
        project: project,
        completionStatus: 'no',
        createCard () {   
            const card = document.createElement('div');
            card.classList.add('card');
            
            const cardTitle = document.createElement('p');
            cardTitle.textContent = this.title;
        
            const cardDescription = document.createElement('p');
            cardDescription.textContent = 'Note: ' + this.description;

            const cardDueDate = document.createElement('p');
            cardDueDate.textContent = 'Due Date: ' + this.dueDate;

            if (this.priority == 'low') {
                card.classList.add('lowPriority')
            } else if (this.priority == 'med') {
                card.classList.add('medPriority')
            } else if (this.priority == 'high') {
                card.classList.add('highPriority')
            };
        
            card.appendChild(cardTitle);
            card.appendChild(cardDescription);
            card.appendChild(cardDueDate);
        
            return card;
        }
    };
};



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
/* harmony export */   "selectProjectForm": () => (/* binding */ selectProjectForm),
/* harmony export */   "taskForm": () => (/* binding */ taskForm)
/* harmony export */ });
const taskForm = () => {
    const form = document.createElement('form');
    form.id = 'taskForm';

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    titleLabel.for = "title";

    const titleInput = document.createElement('input');
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.name = "title";

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    descriptionLabel.for = "description";

    const descriptionInput = document.createElement('input');
    descriptionInput.type = "text";
    descriptionInput.id = "description";
    descriptionInput.name = "description";

    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date:';
    dueDateLabel.for = "dueDate";

    const dueDateInput = document.createElement('input');
    dueDateInput.type = "date";
    dueDateInput.id = "dueDate";
    dueDateInput.name = "dueDate";

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    priorityLabel.for = "priority";

    const priorityInput = document.createElement('select');
    priorityInput.name = "prorities";
    priorityInput.id = "priority";
    
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
    projectNameLabel.for = "projectName";

    const projectNameInput = document.createElement('input');
    projectNameInput.type = "text";
    projectNameInput.id = "projectName";
    projectNameInput.name = "projectName";

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Create New Project';

    projectForm.appendChild(projectNameLabel);
    projectForm.appendChild(projectNameInput);
    projectForm.appendChild(submitBtn);

    projectForm.style.display = 'none';

    return projectForm;
}

const clearForm = (form) => {
    form.style.display = 'none';
    const allElements = Array.from(form.elements);
    allElements.forEach(element => {
        element.value = '';
    })
}

const selectProjectForm = () => {
    const allGroups = Array.from(document.querySelectorAll('.projectGroup > button'));
    
    const addToProjectForm = document.createElement('form');
    addToProjectForm.id = 'addToProjectForm';

    const chooseProjectLabel = document.createElement('label');
    chooseProjectLabel.textContent = 'Select a project: ';
    chooseProjectLabel.for = "currentProjects";

    const currentProjects = document.createElement('select');
    currentProjects.name = "currentProjects";
    currentProjects.id = "currentProjects";
    
    allGroups.forEach(group => {
        let option = document.createElement('option');
        option.textContent = group.textContent;
        option.value = group.textContent;
        currentProjects.appendChild(option);
    })

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Add to Project';

    addToProjectForm.appendChild(chooseProjectLabel);
    addToProjectForm.appendChild(currentProjects);
    addToProjectForm.appendChild(submitBtn);

    return addToProjectForm
}



/***/ }),

/***/ "./src/pages.js":
/*!**********************!*\
  !*** ./src/pages.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNav": () => (/* binding */ createNav),
/* harmony export */   "createProject": () => (/* binding */ createProject)
/* harmony export */ });
const createNav = () => {
    
    const nav = document.createElement('div');
    nav.classList.add('nav');

    const navLeft = document.createElement('div');
    const navRight = document.createElement('div');

    navLeft.textContent = 'Logo';
    navRight.textContent = 'Future Buttons';

    nav.appendChild(navLeft);
    nav.appendChild(navRight);
    
    return nav;
};


const createProject = () => {
    const project = document.createElement('div');
    project.classList.add('project');

    return project;
}



/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectGroup": () => (/* binding */ createProjectGroup),
/* harmony export */   "createSidebar": () => (/* binding */ createSidebar)
/* harmony export */ });
const createSidebar = () => {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const addProjectBtn = document.createElement('button');
    addProjectBtn.classList.add('addProjectBtn');
    addProjectBtn.textContent = 'New Project';

    const mainGroup = document.createElement('div');
    mainGroup.classList.add('mainGroup');

    const inboxBtn = document.createElement('button');
    inboxBtn.textContent = 'Inbox';

    const todayBtn = document.createElement('button');
    todayBtn.textContent = 'Today';

    const upcomingBtn = document.createElement('button');
    upcomingBtn.textContent = 'Upcoming';
    
    const completedBtn = document.createElement('button');
    completedBtn.textContent = 'Completed';


    inboxBtn.classList.add('inboxBtn');
    todayBtn.classList.add('todayBtn');
    upcomingBtn.classList.add('upcomingBtn');
    completedBtn.classList.add('completedBtn');

    sidebar.appendChild(addProjectBtn);
    sidebar.appendChild(mainGroup);
    mainGroup.appendChild(inboxBtn);
    mainGroup.appendChild(todayBtn);
    mainGroup.appendChild(upcomingBtn);
    mainGroup.appendChild(completedBtn);
    
    return sidebar;
};

const createProjectGroup = (e) => {
    e.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    const projectForm = document.getElementById('projectForm');
    const mainWrapper = document.querySelector('.mainWrapper');

    const projectGroup = document.createElement('div');
    projectGroup.classList.add('projectGroup');


    const projectName = document.createElement('button');
    projectName.textContent = projectForm.projectName.value;

    const newPage = createPage();
    newPage.setAttribute('id', projectForm.projectName.value)
    mainWrapper.appendChild(newPage);

    projectName.addEventListener('click', (e) => {
        const projectPage = document.getElementById(e.target.textContent);
        const completedTasksSection = document.querySelector('.completedTasksSection');
        const cardSection = document.querySelector('.cardSection');
        const todaySection = document.querySelector('.todaySection');

        const allGroups = Array.from(document.querySelectorAll('.newPage'));
        allGroups.forEach(group => {
            let groupPage = document.getElementById(group.id);
            groupPage.style.display = 'none';
        })
        projectPage.style.display = 'flex';
        completedTasksSection.style.display = 'none';
        cardSection.style.display = 'none';
        todaySection.style.display = 'none';
    })

    projectGroup.appendChild(projectName);
    sidebar.appendChild(projectGroup);
    clearProjectForm();
}



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
/* harmony import */ var _pages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages.js */ "./src/pages.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");
/* harmony import */ var _createTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTask.js */ "./src/createTask.js");
/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms.js */ "./src/forms.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");







const mainWrapper = document.querySelector('.mainWrapper');

const nav = (0,_pages_js__WEBPACK_IMPORTED_MODULE_0__.createNav)();
const sidebar = (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.createSidebar)();
const form = (0,_forms_js__WEBPACK_IMPORTED_MODULE_3__.taskForm)();
const inbox = (0,_pages_js__WEBPACK_IMPORTED_MODULE_0__.createProject)();
const today = (0,_pages_js__WEBPACK_IMPORTED_MODULE_0__.createProject)();
const upcoming = (0,_pages_js__WEBPACK_IMPORTED_MODULE_0__.createProject)();
const completed = (0,_pages_js__WEBPACK_IMPORTED_MODULE_0__.createProject)();

inbox.classList.add('inbox');
today.classList.add('today');
upcoming.classList.add('upcoming');
completed.classList.add('completed');

const addTaskBtn = document.createElement('button');
addTaskBtn.textContent = 'Add New Task'
addTaskBtn.classList.add('addTaskBtn')

mainWrapper.appendChild(nav);
mainWrapper.appendChild(sidebar);
mainWrapper.appendChild(addTaskBtn);
mainWrapper.appendChild(form);
mainWrapper.appendChild(inbox);
mainWrapper.appendChild(today);
mainWrapper.appendChild(upcoming);
mainWrapper.appendChild(completed);

const inboxBtn = document.querySelector('.inboxBtn');
const todayBtn = document.querySelector('.todayBtn');
const upcomingBtn = document.querySelector('.upcomingBtn');
const completedBtn = document.querySelector('.completedBtn');

//initializes main task array
let taskList = [];

//Adds default example task to To-Do list
const defaultTask = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_2__.createTask)('First', 'This is my first task', new Date().toISOString().slice(0, 10), 'high', 'Project1');
taskList.push(defaultTask);
taskList.forEach(task => {
    inbox.appendChild(task.createCard())
});

//Add Task Button
addTaskBtn.addEventListener('click', () => {
    form.style.display = 'flex';
});

//Task Form Submit Event Listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    while (inbox.firstChild) {
        inbox.firstChild.remove()
    };
    const newTask = (0,_createTask_js__WEBPACK_IMPORTED_MODULE_2__.createTask)(form.title.value, form.description.value, form.dueDate.value, form.priority.value);
    taskList.push(newTask);
    taskList.forEach(task => inbox.appendChild(task.createCard()));
    (0,_forms_js__WEBPACK_IMPORTED_MODULE_3__.clearForm)(form);
})

inboxBtn.addEventListener('click', () => {
    inbox.style.display = 'flex';
    today.style.display = 'none';
    upcoming.style.display = 'none';
});

todayBtn.addEventListener('click', () => {
    while (today.firstChild) {
        today.firstChild.remove()
    };
    let todayTasks = taskList.filter(task => task.dueDate == new Date().toISOString().slice(0, 10));
    todayTasks.forEach(task => today.appendChild(task.createCard()));
 
    today.style.display = 'flex';
    inbox.style.display = 'none';
    upcoming.style.display = 'none';
});

upcomingBtn.addEventListener('click', () => {
    while (upcoming.firstChild) {
        upcoming.firstChild.remove()
    };
    let sortedTasks = taskList.slice().sort((a,b) => {
        return new Date(b.dueDate) - new Date(a.dueDate)
    });
    
    sortedTasks.forEach(task => {
        if (task.dueDate == '') return
        upcoming.appendChild(task.createCard())
    });

    upcoming.style.display = 'flex';
    inbox.style.display = 'none';
    today.style.display = 'none';

})

//scratch that, couldnt we have simply made the card format function as function property of each obj?
//the card making function could be a seperater module which wouyld reference "this"
//ex: if i make an object from info from a form, i could then call that objects "make card" prop which would return an html "card";
//note: this card function should create a card in the "closed state" and then when we click on an arrow lets sat, it will expand open revealing its contents

//each generated card should be added to a main array.
//then, i could have a single module which could export every page needed.
//THEN forEach obj in the array, run the makeCard function and append them to the default inbox section

//as for action buttons, i want which buttons available to depend on what page the task in on. 
//for ex, if on inbox, complete, edit, delete and add to project
//but if on completed page, then we would want it to only have a "mark as incomplete" button which would re-add it to the main array.
//to do this, we can make a function which checks to see the parent of the card (which should be the page) and append the buttons accordingly.


//when edit is clicked, maybe a new copy of the main form can be opened and when submit is hit these could "set" the properties of that object
//if obj.completed == 'yes' we can then run obj.makeCard and append it to the completed page

//when today is clicked, a function should be run which loops through the main array, checks each obj in it and checks obj.duedate. if its today, append it to this seciton
//note: each sidebar button should have an even listener so that every time we click it is essentially rescanning the main array and everything is up to date

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUM1RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0Q7QUFDVDtBQUNBO0FBQ0k7QUFDSjtBQUN2Qjs7QUFFdEI7O0FBRUEsWUFBWSxvREFBUztBQUNyQixnQkFBZ0IsMERBQWE7QUFDN0IsYUFBYSxtREFBUTtBQUNyQixjQUFjLHdEQUFhO0FBQzNCLGNBQWMsd0RBQWE7QUFDM0IsaUJBQWlCLHdEQUFhO0FBQzlCLGtCQUFrQix3REFBYTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwwREFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBEQUFVO0FBQzlCO0FBQ0E7QUFDQSxJQUFJLG9EQUFTO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuXFxufVxcblxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgXFxufVxcblxcbi5tYWluV3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDAgNDBweDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoOyAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE1MHB4LCAxNSUpIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1JSAxZnI7XFxuICAgIFxcbn1cXG5cXG4ubmF2IHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5uYXYgZGl2IHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgXFxufVxcblxcbi5tYWluR3JvdXAsIC5wcm9qZWN0R3JvdXAgeyAgIFxcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tYWluR3JvdXAgYnV0dG9uLCAucHJvamVjdEdyb3VwIGJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4uYWRkVGFza0J0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG59XFxuXFxuI3Byb2plY3RGb3JtIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEyNXB4KTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDEyNXB4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Rhc2tGb3JtIHtcXG4gICAgd2lkdGg6IDM3MHB4O1xcbiAgICBoZWlnaHQ6IDM3MHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDE4NXB4KTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDE4NXB4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jYWRkVG9Qcm9qZWN0Rm9ybSB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMjVweCk7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAxMjVweCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnVwY29taW5nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7O1xcbn1cXG5cXG4uY2FyZCBwIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubG93UHJpb3JpdHkge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbn1cXG5cXG4ubWVkUHJpb3JpdHkge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBnb2xkO1xcbn1cXG5cXG4uaGlnaFByaW9yaXR5IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uYnRuV3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QseUNBQXlDO0FBQzdDOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsNkNBQTZDO0lBQzdDLDBCQUEwQjs7QUFFOUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0FBQ1Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixhQUFhO0lBQ2IsU0FBUztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuXFxufVxcblxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgXFxufVxcblxcbi5tYWluV3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDAgNDBweDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoOyAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE1MHB4LCAxNSUpIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1JSAxZnI7XFxuICAgIFxcbn1cXG5cXG4ubmF2IHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5uYXYgZGl2IHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgXFxufVxcblxcbi5tYWluR3JvdXAsIC5wcm9qZWN0R3JvdXAgeyAgIFxcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tYWluR3JvdXAgYnV0dG9uLCAucHJvamVjdEdyb3VwIGJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4uYWRkVGFza0J0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG59XFxuXFxuI3Byb2plY3RGb3JtIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEyNXB4KTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDEyNXB4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Rhc2tGb3JtIHtcXG4gICAgd2lkdGg6IDM3MHB4O1xcbiAgICBoZWlnaHQ6IDM3MHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDE4NXB4KTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDE4NXB4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jYWRkVG9Qcm9qZWN0Rm9ybSB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMjVweCk7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAxMjVweCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnVwY29taW5nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7O1xcbn1cXG5cXG4uY2FyZCBwIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubG93UHJpb3JpdHkge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbn1cXG5cXG4ubWVkUHJpb3JpdHkge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBnb2xkO1xcbn1cXG5cXG4uaGlnaFByaW9yaXR5IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uYnRuV3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiXG5cbmNvbnN0IGNyZWF0ZVRhc2sgID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZSwgIFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgIHByb2plY3Q6IHByb2plY3QsXG4gICAgICAgIGNvbXBsZXRpb25TdGF0dXM6ICdubycsXG4gICAgICAgIGNyZWF0ZUNhcmQgKCkgeyAgIFxuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY2FyZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgY2FyZERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ05vdGU6ICcgKyB0aGlzLmRlc2NyaXB0aW9uO1xuXG4gICAgICAgICAgICBjb25zdCBjYXJkRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNhcmREdWVEYXRlLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOiAnICsgdGhpcy5kdWVEYXRlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wcmlvcml0eSA9PSAnbG93Jykge1xuICAgICAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnbG93UHJpb3JpdHknKVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByaW9yaXR5ID09ICdtZWQnKSB7XG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdtZWRQcmlvcml0eScpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJpb3JpdHkgPT0gJ2hpZ2gnKSB7XG4gICAgICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdoaWdoUHJpb3JpdHknKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmREZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmREdWVEYXRlKTtcbiAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gY2FyZDtcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG5leHBvcnQgeyBjcmVhdGVUYXNrIH0iLCJjb25zdCB0YXNrRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uaWQgPSAndGFza0Zvcm0nO1xuXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTonO1xuICAgIHRpdGxlTGFiZWwuZm9yID0gXCJ0aXRsZVwiO1xuXG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgdGl0bGVJbnB1dC5pZCA9IFwidGl0bGVcIjtcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSBcInRpdGxlXCI7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XG4gICAgZGVzY3JpcHRpb25MYWJlbC5mb3IgPSBcImRlc2NyaXB0aW9uXCI7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gXCJkZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcblxuICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7XG4gICAgZHVlRGF0ZUxhYmVsLmZvciA9IFwiZHVlRGF0ZVwiO1xuXG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGR1ZURhdGVJbnB1dC5pZCA9IFwiZHVlRGF0ZVwiO1xuICAgIGR1ZURhdGVJbnB1dC5uYW1lID0gXCJkdWVEYXRlXCI7XG5cbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XG4gICAgcHJpb3JpdHlMYWJlbC5mb3IgPSBcInByaW9yaXR5XCI7XG5cbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JpdHlJbnB1dC5uYW1lID0gXCJwcm9yaXRpZXNcIjtcbiAgICBwcmlvcml0eUlucHV0LmlkID0gXCJwcmlvcml0eVwiO1xuICAgIFxuICAgIGNvbnN0IG5vbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBub25lLnRleHRDb250ZW50ID0gJ05vbmUnO1xuICAgIG5vbmUudmFsdWUgPSAnbm9uZSc7XG4gICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbG93LnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgbG93LnZhbHVlID0gJ2xvdyc7XG4gICAgY29uc3QgbWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbWVkLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgbWVkLnZhbHVlID0gJ21lZCc7XG4gICAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGhpZ2gudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgaGlnaC52YWx1ZSA9ICdoaWdoJztcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEJ0bi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG4gICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChub25lKTtcbiAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGxvdyk7XG4gICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChtZWQpO1xuICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoaGlnaCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG4gICAgcmV0dXJuIGZvcm07XG59O1xuXG5cbmNvbnN0IGNyZWF0ZVByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHByb2plY3RGb3JtLmlkID0gJ3Byb2plY3RGb3JtJztcblxuICAgIGNvbnN0IHByb2plY3ROYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByb2plY3ROYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCBOYW1lOiAnO1xuICAgIHByb2plY3ROYW1lTGFiZWwuZm9yID0gXCJwcm9qZWN0TmFtZVwiO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdE5hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgcHJvamVjdE5hbWVJbnB1dC5pZCA9IFwicHJvamVjdE5hbWVcIjtcbiAgICBwcm9qZWN0TmFtZUlucHV0Lm5hbWUgPSBcInByb2plY3ROYW1lXCI7XG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdG4udHlwZSA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdDcmVhdGUgTmV3IFByb2plY3QnO1xuXG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVMYWJlbCk7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICByZXR1cm4gcHJvamVjdEZvcm07XG59XG5cbmNvbnN0IGNsZWFyRm9ybSA9IChmb3JtKSA9PiB7XG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbnN0IGFsbEVsZW1lbnRzID0gQXJyYXkuZnJvbShmb3JtLmVsZW1lbnRzKTtcbiAgICBhbGxFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gJyc7XG4gICAgfSlcbn1cblxuY29uc3Qgc2VsZWN0UHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsR3JvdXBzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdEdyb3VwID4gYnV0dG9uJykpO1xuICAgIFxuICAgIGNvbnN0IGFkZFRvUHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgYWRkVG9Qcm9qZWN0Rm9ybS5pZCA9ICdhZGRUb1Byb2plY3RGb3JtJztcblxuICAgIGNvbnN0IGNob29zZVByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY2hvb3NlUHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gJ1NlbGVjdCBhIHByb2plY3Q6ICc7XG4gICAgY2hvb3NlUHJvamVjdExhYmVsLmZvciA9IFwiY3VycmVudFByb2plY3RzXCI7XG5cbiAgICBjb25zdCBjdXJyZW50UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBjdXJyZW50UHJvamVjdHMubmFtZSA9IFwiY3VycmVudFByb2plY3RzXCI7XG4gICAgY3VycmVudFByb2plY3RzLmlkID0gXCJjdXJyZW50UHJvamVjdHNcIjtcbiAgICBcbiAgICBhbGxHcm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gZ3JvdXAudGV4dENvbnRlbnQ7XG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGdyb3VwLnRleHRDb250ZW50O1xuICAgICAgICBjdXJyZW50UHJvamVjdHMuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KVxuXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnRuLnR5cGUgPSAnc3VibWl0JztcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnQWRkIHRvIFByb2plY3QnO1xuXG4gICAgYWRkVG9Qcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChjaG9vc2VQcm9qZWN0TGFiZWwpO1xuICAgIGFkZFRvUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY3VycmVudFByb2plY3RzKTtcbiAgICBhZGRUb1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgICByZXR1cm4gYWRkVG9Qcm9qZWN0Rm9ybVxufVxuXG5leHBvcnQgeyB0YXNrRm9ybSwgY3JlYXRlUHJvamVjdEZvcm0sIGNsZWFyRm9ybSwgc2VsZWN0UHJvamVjdEZvcm0gfTsiLCJjb25zdCBjcmVhdGVOYXYgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuXG4gICAgY29uc3QgbmF2TGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5hdlJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBuYXZMZWZ0LnRleHRDb250ZW50ID0gJ0xvZ28nO1xuICAgIG5hdlJpZ2h0LnRleHRDb250ZW50ID0gJ0Z1dHVyZSBCdXR0b25zJztcblxuICAgIG5hdi5hcHBlbmRDaGlsZChuYXZMZWZ0KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobmF2UmlnaHQpO1xuICAgIFxuICAgIHJldHVybiBuYXY7XG59O1xuXG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU5hdiwgY3JlYXRlUHJvamVjdCB9OyIsImNvbnN0IGNyZWF0ZVNpZGViYXIgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdEJ0bicpO1xuICAgIGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuXG4gICAgY29uc3QgbWFpbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkdyb3VwLmNsYXNzTGlzdC5hZGQoJ21haW5Hcm91cCcpO1xuXG4gICAgY29uc3QgaW5ib3hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBpbmJveEJ0bi50ZXh0Q29udGVudCA9ICdJbmJveCc7XG5cbiAgICBjb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZGF5QnRuLnRleHRDb250ZW50ID0gJ1RvZGF5JztcblxuICAgIGNvbnN0IHVwY29taW5nQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdXBjb21pbmdCdG4udGV4dENvbnRlbnQgPSAnVXBjb21pbmcnO1xuICAgIFxuICAgIGNvbnN0IGNvbXBsZXRlZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbXBsZXRlZEJ0bi50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xuXG5cbiAgICBpbmJveEJ0bi5jbGFzc0xpc3QuYWRkKCdpbmJveEJ0bicpO1xuICAgIHRvZGF5QnRuLmNsYXNzTGlzdC5hZGQoJ3RvZGF5QnRuJyk7XG4gICAgdXBjb21pbmdCdG4uY2xhc3NMaXN0LmFkZCgndXBjb21pbmdCdG4nKTtcbiAgICBjb21wbGV0ZWRCdG4uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkQnRuJyk7XG5cbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobWFpbkdyb3VwKTtcbiAgICBtYWluR3JvdXAuYXBwZW5kQ2hpbGQoaW5ib3hCdG4pO1xuICAgIG1haW5Hcm91cC5hcHBlbmRDaGlsZCh0b2RheUJ0bik7XG4gICAgbWFpbkdyb3VwLmFwcGVuZENoaWxkKHVwY29taW5nQnRuKTtcbiAgICBtYWluR3JvdXAuYXBwZW5kQ2hpbGQoY29tcGxldGVkQnRuKTtcbiAgICBcbiAgICByZXR1cm4gc2lkZWJhcjtcbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RHcm91cCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RGb3JtJyk7XG4gICAgY29uc3QgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbldyYXBwZXInKTtcblxuICAgIGNvbnN0IHByb2plY3RHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RHcm91cC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0R3JvdXAnKTtcblxuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3RGb3JtLnByb2plY3ROYW1lLnZhbHVlO1xuXG4gICAgY29uc3QgbmV3UGFnZSA9IGNyZWF0ZVBhZ2UoKTtcbiAgICBuZXdQYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCBwcm9qZWN0Rm9ybS5wcm9qZWN0TmFtZS52YWx1ZSlcbiAgICBtYWluV3JhcHBlci5hcHBlbmRDaGlsZChuZXdQYWdlKTtcblxuICAgIHByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdFBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZFRhc2tzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWRUYXNrc1NlY3Rpb24nKTtcbiAgICAgICAgY29uc3QgY2FyZFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZFNlY3Rpb24nKTtcbiAgICAgICAgY29uc3QgdG9kYXlTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5U2VjdGlvbicpO1xuXG4gICAgICAgIGNvbnN0IGFsbEdyb3VwcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5ld1BhZ2UnKSk7XG4gICAgICAgIGFsbEdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgICAgIGxldCBncm91cFBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChncm91cC5pZCk7XG4gICAgICAgICAgICBncm91cFBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSlcbiAgICAgICAgcHJvamVjdFBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgY29tcGxldGVkVGFza3NTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGNhcmRTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRvZGF5U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pXG5cbiAgICBwcm9qZWN0R3JvdXAuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdEdyb3VwKTtcbiAgICBjbGVhclByb2plY3RGb3JtKCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVNpZGViYXIsIGNyZWF0ZVByb2plY3RHcm91cCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGNyZWF0ZU5hdiwgY3JlYXRlUHJvamVjdCB9IGZyb20gJy4vcGFnZXMuanMnO1xuaW1wb3J0IHsgY3JlYXRlU2lkZWJhciB9IGZyb20gJy4vc2lkZWJhci5qcyc7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSAnLi9jcmVhdGVUYXNrLmpzJztcbmltcG9ydCB7IHRhc2tGb3JtLCBjbGVhckZvcm0gfSBmcm9tICcuL2Zvcm1zLmpzJztcbmltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5jb25zdCBtYWluV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluV3JhcHBlcicpO1xuXG5jb25zdCBuYXYgPSBjcmVhdGVOYXYoKTtcbmNvbnN0IHNpZGViYXIgPSBjcmVhdGVTaWRlYmFyKCk7XG5jb25zdCBmb3JtID0gdGFza0Zvcm0oKTtcbmNvbnN0IGluYm94ID0gY3JlYXRlUHJvamVjdCgpO1xuY29uc3QgdG9kYXkgPSBjcmVhdGVQcm9qZWN0KCk7XG5jb25zdCB1cGNvbWluZyA9IGNyZWF0ZVByb2plY3QoKTtcbmNvbnN0IGNvbXBsZXRlZCA9IGNyZWF0ZVByb2plY3QoKTtcblxuaW5ib3guY2xhc3NMaXN0LmFkZCgnaW5ib3gnKTtcbnRvZGF5LmNsYXNzTGlzdC5hZGQoJ3RvZGF5Jyk7XG51cGNvbWluZy5jbGFzc0xpc3QuYWRkKCd1cGNvbWluZycpO1xuY29tcGxldGVkLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5hZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJ0FkZCBOZXcgVGFzaydcbmFkZFRhc2tCdG4uY2xhc3NMaXN0LmFkZCgnYWRkVGFza0J0bicpXG5cbm1haW5XcmFwcGVyLmFwcGVuZENoaWxkKG5hdik7XG5tYWluV3JhcHBlci5hcHBlbmRDaGlsZChzaWRlYmFyKTtcbm1haW5XcmFwcGVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xubWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5tYWluV3JhcHBlci5hcHBlbmRDaGlsZChpbmJveCk7XG5tYWluV3JhcHBlci5hcHBlbmRDaGlsZCh0b2RheSk7XG5tYWluV3JhcHBlci5hcHBlbmRDaGlsZCh1cGNvbWluZyk7XG5tYWluV3JhcHBlci5hcHBlbmRDaGlsZChjb21wbGV0ZWQpO1xuXG5jb25zdCBpbmJveEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveEJ0bicpO1xuY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXlCdG4nKTtcbmNvbnN0IHVwY29taW5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVwY29taW5nQnRuJyk7XG5jb25zdCBjb21wbGV0ZWRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkQnRuJyk7XG5cbi8vaW5pdGlhbGl6ZXMgbWFpbiB0YXNrIGFycmF5XG5sZXQgdGFza0xpc3QgPSBbXTtcblxuLy9BZGRzIGRlZmF1bHQgZXhhbXBsZSB0YXNrIHRvIFRvLURvIGxpc3RcbmNvbnN0IGRlZmF1bHRUYXNrID0gY3JlYXRlVGFzaygnRmlyc3QnLCAnVGhpcyBpcyBteSBmaXJzdCB0YXNrJywgbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSwgJ2hpZ2gnLCAnUHJvamVjdDEnKTtcbnRhc2tMaXN0LnB1c2goZGVmYXVsdFRhc2spO1xudGFza0xpc3QuZm9yRWFjaCh0YXNrID0+IHtcbiAgICBpbmJveC5hcHBlbmRDaGlsZCh0YXNrLmNyZWF0ZUNhcmQoKSlcbn0pO1xuXG4vL0FkZCBUYXNrIEJ1dHRvblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG59KTtcblxuLy9UYXNrIEZvcm0gU3VibWl0IEV2ZW50IExpc3RlbmVyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHdoaWxlIChpbmJveC5maXJzdENoaWxkKSB7XG4gICAgICAgIGluYm94LmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICB9O1xuICAgIGNvbnN0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKGZvcm0udGl0bGUudmFsdWUsIGZvcm0uZGVzY3JpcHRpb24udmFsdWUsIGZvcm0uZHVlRGF0ZS52YWx1ZSwgZm9ybS5wcmlvcml0eS52YWx1ZSk7XG4gICAgdGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgICB0YXNrTGlzdC5mb3JFYWNoKHRhc2sgPT4gaW5ib3guYXBwZW5kQ2hpbGQodGFzay5jcmVhdGVDYXJkKCkpKTtcbiAgICBjbGVhckZvcm0oZm9ybSk7XG59KVxuXG5pbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpbmJveC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHRvZGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdXBjb21pbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuXG50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3aGlsZSAodG9kYXkuZmlyc3RDaGlsZCkge1xuICAgICAgICB0b2RheS5maXJzdENoaWxkLnJlbW92ZSgpXG4gICAgfTtcbiAgICBsZXQgdG9kYXlUYXNrcyA9IHRhc2tMaXN0LmZpbHRlcih0YXNrID0+IHRhc2suZHVlRGF0ZSA9PSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApKTtcbiAgICB0b2RheVRhc2tzLmZvckVhY2godGFzayA9PiB0b2RheS5hcHBlbmRDaGlsZCh0YXNrLmNyZWF0ZUNhcmQoKSkpO1xuIFxuICAgIHRvZGF5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgaW5ib3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB1cGNvbWluZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5cbnVwY29taW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdoaWxlICh1cGNvbWluZy5maXJzdENoaWxkKSB7XG4gICAgICAgIHVwY29taW5nLmZpcnN0Q2hpbGQucmVtb3ZlKClcbiAgICB9O1xuICAgIGxldCBzb3J0ZWRUYXNrcyA9IHRhc2tMaXN0LnNsaWNlKCkuc29ydCgoYSxiKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShiLmR1ZURhdGUpIC0gbmV3IERhdGUoYS5kdWVEYXRlKVxuICAgIH0pO1xuICAgIFxuICAgIHNvcnRlZFRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGlmICh0YXNrLmR1ZURhdGUgPT0gJycpIHJldHVyblxuICAgICAgICB1cGNvbWluZy5hcHBlbmRDaGlsZCh0YXNrLmNyZWF0ZUNhcmQoKSlcbiAgICB9KTtcblxuICAgIHVwY29taW5nLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgaW5ib3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0b2RheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG59KVxuXG4vL3NjcmF0Y2ggdGhhdCwgY291bGRudCB3ZSBoYXZlIHNpbXBseSBtYWRlIHRoZSBjYXJkIGZvcm1hdCBmdW5jdGlvbiBhcyBmdW5jdGlvbiBwcm9wZXJ0eSBvZiBlYWNoIG9iaj9cbi8vdGhlIGNhcmQgbWFraW5nIGZ1bmN0aW9uIGNvdWxkIGJlIGEgc2VwZXJhdGVyIG1vZHVsZSB3aGljaCB3b3V5bGQgcmVmZXJlbmNlIFwidGhpc1wiXG4vL2V4OiBpZiBpIG1ha2UgYW4gb2JqZWN0IGZyb20gaW5mbyBmcm9tIGEgZm9ybSwgaSBjb3VsZCB0aGVuIGNhbGwgdGhhdCBvYmplY3RzIFwibWFrZSBjYXJkXCIgcHJvcCB3aGljaCB3b3VsZCByZXR1cm4gYW4gaHRtbCBcImNhcmRcIjtcbi8vbm90ZTogdGhpcyBjYXJkIGZ1bmN0aW9uIHNob3VsZCBjcmVhdGUgYSBjYXJkIGluIHRoZSBcImNsb3NlZCBzdGF0ZVwiIGFuZCB0aGVuIHdoZW4gd2UgY2xpY2sgb24gYW4gYXJyb3cgbGV0cyBzYXQsIGl0IHdpbGwgZXhwYW5kIG9wZW4gcmV2ZWFsaW5nIGl0cyBjb250ZW50c1xuXG4vL2VhY2ggZ2VuZXJhdGVkIGNhcmQgc2hvdWxkIGJlIGFkZGVkIHRvIGEgbWFpbiBhcnJheS5cbi8vdGhlbiwgaSBjb3VsZCBoYXZlIGEgc2luZ2xlIG1vZHVsZSB3aGljaCBjb3VsZCBleHBvcnQgZXZlcnkgcGFnZSBuZWVkZWQuXG4vL1RIRU4gZm9yRWFjaCBvYmogaW4gdGhlIGFycmF5LCBydW4gdGhlIG1ha2VDYXJkIGZ1bmN0aW9uIGFuZCBhcHBlbmQgdGhlbSB0byB0aGUgZGVmYXVsdCBpbmJveCBzZWN0aW9uXG5cbi8vYXMgZm9yIGFjdGlvbiBidXR0b25zLCBpIHdhbnQgd2hpY2ggYnV0dG9ucyBhdmFpbGFibGUgdG8gZGVwZW5kIG9uIHdoYXQgcGFnZSB0aGUgdGFzayBpbiBvbi4gXG4vL2ZvciBleCwgaWYgb24gaW5ib3gsIGNvbXBsZXRlLCBlZGl0LCBkZWxldGUgYW5kIGFkZCB0byBwcm9qZWN0XG4vL2J1dCBpZiBvbiBjb21wbGV0ZWQgcGFnZSwgdGhlbiB3ZSB3b3VsZCB3YW50IGl0IHRvIG9ubHkgaGF2ZSBhIFwibWFyayBhcyBpbmNvbXBsZXRlXCIgYnV0dG9uIHdoaWNoIHdvdWxkIHJlLWFkZCBpdCB0byB0aGUgbWFpbiBhcnJheS5cbi8vdG8gZG8gdGhpcywgd2UgY2FuIG1ha2UgYSBmdW5jdGlvbiB3aGljaCBjaGVja3MgdG8gc2VlIHRoZSBwYXJlbnQgb2YgdGhlIGNhcmQgKHdoaWNoIHNob3VsZCBiZSB0aGUgcGFnZSkgYW5kIGFwcGVuZCB0aGUgYnV0dG9ucyBhY2NvcmRpbmdseS5cblxuXG4vL3doZW4gZWRpdCBpcyBjbGlja2VkLCBtYXliZSBhIG5ldyBjb3B5IG9mIHRoZSBtYWluIGZvcm0gY2FuIGJlIG9wZW5lZCBhbmQgd2hlbiBzdWJtaXQgaXMgaGl0IHRoZXNlIGNvdWxkIFwic2V0XCIgdGhlIHByb3BlcnRpZXMgb2YgdGhhdCBvYmplY3Rcbi8vaWYgb2JqLmNvbXBsZXRlZCA9PSAneWVzJyB3ZSBjYW4gdGhlbiBydW4gb2JqLm1ha2VDYXJkIGFuZCBhcHBlbmQgaXQgdG8gdGhlIGNvbXBsZXRlZCBwYWdlXG5cbi8vd2hlbiB0b2RheSBpcyBjbGlja2VkLCBhIGZ1bmN0aW9uIHNob3VsZCBiZSBydW4gd2hpY2ggbG9vcHMgdGhyb3VnaCB0aGUgbWFpbiBhcnJheSwgY2hlY2tzIGVhY2ggb2JqIGluIGl0IGFuZCBjaGVja3Mgb2JqLmR1ZWRhdGUuIGlmIGl0cyB0b2RheSwgYXBwZW5kIGl0IHRvIHRoaXMgc2VjaXRvblxuLy9ub3RlOiBlYWNoIHNpZGViYXIgYnV0dG9uIHNob3VsZCBoYXZlIGFuIGV2ZW4gbGlzdGVuZXIgc28gdGhhdCBldmVyeSB0aW1lIHdlIGNsaWNrIGl0IGlzIGVzc2VudGlhbGx5IHJlc2Nhbm5pbmcgdGhlIG1haW4gYXJyYXkgYW5kIGV2ZXJ5dGhpbmcgaXMgdXAgdG8gZGF0ZVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9