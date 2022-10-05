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

/***/ "./js/modules/chamada.js":
/*!*******************************!*\
  !*** ./js/modules/chamada.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ chamada)\n/* harmony export */ });\nfunction chamada() {\n  const valor = document.querySelector('.valor');\n  // const tabelaJuros4x = document.querySelector('.txjuros4x');\n  const tabelaParcela4x = document.querySelector('.vlparcela4x');\n  const tabelaAcrescimo4x = document.querySelector('.acrescimo4x');\n  const tabelaTotalComAcrescimo4x = document.querySelector('.total-com-acrescimo4x');\n  // const tabelaJuros5x = document.querySelector('.txjuros5x');\n  const tabelaParcela5x = document.querySelector('.vlparcela5x');\n  const tabelaAcrescimo5x = document.querySelector('.acrescimo5x');\n  const tabelaTotalComAcrescimo5x = document.querySelector('.total-com-acrescimo5x');\n  // const tabelaJuros7x = document.querySelector('.txjuros7x');\n  const tabelaParcela7x = document.querySelector('.vlparcela7x');\n  const tabelaAcrescimo7x = document.querySelector('.acrescimo7x');\n  const tabelaTotalComAcrescimo7x = document.querySelector('.total-com-acrescimo7x');\n\n  // const tabelaJuros8x = document.querySelector('.txjuros8x');\n  const tabelaParcela8x = document.querySelector('.vlparcela8x');\n  const tabelaAcrescimo8x = document.querySelector('.acrescimo8x');\n  const tabelaTotalComAcrescimo8x = document.querySelector('.total-com-acrescimo8x');\n\n  function handleChange(e) {\n    const valorInseridoTeste = e.target.value;\n    const valorInserido = parseFloat(valorInseridoTeste.replace(',', '.'));\n\n    const txJuros4x = 0.12779;\n    const acrescimo4x = valorInserido * txJuros4x;\n    const vlParcela4x = (valorInserido + acrescimo4x) / 4;\n    const totalComAcrescimo4x = valorInserido + acrescimo4x;\n\n    const txJuros5x = 0.15455;\n    const acrescimo5x = valorInserido * txJuros5x;\n    const vlParcela5x = (valorInserido + acrescimo5x) / 5;\n    const totalComAcrescimo5x = valorInserido + acrescimo5x;\n\n    const txJuros7x = 0.39036;\n    const acrescimo7x = valorInserido * txJuros7x;\n    const vlParcela7x = (valorInserido + acrescimo7x) / 7;\n    const totalComAcrescimo7x = valorInserido + acrescimo7x;\n\n    const txJuros8x = 0.44486;\n    const acrescimo8x = valorInserido * txJuros8x;\n    const vlParcela8x = (valorInserido + acrescimo8x) / 8;\n    const totalComAcrescimo8x = valorInserido + acrescimo8x;\n\n    tabelaParcela4x.innerHTML = vlParcela4x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });\n    tabelaAcrescimo4x.innerHTML = acrescimo4x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });\n    tabelaTotalComAcrescimo4x.innerHTML = totalComAcrescimo4x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });\n\n    tabelaParcela5x.innerHTML = vlParcela5x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });\n    tabelaAcrescimo5x.innerHTML = acrescimo5x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });\n    tabelaTotalComAcrescimo5x.innerHTML = totalComAcrescimo5x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });\n\n    tabelaParcela7x.innerHTML = vlParcela7x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });\n    tabelaAcrescimo7x.innerHTML = acrescimo7x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });\n    tabelaTotalComAcrescimo7x.innerHTML = totalComAcrescimo7x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });\n\n    tabelaParcela8x.innerHTML = vlParcela8x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });\n    tabelaAcrescimo8x.innerHTML = acrescimo8x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });\n    tabelaTotalComAcrescimo8x.innerHTML = totalComAcrescimo8x.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });\n\n    if (valorInserido !== Number) {\n      const container = document.querySelectorAll('.resultado');\n\n      container.forEach((item) => {\n        item.classList.add('desativado');\n      });\n    }\n    if (valorInserido >= 0) {\n      const container = document.querySelectorAll('.resultado');\n      container.forEach((item) => {\n        item.classList.remove('desativado');\n      });\n    }\n  }\n\n  valor.addEventListener('keyup', handleChange);\n}\n\nconsole.log('teste')\n\n\n//# sourceURL=webpack://projeto-pcj/./js/modules/chamada.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_chamada_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/chamada.js */ \"./js/modules/chamada.js\");\n/* eslint-disable import/extensions */\n\n\n(0,_modules_chamada_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://projeto-pcj/./js/script.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;