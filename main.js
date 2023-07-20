/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --white-color: white;
    --gold-color: #b99329;
    --black-color: #000000;
    --gray-color-1: #949494;
    --gray-color-2: #e7e7e7;
    --dark-gray-color: #aaaaaa;
    --blue-color: #405caa;
    --red-color: red;
    --yellow-color: yellow;
    --green-color: green;
}

* {
    margin: 0;
    padding: 0;
}

body {
    height: 100vh;
    font-size: 16px;
    color: var(--white-color);
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body::-webkit-scrollbar { 
    display: none;
}

img {
    height: 20px;
    width: 20px;
}

#topbar {
    display: flex;
    align-items: center;
    gap: 25px;
    padding: 25px;
    background-color: var(--blue-color);
}

#logo {
    height: 100px;
    width: 100px;
}

#container {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 300px 1fr;
}

#sidebar {
    display: flex;
    flex-direction: column;
    padding: 25px 25px;
    background-color: var(--gray-color-2);
    color: var(--black-color);
}

#default-projects {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.project {
    display: flex;
    gap: 10px;
    padding: 10px;
    border-style: none;
    border-radius: 6px;
    text-align: left;
    font-size: 18px;
}

.project:hover {
    background-color: var(--dark-gray-color);
    border-radius: 6px;
}

#header-text {
    margin-top: 25px;
    margin-bottom: 12px;
    font-size: 36px;
}

#user-projects {
    display: flex;
    flex-direction: column;
}

.user-project {
    display: grid;
    grid-template-columns: 20px auto auto;
    margin-bottom: 5px;
}


.delete {
    display: none;
    justify-self: flex-end;
}

.user-project:hover>.delete {
    display: flex;
}

.user-project:hover>.delete:hover {
    transform: scale(1.1);
}

#projects {
    background-color: var(--white-color);
}

.add-project-modal .overlay, .add-task-modal .overlay, .edit-modal .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    z-index: 1;
    position: fixed;
    top: 0px;
    left: 0px;
    backdrop-filter: blur(4px);
    display: none;
}

.add-project-modal .add-project-form, .add-task-modal .add-task-form, .edit-modal .edit-form {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%) scale(0);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--white-color);
    color: var(--black-color);
    font-size: 24px;
    border-radius: 6px;
    padding: 25px 50px;
}

#task-form, #edit-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;
}

#task-form>input, #task-form>#description {
    width: calc(100% - 12px);
}

#description, #taskDescription {
    resize: none;
    padding: 5px;
    font-size: 1.2rem;
    border: 1px solid var(--gray-color-1);
    border-radius: 2px;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.add-project-modal.active .overlay, .add-task-modal.active .overlay, .edit-modal.active .overlay {
    display: flex;
}
.add-project-modal.active .add-project-form, .add-task-modal.active .add-task-form, .edit-modal.active .edit-form {
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%) scale(1);
}

.close-btn {
    height: 30px;
    width: 30px;
    position: absolute;
    right: 15px;
    top: 15px;
    background-color: var(--gray-color-2);
    text-align: center;
    font-size: 25px;
    border-radius: 50%;
}

.close-btn:hover {
    background-color: var(--gray-color-1);
    transform: scale(1.05);
}

.submit-btn {
    height: 40px;
    width: 100%;
    font-size: 1.2rem;
    background-color: var(--white-color);
    border: 1px solid var(--gray-color-1);
}

.submit-btn:hover {
    transform: scale(1.02);
    background-color: var(--gray-color-2);
}

.input {
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 25px 0;
}

input, select {
    font-size: 1.2rem;
    height: auto;
    padding: 5px;
    border: 1px solid var(--gray-color-1);
    border-radius: 2px;
}

input:focus, select:focus, textarea:focus {
    outline: none;
}

label {
    font-size: 1.2rem;
}

#project-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#add-task {
    height: 50px;
    width: 25%;
    font-size: 1.5rem;
    background-color: var(--white-color);
    border: 1px solid var(--gray-color-1);
    border-radius: 6px;
    margin-top: 25px;
}

#add-task:hover {
    transform: scale(1.02);
    background-color: var(--gray-color-2);
}

#tasks {
    display: grid;
    grid-template-columns: repeat(4, minmax(300px, 1fr));
    grid-auto-rows: 150px;
    gap: 50px;
    padding: 25px 50px;
}

.task {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 20px;
    gap: 20px;
    background-color: var(--gray-color-2);
    color: var(--black-color);
    border-radius: 6px;
    box-shadow:  -5px 5px 15px -6px rgb(0, 0, 0, 0.6);
    font-size: 1.2rem;
}

.High {
    border-left: 10px solid var(--red-color);
}

.Medium {
    border-left: 10px solid var(--yellow-color);
}

.Low {
    border-left: 10px solid var(--green-color);
}

.complete-task {
    border-left: 10px solid var(--gray-color-1);
    text-decoration: line-through;
}

.task-top-bar, .task-bottom-bar {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
}

.task-title {
    font-size: 1.8rem;
}

.task-icons {
    display: flex;
    gap: 5px;
}

.edit, .complete, .task-delete {
    justify-self: flex-end;
    height: 20px;
    width: 20px;
}

.edit:hover, .complete:hover, .task-delete:hover {
    transform: scale(1.1);
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');\r\n\r\n:root {\r\n    --white-color: white;\r\n    --gold-color: #b99329;\r\n    --black-color: #000000;\r\n    --gray-color-1: #949494;\r\n    --gray-color-2: #e7e7e7;\r\n    --dark-gray-color: #aaaaaa;\r\n    --blue-color: #405caa;\r\n    --red-color: red;\r\n    --yellow-color: yellow;\r\n    --green-color: green;\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    font-size: 16px;\r\n    color: var(--white-color);\r\n    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen,\r\n    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\nbody::-webkit-scrollbar { \r\n    display: none;\r\n}\r\n\r\nimg {\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n\r\n#topbar {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 25px;\r\n    padding: 25px;\r\n    background-color: var(--blue-color);\r\n}\r\n\r\n#logo {\r\n    height: 100px;\r\n    width: 100px;\r\n}\r\n\r\n#container {\r\n    min-height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 300px 1fr;\r\n}\r\n\r\n#sidebar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 25px 25px;\r\n    background-color: var(--gray-color-2);\r\n    color: var(--black-color);\r\n}\r\n\r\n#default-projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.project {\r\n    display: flex;\r\n    gap: 10px;\r\n    padding: 10px;\r\n    border-style: none;\r\n    border-radius: 6px;\r\n    text-align: left;\r\n    font-size: 18px;\r\n}\r\n\r\n.project:hover {\r\n    background-color: var(--dark-gray-color);\r\n    border-radius: 6px;\r\n}\r\n\r\n#header-text {\r\n    margin-top: 25px;\r\n    margin-bottom: 12px;\r\n    font-size: 36px;\r\n}\r\n\r\n#user-projects {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.user-project {\r\n    display: grid;\r\n    grid-template-columns: 20px auto auto;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n\r\n.delete {\r\n    display: none;\r\n    justify-self: flex-end;\r\n}\r\n\r\n.user-project:hover>.delete {\r\n    display: flex;\r\n}\r\n\r\n.user-project:hover>.delete:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n#projects {\r\n    background-color: var(--white-color);\r\n}\r\n\r\n.add-project-modal .overlay, .add-task-modal .overlay, .edit-modal .overlay {\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    height: 100vh;\r\n    width: 100vw;\r\n    z-index: 1;\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    backdrop-filter: blur(4px);\r\n    display: none;\r\n}\r\n\r\n.add-project-modal .add-project-form, .add-task-modal .add-task-form, .edit-modal .edit-form {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    z-index: 2;\r\n    transform: translate(-50%, -50%) scale(0);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: var(--white-color);\r\n    color: var(--black-color);\r\n    font-size: 24px;\r\n    border-radius: 6px;\r\n    padding: 25px 50px;\r\n}\r\n\r\n#task-form, #edit-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding: 10px 0;\r\n}\r\n\r\n#task-form>input, #task-form>#description {\r\n    width: calc(100% - 12px);\r\n}\r\n\r\n#description, #taskDescription {\r\n    resize: none;\r\n    padding: 5px;\r\n    font-size: 1.2rem;\r\n    border: 1px solid var(--gray-color-1);\r\n    border-radius: 2px;\r\n    font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen,\r\n    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n\r\n.add-project-modal.active .overlay, .add-task-modal.active .overlay, .edit-modal.active .overlay {\r\n    display: flex;\r\n}\r\n.add-project-modal.active .add-project-form, .add-task-modal.active .add-task-form, .edit-modal.active .edit-form {\r\n    transition: all 200ms ease-in-out;\r\n    transform: translate(-50%, -50%) scale(1);\r\n}\r\n\r\n.close-btn {\r\n    height: 30px;\r\n    width: 30px;\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 15px;\r\n    background-color: var(--gray-color-2);\r\n    text-align: center;\r\n    font-size: 25px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.close-btn:hover {\r\n    background-color: var(--gray-color-1);\r\n    transform: scale(1.05);\r\n}\r\n\r\n.submit-btn {\r\n    height: 40px;\r\n    width: 100%;\r\n    font-size: 1.2rem;\r\n    background-color: var(--white-color);\r\n    border: 1px solid var(--gray-color-1);\r\n}\r\n\r\n.submit-btn:hover {\r\n    transform: scale(1.02);\r\n    background-color: var(--gray-color-2);\r\n}\r\n\r\n.input {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 15px;\r\n    margin: 25px 0;\r\n}\r\n\r\ninput, select {\r\n    font-size: 1.2rem;\r\n    height: auto;\r\n    padding: 5px;\r\n    border: 1px solid var(--gray-color-1);\r\n    border-radius: 2px;\r\n}\r\n\r\ninput:focus, select:focus, textarea:focus {\r\n    outline: none;\r\n}\r\n\r\nlabel {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n#project-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n#add-task {\r\n    height: 50px;\r\n    width: 25%;\r\n    font-size: 1.5rem;\r\n    background-color: var(--white-color);\r\n    border: 1px solid var(--gray-color-1);\r\n    border-radius: 6px;\r\n    margin-top: 25px;\r\n}\r\n\r\n#add-task:hover {\r\n    transform: scale(1.02);\r\n    background-color: var(--gray-color-2);\r\n}\r\n\r\n#tasks {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, minmax(300px, 1fr));\r\n    grid-auto-rows: 150px;\r\n    gap: 50px;\r\n    padding: 25px 50px;\r\n}\r\n\r\n.task {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    padding: 15px 20px;\r\n    gap: 20px;\r\n    background-color: var(--gray-color-2);\r\n    color: var(--black-color);\r\n    border-radius: 6px;\r\n    box-shadow:  -5px 5px 15px -6px rgb(0, 0, 0, 0.6);\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.High {\r\n    border-left: 10px solid var(--red-color);\r\n}\r\n\r\n.Medium {\r\n    border-left: 10px solid var(--yellow-color);\r\n}\r\n\r\n.Low {\r\n    border-left: 10px solid var(--green-color);\r\n}\r\n\r\n.complete-task {\r\n    border-left: 10px solid var(--gray-color-1);\r\n    text-decoration: line-through;\r\n}\r\n\r\n.task-top-bar, .task-bottom-bar {\r\n    display: grid;\r\n    grid-template-columns: auto auto;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.task-title {\r\n    font-size: 1.8rem;\r\n}\r\n\r\n.task-icons {\r\n    display: flex;\r\n    gap: 5px;\r\n}\r\n\r\n.edit, .complete, .task-delete {\r\n    justify-self: flex-end;\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n\r\n.edit:hover, .complete:hover, .task-delete:hover {\r\n    transform: scale(1.1);\r\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */

function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/modules/list.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements */ "./src/modules/elements.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");






class UI {
    static loadUI() {
        UI.loadStorage();
        UI.Project();
        UI.Task();
    }

