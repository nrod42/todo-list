/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    box-sizing: border-box;\\n    margin: 0;\\n    font-family: Arial, Helvetica, sans-serif;\\n}\\n\\n:root {\\n\\n}\\n\\nhtml {\\n    height: 100vh;\\n}\\n\\nbody {\\n\\n    height: 100vh;\\n    min-width: 100vw;\\n}\\n\\n.mainWrapper {\\n    margin: 0 200px;\\n    /*padding: 0 200px;*/\\n    height: 100%;\\n    \\n    display: grid;\\n    grid-template-columns: minmax(150px, 15%) 1fr;\\n    grid-template-rows: 5% 1fr;\\n    \\n}\\n\\n.nav {\\n    grid-column: span 2;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n}\\n\\n.nav div {\\n    width: 50%;\\n}\\n\\n.sidebar {\\n    border: 1px solid black; \\n}\\n\\n.mainGroup, .projectGroup {   \\n    margin: 10px;\\n    padding: 10px;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.mainGroup button, .projectGroup button {\\n    margin: 10px 0;\\n}\\n\\n.addTaskBtn {\\n    position: relative;\\n    right: 0;\\n    top: 0;\\n}\\n\\n#projectForm {\\n    width: 250px;\\n    height: 250px;\\n    position: fixed;\\n    margin: 0 auto;\\n    left: calc(50% - 125px);\\n    top: calc(50% - 125px);\\n    border: 1px solid black;\\n    border-radius: 5px;\\n    padding: 10px;\\n    display: none;\\n    flex-direction: column;\\n}\\n\\n#taskForm {\\n    width: 370px;\\n    height: 370px;\\n    position: fixed;\\n    margin: 0 auto;\\n    left: calc(50% - 185px);\\n    top: calc(50% - 185px);\\n    border: 1px solid black;\\n    border-radius: 5px;\\n    padding: 10px;\\n    display: none;\\n    flex-direction: column;\\n    justify-content: space-between;\\n}\\n\\n#addToProjectForm {\\n    width: 250px;\\n    height: 250px;\\n    position: fixed;\\n    margin: 0 auto;\\n    left: calc(50% - 125px);\\n    top: calc(50% - 125px);\\n    border: 1px solid black;\\n    border-radius: 5px;\\n    padding: 10px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n}\\n\\n.cardSection {\\n    border: 1px solid black;\\n    \\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n.todaySection, .completedTasksSection, .newPage {\\n    border: 1px solid black;\\n    display: none;\\n    flex-direction: column;\\n}\\n\\n.card {\\n    position: relative;\\n    margin: 10px;\\n    padding: 10px;\\n    border: 1px solid black;\\n    border-radius: 5px;;\\n}\\n\\n.card p {\\n    padding: 5px;\\n}\\n\\n\\n.btnWrapper {\\n    position: absolute;\\n    top: 0;\\n    right: 0;\\n    display: flex;\\n    gap: 10px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/completed.js":
/*!**************************!*\
  !*** ./src/completed.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"completedSection\": () => (/* binding */ completedSection)\n/* harmony export */ });\nconst completedSection = () => {\n    const completedTasksSection = document.createElement('div');\n    completedTasksSection.classList.add('completedTasksSection');\n\n    return completedTasksSection\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/completed.js?");

/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearProjectForm\": () => (/* binding */ clearProjectForm),\n/* harmony export */   \"createProjectForm\": () => (/* binding */ createProjectForm),\n/* harmony export */   \"createTaskForm\": () => (/* binding */ createTaskForm),\n/* harmony export */   \"selectProjectForm\": () => (/* binding */ selectProjectForm)\n/* harmony export */ });\nconst createTaskForm = () => {\n    const form = document.createElement('form');\n    form.id = 'taskForm';\n\n    const titleLabel = document.createElement('label');\n    titleLabel.textContent = 'Title:';\n    titleLabel.for = \"title\";\n\n    const titleInput = document.createElement('input');\n    titleInput.type = \"text\";\n    titleInput.id = \"title\";\n    titleInput.name = \"title\";\n\n    const descriptionLabel = document.createElement('label');\n    descriptionLabel.textContent = 'Description:';\n    descriptionLabel.for = \"description\";\n\n    const descriptionInput = document.createElement('input');\n    descriptionInput.type = \"text\";\n    descriptionInput.id = \"description\";\n    descriptionInput.name = \"description\";\n\n    const dueDateLabel = document.createElement('label');\n    dueDateLabel.textContent = 'Due Date:';\n    dueDateLabel.for = \"dueDate\";\n\n    const dueDateInput = document.createElement('input');\n    dueDateInput.type = \"date\";\n    dueDateInput.id = \"dueDate\";\n    dueDateInput.name = \"dueDate\";\n\n    const priorityLabel = document.createElement('label');\n    priorityLabel.textContent = 'Priority:';\n    priorityLabel.for = \"priority\";\n\n    const priorityInput = document.createElement('select');\n    priorityInput.name = \"prorities\";\n    priorityInput.id = \"priority\";\n    \n    const none = document.createElement('option');\n    none.textContent = 'None';\n    none.value = 'none';\n    const low = document.createElement('option');\n    low.textContent = 'Low';\n    low.value = 'low';\n    const med = document.createElement('option');\n    med.textContent = 'Medium';\n    med.value = 'med';\n    const high = document.createElement('option');\n    high.textContent = 'High';\n    high.value = 'high';\n\n    const submitBtn = document.createElement('button');\n    submitBtn.type = 'submit';\n    submitBtn.textContent = 'Add Task';\n\n    form.appendChild(titleLabel);\n    form.appendChild(titleInput);\n    form.appendChild(descriptionLabel);\n    form.appendChild(descriptionInput);\n    form.appendChild(dueDateLabel);\n    form.appendChild(dueDateInput);\n    form.appendChild(priorityLabel);\n    form.appendChild(priorityInput);\n    priorityInput.appendChild(none);\n    priorityInput.appendChild(low);\n    priorityInput.appendChild(med);\n    priorityInput.appendChild(high);\n    form.appendChild(submitBtn);\n\n    return form;\n};\n\n\nconst createProjectForm = () => {\n    const projectForm = document.createElement('form');\n    projectForm.id = 'projectForm';\n\n    const projectNameLabel = document.createElement('label');\n    projectNameLabel.textContent = 'Project Name: ';\n    projectNameLabel.for = \"projectName\";\n\n    const projectNameInput = document.createElement('input');\n    projectNameInput.type = \"text\";\n    projectNameInput.id = \"projectName\";\n    projectNameInput.name = \"projectName\";\n\n    const submitBtn = document.createElement('button');\n    submitBtn.type = 'submit';\n    submitBtn.textContent = 'Create New Project';\n\n    projectForm.appendChild(projectNameLabel);\n    projectForm.appendChild(projectNameInput);\n    projectForm.appendChild(submitBtn);\n\n    projectForm.style.display = 'none';\n\n    return projectForm;\n}\n\nconst clearProjectForm = () => {\n    const form = document.getElementById('projectForm');\n    form.projectName.value = '';\n    form.style.display = 'none';\n}\n\nconst selectProjectForm = () => {\n    const allGroups = Array.from(document.querySelectorAll('.projectGroup > button'));\n    \n    const addToProjectForm = document.createElement('form');\n    addToProjectForm.id = 'addToProjectForm';\n\n    const chooseProjectLabel = document.createElement('label');\n    chooseProjectLabel.textContent = 'Select a project: ';\n    chooseProjectLabel.for = \"currentProjects\";\n\n    const currentProjects = document.createElement('select');\n    currentProjects.name = \"currentProjects\";\n    currentProjects.id = \"currentProjects\";\n    \n    allGroups.forEach(group => {\n        let option = document.createElement('option');\n        option.textContent = group.textContent;\n        option.value = group.textContent;\n        currentProjects.appendChild(option);\n    })\n\n    const submitBtn = document.createElement('button');\n    submitBtn.type = 'submit';\n    submitBtn.textContent = 'Add to Project';\n\n    addToProjectForm.appendChild(chooseProjectLabel);\n    addToProjectForm.appendChild(currentProjects);\n    addToProjectForm.appendChild(submitBtn);\n\n    return addToProjectForm\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/forms.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.js */ \"./src/nav.js\");\n/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.js */ \"./src/forms.js\");\n/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.js */ \"./src/sidebar.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n/* harmony import */ var _today_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./today.js */ \"./src/today.js\");\n/* harmony import */ var _completed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./completed.js */ \"./src/completed.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n\n\n\nconst mainWrapper = document.querySelector('.mainWrapper');\n\nconst nav = (0,_nav_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst sidebar = (0,_sidebar_js__WEBPACK_IMPORTED_MODULE_2__.createSidebar)();\nconst taskSection = (0,_tasks_js__WEBPACK_IMPORTED_MODULE_3__.createTaskSection)();\nconst today = (0,_today_js__WEBPACK_IMPORTED_MODULE_4__.createTodaySection)();\nconst completed = (0,_completed_js__WEBPACK_IMPORTED_MODULE_5__.completedSection)();\n\n\nmainWrapper.appendChild(nav);\nmainWrapper.appendChild(sidebar);\nmainWrapper.appendChild(taskSection);\nmainWrapper.appendChild(today);\nmainWrapper.appendChild(completed);\n\n\n\n\n//COMPLETED BUTTON SHOULD CHANGE THE TASK PROPERTY TO COMPLETED\n//EDIT SHOULD OPEN THE FORM BUT WITH THE TASK PROPERTIES PRE FILLED\n//DELETE SHOULD DELETE THE TASK FROM THE TASK ARRAY\n\n\n/*\nevery page should be generated blank and with display = 'none'\nevery card is made from the test obj which includes the following:\ntitle\ndescription\nduedate\npriority\n*/\n\n\n//one of the modules should be in charge of creating the different pages (tasks, completed, today, upcoming...)\n\n//BRUH, couldnt you make the facotry function spit out the individual html elements? Like obj.title would make the value of the title property to a p'p' element!\n\n\n//currently\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createNav = () => {\n    \n    const navBar = document.createElement('div');\n    navBar.classList.add('nav');\n\n    const navLeft = document.createElement('div');\n    const navRight = document.createElement('div');\n\n    navLeft.textContent = 'Logo';\n    navRight.textContent = 'Future Buttons';\n\n    navBar.appendChild(navLeft);\n    navBar.appendChild(navRight);\n    \n    return navBar\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNav);\n\n//# sourceURL=webpack://todo-list/./src/nav.js?");

