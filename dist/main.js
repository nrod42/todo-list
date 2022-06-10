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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root {\n\n}\n\nhtml {\n    height: 100vh;\n    width: 100vw;\n}\n\nbody {\n    height: 100%;\n    width: 100%;\n}\n\n.mainWrapper {\n    position: relative;\n    padding: 0 100px;\n    width: 100%;\n    height: 100%;  \n    display: grid;\n    grid-template-columns: minmax(150px, 15%) 1fr;\n    grid-template-rows: 5% 1fr;\n}\n\n.nav {\n    grid-column: span 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.nav div {\n    width: 50%;\n}\n\n.sidebar {\n    border: 1px solid black; \n}\n\n.mainGroup, .projectGroup {   \n    margin: 10px;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.mainGroup button, .projectGroup button {\n    margin: 10px 0;\n}\n\n.addTaskBtn {\n    position: absolute;\n    right: 0;\n    top: 0;\n}\n\n#projectForm {\n    width: 250px;\n    height: 250px;\n    position: fixed;\n    margin: 0 auto;\n    left: calc(50% - 125px);\n    top: calc(50% - 125px);\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    display: none;\n    flex-direction: column;\n}\n\n#taskForm {\n    width: 370px;\n    height: 370px;\n    position: fixed;\n    margin: 0 auto;\n    left: calc(50% - 185px);\n    top: calc(50% - 185px);\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    display: none;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#addToProjectForm {\n    width: 250px;\n    height: 250px;\n    position: fixed;\n    margin: 0 auto;\n    left: calc(50% - 125px);\n    top: calc(50% - 125px);\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    display: none;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.project {\n    border: 1px solid black;\n    display: none;\n    flex-direction: column;\n}\n\n.inbox {\n    display: flex;\n}\n\n.today {\n    display: none;\n}\n\n.upcoming {\n    display: none;\n}\n\n.completed {\n    display: none;\n}\n\n.card {\n    position: relative;\n    margin: 10px;\n    padding: 10px;\n    border: 1px solid black;\n    border-radius: 5px;;\n}\n\n.card p {\n    padding: 5px;\n}\n\n.lowPriority {\n    background-color: blue;\n}\n\n.medPriority {\n    background-color: gold;\n}\n\n.highPriority {\n    background-color: rgb(228, 54, 54);\n}\n\n.btnWrapper {\n\n    display: flex;\n    gap: 10px;\n}\n\n.collapsible {\n    color: white;\n    cursor: pointer;\n    padding: 18px;\n    width: 100%;\n    border: none;\n    text-align: left;\n    outline: none;\n    font-size: 15px;\n}\n\n.activeCard, .collapsible:hover {\n    \n}\n\n.cardContent {\n    padding: 0 18px;\n    display: none;\n    flex-direction: column;\n    overflow: hidden;\n    background-color: #f1f1f1;\n    max-height: 0;\n    transition: max-height 0.2s ease-out;\n}\n\n.collapsible:after {\n    content: '\\02795';\n    font-size: 13px;\n    color: white;\n    float: right;\n    margin-left: 5px;\n}\n\n.activeCard:after {\n    content: \"\\2796\"; \n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,yCAAyC;AAC7C;;AAEA;;AAEA;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,6CAA6C;IAC7C,0BAA0B;AAC9B;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,MAAM;AACV;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;IACf,cAAc;IACd,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;IACf,cAAc;IACd,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;IACf,cAAc;IACd,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,kCAAkC;AACtC;;AAEA;;IAEI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,aAAa;IACb,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,eAAe;AACnB;;AAEA;;AAEA;;AAEA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,yBAAyB;IACzB,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root {\n\n}\n\nhtml {\n    height: 100vh;\n    width: 100vw;\n}\n\nbody {\n    height: 100%;\n    width: 100%;\n}\n\n.mainWrapper {\n    position: relative;\n    padding: 0 100px;\n    width: 100%;\n    height: 100%;  \n    display: grid;\n    grid-template-columns: minmax(150px, 15%) 1fr;\n    grid-template-rows: 5% 1fr;\n}\n\n.nav {\n    grid-column: span 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.nav div {\n    width: 50%;\n}\n\n.sidebar {\n    border: 1px solid black; \n}\n\n.mainGroup, .projectGroup {   \n    margin: 10px;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.mainGroup button, .projectGroup button {\n    margin: 10px 0;\n}\n\n.addTaskBtn {\n    position: absolute;\n    right: 0;\n    top: 0;\n}\n\n#projectForm {\n    width: 250px;\n    height: 250px;\n    position: fixed;\n    margin: 0 auto;\n    left: calc(50% - 125px);\n    top: calc(50% - 125px);\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    display: none;\n    flex-direction: column;\n}\n\n#taskForm {\n    width: 370px;\n    height: 370px;\n    position: fixed;\n    margin: 0 auto;\n    left: calc(50% - 185px);\n    top: calc(50% - 185px);\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    display: none;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#addToProjectForm {\n    width: 250px;\n    height: 250px;\n    position: fixed;\n    margin: 0 auto;\n    left: calc(50% - 125px);\n    top: calc(50% - 125px);\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 10px;\n    display: none;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.project {\n    border: 1px solid black;\n    display: none;\n    flex-direction: column;\n}\n\n.inbox {\n    display: flex;\n}\n\n.today {\n    display: none;\n}\n\n.upcoming {\n    display: none;\n}\n\n.completed {\n    display: none;\n}\n\n.card {\n    position: relative;\n    margin: 10px;\n    padding: 10px;\n    border: 1px solid black;\n    border-radius: 5px;;\n}\n\n.card p {\n    padding: 5px;\n}\n\n.lowPriority {\n    background-color: blue;\n}\n\n.medPriority {\n    background-color: gold;\n}\n\n.highPriority {\n    background-color: rgb(228, 54, 54);\n}\n\n.btnWrapper {\n\n    display: flex;\n    gap: 10px;\n}\n\n.collapsible {\n    color: white;\n    cursor: pointer;\n    padding: 18px;\n    width: 100%;\n    border: none;\n    text-align: left;\n    outline: none;\n    font-size: 15px;\n}\n\n.activeCard, .collapsible:hover {\n    \n}\n\n.cardContent {\n    padding: 0 18px;\n    display: none;\n    flex-direction: column;\n    overflow: hidden;\n    background-color: #f1f1f1;\n    max-height: 0;\n    transition: max-height 0.2s ease-out;\n}\n\n.collapsible:after {\n    content: '\\02795';\n    font-size: 13px;\n    color: white;\n    float: right;\n    margin-left: 5px;\n}\n\n.activeCard:after {\n    content: \"\\2796\"; \n}"],"sourceRoot":""}]);
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
  const form = document.createElement("form");
  form.id = "taskForm";

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title:";
  titleLabel.for = "title";

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "title";
  titleInput.name = "title";

  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description:";
  descriptionLabel.for = "description";

  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.id = "description";
  descriptionInput.name = "description";

  const dueDateLabel = document.createElement("label");
  dueDateLabel.textContent = "Due Date:";
  dueDateLabel.for = "dueDate";

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.id = "dueDate";
  dueDateInput.name = "dueDate";

  const priorityLabel = document.createElement("label");
  priorityLabel.textContent = "Priority:";
  priorityLabel.for = "priority";

  const priorityInput = document.createElement("select");
  priorityInput.name = "prorities";
  priorityInput.id = "priority";

  const none = document.createElement("option");
  none.textContent = "None";
  none.value = "none";
  const low = document.createElement("option");
  low.textContent = "Low";
  low.value = "low";
  const med = document.createElement("option");
  med.textContent = "Medium";
  med.value = "med";
  const high = document.createElement("option");
  high.textContent = "High";
  high.value = "high";

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Add Task";

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
  const projectForm = document.createElement("form");
  projectForm.id = "projectForm";

  const projectNameLabel = document.createElement("label");
  projectNameLabel.textContent = "Project Name: ";
  projectNameLabel.for = "projectName";

  const projectNameInput = document.createElement("input");
  projectNameInput.type = "text";
  projectNameInput.id = "projectName";
  projectNameInput.name = "projectName";

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Create New Project";

  projectForm.appendChild(projectNameLabel);
  projectForm.appendChild(projectNameInput);
  projectForm.appendChild(submitBtn);

  return projectForm;
};

const createSelectProjectForm = () => {
  const addToProjectForm = document.createElement("form");
  addToProjectForm.id = "addToProjectForm";

  const chooseProjectLabel = document.createElement("label");
  chooseProjectLabel.textContent = "Select a project: ";
  chooseProjectLabel.for = "currentProjects";

  const currentProjects = document.createElement("select");
  currentProjects.name = "currentProjects";
  currentProjects.id = "currentProjects";

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Add to Project";

  addToProjectForm.appendChild(chooseProjectLabel);
  addToProjectForm.appendChild(currentProjects);
  addToProjectForm.appendChild(submitBtn);

  return addToProjectForm;
};

const clearForm = (form) => {
  form.style.display = "none";
  const allElements = Array.from(form.querySelectorAll("input"));
  allElements.forEach((element) => (element.value = ""));
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

const createProjectGroup = () => {
  const projectGroup = document.createElement('div');
  projectGroup.classList.add('projectGroup');

  return projectGroup;
};

const createPage = () => {
  const page = document.createElement('div');
  page.classList.add('project');

  return page;
};

const actionBtns = () => {
  const btnWrapper = document.createElement('div');
  btnWrapper.classList.add('btnWrapper');

  const addToCompletedBtn = document.createElement('button');
  addToCompletedBtn.textContent = 'Completed';
  addToCompletedBtn.classList.add('addToCompletedBtn');

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.classList.add('editBtn');

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.classList.add('delBtn');

  const addToProjectBtn = document.createElement('button');
  addToProjectBtn.textContent = 'Add To Project';
  addToProjectBtn.classList.add('addToProjectBtn');

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

const addTaskBtn = document.createElement("button");
addTaskBtn.textContent = "Add New Task";
addTaskBtn.classList.add("addTaskBtn");

mainWrapper.appendChild(nav);
mainWrapper.appendChild(sidebar);
mainWrapper.appendChild(addTaskBtn);
mainWrapper.appendChild(taskForm);
mainWrapper.appendChild(projectForm);
mainWrapper.appendChild(selectProjectForm);
mainWrapper.appendChild(inbox);
mainWrapper.appendChild(today);
mainWrapper.appendChild(upcoming);
mainWrapper.appendChild(completed);

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
  });
  (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.addCollapsibles)();
  hidePages();
  inbox.style.display = "flex";
});