    static loadStorage() {
        const list = _storage__WEBPACK_IMPORTED_MODULE_4__["default"].getList();
        const projects = list.getProjects;
        projects.forEach(project => {
            if (project === null || project.getName === 'Today' || project.getName === 'This Week') {
                return;
            }

            _elements__WEBPACK_IMPORTED_MODULE_3__["default"].createStorageProject(project);

            const deleteBtn = document.getElementById('user-projects').lastChild.lastChild;
            deleteBtn.addEventListener('click', () => {
                list.removeProject(project.getID);
                deleteBtn.parentNode.parentNode.removeChild(deleteBtn.parentNode);
                _storage__WEBPACK_IMPORTED_MODULE_4__["default"].saveData(list);
            })

            const thisProject = document.getElementById('user-projects').lastChild;
            thisProject.addEventListener('click', () => {
                const currentList = _storage__WEBPACK_IMPORTED_MODULE_4__["default"].getList()
                currentList.setCurrentProject = project.getID;
                _storage__WEBPACK_IMPORTED_MODULE_4__["default"].saveData(currentList);
                _elements__WEBPACK_IMPORTED_MODULE_3__["default"].removeTasks();

                const newList = _storage__WEBPACK_IMPORTED_MODULE_4__["default"].getList();
                UI.loadTasks(newList.getProject(newList.getCurrentProject));
            })
        })

        const projectBox = document.getElementById('user-projects');
        if (projectBox.lastChild === null) {
            _storage__WEBPACK_IMPORTED_MODULE_4__["default"].clearStorage();
        }
    }

    static Project() {
        UI.addProject();
        UI.createProject();
        UI.loadDefaultProjects();
    }

    static Task() {
        UI.addTask();
        UI.createTask();
        UI.editTask();
    }

    static addProject() {
        const addProject = document.getElementById('add-project');
        const closeBtn = document.getElementById('project-close');
        const overlay = document.getElementById('project-overlay');

        addProject.addEventListener('click', () => {
            _elements__WEBPACK_IMPORTED_MODULE_3__["default"].toggleProjectModal();
        });

        closeBtn.addEventListener('click', () => {
            _elements__WEBPACK_IMPORTED_MODULE_3__["default"].toggleProjectModal();
        });

        overlay.addEventListener('click', () => {
            _elements__WEBPACK_IMPORTED_MODULE_3__["default"].toggleProjectModal();
        });
    }

    static createProject() {
        const submitBtn = document.getElementById('project-submit');

        submitBtn.addEventListener('click', () => {
            const list = _storage__WEBPACK_IMPORTED_MODULE_4__["default"].getList();
            const name = document.getElementById('name');
            const project = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](name.value, list.getLength());
            list.addProject(project);
            list.setCurrentProject = list.getLength() - 1;
            _storage__WEBPACK_IMPORTED_MODULE_4__["default"].saveData(list);

            _elements__WEBPACK_IMPORTED_MODULE_3__["default"].removeTasks();
            _elements__WEBPACK_IMPORTED_MODULE_3__["default"].createProject();
            _elements__WEBPACK_IMPORTED_MODULE_3__["default"].toggleProjectModal();

            const deleteBtn = document.getElementById('user-projects').lastChild.lastChild;
            deleteBtn.addEventListener('click', () => {
                list.removeProject(project.getID);
                deleteBtn.parentNode.parentNode.removeChild(deleteBtn.parentNode);
                _storage__WEBPACK_IMPORTED_MODULE_4__["default"].saveData(list);
            })

            const thisProject = document.getElementById('user-projects').lastChild;
            thisProject.addEventListener('click', () => {
                const currentList = _storage__WEBPACK_IMPORTED_MODULE_4__["default"].getList()
                currentList.setCurrentProject = project.getID;
                _storage__WEBPACK_IMPORTED_MODULE_4__["default"].saveData(currentList);
                _elements__WEBPACK_IMPORTED_MODULE_3__["default"].removeTasks();

                const newList = _storage__WEBPACK_IMPORTED_MODULE_4__["default"].getList();
                UI.loadTasks(newList.getProject(newList.getCurrentProject));
            })
        })
    }

    static addTask() {
        const addTask = document.getElementById('add-task');
        const closeBtn = document.getElementById('task-close');
        const overlay = document.getElementById('task-overlay');

        addTask.addEventListener('click', () => {
            _elements__WEBPACK_IMPORTED_MODULE_3__["default"].toggleTaskModal();
        });

        closeBtn.addEventListener('click', () => {
            _elements__WEBPACK_IMPORTED_MODULE_3__["default"].toggleTaskModal();
        });

        overlay.addEventListener('click', () => {
            _elements__WEBPACK_IMPORTED_MODULE_3__["default"].toggleTaskModal();
        });
    }

    static createTask() {
        const submitBtn = document.getElementById('task-submit');

        submitBtn.addEventListener('click', () => {
            const list = _storage__WEBPACK_IMPORTED_MODULE_4__["default"].getList();
            const title = document.getElementById('title');
            const description = document.getElementById('description');
            const date = document.getElementById('date');
            const priority = document.getElementById('priority');

            const project = list.getProject(list.getCurrentProject);
            const task = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](title.value, description.value, date.value, priority.value, project.getLength());
            project.addTask(task);
            _storage__WEBPACK_IMPORTED_MODULE_4__["default"].saveData(list);
            console.log(_storage__WEBPACK_IMPORTED_MODULE_4__["default"].getList());

            _elements__WEBPACK_IMPORTED_MODULE_3__["default"].toggleTaskModal();
            _elements__WEBPACK_IMPORTED_MODULE_3__["default"].createTask(title.value, task.getDateFormatted(), priority.value, false);

            UI.addIconListeners(project, task);
        })
    }

    static loadTasks(project) {
        if (project === null) {
            return;
        }

        const tasks = project.getTasks;

        if (project.getLength() === 0) {
            return;
        }

        tasks.forEach(task => {
            if (task === null) {
                return
            }

            _elements__WEBPACK_IMPORTED_MODULE_3__["default"].createTask(task.getTitle, task.getDateFormatted(), task.getPriority, task.getCompletion);
            UI.addIconListeners(project, task);
        })
    }

    static loadStrippedTasks(project) {
        const tasks = project.getTasks;

        if (project.getLength() === 0) {
            return;
        }

        tasks.forEach(task => {
            _elements__WEBPACK_IMPORTED_MODULE_3__["default"].createStrippedTask(task.getTitle, task.getDateFormatted(), task.getPriority, task.getCompletion);
        })
    }

    static editTask() {
        const submitBtn = document.getElementById('edit-submit');
        const closeBtn = document.getElementById('edit-close');
        const overlay = document.getElementById('edit-overlay');

        const formTitle = document.getElementById('taskTitle');
        const formDescription = document.getElementById('taskDescription');
        const formDate = document.getElementById('taskDate');
        const formPriority = document.getElementById('taskPriority');

        submitBtn.addEventListener('click', () => {
            const list = _storage__WEBPACK_IMPORTED_MODULE_4__["default"].getList();
            const currentProject = list.getProject(list.getCurrentProject);
            const currentTaskIndex = currentProject.getCurrent;
            const currentTask = currentProject.getTask(currentTaskIndex);
                        
            currentTask.setTitle = formTitle.value;
            currentTask.setDescription = formDescription.value;
            currentTask.setDate = formDate.value;
            currentTask.setPriority = formPriority.value;
            _storage__WEBPACK_IMPORTED_MODULE_4__["default"].saveData(list);

            _elements__WEBPACK_IMPORTED_MODULE_3__["default"].removeTasks();
            UI.loadTasks(currentProject);

            _elements__WEBPACK_IMPORTED_MODULE_3__["default"].toggleEditModal();
        })

        closeBtn.addEventListener('click', () => {
            _elements__WEBPACK_IMPORTED_MODULE_3__["default"].toggleEditModal();
        });

        overlay.addEventListener('click', () => {
            _elements__WEBPACK_IMPORTED_MODULE_3__["default"].toggleEditModal();
        });
    }

    static addIconListeners(projectObject, taskObject) {
        const list = _storage__WEBPACK_IMPORTED_MODULE_4__["default"].getList();
        const project = list.getProject(projectObject.getID);
        const task = project.getTask(taskObject.getID);

        const tasks = document.getElementById('tasks');
        const currentTask = tasks.lastChild;

        const edit = currentTask.querySelector('.edit');
        const complete = currentTask.querySelector('.complete');
        const remove = currentTask.querySelector('.task-delete');

        const formTitle = document.getElementById('taskTitle');
        const formDescription = document.getElementById('taskDescription');
        const formDate = document.getElementById('taskDate');
        const formPriority = document.getElementById('taskPriority');
        
        edit.addEventListener('click', () => {
            _elements__WEBPACK_IMPORTED_MODULE_3__["default"].toggleEditModal();

            formTitle.value = task.getTitle;
            formDescription.value = task.getDescription;
            formDate.value = task.getDate;
            formPriority.value = task.getPriority;

            project.setCurrent = task.getID;
            _storage__WEBPACK_IMPORTED_MODULE_4__["default"].saveData(list);
        })

        complete.addEventListener('click', () => {
            if (task.completed === false) {
                task.completeTask();
                currentTask.className = 'task complete-task';
            } else {
                task.undoCompletion();
                currentTask.className = `task ${task.getPriority}`;
            }

            _storage__WEBPACK_IMPORTED_MODULE_4__["default"].saveData(list);
        })

        remove.addEventListener('click', () => {
            project.removeTask(task.getID);
            tasks.removeChild(currentTask);

            _storage__WEBPACK_IMPORTED_MODULE_4__["default"].saveData(list);
        })
    }

    static loadDefaultProjects() {
        const today = document.getElementById('today');
        const week = document.getElementById('week');

        today.addEventListener('click', () => {
            const list = _storage__WEBPACK_IMPORTED_MODULE_4__["default"].getList()
            const todayProject = list.getProject(0);
            _elements__WEBPACK_IMPORTED_MODULE_3__["default"].removeTasks();
            list.updateTodayProject();
            _storage__WEBPACK_IMPORTED_MODULE_4__["default"].saveData(list);
            UI.loadStrippedTasks(todayProject);
        })

        week.addEventListener('click', () => {
            const list = _storage__WEBPACK_IMPORTED_MODULE_4__["default"].getList()
            const weekProject = list.getProject(1);
            _elements__WEBPACK_IMPORTED_MODULE_3__["default"].removeTasks();
            list.updateThisWeekProject();
            _storage__WEBPACK_IMPORTED_MODULE_4__["default"].saveData(list);
            UI.loadStrippedTasks(weekProject);
        })
    }
}

/***/ }),

/***/ "./src/modules/elements.js":
/*!*********************************!*\
  !*** ./src/modules/elements.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOM)
/* harmony export */ });
/* harmony import */ var _img_checklist_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/checklist.png */ "./src/img/checklist.png");
/* harmony import */ var _img_today_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/today.png */ "./src/img/today.png");
/* harmony import */ var _img_week_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/week.png */ "./src/img/week.png");
/* harmony import */ var _img_project_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/project.png */ "./src/img/project.png");
/* harmony import */ var _img_trash_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/trash.png */ "./src/img/trash.png");
/* harmony import */ var _img_edit_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/edit.png */ "./src/img/edit.png");
/* harmony import */ var _img_checkmark_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/checkmark.png */ "./src/img/checkmark.png");








class DOM {

    static loadHomePage() {
        const content = document.getElementById('content');
        DOM.createTopBar(content);
        DOM.createMainContent(content);
        DOM.createSideBar();
        DOM.createTaskButton();
        DOM.createProjectModal(content);
        DOM.createTaskModal(content);
        DOM.createEditModal(content);
    }

    static createTopBar(element) {
        const topbar = document.createElement('div');
        const header = document.createElement('h1');
        const image = new Image();

        image.setAttribute('id', 'logo');
        image.alt = "Checklist";
        image.src = _img_checklist_png__WEBPACK_IMPORTED_MODULE_0__;

        header.setAttribute('id', 'logo-name');
        header.textContent = 'ToDo List';

        topbar.setAttribute('id', 'topbar');

        topbar.appendChild(image);
        topbar.appendChild(header);

        element.appendChild(topbar);
    }

    static createMainContent(element) {
        const container = document.createElement('div');
        const sidebar = document.createElement('nav');
        const projects = document.createElement('div');

        sidebar.setAttribute('id', 'sidebar');
        projects.setAttribute('id', 'project-content');
        container.setAttribute('id', 'container');

        container.appendChild(sidebar);
        container.appendChild(projects);

        element.appendChild(container);
    }