/***/ }),

/***/ "./src/pages.js":
/*!**********************!*\
  !*** ./src/pages.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPage\": () => (/* binding */ createPage)\n/* harmony export */ });\nconst createPage = () => {\n    const newPage = document.createElement('div');\n    newPage.classList.add('newPage');\n\n    return newPage;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/pages.js?");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProjectGroup\": () => (/* binding */ createProjectGroup),\n/* harmony export */   \"createSidebar\": () => (/* binding */ createSidebar)\n/* harmony export */ });\n/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms.js */ \"./src/forms.js\");\n/* harmony import */ var _pages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.js */ \"./src/pages.js\");\n\n\n\nconst createSidebar = () => {\n    const sidebar = document.createElement('div');\n    sidebar.classList.add('sidebar');\n\n    const addProjectBtn = document.createElement('button');\n    addProjectBtn.classList.add('addProjectBtn');\n    addProjectBtn.textContent = 'New Project';\n\n    const projectForm = (0,_forms_js__WEBPACK_IMPORTED_MODULE_0__.createProjectForm)();\n    addProjectBtn.addEventListener('click', showProjectForm);\n    projectForm.addEventListener('submit', createProjectGroup);\n\n    const mainGroup = document.createElement('div');\n    mainGroup.classList.add('mainGroup');\n\n    const inbox = document.createElement('button');\n    inbox.textContent = 'Inbox';\n    inbox.addEventListener('click', showInboxSection);\n    \n    const today = document.createElement('button');\n    today.textContent = 'Today';\n    today.addEventListener('click', showTodaySection);\n\n    const upcoming = document.createElement('button');\n    upcoming.textContent = 'Upcoming';\n    \n    const completed = document.createElement('button');\n    completed.textContent = 'Completed';\n    completed.addEventListener('click', showCompletedSection);\n\n    sidebar.appendChild(addProjectBtn);\n    sidebar.appendChild(mainGroup);\n    mainGroup.appendChild(inbox);\n    mainGroup.appendChild(today);\n    mainGroup.appendChild(upcoming);\n    mainGroup.appendChild(completed);\n\n    function showProjectForm () {\n        projectForm.style.display = 'flex';\n        sidebar.appendChild(projectForm);\n    };\n\n    function showInboxSection () {\n        const cardSection = document.querySelector('.cardSection');\n        const todaySection = document.querySelector('.todaySection');\n        const completedTasksSection = document.querySelector('.completedTasksSection');\n\n        while (todaySection.firstChild) {\n            todaySection.removeChild(todaySection.firstChild);\n        }\n\n        hideProjectPages ()\n        cardSection.style.display = 'flex';\n        todaySection.style.display = 'none';\n        completedTasksSection.style.display = 'none';\n    };\n\n    function showTodaySection () {\n        const todaySection = document.querySelector('.todaySection');\n        const cardSection = document.querySelector('.cardSection');\n        const completedTasksSection = document.querySelector('.completedTasksSection');\n\n        getTodayCards();\n        hideProjectPages ()\n        todaySection.style.display = 'flex';\n        cardSection.style.display = 'none';\n        completedTasksSection.style.display = 'none';\n\n    };\n\n    function showCompletedSection () {\n        const completedTasksSection = document.querySelector('.completedTasksSection');\n        const cardSection = document.querySelector('.cardSection');\n        const todaySection = document.querySelector('.todaySection');\n        hideProjectPages ()\n        completedTasksSection.style.display = 'flex';\n        cardSection.style.display = 'none';\n        todaySection.style.display = 'none';\n    };\n\n    function getTodayCards () {\n        const todaySection = document.querySelector('.todaySection');\n        const allCards = Array.from(document.querySelectorAll('.card'));\n        if (todaySection.firstChild) return;\n        allCards.forEach(card => {\n            if (card.querySelector('.cardDate').textContent.slice(10) == new Date().toISOString().slice(0, 10)) {\n                todaySection.appendChild(card.cloneNode(true));\n            };\n        });\n    };\n\n    function hideProjectPages () {\n        const allProjects = Array.from(document.querySelectorAll('.newPage'));\n        allProjects.forEach(project => {\n            project.style.display = 'none';\n        });\n    };\n\n    return sidebar;\n};\n\nconst createProjectGroup = (e) => {\n    e.preventDefault();\n    const sidebar = document.querySelector('.sidebar');\n    const projectForm = document.getElementById('projectForm');\n    const mainWrapper = document.querySelector('.mainWrapper');\n\n    const projectGroup = document.createElement('div');\n    projectGroup.classList.add('projectGroup');\n\n\n    const projectName = document.createElement('button');\n    projectName.textContent = projectForm.projectName.value;\n\n    const newPage = (0,_pages_js__WEBPACK_IMPORTED_MODULE_1__.createPage)();\n    newPage.setAttribute('id', projectForm.projectName.value)\n    mainWrapper.appendChild(newPage);\n\n    projectName.addEventListener('click', (e) => {\n        const projectPage = document.getElementById(e.target.textContent);\n        const completedTasksSection = document.querySelector('.completedTasksSection');\n        const cardSection = document.querySelector('.cardSection');\n        const todaySection = document.querySelector('.todaySection');\n\n        const allGroups = Array.from(document.querySelectorAll('.newPage'));\n        allGroups.forEach(group => {\n            let groupPage = document.getElementById(group.id);\n            groupPage.style.display = 'none';\n        })\n        projectPage.style.display = 'flex';\n        completedTasksSection.style.display = 'none';\n        cardSection.style.display = 'none';\n        todaySection.style.display = 'none';\n    })\n\n    projectGroup.appendChild(projectName);\n    sidebar.appendChild(projectGroup);\n    (0,_forms_js__WEBPACK_IMPORTED_MODULE_0__.clearProjectForm)();\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/sidebar.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTaskSection\": () => (/* binding */ createTaskSection)\n/* harmony export */ });\n/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms.js */ \"./src/forms.js\");\n\n\n\nconst createTask  = (title, description, dueDate, priority) => {\n    return {\n        get title() {\n            return title;\n        },\n        get description() {\n            return description;\n        },        \n        get dueDate() {\n            return dueDate;\n        },        \n        get priority() {\n            return priority;\n        },     \n        get completionStatus() {\n            return 'no';\n        },   \n    }\n};\n\nconst createTaskCard = (task) => {\n    const card = document.createElement('div');\n    card.classList.add('card');\n    \n    const taskTitle = document.createElement('p');\n    taskTitle.textContent = task.title;\n\n    const taskDescription = document.createElement('p');\n    taskDescription.textContent = 'Note: ' + task.description;\n\n    const taskDueDate = document.createElement('p');\n    taskDueDate.classList.add('cardDate');\n    taskDueDate.textContent = 'Due Date: ' + task.dueDate;\n\n    if (task.priority == 'low') {\n        card.style.border = '1px solid blue';\n    } else if (task.priority == 'med') {\n        card.style.border = '1px solid gold';\n    } else if (task.priority == 'high') {\n        card.style.border = '1px solid red';\n    }\n\n    const btnWrapper = document.createElement('div');\n    btnWrapper.classList.add('btnWrapper');\n\n\n    const completeBtn = document.createElement('button');\n    completeBtn.classList.add('completeBtn');\n    completeBtn.textContent = 'Completed';\n    completeBtn.addEventListener('click', () => {\n        card.classList.add('completed');\n        const completedTasksSection = document.querySelector('.completedTasksSection');\n        completedTasksSection.appendChild(card);\n    });\n\n    const editBtn = document.createElement('button');\n    editBtn.classList.add('editBtn');\n    editBtn.textContent = 'Edit';\n    editBtn.addEventListener('click', () => {\n        const form = document.getElementById('taskForm');\n        form.title.value = task.title;\n        form.description.value = task.description;\n        form.dueDate.value = task.dueDate;\n        form.priority.value = task.priority;\n        form.style.display = 'flex';\n    });\n\n    const delBtn = document.createElement('button');\n    delBtn.classList.add('delBtn');\n    delBtn.textContent = 'Delete';\n    delBtn.addEventListener('click', () => {\n        card.remove();\n    });\n\n    const addToProjectBtn = document.createElement('button');\n    addToProjectBtn.classList.add('addToProjectBtn');\n    addToProjectBtn.textContent = 'Add To Project';\n    addToProjectBtn.addEventListener('click', () => {\n        const mainWrapper = document.querySelector('.mainWrapper');\n        let form = (0,_forms_js__WEBPACK_IMPORTED_MODULE_0__.selectProjectForm)();\n        mainWrapper.appendChild(form);\n\n        form.addEventListener('submit', (e) => {\n            e.preventDefault();\n            form.style.display = 'none';\n            //this works but, when i add something to a project, do i want it to disappear from inbox?\n            const selectedProjectSection = document.getElementById(form.currentProjects.value);\n            selectedProjectSection.appendChild(card);\n    \n            \n            //give each card an ID to make things cleaner...?\n            \n        })\n    })\n\n    btnWrapper.appendChild(completeBtn);\n    btnWrapper.appendChild(editBtn);\n    btnWrapper.appendChild(delBtn);\n    btnWrapper.appendChild(addToProjectBtn);\n\n\n    card.appendChild(taskTitle);\n    card.appendChild(taskDescription);\n    card.appendChild(taskDueDate);\n    card.appendChild(btnWrapper);\n\n\n    return card;\n};\n\nconst createTaskSection = () => {\n    const cardSection = document.createElement('div');\n    cardSection.classList.add('cardSection');\n\n    const form = (0,_forms_js__WEBPACK_IMPORTED_MODULE_0__.createTaskForm)();\n    form.addEventListener('submit', addToCardSection);\n\n    const addTaskBtn = document.createElement('button');\n    addTaskBtn.classList.add('addTaskBtn');\n    addTaskBtn.textContent = 'Add Task';\n    addTaskBtn.addEventListener('click', showForm);\n    \n    const defaultTask = createTaskCard(createTask('First To-Do', 'This is my first task', '2022-05-23', 'high'));\n\n    cardSection.appendChild(addTaskBtn);\n    cardSection.appendChild(defaultTask);\n    cardSection.appendChild(form);\n\n    function addToCardSection(e) {\n        e.preventDefault();\n        let newCard = createTaskCard(createTask(form.title.value, form.description.value, form.dueDate.value, form.priority.value));\n        cardSection.appendChild(newCard);\n        clearTaskForm();\n    };\n\n    function showForm() {\n        form.style.display = 'flex';\n    };\n\n    function clearTaskForm() {\n        form.title.value = '';\n        form.description.value = '';\n        form.dueDate.value = '';\n        form.priority.value = 'none';\n        form.style.display = 'none';\n    };\n    \n    return cardSection;\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/tasks.js?");

/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodaySection\": () => (/* binding */ createTodaySection)\n/* harmony export */ });\nconst createTodaySection = () => {\n    const todaySection = document.createElement('div');\n    todaySection.classList.add('todaySection');\n\n    return todaySection;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/today.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;