// Today Section - Shows all non-completed tasks due today
todayBtn.addEventListener("click", () => {
  // wipes old array and replaces it with most current one
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
  });
  (0,_buttons__WEBPACK_IMPORTED_MODULE_3__.addCollapsibles)();
  hidePages();
  completed.style.display = "flex";
});

// EVERY EVENT LISTENER CAN BE A APRT OF AN EVENT LISTENER OBJ WHERE WE PASS IT THE MAIN AND COMPLETE ARRAYS AND THEN WE JUST CALL THE OBJ FUNCTION IN HERE, INDEX.
// EX: OBJ.UPCOMING WOULD STILL DO EVERYYTHING IT DOES HERE BUT NOW ITS NOTE HERE ATT ALL. THERE SHOULD BE NO ISSUES BECAUSE, IT STILL HAS ACCESS TO MAIN ARRAY.

// note: this card function should create a card in the "closed state" and then when we click on an arrow lets sat, it will expand open revealing its contents

// but if on completed page, then we would want it to only have a "mark as incomplete" button which would re-add it to the main array.
// to do this, we can make a function which checks to see the parent of the card (which should be the page) and append the buttons accordingly.

// when edit is clicked, maybe a new copy of the main form can be opened and when submit is hit these could "set" the properties of that object

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLDZCQUE2QixnQkFBZ0IsZ0RBQWdELEdBQUcsV0FBVyxLQUFLLFVBQVUsb0JBQW9CLG1CQUFtQixHQUFHLFVBQVUsbUJBQW1CLGtCQUFrQixHQUFHLGtCQUFrQix5QkFBeUIsdUJBQXVCLGtCQUFrQixxQkFBcUIsb0JBQW9CLG9EQUFvRCxpQ0FBaUMsR0FBRyxVQUFVLDBCQUEwQixvQkFBb0IsMEJBQTBCLDhCQUE4QixHQUFHLGNBQWMsaUJBQWlCLEdBQUcsY0FBYywrQkFBK0IsR0FBRyxrQ0FBa0MsbUJBQW1CLG9CQUFvQixvQkFBb0IsNkJBQTZCLEdBQUcsNkNBQTZDLHFCQUFxQixHQUFHLGlCQUFpQix5QkFBeUIsZUFBZSxhQUFhLEdBQUcsa0JBQWtCLG1CQUFtQixvQkFBb0Isc0JBQXNCLHFCQUFxQiw4QkFBOEIsNkJBQTZCLDhCQUE4Qix5QkFBeUIsb0JBQW9CLG9CQUFvQiw2QkFBNkIsR0FBRyxlQUFlLG1CQUFtQixvQkFBb0Isc0JBQXNCLHFCQUFxQiw4QkFBOEIsNkJBQTZCLDhCQUE4Qix5QkFBeUIsb0JBQW9CLG9CQUFvQiw2QkFBNkIscUNBQXFDLEdBQUcsdUJBQXVCLG1CQUFtQixvQkFBb0Isc0JBQXNCLHFCQUFxQiw4QkFBOEIsNkJBQTZCLDhCQUE4Qix5QkFBeUIsb0JBQW9CLG9CQUFvQiw2QkFBNkIscUNBQXFDLEdBQUcsY0FBYyw4QkFBOEIsb0JBQW9CLDZCQUE2QixHQUFHLFlBQVksb0JBQW9CLEdBQUcsWUFBWSxvQkFBb0IsR0FBRyxlQUFlLG9CQUFvQixHQUFHLGdCQUFnQixvQkFBb0IsR0FBRyxXQUFXLHlCQUF5QixtQkFBbUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyxhQUFhLG1CQUFtQixHQUFHLGtCQUFrQiw2QkFBNkIsR0FBRyxrQkFBa0IsNkJBQTZCLEdBQUcsbUJBQW1CLHlDQUF5QyxHQUFHLGlCQUFpQixzQkFBc0IsZ0JBQWdCLEdBQUcsa0JBQWtCLG1CQUFtQixzQkFBc0Isb0JBQW9CLGtCQUFrQixtQkFBbUIsdUJBQXVCLG9CQUFvQixzQkFBc0IsR0FBRyxxQ0FBcUMsU0FBUyxrQkFBa0Isc0JBQXNCLG9CQUFvQiw2QkFBNkIsdUJBQXVCLGdDQUFnQyxvQkFBb0IsMkNBQTJDLEdBQUcsd0JBQXdCLHlCQUF5QixzQkFBc0IsbUJBQW1CLG1CQUFtQix1QkFBdUIsR0FBRyx1QkFBdUIsMkJBQTJCLEdBQUcsT0FBTyxpRkFBaUYsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSw2QkFBNkIsNkJBQTZCLGdCQUFnQixnREFBZ0QsR0FBRyxXQUFXLEtBQUssVUFBVSxvQkFBb0IsbUJBQW1CLEdBQUcsVUFBVSxtQkFBbUIsa0JBQWtCLEdBQUcsa0JBQWtCLHlCQUF5Qix1QkFBdUIsa0JBQWtCLHFCQUFxQixvQkFBb0Isb0RBQW9ELGlDQUFpQyxHQUFHLFVBQVUsMEJBQTBCLG9CQUFvQiwwQkFBMEIsOEJBQThCLEdBQUcsY0FBYyxpQkFBaUIsR0FBRyxjQUFjLCtCQUErQixHQUFHLGtDQUFrQyxtQkFBbUIsb0JBQW9CLG9CQUFvQiw2QkFBNkIsR0FBRyw2Q0FBNkMscUJBQXFCLEdBQUcsaUJBQWlCLHlCQUF5QixlQUFlLGFBQWEsR0FBRyxrQkFBa0IsbUJBQW1CLG9CQUFvQixzQkFBc0IscUJBQXFCLDhCQUE4Qiw2QkFBNkIsOEJBQThCLHlCQUF5QixvQkFBb0Isb0JBQW9CLDZCQUE2QixHQUFHLGVBQWUsbUJBQW1CLG9CQUFvQixzQkFBc0IscUJBQXFCLDhCQUE4Qiw2QkFBNkIsOEJBQThCLHlCQUF5QixvQkFBb0Isb0JBQW9CLDZCQUE2QixxQ0FBcUMsR0FBRyx1QkFBdUIsbUJBQW1CLG9CQUFvQixzQkFBc0IscUJBQXFCLDhCQUE4Qiw2QkFBNkIsOEJBQThCLHlCQUF5QixvQkFBb0Isb0JBQW9CLDZCQUE2QixxQ0FBcUMsR0FBRyxjQUFjLDhCQUE4QixvQkFBb0IsNkJBQTZCLEdBQUcsWUFBWSxvQkFBb0IsR0FBRyxZQUFZLG9CQUFvQixHQUFHLGVBQWUsb0JBQW9CLEdBQUcsZ0JBQWdCLG9CQUFvQixHQUFHLFdBQVcseUJBQXlCLG1CQUFtQixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLGFBQWEsbUJBQW1CLEdBQUcsa0JBQWtCLDZCQUE2QixHQUFHLGtCQUFrQiw2QkFBNkIsR0FBRyxtQkFBbUIseUNBQXlDLEdBQUcsaUJBQWlCLHNCQUFzQixnQkFBZ0IsR0FBRyxrQkFBa0IsbUJBQW1CLHNCQUFzQixvQkFBb0Isa0JBQWtCLG1CQUFtQix1QkFBdUIsb0JBQW9CLHNCQUFzQixHQUFHLHFDQUFxQyxTQUFTLGtCQUFrQixzQkFBc0Isb0JBQW9CLDZCQUE2Qix1QkFBdUIsZ0NBQWdDLG9CQUFvQiwyQ0FBMkMsR0FBRyx3QkFBd0IseUJBQXlCLHNCQUFzQixtQkFBbUIsbUJBQW1CLHVCQUF1QixHQUFHLHVCQUF1QiwyQkFBMkIsR0FBRyxtQkFBbUI7QUFDN3BQO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7O0FBRW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLHlDQUF5Qyx5QkFBeUI7QUFDbEU7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUUsK0NBQStDO0FBQy9DLHVFQUF1RTtBQUN2RTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxtQ0FBbUM7QUFDbkMsSUFBSSxpREFBUztBQUNiLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBUUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEpvQztBQUNNOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLGlCQUFpQjs7QUFFNUQ7QUFDQSwyQ0FBMkMsYUFBYTs7QUFFeEQ7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsbURBQVU7QUFDdEM7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVELGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBT0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUlFOzs7Ozs7O1VDbEdGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFNa0I7QUFDb0I7QUFNckI7QUFPRTtBQUNHOztBQUV0Qjs7QUFFQTtBQUNBLFlBQVksa0RBQVM7QUFDckIsZ0JBQWdCLHNEQUFhO0FBQzdCLGlCQUFpQixzREFBYztBQUMvQixvQkFBb0IseURBQWlCO0FBQ3JDLDBCQUEwQiwrREFBdUI7QUFDakQsY0FBYyxtREFBVTtBQUN4QixjQUFjLG1EQUFVO0FBQ3hCLGlCQUFpQixtREFBVTtBQUMzQixrQkFBa0IsbURBQVU7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsdURBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlEQUFlO0FBQ2pCLEVBQUUsc0RBQVk7QUFDZCxFQUFFLDZDQUFHO0FBQ0wsRUFBRSw4REFBb0I7QUFDdEIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1REFBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSx5REFBZTtBQUNqQixFQUFFLGlEQUFTO0FBQ1gsRUFBRSxzREFBWTtBQUNkLEVBQUUsNkNBQUc7QUFDTCxFQUFFLDhEQUFvQjtBQUN0QixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyREFBa0I7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlEQUFTOztBQUVYLHNCQUFzQixtREFBVTtBQUNoQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRSx5REFBZTtBQUNqQixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLHlEQUFlO0FBQ2pCO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLHlEQUFlO0FBQ2pCLEVBQUUsc0RBQVk7QUFDZCxFQUFFLDZDQUFHO0FBQ0wsRUFBRSw4REFBb0I7QUFDdEI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUseURBQWU7QUFDakIsRUFBRSxzREFBWTtBQUNkLEVBQUUsNkNBQUc7QUFDTCxFQUFFLDhEQUFvQjtBQUN0QjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSx5REFBZTtBQUNqQjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYnV0dG9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuOnJvb3Qge1xcblxcbn1cXG5cXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1haW5XcmFwcGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAwIDEwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlOyAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE1MHB4LCAxNSUpIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1JSAxZnI7XFxufVxcblxcbi5uYXYge1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm5hdiBkaXYge1xcbiAgICB3aWR0aDogNTAlO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyBcXG59XFxuXFxuLm1haW5Hcm91cCwgLnByb2plY3RHcm91cCB7ICAgXFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW5Hcm91cCBidXR0b24sIC5wcm9qZWN0R3JvdXAgYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbi5hZGRUYXNrQnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG4jcHJvamVjdEZvcm0ge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTI1cHgpO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMTI1cHgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jdGFza0Zvcm0ge1xcbiAgICB3aWR0aDogMzcwcHg7XFxuICAgIGhlaWdodDogMzcwcHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMTg1cHgpO1xcbiAgICB0b3A6IGNhbGMoNTAlIC0gMTg1cHgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNhZGRUb1Byb2plY3RGb3JtIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEyNXB4KTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDEyNXB4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaW5ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9kYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udXBjb21pbmcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNhcmQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDs7XFxufVxcblxcbi5jYXJkIHAge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5sb3dQcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5tZWRQcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGQ7XFxufVxcblxcbi5oaWdoUHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCA1NCwgNTQpO1xcbn1cXG5cXG4uYnRuV3JhcHBlciB7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmNvbGxhcHNpYmxlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDE4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmFjdGl2ZUNhcmQsIC5jb2xsYXBzaWJsZTpob3ZlciB7XFxuICAgIFxcbn1cXG5cXG4uY2FyZENvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAwIDE4cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcXG59XFxuXFxuLmNvbGxhcHNpYmxlOmFmdGVyIHtcXG4gICAgY29udGVudDogJ1xcXFwwMjc5NSc7XFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5hY3RpdmVDYXJkOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXFwyNzk2XFxcIjsgXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCx5Q0FBeUM7QUFDN0M7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLDZDQUE2QztJQUM3QywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0FBQ1Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBOztJQUVJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTs7QUFFQTs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbjpyb290IHtcXG5cXG59XFxuXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tYWluV3JhcHBlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMCAxMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTsgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNTBweCwgMTUlKSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNSUgMWZyO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5uYXYgZGl2IHtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgXFxufVxcblxcbi5tYWluR3JvdXAsIC5wcm9qZWN0R3JvdXAgeyAgIFxcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tYWluR3JvdXAgYnV0dG9uLCAucHJvamVjdEdyb3VwIGJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4uYWRkVGFza0J0biB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHRvcDogMDtcXG59XFxuXFxuI3Byb2plY3RGb3JtIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEyNXB4KTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDEyNXB4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Rhc2tGb3JtIHtcXG4gICAgd2lkdGg6IDM3MHB4O1xcbiAgICBoZWlnaHQ6IDM3MHB4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDE4NXB4KTtcXG4gICAgdG9wOiBjYWxjKDUwJSAtIDE4NXB4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jYWRkVG9Qcm9qZWN0Rm9ybSB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxMjVweCk7XFxuICAgIHRvcDogY2FsYyg1MCUgLSAxMjVweCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmluYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvZGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnVwY29taW5nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jYXJkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7O1xcbn1cXG5cXG4uY2FyZCBwIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubG93UHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ubWVkUHJpb3JpdHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcbn1cXG5cXG4uaGlnaFByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgNTQsIDU0KTtcXG59XFxuXFxuLmJ0bldyYXBwZXIge1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5jb2xsYXBzaWJsZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5hY3RpdmVDYXJkLCAuY29sbGFwc2libGU6aG92ZXIge1xcbiAgICBcXG59XFxuXFxuLmNhcmRDb250ZW50IHtcXG4gICAgcGFkZGluZzogMCAxOHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbi5jb2xsYXBzaWJsZTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICdcXFxcMDI3OTUnO1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4uYWN0aXZlQ2FyZDphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjc5NlxcXCI7IFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gYnJ1aCwgd2UgY291bGQgbWFrZSBlYWNoIG9mIHRoZXNlIGZ1bmN0aW9ucyBhcyBwcm9wZXJ0aWVzIHRvIGFuIG9iai5cbi8vIGxpa2UgaGF2ZSBhbiAnZXZlbnQnIG1vZHVsZSB3aGljaCBpcyBqdXN0IGFuIG9ialxuLy8gYW5kIGVhY2ggb2JqIHByb3AgaXMgZWFjaCBvZiB0aGVzZSBmdW5jdGlvbnM6XG5cbmltcG9ydCB7IGNsZWFyRm9ybSB9IGZyb20gXCIuL2Zvcm1zXCI7XG5cbmNvbnN0IGFkZENvbGxhcHNpYmxlcyA9ICgpID0+IHtcbiAgY29uc3QgYWxsQ29sbGFwc2libGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbGxhcHNpYmxlXCIpKTtcbiAgYWxsQ29sbGFwc2libGVzLmZvckVhY2goKGNvbGxhcHNpYmxlKSA9PiB7XG4gICAgY29sbGFwc2libGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbGxhcHNpYmxlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVDYXJkXCIpO1xuICAgICAgY29uc3QgY2FyZENvbnRlbnQgPSBjb2xsYXBzaWJsZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICBpZiAoY2FyZENvbnRlbnQuc3R5bGUuZGlzcGxheSA9PT0gXCJmbGV4XCIpIHtcbiAgICAgICAgY2FyZENvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FyZENvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgfVxuICAgICAgaWYgKGNhcmRDb250ZW50LnN0eWxlLm1heEhlaWdodCkge1xuICAgICAgICBjYXJkQ29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FyZENvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gYCR7Y2FyZENvbnRlbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBtYXJrQ29tcGxldGUgPSAobWFpbkFycmF5LCBjb21wbGV0ZWRBcnJheSkgPT4ge1xuICBjb25zdCBtYXJrQ29tcGxldGVCdG5zID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZFRvQ29tcGxldGVkQnRuXCIpXG4gICk7XG4gIG1hcmtDb21wbGV0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgY2FyZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50OyAvLyB0aGlzIGlzIHRoZSBjYXJkIGl0c2VsZlxuICAgICAgY29uc3QgY2FyZElkID0gcGFyc2VJbnQoY2FyZC5kYXRhc2V0LmlkLCAxMCk7XG4gICAgICBtYWluQXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBpZiAodGFzay5pZCA9PT0gY2FyZElkKSB7XG4gICAgICAgICAgY29tcGxldGVkQXJyYXkucHVzaCh0YXNrKTtcbiAgICAgICAgICBtYWluQXJyYXkuc3BsaWNlKG1haW5BcnJheS5pbmRleE9mKHRhc2spLCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZW1vdmVDYXJkKGNhcmQpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGRlbCA9IChtYWluQXJyYXkpID0+IHtcbiAgY29uc3QgZGVsQnRucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxCdG5cIikpO1xuICBkZWxCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGNvbnN0IGNhcmQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDsgLy8gdGhpcyBpcyB0aGUgY2FyZCBpdHNlbGZcbiAgICAgIGNvbnN0IGNhcmRJZCA9IHBhcnNlSW50KGNhcmQuZGF0YXNldC5pZCwgMTApO1xuICAgICAgbWFpbkFycmF5LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgaWYgKHRhc2suaWQgPT09IGNhcmRJZCkge1xuICAgICAgICAgIG1haW5BcnJheS5zcGxpY2UobWFpbkFycmF5LmluZGV4T2YodGFzayksIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJlbW92ZUNhcmQoY2FyZCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gU2hvd3MgQWRkIFRvIFByb2plY3QgRm9ybVxuY29uc3Qgc2hvd0FkZFRvUHJvamVjdEZvcm0gPSAobWFpbkFycmF5KSA9PiB7XG4gIGNvbnN0IGFkZFRvUHJvamVjdEJ0bnMgPSBBcnJheS5mcm9tKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkVG9Qcm9qZWN0QnRuXCIpXG4gICk7XG4gIGFkZFRvUHJvamVjdEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgYWxsR3JvdXBzID0gQXJyYXkuZnJvbShcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0R3JvdXBCdG5cIilcbiAgICAgICk7XG4gICAgICBpZiAoYWxsR3JvdXBzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgY29uc3QgYWRkVG9Qcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVG9Qcm9qZWN0Rm9ybVwiKTsgLy8gdGhlIGZvcm0gdG8gc2VsZWN0XG4gICAgICBhZGRUb1Byb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgLy8gbWFrZXMgZm9ybSB2aXNpYmxlXG4gICAgICBjb25zdCBjYXJkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7IC8vIHRoaXMgaXMgdGhlIGNhcmQsXG4gICAgICBhZGRPcHRpb25zKGFsbEdyb3Vwcyk7XG4gICAgICBhZGRQcm9qZWN0VG9QYWdlKGNhcmQsIG1haW5BcnJheSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gQWRkcyBvcHRpb25zIHRvIHByb2plY3QgZm9ybSBkcm9wZG93blxuZnVuY3Rpb24gYWRkT3B0aW9ucyhhbGxHcm91cHMpIHtcbiAgLy8gRGVsZXRlcyBvbGQgb3B0aW9ucyBpbiBjYXNlIHByZXZpb3VzIHByb2plY3QgcGFnZXMgd2VyZSBkZWxldGVkIG9yIHJlbmFtZWRcbiAgY29uc3QgcHJldmlvdXNPcHRpb25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpKTtcbiAgcHJldmlvdXNPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4gb3B0aW9uLnJlbW92ZSgpKTtcblxuICBjb25zdCBhZGRUb1Byb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUb1Byb2plY3RGb3JtXCIpO1xuICAvLyBUYWtlcyB0aGUgbmFtZSBvZiBlYWNoIGV4aXN0aW5nIHByb2plY3QgJiBhcHBlbmRzIGFuIG9wdGlvbiB0byB0aGUgZm9ybSBkcm9wZG93blxuICBhbGxHcm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGdyb3VwLnRleHRDb250ZW50O1xuICAgIG9wdGlvbi52YWx1ZSA9IGdyb3VwLnRleHRDb250ZW50O1xuICAgIGFkZFRvUHJvamVjdEZvcm0uY3VycmVudFByb2plY3RzLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG9QYWdlKGNhcmQsIG1haW5BcnJheSkge1xuICBjb25zdCBhZGRUb1Byb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUb1Byb2plY3RGb3JtXCIpO1xuICBhZGRUb1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBhZGRUb1Byb2plY3RGb3JtLmN1cnJlbnRQcm9qZWN0cy52YWx1ZTtcbiAgICAvLyBnZXRzIHRoZSBwcm9qZWN0IHBhZ2Ugd2hlcmUgdGhlIGNhcmQgd2lsbCBiZSBtb3ZlZCB0b1xuICAgIGNvbnN0IHByb2plY3RQYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJvamVjdE5hbWUpO1xuXG4gICAgLy9cbiAgICBjb25zdCBjYXJkSWQgPSBwYXJzZUludChjYXJkLmRhdGFzZXQuaWQsIDEwKTtcbiAgICBtYWluQXJyYXkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2suaWQgPT09IGNhcmRJZCkge1xuICAgICAgICBtYWluQXJyYXkuc3BsaWNlKG1haW5BcnJheS5pbmRleE9mKHRhc2spLCAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBwcm9qZWN0UGFnZS5hcHBlbmRDaGlsZChjYXJkKTsgLy8gbW92ZXMgdGhlIHNlbGVjdGVkIGNhcmQgdG8gcGFnZVxuICAgIGNsZWFyRm9ybShhZGRUb1Byb2plY3RGb3JtKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNhcmQoY2FyZCkge1xuICAvLyBEZWxldGVzIHRoZSBjYXJkIGl0c2VsZiwgc2VwZXJhdGUgZnJvbSB0aGUgdGFzayBiZWluZyByZW1vdmVkIGZyb20gdGhlIG1haW5cbiAgY29uc3QgYWxsUGFnZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKSk7XG4gIGFsbFBhZ2VzLmZvckVhY2goKHBhZ2UpID0+IHtcbiAgICBjb25zdCBhbGxDYXJkcyA9IEFycmF5LmZyb20ocGFnZS5jaGlsZHJlbik7XG4gICAgY29uc3QgY2FyZElkID0gcGFyc2VJbnQoY2FyZC5kYXRhc2V0LmlkLCAxMCk7XG4gICAgYWxsQ2FyZHMuZm9yRWFjaCgocGFnZUNhcmQpID0+IHtcbiAgICAgIGlmIChwYXJzZUludChwYWdlQ2FyZC5kYXRhc2V0LmlkLCAxMCkgPT09IGNhcmRJZCkge1xuICAgICAgICBjYXJkLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbmNvbnN0IGFkZFByb2plY3RQYWdlcyA9ICgpID0+IHtcbiAgY29uc3QgYWxsR3JvdXBCdG5zID0gQXJyYXkuZnJvbShcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RHcm91cEJ0blwiKVxuICApO1xuICBhbGxHcm91cEJ0bnMuZm9yRWFjaCgoZ3JvdXBCdG4pID0+IHtcbiAgICBncm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgYWxsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XG4gICAgICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiAocHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpKTtcbiAgICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChncm91cEJ0bi50ZXh0Q29udGVudCk7XG4gICAgICBwYWdlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBhZGRDb2xsYXBzaWJsZXMsXG4gIG1hcmtDb21wbGV0ZSxcbiAgZGVsLFxuICBzaG93QWRkVG9Qcm9qZWN0Rm9ybSxcbiAgYWRkUHJvamVjdFBhZ2VzLFxufTtcbiIsImltcG9ydCB7IGFjdGlvbkJ0bnMgfSBmcm9tIFwiLi9yZW5kZXJcIjtcbmltcG9ydCB7IGFkZENvbGxhcHNpYmxlcyB9IGZyb20gXCIuL2J1dHRvbnNcIjtcblxuY29uc3QgY3JlYXRlVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSA9PiAoe1xuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHByaW9yaXR5LFxuICBwcm9qZWN0LFxuICBpZDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAxKSxcbiAgY3JlYXRlQ2FyZCgpIHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGNhcmQuZGF0YXNldC5pZCA9IHRoaXMuaWQ7XG5cbiAgICBjb25zdCBjYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2FyZENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNhcmRDb250ZW50XCIpO1xuXG4gICAgY29uc3QgY29sbGFwc2libGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbGxhcHNpYmxlLmNsYXNzTGlzdC5hZGQoXCJjb2xsYXBzaWJsZVwiKTtcbiAgICBjb2xsYXBzaWJsZS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG5cbiAgICBjb25zdCBjYXJkRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjYXJkRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgTm90ZTogJHt0aGlzLmRlc2NyaXB0aW9ufWA7XG5cbiAgICBjb25zdCBjYXJkRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNhcmREdWVEYXRlLnRleHRDb250ZW50ID0gYER1ZSBEYXRlOiAke3RoaXMuZHVlRGF0ZX1gO1xuXG4gICAgaWYgKHRoaXMucHJpb3JpdHkgPT09IFwibG93XCIpIHtcbiAgICAgIGNvbGxhcHNpYmxlLmNsYXNzTGlzdC5hZGQoXCJsb3dQcmlvcml0eVwiKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJpb3JpdHkgPT09IFwibWVkXCIpIHtcbiAgICAgIGNvbGxhcHNpYmxlLmNsYXNzTGlzdC5hZGQoXCJtZWRQcmlvcml0eVwiKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICBjb2xsYXBzaWJsZS5jbGFzc0xpc3QuYWRkKFwiaGlnaFByaW9yaXR5XCIpO1xuICAgIH1cblxuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGNhcmREZXNjcmlwdGlvbik7XG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoY2FyZER1ZURhdGUpO1xuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKGFjdGlvbkJ0bnMoKSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjb2xsYXBzaWJsZSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQ29udGVudCk7XG5cbiAgICByZXR1cm4gY2FyZDtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYXNrO1xuIiwiY29uc3QgY3JlYXRlVGFza0Zvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5pZCA9IFwidGFza0Zvcm1cIjtcblxuICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcbiAgdGl0bGVMYWJlbC5mb3IgPSBcInRpdGxlXCI7XG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIHRpdGxlSW5wdXQuaWQgPSBcInRpdGxlXCI7XG4gIHRpdGxlSW5wdXQubmFtZSA9IFwidGl0bGVcIjtcblxuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIjtcbiAgZGVzY3JpcHRpb25MYWJlbC5mb3IgPSBcImRlc2NyaXB0aW9uXCI7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcblxuICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6XCI7XG4gIGR1ZURhdGVMYWJlbC5mb3IgPSBcImR1ZURhdGVcIjtcblxuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gIGR1ZURhdGVJbnB1dC5pZCA9IFwiZHVlRGF0ZVwiO1xuICBkdWVEYXRlSW5wdXQubmFtZSA9IFwiZHVlRGF0ZVwiO1xuXG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xuICBwcmlvcml0eUxhYmVsLmZvciA9IFwicHJpb3JpdHlcIjtcblxuICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgcHJpb3JpdHlJbnB1dC5uYW1lID0gXCJwcm9yaXRpZXNcIjtcbiAgcHJpb3JpdHlJbnB1dC5pZCA9IFwicHJpb3JpdHlcIjtcblxuICBjb25zdCBub25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgbm9uZS50ZXh0Q29udGVudCA9IFwiTm9uZVwiO1xuICBub25lLnZhbHVlID0gXCJub25lXCI7XG4gIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGxvdy50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gIGxvdy52YWx1ZSA9IFwibG93XCI7XG4gIGNvbnN0IG1lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIG1lZC50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gIG1lZC52YWx1ZSA9IFwibWVkXCI7XG4gIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBoaWdoLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gIGhpZ2gudmFsdWUgPSBcImhpZ2hcIjtcblxuICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWJtaXRCdG4udHlwZSA9IFwic3VibWl0XCI7XG4gIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcblxuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChub25lKTtcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChsb3cpO1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKG1lZCk7XG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoaGlnaCk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcblxuICByZXR1cm4gZm9ybTtcbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBwcm9qZWN0Rm9ybS5pZCA9IFwicHJvamVjdEZvcm1cIjtcblxuICBjb25zdCBwcm9qZWN0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBwcm9qZWN0TmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IE5hbWU6IFwiO1xuICBwcm9qZWN0TmFtZUxhYmVsLmZvciA9IFwicHJvamVjdE5hbWVcIjtcblxuICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBwcm9qZWN0TmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgcHJvamVjdE5hbWVJbnB1dC5pZCA9IFwicHJvamVjdE5hbWVcIjtcbiAgcHJvamVjdE5hbWVJbnB1dC5uYW1lID0gXCJwcm9qZWN0TmFtZVwiO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdEJ0bi50eXBlID0gXCJzdWJtaXRcIjtcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJDcmVhdGUgTmV3IFByb2plY3RcIjtcblxuICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUxhYmVsKTtcbiAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dCk7XG4gIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgcmV0dXJuIHByb2plY3RGb3JtO1xufTtcblxuY29uc3QgY3JlYXRlU2VsZWN0UHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGFkZFRvUHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgYWRkVG9Qcm9qZWN0Rm9ybS5pZCA9IFwiYWRkVG9Qcm9qZWN0Rm9ybVwiO1xuXG4gIGNvbnN0IGNob29zZVByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY2hvb3NlUHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJTZWxlY3QgYSBwcm9qZWN0OiBcIjtcbiAgY2hvb3NlUHJvamVjdExhYmVsLmZvciA9IFwiY3VycmVudFByb2plY3RzXCI7XG5cbiAgY29uc3QgY3VycmVudFByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY3VycmVudFByb2plY3RzLm5hbWUgPSBcImN1cnJlbnRQcm9qZWN0c1wiO1xuICBjdXJyZW50UHJvamVjdHMuaWQgPSBcImN1cnJlbnRQcm9qZWN0c1wiO1xuXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdEJ0bi50eXBlID0gXCJzdWJtaXRcIjtcbiAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJBZGQgdG8gUHJvamVjdFwiO1xuXG4gIGFkZFRvUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoY2hvb3NlUHJvamVjdExhYmVsKTtcbiAgYWRkVG9Qcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChjdXJyZW50UHJvamVjdHMpO1xuICBhZGRUb1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cbiAgcmV0dXJuIGFkZFRvUHJvamVjdEZvcm07XG59O1xuXG5jb25zdCBjbGVhckZvcm0gPSAoZm9ybSkgPT4ge1xuICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgY29uc3QgYWxsRWxlbWVudHMgPSBBcnJheS5mcm9tKGZvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpKTtcbiAgYWxsRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQudmFsdWUgPSBcIlwiKSk7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVUYXNrRm9ybSxcbiAgY3JlYXRlUHJvamVjdEZvcm0sXG4gIGNyZWF0ZVNlbGVjdFByb2plY3RGb3JtLFxuICBjbGVhckZvcm0sXG59O1xuIiwiY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuXG4gIGNvbnN0IG5hdkxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbmF2UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBuYXZMZWZ0LnRleHRDb250ZW50ID0gJ0xvZ28nO1xuICBuYXZSaWdodC50ZXh0Q29udGVudCA9ICdGdXR1cmUgQnV0dG9ucyc7XG5cbiAgbmF2LmFwcGVuZENoaWxkKG5hdkxlZnQpO1xuICBuYXYuYXBwZW5kQ2hpbGQobmF2UmlnaHQpO1xuXG4gIHJldHVybiBuYXY7XG59O1xuXG5jb25zdCBjcmVhdGVTaWRlYmFyID0gKCkgPT4ge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuXG4gIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGRQcm9qZWN0QnRuJyk7XG4gIGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuXG4gIGNvbnN0IG1haW5Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluR3JvdXAuY2xhc3NMaXN0LmFkZCgnbWFpbkdyb3VwJyk7XG5cbiAgY29uc3QgaW5ib3hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgaW5ib3hCdG4udGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuXG4gIGNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHRvZGF5QnRuLnRleHRDb250ZW50ID0gJ1RvZGF5JztcblxuICBjb25zdCB1cGNvbWluZ0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB1cGNvbWluZ0J0bi50ZXh0Q29udGVudCA9ICdVcGNvbWluZyc7XG5cbiAgY29uc3QgY29tcGxldGVkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbXBsZXRlZEJ0bi50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xuXG4gIGluYm94QnRuLmNsYXNzTGlzdC5hZGQoJ2luYm94QnRuJyk7XG4gIHRvZGF5QnRuLmNsYXNzTGlzdC5hZGQoJ3RvZGF5QnRuJyk7XG4gIHVwY29taW5nQnRuLmNsYXNzTGlzdC5hZGQoJ3VwY29taW5nQnRuJyk7XG4gIGNvbXBsZXRlZEJ0bi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWRCdG4nKTtcblxuICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKG1haW5Hcm91cCk7XG4gIG1haW5Hcm91cC5hcHBlbmRDaGlsZChpbmJveEJ0bik7XG4gIG1haW5Hcm91cC5hcHBlbmRDaGlsZCh0b2RheUJ0bik7XG4gIG1haW5Hcm91cC5hcHBlbmRDaGlsZCh1cGNvbWluZ0J0bik7XG4gIG1haW5Hcm91cC5hcHBlbmRDaGlsZChjb21wbGV0ZWRCdG4pO1xuXG4gIHJldHVybiBzaWRlYmFyO1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEdyb3VwID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcHJvamVjdEdyb3VwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RHcm91cCcpO1xuXG4gIHJldHVybiBwcm9qZWN0R3JvdXA7XG59O1xuXG5jb25zdCBjcmVhdGVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBhZ2UuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuXG4gIHJldHVybiBwYWdlO1xufTtcblxuY29uc3QgYWN0aW9uQnRucyA9ICgpID0+IHtcbiAgY29uc3QgYnRuV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBidG5XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2J0bldyYXBwZXInKTtcblxuICBjb25zdCBhZGRUb0NvbXBsZXRlZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRUb0NvbXBsZXRlZEJ0bi50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xuICBhZGRUb0NvbXBsZXRlZEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGRUb0NvbXBsZXRlZEJ0bicpO1xuXG4gIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdlZGl0QnRuJyk7XG5cbiAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGRlbEJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICBkZWxCdG4uY2xhc3NMaXN0LmFkZCgnZGVsQnRuJyk7XG5cbiAgY29uc3QgYWRkVG9Qcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZFRvUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9ICdBZGQgVG8gUHJvamVjdCc7XG4gIGFkZFRvUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGRUb1Byb2plY3RCdG4nKTtcblxuICBidG5XcmFwcGVyLmFwcGVuZENoaWxkKGFkZFRvQ29tcGxldGVkQnRuKTtcbiAgYnRuV3JhcHBlci5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgYnRuV3JhcHBlci5hcHBlbmRDaGlsZChkZWxCdG4pO1xuICBidG5XcmFwcGVyLmFwcGVuZENoaWxkKGFkZFRvUHJvamVjdEJ0bik7XG5cbiAgcmV0dXJuIGJ0bldyYXBwZXI7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVOYXYsIGNyZWF0ZVNpZGViYXIsIGNyZWF0ZVByb2plY3RHcm91cCwgY3JlYXRlUGFnZSwgYWN0aW9uQnRucyxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQge1xuICBjcmVhdGVOYXYsXG4gIGNyZWF0ZVNpZGViYXIsXG4gIGNyZWF0ZVByb2plY3RHcm91cCxcbiAgY3JlYXRlUGFnZSxcbn0gZnJvbSBcIi4vcmVuZGVyXCI7XG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tIFwiLi9jcmVhdGVUYXNrXCI7XG5pbXBvcnQge1xuICBjcmVhdGVUYXNrRm9ybSxcbiAgY3JlYXRlUHJvamVjdEZvcm0sXG4gIGNyZWF0ZVNlbGVjdFByb2plY3RGb3JtLFxuICBjbGVhckZvcm0sXG59IGZyb20gXCIuL2Zvcm1zXCI7XG5pbXBvcnQge1xuICBhZGRDb2xsYXBzaWJsZXMsXG4gIG1hcmtDb21wbGV0ZSxcbiAgZGVsLFxuICBzaG93QWRkVG9Qcm9qZWN0Rm9ybSxcbiAgYWRkUHJvamVjdFBhZ2VzLFxufSBmcm9tIFwiLi9idXR0b25zXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcblxuY29uc3QgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5XcmFwcGVyXCIpO1xuXG4vLyBSZW5kZXJzIGFsbCBuZWVkZWQgRE9NIGVsZW1lbnRzXG5jb25zdCBuYXYgPSBjcmVhdGVOYXYoKTtcbmNvbnN0IHNpZGViYXIgPSBjcmVhdGVTaWRlYmFyKCk7XG5jb25zdCB0YXNrRm9ybSA9IGNyZWF0ZVRhc2tGb3JtKCk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IGNyZWF0ZVByb2plY3RGb3JtKCk7XG5jb25zdCBzZWxlY3RQcm9qZWN0Rm9ybSA9IGNyZWF0ZVNlbGVjdFByb2plY3RGb3JtKCk7XG5jb25zdCBpbmJveCA9IGNyZWF0ZVBhZ2UoKTtcbmNvbnN0IHRvZGF5ID0gY3JlYXRlUGFnZSgpO1xuY29uc3QgdXBjb21pbmcgPSBjcmVhdGVQYWdlKCk7XG5jb25zdCBjb21wbGV0ZWQgPSBjcmVhdGVQYWdlKCk7XG5cbmluYm94LmNsYXNzTGlzdC5hZGQoXCJpbmJveFwiKTtcbnRvZGF5LmNsYXNzTGlzdC5hZGQoXCJ0b2RheVwiKTtcbnVwY29taW5nLmNsYXNzTGlzdC5hZGQoXCJ1cGNvbWluZ1wiKTtcbmNvbXBsZXRlZC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBOZXcgVGFza1wiO1xuYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkVGFza0J0blwiKTtcblxubWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQobmF2KTtcbm1haW5XcmFwcGVyLmFwcGVuZENoaWxkKHNpZGViYXIpO1xubWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG5tYWluV3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG5tYWluV3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG5tYWluV3JhcHBlci5hcHBlbmRDaGlsZChzZWxlY3RQcm9qZWN0Rm9ybSk7XG5tYWluV3JhcHBlci5hcHBlbmRDaGlsZChpbmJveCk7XG5tYWluV3JhcHBlci5hcHBlbmRDaGlsZCh0b2RheSk7XG5tYWluV3JhcHBlci5hcHBlbmRDaGlsZCh1cGNvbWluZyk7XG5tYWluV3JhcHBlci5hcHBlbmRDaGlsZChjb21wbGV0ZWQpO1xuXG5jb25zdCBpbmJveEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5ib3hCdG5cIik7XG5jb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlCdG5cIik7XG5jb25zdCB1cGNvbWluZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXBjb21pbmdCdG5cIik7XG5jb25zdCBjb21wbGV0ZWRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXBsZXRlZEJ0blwiKTtcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RCdG5cIik7XG5cbi8vIEluaXRpYWxpemVzIG1haW4gdGFzayBhcnJheVxuY29uc3QgdGFza0xpc3QgPSBbXTtcbmNvbnN0IGNvbXBsZXRlZFRhc2tzID0gW107XG5cbi8vIEdldHMgY3VycmVudCBkYXRlIGluIElTTyBmb3JtYXRcbmxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5jb25zdCBkZCA9IFN0cmluZyhjdXJyZW50RGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbmNvbnN0IG1tID0gU3RyaW5nKGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIik7XG5jb25zdCB5eXl5ID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbmN1cnJlbnREYXRlID0gYCR7eXl5eX0tJHttbX0tJHtkZH1gO1xuXG4vLyBJbmJveCBoZWFkaW5nXG5jb25zdCBpbmJveEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5pbmJveEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkFsbCBUYXNrc1wiO1xuaW5ib3guYXBwZW5kQ2hpbGQoaW5ib3hIZWFkaW5nKTtcblxuLy8gQWRkcyBkZWZhdWx0IGV4YW1wbGUgdGFzayB0byBUby1EbyBsaXN0XG5jb25zdCBkZWZhdWx0VGFzayA9IGNyZWF0ZVRhc2soXG4gIFwiRmlyc3RcIixcbiAgXCJUaGlzIGlzIG15IGZpcnN0IHRhc2tcIixcbiAgY3VycmVudERhdGUsXG4gIFwiaGlnaFwiLFxuICBcIlByb2plY3QxXCJcbik7XG50YXNrTGlzdC5wdXNoKGRlZmF1bHRUYXNrKTtcbnRhc2tMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgY29uc3QgY2FyZCA9IHRhc2suY3JlYXRlQ2FyZCgpO1xuICBpbmJveC5hcHBlbmRDaGlsZChjYXJkKTtcbiAgYWRkQ29sbGFwc2libGVzKCk7XG4gIG1hcmtDb21wbGV0ZSh0YXNrTGlzdCwgY29tcGxldGVkVGFza3MpO1xuICBkZWwodGFza0xpc3QpO1xuICBzaG93QWRkVG9Qcm9qZWN0Rm9ybSh0YXNrTGlzdCk7XG59KTtcblxuLy8gSGlkZXMgYWxsIHBhZ2VzXG5jb25zdCBoaWRlUGFnZXMgPSAoKSA9PiB7XG4gIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xuICBhbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiAocHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpKTtcbn07XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVWRU5UIExJU1RFTkVSUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8vIFNob3dzIFRhc2sgRm9ybVxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59KTtcblxuLy8gU2hvd3MgUHJvamVjdCBGb3JtXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn0pO1xuXG4vLyBUYXNrIEZvcm0gU3VibWl0IEV2ZW50IExpc3RlbmVyIC0gQWRkcyBuZXcgdGFza3MgdG8gaW5ib3ggc2VjdGlvblxudGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHdoaWxlIChpbmJveC5maXJzdENoaWxkKSB7XG4gICAgaW5ib3guZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgfVxuICBpbmJveC5hcHBlbmRDaGlsZChpbmJveEhlYWRpbmcpO1xuICBjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFzayhcbiAgICB0YXNrRm9ybS50aXRsZS52YWx1ZSxcbiAgICB0YXNrRm9ybS5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICB0YXNrRm9ybS5kdWVEYXRlLnZhbHVlLFxuICAgIHRhc2tGb3JtLnByaW9yaXR5LnZhbHVlXG4gICk7XG4gIHRhc2tMaXN0LnB1c2gobmV3VGFzayk7XG4gIHRhc2tMaXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCBjYXJkID0gdGFzay5jcmVhdGVDYXJkKCk7XG4gICAgaW5ib3guYXBwZW5kQ2hpbGQoY2FyZCk7XG4gIH0pO1xuICBhZGRDb2xsYXBzaWJsZXMoKTtcbiAgY2xlYXJGb3JtKHRhc2tGb3JtKTtcbiAgbWFya0NvbXBsZXRlKHRhc2tMaXN0LCBjb21wbGV0ZWRUYXNrcyk7XG4gIGRlbCh0YXNrTGlzdCk7XG4gIHNob3dBZGRUb1Byb2plY3RGb3JtKHRhc2tMaXN0KTtcbn0pO1xuXG4vLyBQcm9qZWN0IEZvcm0gU3VibWl0IEV2ZW50IExpc3RlbmVyIC0gQWRkcyBhIG5ldyBncm91cCBzZWN0aW9uIHdpdGggY29ycmVzcG9uZGluZyBidXR0b25cbnByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBncm91cCA9IGNyZWF0ZVByb2plY3RHcm91cCgpO1xuICBjb25zdCBwcm9qZWN0R3JvdXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwcm9qZWN0R3JvdXBCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3RHcm91cEJ0blwiKTtcblxuICBwcm9qZWN0R3JvdXBCdG4udGV4dENvbnRlbnQgPSBwcm9qZWN0Rm9ybS5wcm9qZWN0TmFtZS52YWx1ZTtcbiAgZ3JvdXAuYXBwZW5kQ2hpbGQocHJvamVjdEdyb3VwQnRuKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChncm91cCk7XG4gIGNsZWFyRm9ybShwcm9qZWN0Rm9ybSk7XG5cbiAgY29uc3QgcHJvamVjdFBhZ2UgPSBjcmVhdGVQYWdlKCk7XG4gIHByb2plY3RQYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2plY3RHcm91cEJ0bi50ZXh0Q29udGVudCk7XG5cbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IHByb2plY3RHcm91cEJ0bi50ZXh0Q29udGVudDtcblxuICBwcm9qZWN0UGFnZS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgbWFpbldyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdFBhZ2UpO1xuXG4gIGFkZFByb2plY3RQYWdlcygpO1xufSk7XG5cbi8vIFNob3dzIGluYm94IHNlY3Rpb24gd2hpY2ggc2hvd3MgYWxsIGltY29tcGxldGUgdGFza3MgcmVnYXJkbGVzcyBvZiBkYXRlXG5pbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB3aGlsZSAoaW5ib3guZmlyc3RDaGlsZCkge1xuICAgIGluYm94LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cbiAgaW5ib3guYXBwZW5kQ2hpbGQoaW5ib3hIZWFkaW5nKTtcbiAgdGFza0xpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSB0YXNrLmNyZWF0ZUNhcmQoKTtcbiAgICBpbmJveC5hcHBlbmRDaGlsZChjYXJkKTtcbiAgfSk7XG4gIGFkZENvbGxhcHNpYmxlcygpO1xuICBoaWRlUGFnZXMoKTtcbiAgaW5ib3guc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufSk7XG5cbi8vIFRvZGF5IFNlY3Rpb24gLSBTaG93cyBhbGwgbm9uLWNvbXBsZXRlZCB0YXNrcyBkdWUgdG9kYXlcbnRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIC8vIHdpcGVzIG9sZCBhcnJheSBhbmQgcmVwbGFjZXMgaXQgd2l0aCBtb3N0IGN1cnJlbnQgb25lXG4gIHdoaWxlICh0b2RheS5maXJzdENoaWxkKSB7XG4gICAgdG9kYXkuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgfVxuICAvLyBTZWN0aW9uIEhlYWRpbmdcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiVG9kYXkncyBUYXNrc1wiO1xuICB0b2RheS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAvLyBDaGVja3MgdGhlIG1haW4gYXJyYXkgYW5kIGNyZWF0ZXMvYXBwZW5kcyBjYXJkcyBmb3IgdGhvc2Ugd2l0aCBkdWUgZGF0ZXMgb2YgdG9kYXlcbiAgY29uc3QgdG9kYXlUYXNrcyA9IHRhc2tMaXN0LmZpbHRlcigodGFzaykgPT4gdGFzay5kdWVEYXRlID09PSBjdXJyZW50RGF0ZSk7XG4gIHRvZGF5VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmNvbXBsZXRpb25TdGF0dXMgPT09IFwieWVzXCIpIHJldHVybjtcbiAgICBjb25zdCBjYXJkID0gdGFzay5jcmVhdGVDYXJkKCk7XG4gICAgdG9kYXkuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gIH0pO1xuICBhZGRDb2xsYXBzaWJsZXMoKTtcbiAgbWFya0NvbXBsZXRlKHRhc2tMaXN0LCBjb21wbGV0ZWRUYXNrcyk7XG4gIGRlbCh0YXNrTGlzdCk7XG4gIHNob3dBZGRUb1Byb2plY3RGb3JtKHRhc2tMaXN0KTtcbiAgaGlkZVBhZ2VzKCk7XG4gIHRvZGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn0pO1xuXG4vLyBVcGNvbWluZyBTZWN0aW9uIC0gU2hvd3MgYWxsIG5vbi1jb21wbGV0ZWQgdGFza3MgYXJyYW5nZWQgZnJvbSBzb29uZXN0IHRvIGxhdGVzdC5cbnVwY29taW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIC8vIFNpbmNlIHRoZSBtYWluIGFycmF5IGlzIFwic2Nhbm5lZFwiIG9uIGV2ZXJ5IGNsaWNrLCB0aGUgY2FyZHMgb24gdGhpcyBwYWdlIGFyZSB3aXBlZCB0byBhdm9pZCBkdXBsaWNhdGVzIGVhY2ggdGltZVxuICB3aGlsZSAodXBjb21pbmcuZmlyc3RDaGlsZCkge1xuICAgIHVwY29taW5nLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cbiAgLy8gU2VjdGlvbiBIZWFkaW5nXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlVwY29taW5nIFRhc2tzXCI7XG4gIHVwY29taW5nLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gIC8vIFNvcnRzIG1haW4gYXJyYXkgdGFza3MgYnkgZHVlIGRhdGVcbiAgY29uc3Qgc29ydGVkVGFza3MgPSB0YXNrTGlzdFxuICAgIC5zbGljZSgpXG4gICAgLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGEuZHVlRGF0ZSkgLSBuZXcgRGF0ZShiLmR1ZURhdGUpKTtcbiAgc29ydGVkVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIC8vIElmIHRoZSB0YXNrIGhhcyBiZWVuIG1hcmtlZCBjb21wbGV0ZWQgb3IgaGFzIG5vIGR1ZSBkYXRlLCBza2lwIGl0IGFuZCBhcyBpdCBpcyBub3QgdXBjb29taW5nXG4gICAgaWYgKHRhc2suY29tcGxldGlvblN0YXR1cyA9PT0gXCJ5ZXNcIiB8fCB0YXNrLmR1ZURhdGUgPT09IFwiXCIpIHJldHVybjtcbiAgICBjb25zdCBjYXJkID0gdGFzay5jcmVhdGVDYXJkKCk7XG4gICAgdXBjb21pbmcuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gIH0pO1xuICBhZGRDb2xsYXBzaWJsZXMoKTtcbiAgbWFya0NvbXBsZXRlKHRhc2tMaXN0LCBjb21wbGV0ZWRUYXNrcyk7XG4gIGRlbCh0YXNrTGlzdCk7XG4gIHNob3dBZGRUb1Byb2plY3RGb3JtKHRhc2tMaXN0KTtcbiAgaGlkZVBhZ2VzKCk7XG4gIHVwY29taW5nLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn0pO1xuXG4vLyBDb21wbGV0ZWQgU2VjdGlvbiAtIFNob3dzIGNvbXBsZXRlZCBzZWN0aW9uIHdpdGggYWxsIGNvbXBsZXRlZCB0YXNrc1xuY29tcGxldGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIC8vIFNpbmNlIHRoZSBtYWluIGFycmF5IGlzIFwic2Nhbm5lZFwiIG9uIGV2ZXJ5IGNsaWNrLCB0aGUgY2FyZHMgb24gdGhpcyBwYWdlIGFyZSB3aXBlZCB0byBhdm9pZCBkdXBsaWNhdGVzIGVhY2ggdGltZVxuICB3aGlsZSAoY29tcGxldGVkLmZpcnN0Q2hpbGQpIHtcbiAgICBjb21wbGV0ZWQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgfVxuICAvLyBTZWN0aW9uIEhlYWRpbmdcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQ29tcGxldGVkIFRhc2tzXCI7XG4gIGNvbXBsZXRlZC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAvLyBTY2FucyBjb21wbGV0ZWQgdGFza3MgYXJyYXkgYW5kIGNyZWF0ZXMvYXBwZW5kcyBjYXJkcyBpbnRvIHRoZSBjb21wbGV0ZWQgc2VjdGlvblxuICBjb21wbGV0ZWRUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29tcGxldGVkLmFwcGVuZENoaWxkKHRhc2suY3JlYXRlQ2FyZCgpKTtcbiAgfSk7XG4gIGFkZENvbGxhcHNpYmxlcygpO1xuICBoaWRlUGFnZXMoKTtcbiAgY29tcGxldGVkLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn0pO1xuXG4vLyBFVkVSWSBFVkVOVCBMSVNURU5FUiBDQU4gQkUgQSBBUFJUIE9GIEFOIEVWRU5UIExJU1RFTkVSIE9CSiBXSEVSRSBXRSBQQVNTIElUIFRIRSBNQUlOIEFORCBDT01QTEVURSBBUlJBWVMgQU5EIFRIRU4gV0UgSlVTVCBDQUxMIFRIRSBPQkogRlVOQ1RJT04gSU4gSEVSRSwgSU5ERVguXG4vLyBFWDogT0JKLlVQQ09NSU5HIFdPVUxEIFNUSUxMIERPIEVWRVJZWVRISU5HIElUIERPRVMgSEVSRSBCVVQgTk9XIElUUyBOT1RFIEhFUkUgQVRUIEFMTC4gVEhFUkUgU0hPVUxEIEJFIE5PIElTU1VFUyBCRUNBVVNFLCBJVCBTVElMTCBIQVMgQUNDRVNTIFRPIE1BSU4gQVJSQVkuXG5cbi8vIG5vdGU6IHRoaXMgY2FyZCBmdW5jdGlvbiBzaG91bGQgY3JlYXRlIGEgY2FyZCBpbiB0aGUgXCJjbG9zZWQgc3RhdGVcIiBhbmQgdGhlbiB3aGVuIHdlIGNsaWNrIG9uIGFuIGFycm93IGxldHMgc2F0LCBpdCB3aWxsIGV4cGFuZCBvcGVuIHJldmVhbGluZyBpdHMgY29udGVudHNcblxuLy8gYnV0IGlmIG9uIGNvbXBsZXRlZCBwYWdlLCB0aGVuIHdlIHdvdWxkIHdhbnQgaXQgdG8gb25seSBoYXZlIGEgXCJtYXJrIGFzIGluY29tcGxldGVcIiBidXR0b24gd2hpY2ggd291bGQgcmUtYWRkIGl0IHRvIHRoZSBtYWluIGFycmF5LlxuLy8gdG8gZG8gdGhpcywgd2UgY2FuIG1ha2UgYSBmdW5jdGlvbiB3aGljaCBjaGVja3MgdG8gc2VlIHRoZSBwYXJlbnQgb2YgdGhlIGNhcmQgKHdoaWNoIHNob3VsZCBiZSB0aGUgcGFnZSkgYW5kIGFwcGVuZCB0aGUgYnV0dG9ucyBhY2NvcmRpbmdseS5cblxuLy8gd2hlbiBlZGl0IGlzIGNsaWNrZWQsIG1heWJlIGEgbmV3IGNvcHkgb2YgdGhlIG1haW4gZm9ybSBjYW4gYmUgb3BlbmVkIGFuZCB3aGVuIHN1Ym1pdCBpcyBoaXQgdGhlc2UgY291bGQgXCJzZXRcIiB0aGUgcHJvcGVydGllcyBvZiB0aGF0IG9iamVjdFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9