    static createSideBar() {
        const sidebar = document.getElementById('sidebar');
        const defaultProjects = document.createElement('div');
        const header = document.createElement('h1');
        const userProjects = document.createElement('div');
        const addProject = document.createElement('button');

        //----------------------Default Projects----------------------//
        const today = document.createElement('button');
        const todayIcon = new Image();
        const todayText = document.createElement('p');

        todayIcon.src = _img_today_png__WEBPACK_IMPORTED_MODULE_1__;
        todayIcon.alt = 'Today Icon';
        today.classList.add('project');
        today.setAttribute('id', 'today');
        todayText.textContent = 'Today';

        today.appendChild(todayIcon);
        today.appendChild(todayText);

        const week = document.createElement('button');
        const weekIcon = new Image();
        const weekText = document.createElement('p');

        weekIcon.src = _img_week_png__WEBPACK_IMPORTED_MODULE_2__;
        weekIcon.alt = 'Week Icon';
        week.classList.add('project');
        week.setAttribute('id', 'week');
        weekText.textContent = 'This Week';

        week.appendChild(weekIcon);
        week.appendChild(weekText);

        defaultProjects.setAttribute('id', 'default-projects');
        defaultProjects.appendChild(today)
        defaultProjects.appendChild(week);

        //----------------------Header----------------------//
        header.textContent = 'Projects';
        header.setAttribute('id', 'header-text');

        //----------------------User Projects----------------------//
        userProjects.setAttribute('id', 'user-projects');

        //----------------------Add Project----------------------//
        addProject.classList.add('project');
        addProject.setAttribute('id', 'add-project');
        addProject.textContent = '+ Add Project';

        //----------------------Sidebar----------------------//
        sidebar.appendChild(defaultProjects);
        sidebar.appendChild(header);
        sidebar.appendChild(userProjects);
        sidebar.appendChild(addProject);
    }

    static createProjectModal(element) {
        const modal = document.createElement('div');
        const overlay = document.createElement('div');
        const formContainer = document.createElement('div');

        modal.classList.add('add-project-modal');
        overlay.classList.add('overlay');
        overlay.setAttribute('id', 'project-overlay');
        formContainer.classList.add('add-project-form');
        
        //----------------------Form Variables----------------------//
        const title = document.createElement('div');
        const closeBtn = document.createElement('div');
        const form = document.createElement('form');
        const inputBox = document.createElement('div');
        const input = document.createElement('input');
        const submitBtn = document.createElement('button');

        title.textContent = 'Add New Project';
        closeBtn.setAttribute('id', 'project-close');
        closeBtn.classList.add('close-btn')
        closeBtn.textContent = '\xD7';
        form.setAttribute('action', '#');
        form.classList.add('form');
        
        inputBox.classList.add('input');
        input.type = 'text';
        input.name = 'name';
        input.placeholder = 'Name';
        input.setAttribute('id', 'name');
        inputBox.appendChild(input);

        form.appendChild(inputBox);

        submitBtn.setAttribute('type', 'submit');
        submitBtn.setAttribute('id', 'project-submit');
        submitBtn.classList.add('submit-btn');
        submitBtn.textContent = 'Add';

        formContainer.appendChild(title);
        formContainer.appendChild(closeBtn);
        formContainer.appendChild(form);
        formContainer.appendChild(submitBtn);

        modal.appendChild(overlay);
        modal.appendChild(formContainer);

        element.appendChild(modal);
    }

    static toggleProjectModal () {
        const modal = document.querySelector('.add-project-modal');
        modal.classList.toggle('active');
    }

    static createProject() {
        const userProjects = document.getElementById('user-projects');
        const project = document.createElement('button');
        const image = new Image();
        const name = document.createElement('p');
        const projectName = document.getElementById('name');
        const deleteBtn = new Image()

        project.className = 'user-project project';
        image.src = _img_project_png__WEBPACK_IMPORTED_MODULE_3__;
        image.alt = 'Project Icon';
        name.textContent = projectName.value;
        deleteBtn.src = _img_trash_png__WEBPACK_IMPORTED_MODULE_4__;
        deleteBtn.alt = 'Delete Icon';
        deleteBtn.classList.add('delete');

        project.appendChild(image);
        project.appendChild(name);
        project.appendChild(deleteBtn);

        userProjects.appendChild(project);
        projectName.value = '';
    }

    static createStorageProject(object) {
        const userProjects = document.getElementById('user-projects');
        const project = document.createElement('button');
        const image = new Image();
        const name = document.createElement('p');
        const projectName = document.getElementById('name');
        const deleteBtn = new Image()

        project.className = 'user-project project';
        image.src = _img_project_png__WEBPACK_IMPORTED_MODULE_3__;
        image.alt = 'Project Icon';
        name.textContent = object.name;
        deleteBtn.src = _img_trash_png__WEBPACK_IMPORTED_MODULE_4__;
        deleteBtn.alt = 'Delete Icon';
        deleteBtn.classList.add('delete');

        project.appendChild(image);
        project.appendChild(name);
        project.appendChild(deleteBtn);

        userProjects.appendChild(project);
        projectName.value = '';
    }

    static createTaskModal(element) {
        const modal = document.createElement('div');
        const overlay = document.createElement('div');
        const formContainer = document.createElement('div');

        modal.classList.add('add-task-modal');
        overlay.classList.add('overlay');
        overlay.setAttribute('id', 'task-overlay');
        formContainer.classList.add('add-task-form');
        
        //----------------------Form Variables----------------------//
        const title = document.createElement('div');
        const closeBtn = document.createElement('div');
        const form = document.createElement('form');

        title.textContent = 'Add New Project';
        closeBtn.setAttribute('id', 'task-close');
        closeBtn.classList.add('close-btn');
        closeBtn.textContent = '\xD7';
        form.setAttribute('action', '#');
        form.setAttribute('id', 'task-form');

        //----------------------Input Variables----------------------//
        const titleInput = document.createElement('input');
        const descriptionInput = document.createElement('textarea');
        const dateLabel = document.createElement('label');
        const dateInput = document.createElement('input');
        const priorityLabel = document.createElement('label');
        const priorityInput = document.createElement('select');
        const lowOption = document.createElement('option');
        const mediumOption = document.createElement('option');
        const highOption = document.createElement('option');
        const submitBtn = document.createElement('button');
        
        titleInput.type = 'text';
        titleInput.name = 'title';
        titleInput.placeholder = 'Title';
        titleInput.setAttribute('id', 'title');
        form.appendChild(titleInput);

        descriptionInput.rows = 5;
        descriptionInput.cols = 50;
        descriptionInput.name = 'description';
        descriptionInput.placeholder = 'Description';
        descriptionInput.setAttribute('id', 'description');
        form.appendChild(descriptionInput);

        dateLabel.setAttribute('for', 'date');
        dateLabel.textContent = 'Due Date';
        form.appendChild(dateLabel);

        dateInput.type = 'date';
        dateInput.name = 'date';
        dateInput.setAttribute('id', 'date');
        form.appendChild(dateInput);

        priorityLabel.setAttribute('for', 'priority');
        priorityLabel.textContent = 'Priority';
        form.appendChild(priorityLabel);

        priorityInput.name = 'priority'
        priorityInput.setAttribute('id', 'priority');
        lowOption.value = 'Low';
        lowOption.textContent = 'Low';
        mediumOption.value = 'Medium';
        mediumOption.textContent = 'Medium';
        highOption.value = 'High';
        highOption.textContent = 'High';
        priorityInput.appendChild(lowOption);
        priorityInput.appendChild(mediumOption);
        priorityInput.appendChild(highOption);
        form.appendChild(priorityInput);

        submitBtn.setAttribute('type', 'submit');
        submitBtn.setAttribute('id', 'task-submit');
        submitBtn.classList.add('submit-btn');
        submitBtn.textContent = 'Add';

        formContainer.appendChild(title);
        formContainer.appendChild(closeBtn);
        formContainer.appendChild(form);
        formContainer.appendChild(submitBtn);

        modal.appendChild(overlay);
        modal.appendChild(formContainer);

        element.appendChild(modal);
    }

    static toggleTaskModal () {
        const modal = document.querySelector('.add-task-modal');
        modal.classList.toggle('active');
    }

    static createTaskButton() {
        const container = document.getElementById('container');
        const projectContent = document.getElementById('project-content');
        const addTaskBtn = document.createElement('button');
        const tasks = document.createElement('div');

        addTaskBtn.setAttribute('id', 'add-task');
        addTaskBtn.textContent = '+ Add Task';

        tasks.setAttribute('id', 'tasks');

        projectContent.appendChild(addTaskBtn);
        projectContent.appendChild(tasks);

        container.appendChild(projectContent);
    }

    static createTask(title, date, priority, completed) {
        const taskContainer = document.getElementById('tasks');
        const task = document.createElement('div');
        const top = document.createElement('div');

        //----------------------Top Bar----------------------//
        const taskTitle = document.createElement('h2');
        const icons = document.createElement('div');
        const edit = new Image();
        const complete = new Image();
        const deleteBtn = new Image()

        taskTitle.textContent = title;
        taskTitle.classList.add('task-title');
        edit.src = _img_edit_png__WEBPACK_IMPORTED_MODULE_5__;
        edit.alt = 'Edit Icon';
        edit.classList.add('edit');

        complete.src = _img_checkmark_png__WEBPACK_IMPORTED_MODULE_6__;
        complete.alt = 'Complete Icon';
        complete.classList.add('complete');

        deleteBtn.src = _img_trash_png__WEBPACK_IMPORTED_MODULE_4__;
        deleteBtn.alt = 'Delete Icon';
        deleteBtn.classList.add('task-delete');

        icons.classList.add('task-icons');
        icons.appendChild(edit);
        icons.appendChild(complete);
        icons.appendChild(deleteBtn);

        top.classList.add('task-top-bar');
        top.appendChild(taskTitle);
        top.appendChild(icons);

        //----------------------Bottom----------------------//
        const dateText = document.createElement('p');
        dateText.classList.add('date');
        dateText.textContent = 'Due: ' + date;

        //----------------------Task Box----------------------//
        task.classList.add('task');

        if (completed === false) {
            task.classList.add(priority);
        } else {
            task.classList.add('complete-task');
        }

        task.appendChild(top);
        task.appendChild(dateText);

        taskContainer.appendChild(task);

        //----------------------Form Variables----------------------//
        const formTitle = document.getElementById('title');
        const formDescription = document.getElementById('description');
        const formDate = document.getElementById('date');
        const formPriority = document.getElementById('priority');

        formTitle.value = '';
        formDescription.value = '';
        formDate.value = '';
        formPriority.value = 'Low';
    }

    static createStrippedTask(title, date, priority, completed) {
        const taskContainer = document.getElementById('tasks');
        const task = document.createElement('div');
        const top = document.createElement('div');

        //----------------------Top Bar----------------------//
        const taskTitle = document.createElement('h2');

        taskTitle.textContent = title;
        taskTitle.classList.add('task-title');

        top.classList.add('task-top-bar');
        top.appendChild(taskTitle);

        //----------------------Bottom----------------------//
        const dateText = document.createElement('p');
        dateText.classList.add('date');
        dateText.textContent = 'Due: ' + date;

        //----------------------Task Box----------------------//
        task.classList.add('task');

        if (completed === false) {
            task.classList.add(priority);
        } else {
            task.classList.add('complete-task');
        }

        task.appendChild(top);
        task.appendChild(dateText);

        taskContainer.appendChild(task);
    }

    static removeTasks() {
        const taskContainer = document.getElementById('tasks');

        while (taskContainer.firstChild) {
            taskContainer.removeChild(taskContainer.firstChild);
        }
    }

    static createEditModal(element) {
        const modal = document.createElement('div');
        const overlay = document.createElement('div');
        const formContainer = document.createElement('div');

        modal.classList.add('edit-modal');
        overlay.classList.add('overlay');
        overlay.setAttribute('id', 'edit-overlay');
        formContainer.classList.add('edit-form');
        
        //----------------------Form Variables----------------------//
        const title = document.createElement('div');
        const closeBtn = document.createElement('div');
        const form = document.createElement('form');

        title.textContent = 'Edit Project';
        closeBtn.setAttribute('id', 'edit-close');
        closeBtn.classList.add('close-btn');
        closeBtn.textContent = '\xD7';
        form.setAttribute('action', '#');
        form.setAttribute('id', 'edit-form');

        //----------------------Input Variables----------------------//
        const titleInput = document.createElement('input');
        const descriptionInput = document.createElement('textarea');
        const dateLabel = document.createElement('label');
        const dateInput = document.createElement('input');
        const priorityLabel = document.createElement('label');
        const priorityInput = document.createElement('select');
        const lowOption = document.createElement('option');
        const mediumOption = document.createElement('option');
        const highOption = document.createElement('option');
        const submitBtn = document.createElement('button');
        
        titleInput.type = 'text';
        titleInput.name = 'title';
        titleInput.placeholder = 'Title';
        titleInput.setAttribute('id', 'taskTitle');
        form.appendChild(titleInput);

        descriptionInput.rows = 5;
        descriptionInput.cols = 50;
        descriptionInput.name = 'description';
        descriptionInput.placeholder = 'Description';
        descriptionInput.setAttribute('id', 'taskDescription');
        form.appendChild(descriptionInput);

        dateLabel.setAttribute('for', 'date');
        dateLabel.textContent = 'Due Date';
        form.appendChild(dateLabel);

        dateInput.type = 'date';
        dateInput.name = 'date';
        dateInput.setAttribute('id', 'taskDate');
        form.appendChild(dateInput);

        priorityLabel.setAttribute('for', 'priority');
        priorityLabel.textContent = 'Priority';
        form.appendChild(priorityLabel);

        priorityInput.name = 'priority'
        priorityInput.setAttribute('id', 'taskPriority');
        lowOption.value = 'Low';
        lowOption.textContent = 'Low';
        mediumOption.value = 'Medium';
        mediumOption.textContent = 'Medium';
        highOption.value = 'High';
        highOption.textContent = 'High';
        priorityInput.appendChild(lowOption);
        priorityInput.appendChild(mediumOption);
        priorityInput.appendChild(highOption);
        form.appendChild(priorityInput);

        submitBtn.setAttribute('type', 'submit');
        submitBtn.setAttribute('id', 'edit-submit');
        submitBtn.classList.add('submit-btn');
        submitBtn.textContent = 'Submit';

        formContainer.appendChild(title);
        formContainer.appendChild(closeBtn);
        formContainer.appendChild(form);
        formContainer.appendChild(submitBtn);

        modal.appendChild(overlay);
        modal.appendChild(formContainer);

        element.appendChild(modal);
    }

    static toggleEditModal () {
        const modal = document.querySelector('.edit-modal');
        modal.classList.toggle('active');
    }
}

/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");


class List {
    constructor () {
        this.projects = [];
        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('Today', 0));
        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('This Week', 1));
        this.current = 2;
    }

    set setCurrentProject(index) {
        this.current = index;
    }

    get getCurrentProject() {
        return this.current;
    }

    set setProjects(projects) {
        this.projects = projects;
    }

    get getProjects() {
        return this.projects;
    }

    addProject(project) {
        this.projects.push(project);
    }

    removeProject(index) {
        delete this.projects[index];
    }

    getProject(index) {
        return this.projects[index];
    }

    getLength() {
        return this.projects.length;
    }

    updateTodayProject() {
        this.projects[0].tasks = [];

        this.projects.forEach(project => {
            if (project === null || project.getName === 'Today' || project.getName == 'This Week') {
                return
            }

            const tasks = project.getTasksToday();

            tasks.forEach(task => {
                this.projects[0].addTask(task);
            })
        })
    }

    updateThisWeekProject() {
        this.projects[1].tasks = [];

        this.projects.forEach(project => {
            if (project === null || project.getName === 'Today' || project.getName == 'This Week') {
                return
            }

            const tasks = project.getTasksThisWeek();

            tasks.forEach(task => {
                this.projects[1].addTask(task);
            })
        })
    }
}

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");


class Project {
    constructor(name, id) {
        this.name = name;
        this.tasks = [];
        this.id = id;
        this.current = 0;
    }

    get getName() {
        return this.name;
    }

    set setTasks(tasks) {
        this.tasks = tasks;
    }

    get getTasks() {
        return this.tasks;
    }

    get getID() {
        return this.id;
    }

    get getCurrent() {
        return this.current;
    }

    set setCurrent(index) {
        this.current = index;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(index) {
        delete this.tasks[index];
    }

    getTask(index) {
        return this.tasks[index];
    }

    getLength() {
        return this.tasks.length;
    }

    getTasksToday() {
        return this.tasks.filter(task => {
            if (task === null) {
                return
            }

            const date = new Date(task.getDateFormatted());
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(date));
        })
    }

    getTasksThisWeek() {
        return this.tasks.filter(task => {
            if (task === null) {
                return
            }
            
            const date = new Date(task.getDateFormatted());
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(date));
        })
    }
}

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/modules/list.js");




class Storage {
    static saveData(data) {
        localStorage.setItem('ToDoList', JSON.stringify(data));
    }

    static getList() {
        const ToDoList = Object.assign(
            new _list__WEBPACK_IMPORTED_MODULE_2__["default"](),
            JSON.parse(localStorage.getItem('ToDoList'))
        )

        const projects = ToDoList.getProjects;

        projects.forEach(project => {
            if (project === null) {
                return;
            }

            projects[project.id] = Object.assign(new _project__WEBPACK_IMPORTED_MODULE_0__["default"](), projects[project.id]);
        });

        projects.forEach(project => {
            if (project === null) {
                return;
            }

            const tasks = project.getTasks;

            tasks.forEach(task => {
                if (task === null) {
                    return;
                }

                tasks[task.id] = Object.assign(new _task__WEBPACK_IMPORTED_MODULE_1__["default"](), tasks[task.id])
            })

            project.setTasks = tasks;
        });

        ToDoList.setProjects = projects;

        return ToDoList;
    }

    static consoleLog() {
        const ToDoList = Storage.getList();
        console.log(ToDoList);
    }

    static clearStorage() {
        localStorage.clear();
    }
}

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(title, description, date, priority, id) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.completed = false;
        this.id = id;
    }

    get getTitle() {
        return this.title;
    }

    set setTitle(title) {
        this.title = title;
    }

    get getDescription() {
        return this.description;
    }

    set setDescription(description) {
        this.description = description;
    }

    get getDate() {
        return this.date;
    }

    set setDate(date) {
        this.date = date;
    }

    get getPriority() {
        return this.priority;
    }

    set setPriority(priority) {
        this.priority = priority;
    }

    get getCompletion() {
        return this.completed;
    }

    get getID() {
        return this.id;
    }

    completeTask() {
        this.completed = true;
    }

    undoCompletion() {
        this.completed = false;
    }

    getDateFormatted() {
        const date = this.date.split('-');
        const day = date[2];
        const month = date[1];
        const year = date[0];
        return `${month}/${day}/${year}`;
    }
}

/***/ }),

/***/ "./src/img/checklist.png":
/*!*******************************!*\
  !*** ./src/img/checklist.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5bfb2f4042efea5981f.png";

/***/ }),

/***/ "./src/img/checkmark.png":
/*!*******************************!*\
  !*** ./src/img/checkmark.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1512888c84e9df01470d.png";

/***/ }),

/***/ "./src/img/edit.png":
/*!**************************!*\
  !*** ./src/img/edit.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e42c3c63c6b97a10746d.png";

/***/ }),

/***/ "./src/img/project.png":
/*!*****************************!*\
  !*** ./src/img/project.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4041733de8ae013263b.png";

/***/ }),

/***/ "./src/img/today.png":
/*!***************************!*\
  !*** ./src/img/today.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5a7cfbadc28b5cdf882.png";

/***/ }),

/***/ "./src/img/trash.png":
/*!***************************!*\
  !*** ./src/img/trash.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4e35861d2606e76ed78.png";

/***/ }),

/***/ "./src/img/week.png":
/*!**************************!*\
  !*** ./src/img/week.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28679c7e60f93bf609d9.png";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");
/* harmony import */ var _modules_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/elements */ "./src/modules/elements.js");




_modules_elements__WEBPACK_IMPORTED_MODULE_2__["default"].loadHomePage();
_modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].loadUI();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLCtHQUErRyxJQUFJLElBQUksSUFBSSxrQkFBa0I7QUFDN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG9GQUFvRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFB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O0FBQy9CO0FBQ0E7QUFDQSx3QkFBd0IsMkNBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2Q0FBVztBQUMvQjtBQUNBO0FBQ0Esd0JBQXdCLDJDQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBDQUFRO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwrQ0FBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkNBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hoQmdDO0FBQ2hDO0FBQ2U7QUFDZjtBQUNBO0FBQ0EsK0JBQStCLGdEQUFPO0FBQ3RDLCtCQUErQixnREFBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFZ0U7QUFDaEU7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvREFBTyxDQUFDLG9EQUFNO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQVUsQ0FBQyxvREFBTTtBQUNwQyxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RWdDO0FBQ047QUFDQTtBQUMxQjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZDQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGdEQUFPO0FBQzVELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCw2Q0FBSTtBQUN2RCxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeERlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixNQUFNLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDdkM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDs7Ozs7O1VDUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7OztBQ0F5QjtBQUNLO0FBQ087QUFDckM7QUFDQSx5REFBRztBQUNILG1EQUFFLFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUaGlzV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2VsZW1lbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAgIC0td2hpdGUtY29sb3I6IHdoaXRlO1xyXG4gICAgLS1nb2xkLWNvbG9yOiAjYjk5MzI5O1xyXG4gICAgLS1ibGFjay1jb2xvcjogIzAwMDAwMDtcclxuICAgIC0tZ3JheS1jb2xvci0xOiAjOTQ5NDk0O1xyXG4gICAgLS1ncmF5LWNvbG9yLTI6ICNlN2U3ZTc7XHJcbiAgICAtLWRhcmstZ3JheS1jb2xvcjogI2FhYWFhYTtcclxuICAgIC0tYmx1ZS1jb2xvcjogIzQwNWNhYTtcclxuICAgIC0tcmVkLWNvbG9yOiByZWQ7XHJcbiAgICAtLXllbGxvdy1jb2xvcjogeWVsbG93O1xyXG4gICAgLS1ncmVlbi1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgT3h5Z2VuLFxyXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7IFxyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4jdG9wYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAyNXB4O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xyXG59XHJcblxyXG4jbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xyXG59XHJcblxyXG4jc2lkZWJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDI1cHggMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktY29sb3ItMik7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xyXG59XHJcblxyXG4jZGVmYXVsdC1wcm9qZWN0cyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogNXB4O1xyXG59XHJcblxyXG4ucHJvamVjdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheS1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbiNoZWFkZXItdGV4dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxufVxyXG5cclxuI3VzZXItcHJvamVjdHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi51c2VyLXByb2plY3Qge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCBhdXRvIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcblxyXG4uZGVsZXRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4udXNlci1wcm9qZWN0OmhvdmVyPi5kZWxldGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnVzZXItcHJvamVjdDpob3Zlcj4uZGVsZXRlOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuI3Byb2plY3RzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcclxufVxyXG5cclxuLmFkZC1wcm9qZWN0LW1vZGFsIC5vdmVybGF5LCAuYWRkLXRhc2stbW9kYWwgLm92ZXJsYXksIC5lZGl0LW1vZGFsIC5vdmVybGF5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5hZGQtcHJvamVjdC1tb2RhbCAuYWRkLXByb2plY3QtZm9ybSwgLmFkZC10YXNrLW1vZGFsIC5hZGQtdGFzay1mb3JtLCAuZWRpdC1tb2RhbCAuZWRpdC1mb3JtIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDI1cHggNTBweDtcclxufVxyXG5cclxuI3Rhc2stZm9ybSwgI2VkaXQtZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuI3Rhc2stZm9ybT5pbnB1dCwgI3Rhc2stZm9ybT4jZGVzY3JpcHRpb24ge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEycHgpO1xyXG59XHJcblxyXG4jZGVzY3JpcHRpb24sICN0YXNrRGVzY3JpcHRpb24ge1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5LWNvbG9yLTEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBPeHlnZW4sXHJcbiAgICBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5hZGQtcHJvamVjdC1tb2RhbC5hY3RpdmUgLm92ZXJsYXksIC5hZGQtdGFzay1tb2RhbC5hY3RpdmUgLm92ZXJsYXksIC5lZGl0LW1vZGFsLmFjdGl2ZSAub3ZlcmxheSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5hZGQtcHJvamVjdC1tb2RhbC5hY3RpdmUgLmFkZC1wcm9qZWN0LWZvcm0sIC5hZGQtdGFzay1tb2RhbC5hY3RpdmUgLmFkZC10YXNrLWZvcm0sIC5lZGl0LW1vZGFsLmFjdGl2ZSAuZWRpdC1mb3JtIHtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xyXG59XHJcblxyXG4uY2xvc2UtYnRuIHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWNvbG9yLTIpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY2xvc2UtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktY29sb3ItMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheS1jb2xvci0xKTtcclxufVxyXG5cclxuLnN1Ym1pdC1idG46aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktY29sb3ItMik7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTVweDtcclxuICAgIG1hcmdpbjogMjVweCAwO1xyXG59XHJcblxyXG5pbnB1dCwgc2VsZWN0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheS1jb2xvci0xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMsIHNlbGVjdDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbiNwcm9qZWN0LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jYWRkLXRhc2sge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheS1jb2xvci0xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbiNhZGQtdGFzazpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1jb2xvci0yKTtcclxufVxyXG5cclxuI3Rhc2tzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDE1MHB4O1xyXG4gICAgZ2FwOiA1MHB4O1xyXG4gICAgcGFkZGluZzogMjVweCA1MHB4O1xyXG59XHJcblxyXG4udGFzayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktY29sb3ItMik7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm94LXNoYWRvdzogIC01cHggNXB4IDE1cHggLTZweCByZ2IoMCwgMCwgMCwgMC42KTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4uSGlnaCB7XHJcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB2YXIoLS1yZWQtY29sb3IpO1xyXG59XHJcblxyXG4uTWVkaXVtIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHZhcigtLXllbGxvdy1jb2xvcik7XHJcbn1cclxuXHJcbi5Mb3cge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdmFyKC0tZ3JlZW4tY29sb3IpO1xyXG59XHJcblxyXG4uY29tcGxldGUtdGFzayB7XHJcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB2YXIoLS1ncmF5LWNvbG9yLTEpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuXHJcbi50YXNrLXRvcC1iYXIsIC50YXNrLWJvdHRvbS1iYXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRhc2stdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbn1cclxuXHJcbi50YXNrLWljb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDVweDtcclxufVxyXG5cclxuLmVkaXQsIC5jb21wbGV0ZSwgLnRhc2stZGVsZXRlIHtcclxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLmVkaXQ6aG92ZXIsIC5jb21wbGV0ZTpob3ZlciwgLnRhc2stZGVsZXRlOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZix5QkFBeUI7SUFDekI7Z0VBQzREO0FBQ2hFOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhO0lBQ2IsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lB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SSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwOzQwMDs1MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0td2hpdGUtY29sb3I6IHdoaXRlO1xcclxcbiAgICAtLWdvbGQtY29sb3I6ICNiOTkzMjk7XFxyXFxuICAgIC0tYmxhY2stY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgIC0tZ3JheS1jb2xvci0xOiAjOTQ5NDk0O1xcclxcbiAgICAtLWdyYXktY29sb3ItMjogI2U3ZTdlNztcXHJcXG4gICAgLS1kYXJrLWdyYXktY29sb3I6ICNhYWFhYWE7XFxyXFxuICAgIC0tYmx1ZS1jb2xvcjogIzQwNWNhYTtcXHJcXG4gICAgLS1yZWQtY29sb3I6IHJlZDtcXHJcXG4gICAgLS15ZWxsb3ctY29sb3I6IHllbGxvdztcXHJcXG4gICAgLS1ncmVlbi1jb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgT3h5Z2VuLFxcclxcbiAgICBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgXFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiN0b3BiYXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDI1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDI1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9nbyB7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAyNXB4IDI1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktY29sb3ItMik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNkZWZhdWx0LXByb2plY3RzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheS1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWRlci10ZXh0IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdXNlci1wcm9qZWN0cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi51c2VyLXByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggYXV0byBhdXRvO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5kZWxldGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1wcm9qZWN0OmhvdmVyPi5kZWxldGUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4udXNlci1wcm9qZWN0OmhvdmVyPi5kZWxldGU6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxufVxcclxcblxcclxcbiNwcm9qZWN0cyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LW1vZGFsIC5vdmVybGF5LCAuYWRkLXRhc2stbW9kYWwgLm92ZXJsYXksIC5lZGl0LW1vZGFsIC5vdmVybGF5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1tb2RhbCAuYWRkLXByb2plY3QtZm9ybSwgLmFkZC10YXNrLW1vZGFsIC5hZGQtdGFzay1mb3JtLCAuZWRpdC1tb2RhbCAuZWRpdC1mb3JtIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgcGFkZGluZzogMjVweCA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFzay1mb3JtLCAjZWRpdC1mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbiN0YXNrLWZvcm0+aW5wdXQsICN0YXNrLWZvcm0+I2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEycHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jZGVzY3JpcHRpb24sICN0YXNrRGVzY3JpcHRpb24ge1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktY29sb3ItMSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBPeHlnZW4sXFxyXFxuICAgIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LW1vZGFsLmFjdGl2ZSAub3ZlcmxheSwgLmFkZC10YXNrLW1vZGFsLmFjdGl2ZSAub3ZlcmxheSwgLmVkaXQtbW9kYWwuYWN0aXZlIC5vdmVybGF5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLmFkZC1wcm9qZWN0LW1vZGFsLmFjdGl2ZSAuYWRkLXByb2plY3QtZm9ybSwgLmFkZC10YXNrLW1vZGFsLmFjdGl2ZSAuYWRkLXRhc2stZm9ybSwgLmVkaXQtbW9kYWwuYWN0aXZlIC5lZGl0LWZvcm0ge1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnRuIHtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMTVweDtcXHJcXG4gICAgdG9wOiAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LWNvbG9yLTIpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2UtYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1jb2xvci0xKTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG4ge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5LWNvbG9yLTEpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWJ0bjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTVweDtcXHJcXG4gICAgbWFyZ2luOiAyNXB4IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0LCBzZWxlY3Qge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktY29sb3ItMSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXMsIHNlbGVjdDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvamVjdC1jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10YXNrIHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICB3aWR0aDogMjUlO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5LWNvbG9yLTEpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbiNhZGQtdGFzazpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktY29sb3ItMik7XFxyXFxufVxcclxcblxcclxcbiN0YXNrcyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxyXFxuICAgIGdyaWQtYXV0by1yb3dzOiAxNTBweDtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbiAgICBwYWRkaW5nOiAyNXB4IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS1jb2xvci0yKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBib3gtc2hhZG93OiAgLTVweCA1cHggMTVweCAtNnB4IHJnYigwLCAwLCAwLCAwLjYpO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLkhpZ2gge1xcclxcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB2YXIoLS1yZWQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uTWVkaXVtIHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdmFyKC0teWVsbG93LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLkxvdyB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHZhcigtLWdyZWVuLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBsZXRlLXRhc2sge1xcclxcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB2YXIoLS1ncmF5LWNvbG9yLTEpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stdG9wLWJhciwgLnRhc2stYm90dG9tLWJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWljb25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LCAuY29tcGxldGUsIC50YXNrLWRlbGV0ZSB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5lZGl0OmhvdmVyLCAuY29tcGxldGU6aG92ZXIsIC50YXNrLWRlbGV0ZTpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSB3ZWVrIChhbmQgbW9udGggYW5kIHllYXIpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LFxuICogLy8gYXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxXG4gKiB9KVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMSBKYW51YXJ5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lV2VlayhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVMZWZ0LCBvcHRpb25zKTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mV2Vlay5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZXZWVrLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lV2VlayBmcm9tIFwiLi4vaXNTYW1lV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RoaXNXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZVdlZWsoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIEF1ZyAzMSAyMDE0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBzdGFydCBvZiB0aGUgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcclxuaW1wb3J0IERPTSBmcm9tICcuL2VsZW1lbnRzJztcclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xyXG4gICAgc3RhdGljIGxvYWRVSSgpIHtcclxuICAgICAgICBVSS5sb2FkU3RvcmFnZSgpO1xyXG4gICAgICAgIFVJLlByb2plY3QoKTtcclxuICAgICAgICBVSS5UYXNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWRTdG9yYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBTdG9yYWdlLmdldExpc3QoKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGxpc3QuZ2V0UHJvamVjdHM7XHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgaWYgKHByb2plY3QgPT09IG51bGwgfHwgcHJvamVjdC5nZXROYW1lID09PSAnVG9kYXknIHx8IHByb2plY3QuZ2V0TmFtZSA9PT0gJ1RoaXMgV2VlaycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgRE9NLmNyZWF0ZVN0b3JhZ2VQcm9qZWN0KHByb2plY3QpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItcHJvamVjdHMnKS5sYXN0Q2hpbGQubGFzdENoaWxkO1xyXG4gICAgICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnJlbW92ZVByb2plY3QocHJvamVjdC5nZXRJRCk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRlbGV0ZUJ0bi5wYXJlbnROb2RlKTtcclxuICAgICAgICAgICAgICAgIFN0b3JhZ2Uuc2F2ZURhdGEobGlzdCk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0aGlzUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLXByb2plY3RzJykubGFzdENoaWxkO1xyXG4gICAgICAgICAgICB0aGlzUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gU3RvcmFnZS5nZXRMaXN0KClcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRMaXN0LnNldEN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdC5nZXRJRDtcclxuICAgICAgICAgICAgICAgIFN0b3JhZ2Uuc2F2ZURhdGEoY3VycmVudExpc3QpO1xyXG4gICAgICAgICAgICAgICAgRE9NLnJlbW92ZVRhc2tzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IFN0b3JhZ2UuZ2V0TGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgVUkubG9hZFRhc2tzKG5ld0xpc3QuZ2V0UHJvamVjdChuZXdMaXN0LmdldEN1cnJlbnRQcm9qZWN0KSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLXByb2plY3RzJyk7XHJcbiAgICAgICAgaWYgKHByb2plY3RCb3gubGFzdENoaWxkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIFN0b3JhZ2UuY2xlYXJTdG9yYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBQcm9qZWN0KCkge1xyXG4gICAgICAgIFVJLmFkZFByb2plY3QoKTtcclxuICAgICAgICBVSS5jcmVhdGVQcm9qZWN0KCk7XHJcbiAgICAgICAgVUkubG9hZERlZmF1bHRQcm9qZWN0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBUYXNrKCkge1xyXG4gICAgICAgIFVJLmFkZFRhc2soKTtcclxuICAgICAgICBVSS5jcmVhdGVUYXNrKCk7XHJcbiAgICAgICAgVUkuZWRpdFRhc2soKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkUHJvamVjdCgpIHtcclxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0Jyk7XHJcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1jbG9zZScpO1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1vdmVybGF5Jyk7XHJcblxyXG4gICAgICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIERPTS50b2dnbGVQcm9qZWN0TW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIERPTS50b2dnbGVQcm9qZWN0TW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgRE9NLnRvZ2dsZVByb2plY3RNb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVQcm9qZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXN1Ym1pdCcpO1xyXG5cclxuICAgICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBTdG9yYWdlLmdldExpc3QoKTtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lLnZhbHVlLCBsaXN0LmdldExlbmd0aCgpKTtcclxuICAgICAgICAgICAgbGlzdC5hZGRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgICAgICAgICBsaXN0LnNldEN1cnJlbnRQcm9qZWN0ID0gbGlzdC5nZXRMZW5ndGgoKSAtIDE7XHJcbiAgICAgICAgICAgIFN0b3JhZ2Uuc2F2ZURhdGEobGlzdCk7XHJcblxyXG4gICAgICAgICAgICBET00ucmVtb3ZlVGFza3MoKTtcclxuICAgICAgICAgICAgRE9NLmNyZWF0ZVByb2plY3QoKTtcclxuICAgICAgICAgICAgRE9NLnRvZ2dsZVByb2plY3RNb2RhbCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItcHJvamVjdHMnKS5sYXN0Q2hpbGQubGFzdENoaWxkO1xyXG4gICAgICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnJlbW92ZVByb2plY3QocHJvamVjdC5nZXRJRCk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4ucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRlbGV0ZUJ0bi5wYXJlbnROb2RlKTtcclxuICAgICAgICAgICAgICAgIFN0b3JhZ2Uuc2F2ZURhdGEobGlzdCk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0aGlzUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLXByb2plY3RzJykubGFzdENoaWxkO1xyXG4gICAgICAgICAgICB0aGlzUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMaXN0ID0gU3RvcmFnZS5nZXRMaXN0KClcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRMaXN0LnNldEN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdC5nZXRJRDtcclxuICAgICAgICAgICAgICAgIFN0b3JhZ2Uuc2F2ZURhdGEoY3VycmVudExpc3QpO1xyXG4gICAgICAgICAgICAgICAgRE9NLnJlbW92ZVRhc2tzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3TGlzdCA9IFN0b3JhZ2UuZ2V0TGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgVUkubG9hZFRhc2tzKG5ld0xpc3QuZ2V0UHJvamVjdChuZXdMaXN0LmdldEN1cnJlbnRQcm9qZWN0KSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkVGFzaygpIHtcclxuICAgICAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrJyk7XHJcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1jbG9zZScpO1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1vdmVybGF5Jyk7XHJcblxyXG4gICAgICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIERPTS50b2dnbGVUYXNrTW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIERPTS50b2dnbGVUYXNrTW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgRE9NLnRvZ2dsZVRhc2tNb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVUYXNrKCkge1xyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXN1Ym1pdCcpO1xyXG5cclxuICAgICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBTdG9yYWdlLmdldExpc3QoKTtcclxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKTtcclxuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5Jyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbGlzdC5nZXRQcm9qZWN0KGxpc3QuZ2V0Q3VycmVudFByb2plY3QpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSwgcHJvamVjdC5nZXRMZW5ndGgoKSk7XHJcbiAgICAgICAgICAgIHByb2plY3QuYWRkVGFzayh0YXNrKTtcclxuICAgICAgICAgICAgU3RvcmFnZS5zYXZlRGF0YShsaXN0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coU3RvcmFnZS5nZXRMaXN0KCkpO1xyXG5cclxuICAgICAgICAgICAgRE9NLnRvZ2dsZVRhc2tNb2RhbCgpO1xyXG4gICAgICAgICAgICBET00uY3JlYXRlVGFzayh0aXRsZS52YWx1ZSwgdGFzay5nZXREYXRlRm9ybWF0dGVkKCksIHByaW9yaXR5LnZhbHVlLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICBVSS5hZGRJY29uTGlzdGVuZXJzKHByb2plY3QsIHRhc2spO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWRUYXNrcyhwcm9qZWN0KSB7XHJcbiAgICAgICAgaWYgKHByb2plY3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGFza3MgPSBwcm9qZWN0LmdldFRhc2tzO1xyXG5cclxuICAgICAgICBpZiAocHJvamVjdC5nZXRMZW5ndGgoKSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFzayA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIERPTS5jcmVhdGVUYXNrKHRhc2suZ2V0VGl0bGUsIHRhc2suZ2V0RGF0ZUZvcm1hdHRlZCgpLCB0YXNrLmdldFByaW9yaXR5LCB0YXNrLmdldENvbXBsZXRpb24pO1xyXG4gICAgICAgICAgICBVSS5hZGRJY29uTGlzdGVuZXJzKHByb2plY3QsIHRhc2spO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWRTdHJpcHBlZFRhc2tzKHByb2plY3QpIHtcclxuICAgICAgICBjb25zdCB0YXNrcyA9IHByb2plY3QuZ2V0VGFza3M7XHJcblxyXG4gICAgICAgIGlmIChwcm9qZWN0LmdldExlbmd0aCgpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgICAgIERPTS5jcmVhdGVTdHJpcHBlZFRhc2sodGFzay5nZXRUaXRsZSwgdGFzay5nZXREYXRlRm9ybWF0dGVkKCksIHRhc2suZ2V0UHJpb3JpdHksIHRhc2suZ2V0Q29tcGxldGlvbik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZWRpdFRhc2soKSB7XHJcbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtc3VibWl0Jyk7XHJcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1jbG9zZScpO1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1vdmVybGF5Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVGl0bGUnKTtcclxuICAgICAgICBjb25zdCBmb3JtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgZm9ybURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0RhdGUnKTtcclxuICAgICAgICBjb25zdCBmb3JtUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1ByaW9yaXR5Jyk7XHJcblxyXG4gICAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGlzdCA9IFN0b3JhZ2UuZ2V0TGlzdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGxpc3QuZ2V0UHJvamVjdChsaXN0LmdldEN1cnJlbnRQcm9qZWN0KTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFRhc2tJbmRleCA9IGN1cnJlbnRQcm9qZWN0LmdldEN1cnJlbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gY3VycmVudFByb2plY3QuZ2V0VGFzayhjdXJyZW50VGFza0luZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGN1cnJlbnRUYXNrLnNldFRpdGxlID0gZm9ybVRpdGxlLnZhbHVlO1xyXG4gICAgICAgICAgICBjdXJyZW50VGFzay5zZXREZXNjcmlwdGlvbiA9IGZvcm1EZXNjcmlwdGlvbi52YWx1ZTtcclxuICAgICAgICAgICAgY3VycmVudFRhc2suc2V0RGF0ZSA9IGZvcm1EYXRlLnZhbHVlO1xyXG4gICAgICAgICAgICBjdXJyZW50VGFzay5zZXRQcmlvcml0eSA9IGZvcm1Qcmlvcml0eS52YWx1ZTtcclxuICAgICAgICAgICAgU3RvcmFnZS5zYXZlRGF0YShsaXN0KTtcclxuXHJcbiAgICAgICAgICAgIERPTS5yZW1vdmVUYXNrcygpO1xyXG4gICAgICAgICAgICBVSS5sb2FkVGFza3MoY3VycmVudFByb2plY3QpO1xyXG5cclxuICAgICAgICAgICAgRE9NLnRvZ2dsZUVkaXRNb2RhbCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBET00udG9nZ2xlRWRpdE1vZGFsKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIERPTS50b2dnbGVFZGl0TW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYWRkSWNvbkxpc3RlbmVycyhwcm9qZWN0T2JqZWN0LCB0YXNrT2JqZWN0KSB7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IFN0b3JhZ2UuZ2V0TGlzdCgpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBsaXN0LmdldFByb2plY3QocHJvamVjdE9iamVjdC5nZXRJRCk7XHJcbiAgICAgICAgY29uc3QgdGFzayA9IHByb2plY3QuZ2V0VGFzayh0YXNrT2JqZWN0LmdldElEKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MnKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50VGFzayA9IHRhc2tzLmxhc3RDaGlsZDtcclxuXHJcbiAgICAgICAgY29uc3QgZWRpdCA9IGN1cnJlbnRUYXNrLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Jyk7XHJcbiAgICAgICAgY29uc3QgY29tcGxldGUgPSBjdXJyZW50VGFzay5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGUnKTtcclxuICAgICAgICBjb25zdCByZW1vdmUgPSBjdXJyZW50VGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay1kZWxldGUnKTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tUaXRsZScpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGVzY3JpcHRpb24nKTtcclxuICAgICAgICBjb25zdCBmb3JtRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRGF0ZScpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1Qcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrUHJpb3JpdHknKTtcclxuICAgICAgICBcclxuICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBET00udG9nZ2xlRWRpdE1vZGFsKCk7XHJcblxyXG4gICAgICAgICAgICBmb3JtVGl0bGUudmFsdWUgPSB0YXNrLmdldFRpdGxlO1xyXG4gICAgICAgICAgICBmb3JtRGVzY3JpcHRpb24udmFsdWUgPSB0YXNrLmdldERlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICBmb3JtRGF0ZS52YWx1ZSA9IHRhc2suZ2V0RGF0ZTtcclxuICAgICAgICAgICAgZm9ybVByaW9yaXR5LnZhbHVlID0gdGFzay5nZXRQcmlvcml0eTtcclxuXHJcbiAgICAgICAgICAgIHByb2plY3Quc2V0Q3VycmVudCA9IHRhc2suZ2V0SUQ7XHJcbiAgICAgICAgICAgIFN0b3JhZ2Uuc2F2ZURhdGEobGlzdCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0YXNrLmNvbXBsZXRlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRhc2suY29tcGxldGVUYXNrKCk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFzay5jbGFzc05hbWUgPSAndGFzayBjb21wbGV0ZS10YXNrJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhc2sudW5kb0NvbXBsZXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrLmNsYXNzTmFtZSA9IGB0YXNrICR7dGFzay5nZXRQcmlvcml0eX1gO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBTdG9yYWdlLnNhdmVEYXRhKGxpc3QpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdC5yZW1vdmVUYXNrKHRhc2suZ2V0SUQpO1xyXG4gICAgICAgICAgICB0YXNrcy5yZW1vdmVDaGlsZChjdXJyZW50VGFzayk7XHJcblxyXG4gICAgICAgICAgICBTdG9yYWdlLnNhdmVEYXRhKGxpc3QpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWREZWZhdWx0UHJvamVjdHMoKSB7XHJcbiAgICAgICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXknKTtcclxuICAgICAgICBjb25zdCB3ZWVrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWsnKTtcclxuXHJcbiAgICAgICAgdG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBTdG9yYWdlLmdldExpc3QoKVxyXG4gICAgICAgICAgICBjb25zdCB0b2RheVByb2plY3QgPSBsaXN0LmdldFByb2plY3QoMCk7XHJcbiAgICAgICAgICAgIERPTS5yZW1vdmVUYXNrcygpO1xyXG4gICAgICAgICAgICBsaXN0LnVwZGF0ZVRvZGF5UHJvamVjdCgpO1xyXG4gICAgICAgICAgICBTdG9yYWdlLnNhdmVEYXRhKGxpc3QpO1xyXG4gICAgICAgICAgICBVSS5sb2FkU3RyaXBwZWRUYXNrcyh0b2RheVByb2plY3QpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHdlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBTdG9yYWdlLmdldExpc3QoKVxyXG4gICAgICAgICAgICBjb25zdCB3ZWVrUHJvamVjdCA9IGxpc3QuZ2V0UHJvamVjdCgxKTtcclxuICAgICAgICAgICAgRE9NLnJlbW92ZVRhc2tzKCk7XHJcbiAgICAgICAgICAgIGxpc3QudXBkYXRlVGhpc1dlZWtQcm9qZWN0KCk7XHJcbiAgICAgICAgICAgIFN0b3JhZ2Uuc2F2ZURhdGEobGlzdCk7XHJcbiAgICAgICAgICAgIFVJLmxvYWRTdHJpcHBlZFRhc2tzKHdlZWtQcm9qZWN0KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IExvZ28gZnJvbSAnLi4vaW1nL2NoZWNrbGlzdC5wbmcnO1xyXG5pbXBvcnQgdG9kYXlQTkcgZnJvbSAnLi4vaW1nL3RvZGF5LnBuZyc7XHJcbmltcG9ydCB3ZWVrUE5HIGZyb20gJy4uL2ltZy93ZWVrLnBuZyc7XHJcbmltcG9ydCBwcm9qZWN0SWNvbiBmcm9tICcuLi9pbWcvcHJvamVjdC5wbmcnO1xyXG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuLi9pbWcvdHJhc2gucG5nJztcclxuaW1wb3J0IGVkaXRJY29uIGZyb20gJy4uL2ltZy9lZGl0LnBuZyc7XHJcbmltcG9ydCBjb21wbGV0ZUljb24gZnJvbSAnLi4vaW1nL2NoZWNrbWFyay5wbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRE9NIHtcclxuXHJcbiAgICBzdGF0aWMgbG9hZEhvbWVQYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgICAgIERPTS5jcmVhdGVUb3BCYXIoY29udGVudCk7XHJcbiAgICAgICAgRE9NLmNyZWF0ZU1haW5Db250ZW50KGNvbnRlbnQpO1xyXG4gICAgICAgIERPTS5jcmVhdGVTaWRlQmFyKCk7XHJcbiAgICAgICAgRE9NLmNyZWF0ZVRhc2tCdXR0b24oKTtcclxuICAgICAgICBET00uY3JlYXRlUHJvamVjdE1vZGFsKGNvbnRlbnQpO1xyXG4gICAgICAgIERPTS5jcmVhdGVUYXNrTW9kYWwoY29udGVudCk7XHJcbiAgICAgICAgRE9NLmNyZWF0ZUVkaXRNb2RhbChjb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlVG9wQmFyKGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCB0b3BiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9nbycpO1xyXG4gICAgICAgIGltYWdlLmFsdCA9IFwiQ2hlY2tsaXN0XCI7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gTG9nbztcclxuXHJcbiAgICAgICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9nby1uYW1lJyk7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1RvRG8gTGlzdCc7XHJcblxyXG4gICAgICAgIHRvcGJhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvcGJhcicpO1xyXG5cclxuICAgICAgICB0b3BiYXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgICAgIHRvcGJhci5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRvcGJhcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZU1haW5Db250ZW50KGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgc2lkZWJhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NpZGViYXInKTtcclxuICAgICAgICBwcm9qZWN0cy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtY29udGVudCcpO1xyXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhaW5lcicpO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhcik7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzKTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVTaWRlQmFyKCkge1xyXG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpO1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgY29uc3QgdXNlclByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS1EZWZhdWx0IFByb2plY3RzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcbiAgICAgICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb25zdCB0b2RheUljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBjb25zdCB0b2RheVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgICAgIHRvZGF5SWNvbi5zcmMgPSB0b2RheVBORztcclxuICAgICAgICB0b2RheUljb24uYWx0ID0gJ1RvZGF5IEljb24nO1xyXG4gICAgICAgIHRvZGF5LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcclxuICAgICAgICB0b2RheS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZGF5Jyk7XHJcbiAgICAgICAgdG9kYXlUZXh0LnRleHRDb250ZW50ID0gJ1RvZGF5JztcclxuXHJcbiAgICAgICAgdG9kYXkuYXBwZW5kQ2hpbGQodG9kYXlJY29uKTtcclxuICAgICAgICB0b2RheS5hcHBlbmRDaGlsZCh0b2RheVRleHQpO1xyXG5cclxuICAgICAgICBjb25zdCB3ZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3Qgd2Vla0ljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBjb25zdCB3ZWVrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICAgICAgd2Vla0ljb24uc3JjID0gd2Vla1BORztcclxuICAgICAgICB3ZWVrSWNvbi5hbHQgPSAnV2VlayBJY29uJztcclxuICAgICAgICB3ZWVrLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcclxuICAgICAgICB3ZWVrLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2VlaycpO1xyXG4gICAgICAgIHdlZWtUZXh0LnRleHRDb250ZW50ID0gJ1RoaXMgV2Vlayc7XHJcblxyXG4gICAgICAgIHdlZWsuYXBwZW5kQ2hpbGQod2Vla0ljb24pO1xyXG4gICAgICAgIHdlZWsuYXBwZW5kQ2hpbGQod2Vla1RleHQpO1xyXG5cclxuICAgICAgICBkZWZhdWx0UHJvamVjdHMuc2V0QXR0cmlidXRlKCdpZCcsICdkZWZhdWx0LXByb2plY3RzJyk7XHJcbiAgICAgICAgZGVmYXVsdFByb2plY3RzLmFwcGVuZENoaWxkKHRvZGF5KVxyXG4gICAgICAgIGRlZmF1bHRQcm9qZWN0cy5hcHBlbmRDaGlsZCh3ZWVrKTtcclxuXHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tSGVhZGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcclxuICAgICAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXItdGV4dCcpO1xyXG5cclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Vc2VyIFByb2plY3RzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcbiAgICAgICAgdXNlclByb2plY3RzLnNldEF0dHJpYnV0ZSgnaWQnLCAndXNlci1wcm9qZWN0cycpO1xyXG5cclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BZGQgUHJvamVjdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG4gICAgICAgIGFkZFByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xyXG4gICAgICAgIGFkZFByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvamVjdCcpO1xyXG4gICAgICAgIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSAnKyBBZGQgUHJvamVjdCc7XHJcblxyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNpZGViYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGRlZmF1bHRQcm9qZWN0cyk7XHJcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQodXNlclByb2plY3RzKTtcclxuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVQcm9qZWN0TW9kYWwoZWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtbW9kYWwnKTtcclxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcclxuICAgICAgICBvdmVybGF5LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1vdmVybGF5Jyk7XHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1mb3JtJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRm9ybSBWYXJpYWJsZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgICBjb25zdCBpbnB1dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIE5ldyBQcm9qZWN0JztcclxuICAgICAgICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtY2xvc2UnKTtcclxuICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idG4nKVxyXG4gICAgICAgIGNsb3NlQnRuLnRleHRDb250ZW50ID0gJ1xceEQ3JztcclxuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJyMnKTtcclxuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcclxuICAgICAgICBcclxuICAgICAgICBpbnB1dEJveC5jbGFzc0xpc3QuYWRkKCdpbnB1dCcpO1xyXG4gICAgICAgIGlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgaW5wdXQubmFtZSA9ICduYW1lJztcclxuICAgICAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICdOYW1lJztcclxuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcclxuICAgICAgICBpbnB1dEJveC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcblxyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRCb3gpO1xyXG5cclxuICAgICAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gICAgICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3Qtc3VibWl0Jyk7XHJcbiAgICAgICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idG4nKTtcclxuICAgICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnQWRkJztcclxuXHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XHJcblxyXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKG92ZXJsYXkpO1xyXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xyXG5cclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdG9nZ2xlUHJvamVjdE1vZGFsICgpIHtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1tb2RhbCcpO1xyXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVQcm9qZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJQcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLXByb2plY3RzJyk7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJyk7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gbmV3IEltYWdlKClcclxuXHJcbiAgICAgICAgcHJvamVjdC5jbGFzc05hbWUgPSAndXNlci1wcm9qZWN0IHByb2plY3QnO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IHByb2plY3RJY29uO1xyXG4gICAgICAgIGltYWdlLmFsdCA9ICdQcm9qZWN0IEljb24nO1xyXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZS52YWx1ZTtcclxuICAgICAgICBkZWxldGVCdG4uc3JjID0gZGVsZXRlSWNvbjtcclxuICAgICAgICBkZWxldGVCdG4uYWx0ID0gJ0RlbGV0ZSBJY29uJztcclxuICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XHJcblxyXG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgICAgIHByb2plY3QuYXBwZW5kQ2hpbGQobmFtZSk7XHJcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG5cclxuICAgICAgICB1c2VyUHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdCk7XHJcbiAgICAgICAgcHJvamVjdE5hbWUudmFsdWUgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlU3RvcmFnZVByb2plY3Qob2JqZWN0KSB7XHJcbiAgICAgICAgY29uc3QgdXNlclByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItcHJvamVjdHMnKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcclxuICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBuZXcgSW1hZ2UoKVxyXG5cclxuICAgICAgICBwcm9qZWN0LmNsYXNzTmFtZSA9ICd1c2VyLXByb2plY3QgcHJvamVjdCc7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gcHJvamVjdEljb247XHJcbiAgICAgICAgaW1hZ2UuYWx0ID0gJ1Byb2plY3QgSWNvbic7XHJcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IG9iamVjdC5uYW1lO1xyXG4gICAgICAgIGRlbGV0ZUJ0bi5zcmMgPSBkZWxldGVJY29uO1xyXG4gICAgICAgIGRlbGV0ZUJ0bi5hbHQgPSAnRGVsZXRlIEljb24nO1xyXG4gICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcclxuXHJcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICAgICAgcHJvamVjdC5hcHBlbmRDaGlsZChuYW1lKTtcclxuICAgICAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcblxyXG4gICAgICAgIHVzZXJQcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0KTtcclxuICAgICAgICBwcm9qZWN0TmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVUYXNrTW9kYWwoZWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stbW9kYWwnKTtcclxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKTtcclxuICAgICAgICBvdmVybGF5LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1vdmVybGF5Jyk7XHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1mb3JtJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRm9ybSBWYXJpYWJsZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuXHJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIE5ldyBQcm9qZWN0JztcclxuICAgICAgICBjbG9zZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stY2xvc2UnKTtcclxuICAgICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idG4nKTtcclxuICAgICAgICBjbG9zZUJ0bi50ZXh0Q29udGVudCA9ICdcXHhENyc7XHJcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcjJyk7XHJcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stZm9ybScpO1xyXG5cclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS1JbnB1dCBWYXJpYWJsZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgICAgIGNvbnN0IGxvd09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IG1lZGl1bU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IGhpZ2hPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBcclxuICAgICAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgdGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcclxuICAgICAgICB0aXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ1RpdGxlJztcclxuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xyXG5cclxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnJvd3MgPSA1O1xyXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuY29scyA9IDUwO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9ICdkZXNjcmlwdGlvbic7XHJcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5wbGFjZWhvbGRlciA9ICdEZXNjcmlwdGlvbic7XHJcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcclxuXHJcbiAgICAgICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RhdGUnKTtcclxuICAgICAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcclxuXHJcbiAgICAgICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XHJcbiAgICAgICAgZGF0ZUlucHV0Lm5hbWUgPSAnZGF0ZSc7XHJcbiAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZScpO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcclxuXHJcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xyXG4gICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XHJcblxyXG4gICAgICAgIHByaW9yaXR5SW5wdXQubmFtZSA9ICdwcmlvcml0eSdcclxuICAgICAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcclxuICAgICAgICBsb3dPcHRpb24udmFsdWUgPSAnTG93JztcclxuICAgICAgICBsb3dPcHRpb24udGV4dENvbnRlbnQgPSAnTG93JztcclxuICAgICAgICBtZWRpdW1PcHRpb24udmFsdWUgPSAnTWVkaXVtJztcclxuICAgICAgICBtZWRpdW1PcHRpb24udGV4dENvbnRlbnQgPSAnTWVkaXVtJztcclxuICAgICAgICBoaWdoT3B0aW9uLnZhbHVlID0gJ0hpZ2gnO1xyXG4gICAgICAgIGhpZ2hPcHRpb24udGV4dENvbnRlbnQgPSAnSGlnaCc7XHJcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChsb3dPcHRpb24pO1xyXG4gICAgICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQobWVkaXVtT3B0aW9uKTtcclxuICAgICAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGhpZ2hPcHRpb24pO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XHJcblxyXG4gICAgICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1zdWJtaXQnKTtcclxuICAgICAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWJ0bicpO1xyXG4gICAgICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xyXG5cclxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcclxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcclxuXHJcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XHJcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0b2dnbGVUYXNrTW9kYWwgKCkge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLW1vZGFsJyk7XHJcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZVRhc2tCdXR0b24oKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtY29udGVudCcpO1xyXG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICBhZGRUYXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkLXRhc2snKTtcclxuICAgICAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJysgQWRkIFRhc2snO1xyXG5cclxuICAgICAgICB0YXNrcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tzJyk7XHJcblxyXG4gICAgICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xyXG4gICAgICAgIHByb2plY3RDb250ZW50LmFwcGVuZENoaWxkKHRhc2tzKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlVGFzayh0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MnKTtcclxuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVRvcCBCYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGNvbnN0IGljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgZWRpdCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gbmV3IEltYWdlKClcclxuXHJcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcclxuICAgICAgICBlZGl0LnNyYyA9IGVkaXRJY29uO1xyXG4gICAgICAgIGVkaXQuYWx0ID0gJ0VkaXQgSWNvbic7XHJcbiAgICAgICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XHJcblxyXG4gICAgICAgIGNvbXBsZXRlLnNyYyA9IGNvbXBsZXRlSWNvbjtcclxuICAgICAgICBjb21wbGV0ZS5hbHQgPSAnQ29tcGxldGUgSWNvbic7XHJcbiAgICAgICAgY29tcGxldGUuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcclxuXHJcbiAgICAgICAgZGVsZXRlQnRuLnNyYyA9IGRlbGV0ZUljb247XHJcbiAgICAgICAgZGVsZXRlQnRuLmFsdCA9ICdEZWxldGUgSWNvbic7XHJcbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVsZXRlJyk7XHJcblxyXG4gICAgICAgIGljb25zLmNsYXNzTGlzdC5hZGQoJ3Rhc2staWNvbnMnKTtcclxuICAgICAgICBpY29ucy5hcHBlbmRDaGlsZChlZGl0KTtcclxuICAgICAgICBpY29ucy5hcHBlbmRDaGlsZChjb21wbGV0ZSk7XHJcbiAgICAgICAgaWNvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcclxuXHJcbiAgICAgICAgdG9wLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdG9wLWJhcicpO1xyXG4gICAgICAgIHRvcC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gICAgICAgIHRvcC5hcHBlbmRDaGlsZChpY29ucyk7XHJcblxyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUJvdHRvbS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG4gICAgICAgIGNvbnN0IGRhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGRhdGVUZXh0LmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcclxuICAgICAgICBkYXRlVGV4dC50ZXh0Q29udGVudCA9ICdEdWU6ICcgKyBkYXRlO1xyXG5cclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS1UYXNrIEJveC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG4gICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG5cclxuICAgICAgICBpZiAoY29tcGxldGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQocHJpb3JpdHkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZCgnY29tcGxldGUtdGFzaycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZCh0b3ApO1xyXG4gICAgICAgIHRhc2suYXBwZW5kQ2hpbGQoZGF0ZVRleHQpO1xyXG5cclxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2spO1xyXG5cclxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Gb3JtIFZhcmlhYmxlcy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG4gICAgICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKTtcclxuICAgICAgICBjb25zdCBmb3JtUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKTtcclxuXHJcbiAgICAgICAgZm9ybVRpdGxlLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZm9ybURlc2NyaXB0aW9uLnZhbHVlID0gJyc7XHJcbiAgICAgICAgZm9ybURhdGUudmFsdWUgPSAnJztcclxuICAgICAgICBmb3JtUHJpb3JpdHkudmFsdWUgPSAnTG93JztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlU3RyaXBwZWRUYXNrKHRpdGxlLCBkYXRlLCBwcmlvcml0eSwgY29tcGxldGVkKSB7XHJcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcycpO1xyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tVG9wIEJhci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcblxyXG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XHJcblxyXG4gICAgICAgIHRvcC5jbGFzc0xpc3QuYWRkKCd0YXNrLXRvcC1iYXInKTtcclxuICAgICAgICB0b3AuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcclxuXHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQm90dG9tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcbiAgICAgICAgY29uc3QgZGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgZGF0ZVRleHQuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xyXG4gICAgICAgIGRhdGVUZXh0LnRleHRDb250ZW50ID0gJ0R1ZTogJyArIGRhdGU7XHJcblxyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVRhc2sgQm94LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcbiAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcblxyXG4gICAgICAgIGlmIChjb21wbGV0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZChwcmlvcml0eSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZS10YXNrJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRvcCk7XHJcbiAgICAgICAgdGFzay5hcHBlbmRDaGlsZChkYXRlVGV4dCk7XHJcblxyXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlbW92ZVRhc2tzKCkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MnKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRhc2tDb250YWluZXIuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tDb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVFZGl0TW9kYWwoZWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnZWRpdC1tb2RhbCcpO1xyXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xyXG4gICAgICAgIG92ZXJsYXkuc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LW92ZXJsYXknKTtcclxuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2VkaXQtZm9ybScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUZvcm0gVmFyaWFibGVzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcblxyXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XHJcbiAgICAgICAgY2xvc2VCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LWNsb3NlJyk7XHJcbiAgICAgICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZCgnY2xvc2UtYnRuJyk7XHJcbiAgICAgICAgY2xvc2VCdG4udGV4dENvbnRlbnQgPSAnXFx4RDcnO1xyXG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnIycpO1xyXG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LWZvcm0nKTtcclxuXHJcbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tSW5wdXQgVmFyaWFibGVzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgICBjb25zdCBsb3dPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBjb25zdCBtZWRpdW1PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICBjb25zdCBoaWdoT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XHJcbiAgICAgICAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9ICdUaXRsZSc7XHJcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tUaXRsZScpO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XHJcblxyXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQucm93cyA9IDU7XHJcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5jb2xzID0gNTA7XHJcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uJztcclxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnBsYWNlaG9sZGVyID0gJ0Rlc2NyaXB0aW9uJztcclxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza0Rlc2NyaXB0aW9uJyk7XHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcclxuXHJcbiAgICAgICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2RhdGUnKTtcclxuICAgICAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcclxuXHJcbiAgICAgICAgZGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XHJcbiAgICAgICAgZGF0ZUlucHV0Lm5hbWUgPSAnZGF0ZSc7XHJcbiAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza0RhdGUnKTtcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcblxyXG4gICAgICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcclxuICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xyXG5cclxuICAgICAgICBwcmlvcml0eUlucHV0Lm5hbWUgPSAncHJpb3JpdHknXHJcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tQcmlvcml0eScpO1xyXG4gICAgICAgIGxvd09wdGlvbi52YWx1ZSA9ICdMb3cnO1xyXG4gICAgICAgIGxvd09wdGlvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xyXG4gICAgICAgIG1lZGl1bU9wdGlvbi52YWx1ZSA9ICdNZWRpdW0nO1xyXG4gICAgICAgIG1lZGl1bU9wdGlvbi50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xyXG4gICAgICAgIGhpZ2hPcHRpb24udmFsdWUgPSAnSGlnaCc7XHJcbiAgICAgICAgaGlnaE9wdGlvbi50ZXh0Q29udGVudCA9ICdIaWdoJztcclxuICAgICAgICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKGxvd09wdGlvbik7XHJcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChtZWRpdW1PcHRpb24pO1xyXG4gICAgICAgIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoaGlnaE9wdGlvbik7XHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcclxuXHJcbiAgICAgICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICAgICAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0LXN1Ym1pdCcpO1xyXG4gICAgICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtYnRuJyk7XHJcbiAgICAgICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XHJcblxyXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xyXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xyXG5cclxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChvdmVybGF5KTtcclxuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRvZ2dsZUVkaXRNb2RhbCAoKSB7XHJcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1tb2RhbCcpO1xyXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnVG9kYXknLCAwKSk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdUaGlzIFdlZWsnLCAxKSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gMjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2V0Q3VycmVudFByb2plY3QoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ2V0Q3VycmVudFByb2plY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2V0UHJvamVjdHMocHJvamVjdHMpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdldFByb2plY3RzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFByb2plY3QocHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVQcm9qZWN0KGluZGV4KSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMucHJvamVjdHNbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3QoaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1tpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUb2RheVByb2plY3QoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0c1swXS50YXNrcyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0ID09PSBudWxsIHx8IHByb2plY3QuZ2V0TmFtZSA9PT0gJ1RvZGF5JyB8fCBwcm9qZWN0LmdldE5hbWUgPT0gJ1RoaXMgV2VlaycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrcyA9IHByb2plY3QuZ2V0VGFza3NUb2RheSgpO1xyXG5cclxuICAgICAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdHNbMF0uYWRkVGFzayh0YXNrKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVRoaXNXZWVrUHJvamVjdCgpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzWzFdLnRhc2tzID0gW107XHJcblxyXG4gICAgICAgIHRoaXMucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICAgICAgaWYgKHByb2plY3QgPT09IG51bGwgfHwgcHJvamVjdC5nZXROYW1lID09PSAnVG9kYXknIHx8IHByb2plY3QuZ2V0TmFtZSA9PSAnVGhpcyBXZWVrJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gcHJvamVjdC5nZXRUYXNrc1RoaXNXZWVrKCk7XHJcblxyXG4gICAgICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0c1sxXS5hZGRUYXNrKHRhc2spO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyB0b0RhdGUsIGlzVG9kYXksIGlzVGhpc1dlZWssIHN1YkRheXMgfSBmcm9tICdkYXRlLWZucyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGlkKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdldE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2V0VGFza3ModGFza3MpIHtcclxuICAgICAgICB0aGlzLnRhc2tzID0gdGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdldFRhc2tzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBnZXRJRCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ2V0Q3VycmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzZXRDdXJyZW50KGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFzayh0YXNrKSB7XHJcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRhc2soaW5kZXgpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy50YXNrc1tpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFzayhpbmRleCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3MubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc2tzVG9kYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmlsdGVyKHRhc2sgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFzayA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0YXNrLmdldERhdGVGb3JtYXR0ZWQoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpc1RvZGF5KHRvRGF0ZShkYXRlKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYXNrc1RoaXNXZWVrKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbHRlcih0YXNrID0+IHtcclxuICAgICAgICAgICAgaWYgKHRhc2sgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGFzay5nZXREYXRlRm9ybWF0dGVkKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gaXNUaGlzV2Vlayh0b0RhdGUoZGF0ZSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4vbGlzdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XHJcbiAgICBzdGF0aWMgc2F2ZURhdGEoZGF0YSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUb0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0TGlzdCgpIHtcclxuICAgICAgICBjb25zdCBUb0RvTGlzdCA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAgICAgIG5ldyBMaXN0KCksXHJcbiAgICAgICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1RvRG9MaXN0JykpXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IFRvRG9MaXN0LmdldFByb2plY3RzO1xyXG5cclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJvamVjdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcm9qZWN0c1twcm9qZWN0LmlkXSA9IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdHNbcHJvamVjdC5pZF0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJvamVjdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrcyA9IHByb2plY3QuZ2V0VGFza3M7XHJcblxyXG4gICAgICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhc2sgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGFza3NbdGFzay5pZF0gPSBPYmplY3QuYXNzaWduKG5ldyBUYXNrKCksIHRhc2tzW3Rhc2suaWRdKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgcHJvamVjdC5zZXRUYXNrcyA9IHRhc2tzO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBUb0RvTGlzdC5zZXRQcm9qZWN0cyA9IHByb2plY3RzO1xyXG5cclxuICAgICAgICByZXR1cm4gVG9Eb0xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnNvbGVMb2coKSB7XHJcbiAgICAgICAgY29uc3QgVG9Eb0xpc3QgPSBTdG9yYWdlLmdldExpc3QoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhUb0RvTGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNsZWFyU3RvcmFnZSgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgaWQpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBnZXRUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2V0VGl0bGUodGl0bGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdldERlc2NyaXB0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ2V0RGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzZXREYXRlKGRhdGUpIHtcclxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBnZXRQcmlvcml0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc2V0UHJpb3JpdHkocHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdldENvbXBsZXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBnZXRJRCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICBjb21wbGV0ZVRhc2soKSB7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHVuZG9Db21wbGV0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0ZUZvcm1hdHRlZCgpIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gdGhpcy5kYXRlLnNwbGl0KCctJyk7XHJcbiAgICAgICAgY29uc3QgZGF5ID0gZGF0ZVsyXTtcclxuICAgICAgICBjb25zdCBtb250aCA9IGRhdGVbMV07XHJcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGVbMF07XHJcbiAgICAgICAgcmV0dXJuIGAke21vbnRofS8ke2RheX0vJHt5ZWFyfWA7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgVUkgZnJvbSAnLi9tb2R1bGVzL1VJJztcclxuaW1wb3J0IERPTSBmcm9tICcuL21vZHVsZXMvZWxlbWVudHMnO1xyXG5cclxuRE9NLmxvYWRIb21lUGFnZSgpO1xyXG5VSS5sb2FkVUkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=