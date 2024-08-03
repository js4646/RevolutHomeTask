/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@revolut/checkout/esm/checks.js":
/*!******************************************************!*\
  !*** ./node_modules/@revolut/checkout/esm/checks.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isRevolutCheckoutError: () => (/* binding */ isRevolutCheckoutError),
/* harmony export */   isValidLocale: () => (/* binding */ isValidLocale),
/* harmony export */   isValidationError: () => (/* binding */ isValidationError)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@revolut/checkout/esm/constants.js");

function isValidationError(error) {
    return error != null && error.name === 'Validation';
}
function isRevolutCheckoutError(error) {
    return error != null && error.name === 'RevolutCheckout';
}
function isValidLocale(locale) {
    return locale && _constants__WEBPACK_IMPORTED_MODULE_0__.LOCALES.some(function (value) { return value === locale; });
}


/***/ }),

/***/ "./node_modules/@revolut/checkout/esm/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/@revolut/checkout/esm/constants.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCALES: () => (/* binding */ LOCALES),
/* harmony export */   MODE: () => (/* binding */ MODE),
/* harmony export */   REVOLUT_PAY_FAILURE_REDIRECT_URL_PARAMETER: () => (/* binding */ REVOLUT_PAY_FAILURE_REDIRECT_URL_PARAMETER),
/* harmony export */   REVOLUT_PAY_ORDER_ID_URL_PARAMETER: () => (/* binding */ REVOLUT_PAY_ORDER_ID_URL_PARAMETER),
/* harmony export */   REVOLUT_PAY_SUCCESS_REDIRECT_URL_PARAMETER: () => (/* binding */ REVOLUT_PAY_SUCCESS_REDIRECT_URL_PARAMETER),
/* harmony export */   URLS: () => (/* binding */ URLS)
/* harmony export */ });
var _a;
var LOCALES = [
    'en',
    'en-US',
    'nl',
    'fr',
    'de',
    'cs',
    'it',
    'lt',
    'pl',
    'pt',
    'es',
    'hu',
    'sk',
    'ja',
    'sv',
    'bg',
    'ro',
    'el',
    'hr',
];
var MODE = {
    PRODUCTION: 'prod',
    DEVELOPMENT: 'dev',
    SANDBOX: 'sandbox',
};
var URLS = (_a = {},
    _a[MODE.SANDBOX] = {
        embed: 'https://sandbox-merchant.revolut.com/embed.js',
        version: 'https://sandbox-merchant.revolut.com/version.js',
        upsell: 'https://sandbox-merchant.revolut.com/upsell/embed.js',
    },
    _a[MODE.PRODUCTION] = {
        embed: 'https://merchant.revolut.com/embed.js',
        version: 'https://merchant.revolut.com/version.js',
        upsell: 'https://merchant.revolut.com/upsell/embed.js',
    },
    _a[MODE.DEVELOPMENT] = {
        embed: 'https://merchant.revolut.codes/embed.js',
        version: 'https://merchant.revolut.codes/version.js',
        upsell: 'https://merchant.revolut.codes/upsell/embed.js',
    },
    _a);
var REVOLUT_PAY_ORDER_ID_URL_PARAMETER = '_rp_oid';
var REVOLUT_PAY_SUCCESS_REDIRECT_URL_PARAMETER = '_rp_s';
var REVOLUT_PAY_FAILURE_REDIRECT_URL_PARAMETER = '_rp_fr';


/***/ }),

/***/ "./node_modules/@revolut/checkout/esm/helpers.js":
/*!*******************************************************!*\
  !*** ./node_modules/@revolut/checkout/esm/helpers.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRevolutPayFailureURLParam: () => (/* binding */ getRevolutPayFailureURLParam),
/* harmony export */   getRevolutPayOrderIdURLParam: () => (/* binding */ getRevolutPayOrderIdURLParam),
/* harmony export */   getRevolutPaySuccessURLParam: () => (/* binding */ getRevolutPaySuccessURLParam)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@revolut/checkout/esm/constants.js");

var getSearchParamsByName = function (name) {
    return new URLSearchParams(window.location.search).get(name);
};
/**
 * Retrieve the revolut pay order ID URL parameter upon redirect to your merchant site
 */
var getRevolutPayOrderIdURLParam = function () {
    return getSearchParamsByName(_constants__WEBPACK_IMPORTED_MODULE_0__.REVOLUT_PAY_ORDER_ID_URL_PARAMETER);
};
/**
 * Retrieve the revolut pay success URL parameter upon redirect to your merchant site
 */
var getRevolutPaySuccessURLParam = function () {
    return getSearchParamsByName(_constants__WEBPACK_IMPORTED_MODULE_0__.REVOLUT_PAY_SUCCESS_REDIRECT_URL_PARAMETER);
};
/**
 * Retrieve the revolut pay failure URL parameter upon redirect to your merchant site
 */
var getRevolutPayFailureURLParam = function () {
    return getSearchParamsByName(_constants__WEBPACK_IMPORTED_MODULE_0__.REVOLUT_PAY_FAILURE_REDIRECT_URL_PARAMETER);
};


/***/ }),

/***/ "./node_modules/@revolut/checkout/esm/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@revolut/checkout/esm/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _loader__WEBPACK_IMPORTED_MODULE_0__.RevolutCheckoutLoader),
/* harmony export */   getRevolutPayFailureURLParam: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_2__.getRevolutPayFailureURLParam),
/* harmony export */   getRevolutPayOrderIdURLParam: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_2__.getRevolutPayOrderIdURLParam),
/* harmony export */   getRevolutPaySuccessURLParam: () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_2__.getRevolutPaySuccessURLParam),
/* harmony export */   isRevolutCheckoutError: () => (/* reexport safe */ _checks__WEBPACK_IMPORTED_MODULE_1__.isRevolutCheckoutError),
/* harmony export */   isValidLocale: () => (/* reexport safe */ _checks__WEBPACK_IMPORTED_MODULE_1__.isValidLocale),
/* harmony export */   isValidationError: () => (/* reexport safe */ _checks__WEBPACK_IMPORTED_MODULE_1__.isValidationError)
/* harmony export */ });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ "./node_modules/@revolut/checkout/esm/loader.js");
/* harmony import */ var _checks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checks */ "./node_modules/@revolut/checkout/esm/checks.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./node_modules/@revolut/checkout/esm/helpers.js");





/***/ }),

/***/ "./node_modules/@revolut/checkout/esm/loader.js":
/*!******************************************************!*\
  !*** ./node_modules/@revolut/checkout/esm/loader.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RevolutCheckoutLoader: () => (/* binding */ RevolutCheckoutLoader)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@revolut/checkout/esm/constants.js");
/* harmony import */ var _paymentsLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paymentsLoader */ "./node_modules/@revolut/checkout/esm/paymentsLoader.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@revolut/checkout/esm/utils.js");
/* harmony import */ var _upsellLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upsellLoader */ "./node_modules/@revolut/checkout/esm/upsellLoader.js");
/* harmony import */ var _versionLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./versionLoader */ "./node_modules/@revolut/checkout/esm/versionLoader.js");





var loaded = null;
/**
 * Load [`RevolutCheckout.js`](https://developer.revolut.com/docs/revolut-checkout-js/#revolutcheckout)
 * and create [`Instance`](https://developer.revolut.com/docs/revolut-checkout-js/#instance) for the order `token`.
 *
 * @param token `public_id`  from [create payment order](https://developer.revolut.com/api-reference/merchant/#operation/createOrder) API request
 * @param mode [API](https://developer.revolut.com/docs/revolut-checkout-js/#revolutcheckout-parameters) environment, defaults to `'prod'`
 *
 * @see [`RevolutCheckout.js` reference](https://developer.revolut.com/docs/revolut-checkout-js)
 *
 * @example
 * ```js
 * RevolutCheckout('TOKEN_XXX', 'prod').then(function(instance) {
 *   // Work with instance
 * });
 * ```
 */
function RevolutCheckoutLoader(token, mode) {
    if (mode === void 0) { mode = RevolutCheckoutLoader.mode; }
    if (loaded) {
        return Promise.resolve(loaded(token));
    }
    return (0,_versionLoader__WEBPACK_IMPORTED_MODULE_4__.RevolutPaymentsVersionLoader)(mode).then(function (version) {
        return loadRevolutCheckout(version, token, mode);
    });
}
function loadRevolutCheckout(version, token, mode) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.loadModule)({
        src: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getVersionedUrl)(_constants__WEBPACK_IMPORTED_MODULE_0__.URLS[mode].embed, version),
        id: 'revolut-checkout',
        name: 'RevolutCheckout',
    }).then(function (scriptElement) {
        if (typeof RevolutCheckout === 'function') {
            loaded = RevolutCheckout;
            delete window.RevolutCheckout;
            return loaded(token);
        }
        else {
            document.head.removeChild(scriptElement);
            throw new Error("'RevolutCheckout' failed to load: RevolutCheckout is not a function");
        }
    });
}
RevolutCheckoutLoader.mode = _constants__WEBPACK_IMPORTED_MODULE_0__.MODE.PRODUCTION;
RevolutCheckoutLoader.payments = function (_a) {
    var locale = _a.locale, publicToken = _a.publicToken, _b = _a.mode, mode = _b === void 0 ? RevolutCheckoutLoader.mode : _b;
    return (0,_paymentsLoader__WEBPACK_IMPORTED_MODULE_1__.RevolutPaymentsLoader)(publicToken, mode, locale);
};
RevolutCheckoutLoader.upsell = function (_a) {
    var locale = _a.locale, publicToken = _a.publicToken, _b = _a.mode, mode = _b === void 0 ? RevolutCheckoutLoader.mode : _b;
    return (0,_upsellLoader__WEBPACK_IMPORTED_MODULE_3__.RevolutUpsellLoader)(publicToken, mode, locale);
};


/***/ }),

/***/ "./node_modules/@revolut/checkout/esm/paymentsLoader.js":
/*!**************************************************************!*\
  !*** ./node_modules/@revolut/checkout/esm/paymentsLoader.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RevolutPaymentsLoader: () => (/* binding */ RevolutPaymentsLoader)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@revolut/checkout/esm/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@revolut/checkout/esm/utils.js");
/* harmony import */ var _versionLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./versionLoader */ "./node_modules/@revolut/checkout/esm/versionLoader.js");



var loadedPaymentInstance = null;
function RevolutPaymentsLoader(token, mode, locale) {
    if (mode === void 0) { mode = RevolutPaymentsLoader.mode; }
    if (loadedPaymentInstance) {
        var instance = loadedPaymentInstance({ publicToken: token, locale: locale });
        return Promise.resolve(instance);
    }
    return (0,_versionLoader__WEBPACK_IMPORTED_MODULE_2__.RevolutPaymentsVersionLoader)(mode).then(function (version) {
        return loadRevolutPayments(version, token, mode, locale);
    });
}
function loadRevolutPayments(version, token, mode, locale) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.loadModule)({
        src: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getVersionedUrl)(_constants__WEBPACK_IMPORTED_MODULE_0__.URLS[mode].embed, version),
        id: 'revolut-payments',
        name: 'RevolutPayments',
    }).then(function (scriptElement) {
        if (typeof RevolutCheckout === 'function') {
            loadedPaymentInstance = RevolutCheckout.payments;
            delete window.RevolutCheckout;
            return loadedPaymentInstance({ publicToken: token, locale: locale });
        }
        else {
            document.head.removeChild(scriptElement);
            throw new Error("'RevolutPayments' failed to load: RevolutCheckout is not a function");
        }
    });
}
RevolutPaymentsLoader.mode = _constants__WEBPACK_IMPORTED_MODULE_0__.MODE.PRODUCTION;


/***/ }),

/***/ "./node_modules/@revolut/checkout/esm/upsellLoader.js":
/*!************************************************************!*\
  !*** ./node_modules/@revolut/checkout/esm/upsellLoader.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RevolutUpsellLoader: () => (/* binding */ RevolutUpsellLoader)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@revolut/checkout/esm/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@revolut/checkout/esm/utils.js");
/* harmony import */ var _versionLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./versionLoader */ "./node_modules/@revolut/checkout/esm/versionLoader.js");



var loadedUpsellInstance = null;
function RevolutUpsellLoader(token, mode, locale) {
    if (mode === void 0) { mode = RevolutUpsellLoader.mode; }
    if (loadedUpsellInstance) {
        var instance = loadedUpsellInstance({ publicToken: token, locale: locale });
        return Promise.resolve(instance);
    }
    return (0,_versionLoader__WEBPACK_IMPORTED_MODULE_2__.RevolutPaymentsVersionLoader)(mode).then(function (version) {
        return loadRevolutUpsell(version, token, mode, locale);
    });
}
function loadRevolutUpsell(version, token, mode, locale) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.loadModule)({
        src: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getVersionedUrl)(_constants__WEBPACK_IMPORTED_MODULE_0__.URLS[mode].upsell, version),
        id: 'revolut-upsell',
        name: 'RevolutUpsell',
    }).then(function (scriptElement) {
        if (typeof RevolutUpsell === 'function') {
            loadedUpsellInstance = RevolutUpsell;
            delete window.RevolutUpsell;
            return loadedUpsellInstance({ publicToken: token, locale: locale });
        }
        else {
            document.head.removeChild(scriptElement);
            throw new Error("'RevolutUpsell' failed to load: RevolutUpsell is not a function");
        }
    });
}
RevolutUpsellLoader.mode = _constants__WEBPACK_IMPORTED_MODULE_0__.MODE.PRODUCTION;


/***/ }),

/***/ "./node_modules/@revolut/checkout/esm/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/@revolut/checkout/esm/utils.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getVersionedUrl: () => (/* binding */ getVersionedUrl),
/* harmony export */   loadModule: () => (/* binding */ loadModule)
/* harmony export */ });
function loadModule(_a) {
    var src = _a.src, id = _a.id, name = _a.name;
    var script = document.createElement('script');
    script.id = id;
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
    return new Promise(function (resolve, reject) {
        function handleError(reason) {
            document.head.removeChild(script);
            reject(new Error("'" + name + "' failed to load: " + reason));
        }
        function handleLoad() {
            resolve(script);
        }
        script.onload = handleLoad;
        script.onerror = function () { return handleError('Network error encountered'); };
    });
}
function getVersionedUrl(url, version) {
    var queryParams = version ? new URLSearchParams({ version: version }).toString() : '';
    return "" + url + (queryParams ? "?" + queryParams : '');
}


/***/ }),

/***/ "./node_modules/@revolut/checkout/esm/versionLoader.js":
/*!*************************************************************!*\
  !*** ./node_modules/@revolut/checkout/esm/versionLoader.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RevolutPaymentsVersionLoader: () => (/* binding */ RevolutPaymentsVersionLoader)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@revolut/checkout/esm/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@revolut/checkout/esm/utils.js");


var loadedVersion = null;
function RevolutPaymentsVersionLoader(mode) {
    if (mode === void 0) { mode = RevolutPaymentsVersionLoader.mode; }
    if (typeof loadedVersion === 'string') {
        return Promise.resolve(loadedVersion);
    }
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.loadModule)({
        src: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getVersionedUrl)(_constants__WEBPACK_IMPORTED_MODULE_0__.URLS[mode].version, "" + Date.now()),
        id: 'revolut-pay-version',
        name: 'RevolutPayVersion',
    })
        .then(function () {
        loadedVersion =
            '__REV_PAY_VERSION__' in window &&
                typeof __REV_PAY_VERSION__ === 'string'
                ? __REV_PAY_VERSION__
                : '';
        delete window.__REV_PAY_VERSION__;
        return loadedVersion;
    })
        .catch(function () {
        loadedVersion = '';
        return loadedVersion;
    });
}
RevolutPaymentsVersionLoader.mode = _constants__WEBPACK_IMPORTED_MODULE_0__.MODE.PRODUCTION;


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
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _revolut_checkout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @revolut/checkout */ "./node_modules/@revolut/checkout/esm/index.js");



const getOrderCardField = async function () {
  // Get
  const res = await fetch("/checkout"); // res will be a promis
  console.log(res);
  const orderToken = await res.json(); // Extract order Token
  console.log(orderToken);
  const { createCardField } = await (0,_revolut_checkout__WEBPACK_IMPORTED_MODULE_0__["default"])(orderToken, "sandbox"); // creates card field

  const cardField = createCardField({
    target: document.getElementById("cart-field"),
    onSuccess() {
      // Do something to handle successful payments
      window.alert("Thank you!");
    },
    onError(error) {
      // Do something to handle payment errors
      window.alert(`Something went wrong. ${error}`);
    },
  });

  document
    .getElementById("button-submit")
    .addEventListener("click", function () {
      cardField.submit({
        "email": "financetofire@hotmail.com",
        "name": "Jordie Simons",
      });
    });
};

getOrderCardField();

console.log("2");
///////////////////////////////////////
const renderCountry = function (data, className = "") {
  console.log(data);
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.language}</p>
        <p class="country__row"><span>💰</span>${data.currencies}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error("No neighbour found!");

      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data[0], "neighbour"))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    })
    .catch((err) => alert(err));
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWM7QUFDaEUsaURBQWlELGdCQUFnQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFVBQVU7QUFDckUsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXZvbHV0aG9tZXRhc2svLi9ub2RlX21vZHVsZXMvQHJldm9sdXQvY2hlY2tvdXQvZXNtL2NoZWNrcy5qcyIsIndlYnBhY2s6Ly9yZXZvbHV0aG9tZXRhc2svLi9ub2RlX21vZHVsZXMvQHJldm9sdXQvY2hlY2tvdXQvZXNtL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9yZXZvbHV0aG9tZXRhc2svLi9ub2RlX21vZHVsZXMvQHJldm9sdXQvY2hlY2tvdXQvZXNtL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vcmV2b2x1dGhvbWV0YXNrLy4vbm9kZV9tb2R1bGVzL0ByZXZvbHV0L2NoZWNrb3V0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXZvbHV0aG9tZXRhc2svLi9ub2RlX21vZHVsZXMvQHJldm9sdXQvY2hlY2tvdXQvZXNtL2xvYWRlci5qcyIsIndlYnBhY2s6Ly9yZXZvbHV0aG9tZXRhc2svLi9ub2RlX21vZHVsZXMvQHJldm9sdXQvY2hlY2tvdXQvZXNtL3BheW1lbnRzTG9hZGVyLmpzIiwid2VicGFjazovL3Jldm9sdXRob21ldGFzay8uL25vZGVfbW9kdWxlcy9AcmV2b2x1dC9jaGVja291dC9lc20vdXBzZWxsTG9hZGVyLmpzIiwid2VicGFjazovL3Jldm9sdXRob21ldGFzay8uL25vZGVfbW9kdWxlcy9AcmV2b2x1dC9jaGVja291dC9lc20vdXRpbHMuanMiLCJ3ZWJwYWNrOi8vcmV2b2x1dGhvbWV0YXNrLy4vbm9kZV9tb2R1bGVzL0ByZXZvbHV0L2NoZWNrb3V0L2VzbS92ZXJzaW9uTG9hZGVyLmpzIiwid2VicGFjazovL3Jldm9sdXRob21ldGFzay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXZvbHV0aG9tZXRhc2svd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jldm9sdXRob21ldGFzay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jldm9sdXRob21ldGFzay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jldm9sdXRob21ldGFzay8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTE9DQUxFUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkYXRpb25FcnJvcihlcnJvcikge1xuICAgIHJldHVybiBlcnJvciAhPSBudWxsICYmIGVycm9yLm5hbWUgPT09ICdWYWxpZGF0aW9uJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Jldm9sdXRDaGVja291dEVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yICE9IG51bGwgJiYgZXJyb3IubmFtZSA9PT0gJ1Jldm9sdXRDaGVja291dCc7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZExvY2FsZShsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIExPQ0FMRVMuc29tZShmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHZhbHVlID09PSBsb2NhbGU7IH0pO1xufVxuIiwidmFyIF9hO1xuZXhwb3J0IHZhciBMT0NBTEVTID0gW1xuICAgICdlbicsXG4gICAgJ2VuLVVTJyxcbiAgICAnbmwnLFxuICAgICdmcicsXG4gICAgJ2RlJyxcbiAgICAnY3MnLFxuICAgICdpdCcsXG4gICAgJ2x0JyxcbiAgICAncGwnLFxuICAgICdwdCcsXG4gICAgJ2VzJyxcbiAgICAnaHUnLFxuICAgICdzaycsXG4gICAgJ2phJyxcbiAgICAnc3YnLFxuICAgICdiZycsXG4gICAgJ3JvJyxcbiAgICAnZWwnLFxuICAgICdocicsXG5dO1xuZXhwb3J0IHZhciBNT0RFID0ge1xuICAgIFBST0RVQ1RJT046ICdwcm9kJyxcbiAgICBERVZFTE9QTUVOVDogJ2RldicsXG4gICAgU0FOREJPWDogJ3NhbmRib3gnLFxufTtcbmV4cG9ydCB2YXIgVVJMUyA9IChfYSA9IHt9LFxuICAgIF9hW01PREUuU0FOREJPWF0gPSB7XG4gICAgICAgIGVtYmVkOiAnaHR0cHM6Ly9zYW5kYm94LW1lcmNoYW50LnJldm9sdXQuY29tL2VtYmVkLmpzJyxcbiAgICAgICAgdmVyc2lvbjogJ2h0dHBzOi8vc2FuZGJveC1tZXJjaGFudC5yZXZvbHV0LmNvbS92ZXJzaW9uLmpzJyxcbiAgICAgICAgdXBzZWxsOiAnaHR0cHM6Ly9zYW5kYm94LW1lcmNoYW50LnJldm9sdXQuY29tL3Vwc2VsbC9lbWJlZC5qcycsXG4gICAgfSxcbiAgICBfYVtNT0RFLlBST0RVQ1RJT05dID0ge1xuICAgICAgICBlbWJlZDogJ2h0dHBzOi8vbWVyY2hhbnQucmV2b2x1dC5jb20vZW1iZWQuanMnLFxuICAgICAgICB2ZXJzaW9uOiAnaHR0cHM6Ly9tZXJjaGFudC5yZXZvbHV0LmNvbS92ZXJzaW9uLmpzJyxcbiAgICAgICAgdXBzZWxsOiAnaHR0cHM6Ly9tZXJjaGFudC5yZXZvbHV0LmNvbS91cHNlbGwvZW1iZWQuanMnLFxuICAgIH0sXG4gICAgX2FbTU9ERS5ERVZFTE9QTUVOVF0gPSB7XG4gICAgICAgIGVtYmVkOiAnaHR0cHM6Ly9tZXJjaGFudC5yZXZvbHV0LmNvZGVzL2VtYmVkLmpzJyxcbiAgICAgICAgdmVyc2lvbjogJ2h0dHBzOi8vbWVyY2hhbnQucmV2b2x1dC5jb2Rlcy92ZXJzaW9uLmpzJyxcbiAgICAgICAgdXBzZWxsOiAnaHR0cHM6Ly9tZXJjaGFudC5yZXZvbHV0LmNvZGVzL3Vwc2VsbC9lbWJlZC5qcycsXG4gICAgfSxcbiAgICBfYSk7XG5leHBvcnQgdmFyIFJFVk9MVVRfUEFZX09SREVSX0lEX1VSTF9QQVJBTUVURVIgPSAnX3JwX29pZCc7XG5leHBvcnQgdmFyIFJFVk9MVVRfUEFZX1NVQ0NFU1NfUkVESVJFQ1RfVVJMX1BBUkFNRVRFUiA9ICdfcnBfcyc7XG5leHBvcnQgdmFyIFJFVk9MVVRfUEFZX0ZBSUxVUkVfUkVESVJFQ1RfVVJMX1BBUkFNRVRFUiA9ICdfcnBfZnInO1xuIiwiaW1wb3J0IHsgUkVWT0xVVF9QQVlfT1JERVJfSURfVVJMX1BBUkFNRVRFUiwgUkVWT0xVVF9QQVlfU1VDQ0VTU19SRURJUkVDVF9VUkxfUEFSQU1FVEVSLCBSRVZPTFVUX1BBWV9GQUlMVVJFX1JFRElSRUNUX1VSTF9QQVJBTUVURVIsIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIGdldFNlYXJjaFBhcmFtc0J5TmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCkuZ2V0KG5hbWUpO1xufTtcbi8qKlxuICogUmV0cmlldmUgdGhlIHJldm9sdXQgcGF5IG9yZGVyIElEIFVSTCBwYXJhbWV0ZXIgdXBvbiByZWRpcmVjdCB0byB5b3VyIG1lcmNoYW50IHNpdGVcbiAqL1xuZXhwb3J0IHZhciBnZXRSZXZvbHV0UGF5T3JkZXJJZFVSTFBhcmFtID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnZXRTZWFyY2hQYXJhbXNCeU5hbWUoUkVWT0xVVF9QQVlfT1JERVJfSURfVVJMX1BBUkFNRVRFUik7XG59O1xuLyoqXG4gKiBSZXRyaWV2ZSB0aGUgcmV2b2x1dCBwYXkgc3VjY2VzcyBVUkwgcGFyYW1ldGVyIHVwb24gcmVkaXJlY3QgdG8geW91ciBtZXJjaGFudCBzaXRlXG4gKi9cbmV4cG9ydCB2YXIgZ2V0UmV2b2x1dFBheVN1Y2Nlc3NVUkxQYXJhbSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0U2VhcmNoUGFyYW1zQnlOYW1lKFJFVk9MVVRfUEFZX1NVQ0NFU1NfUkVESVJFQ1RfVVJMX1BBUkFNRVRFUik7XG59O1xuLyoqXG4gKiBSZXRyaWV2ZSB0aGUgcmV2b2x1dCBwYXkgZmFpbHVyZSBVUkwgcGFyYW1ldGVyIHVwb24gcmVkaXJlY3QgdG8geW91ciBtZXJjaGFudCBzaXRlXG4gKi9cbmV4cG9ydCB2YXIgZ2V0UmV2b2x1dFBheUZhaWx1cmVVUkxQYXJhbSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0U2VhcmNoUGFyYW1zQnlOYW1lKFJFVk9MVVRfUEFZX0ZBSUxVUkVfUkVESVJFQ1RfVVJMX1BBUkFNRVRFUik7XG59O1xuIiwiZXhwb3J0IHsgUmV2b2x1dENoZWNrb3V0TG9hZGVyIGFzIGRlZmF1bHQgfSBmcm9tICcuL2xvYWRlcic7XG5leHBvcnQgeyBpc1Jldm9sdXRDaGVja291dEVycm9yLCBpc1ZhbGlkYXRpb25FcnJvciwgaXNWYWxpZExvY2FsZSwgfSBmcm9tICcuL2NoZWNrcyc7XG5leHBvcnQgeyBnZXRSZXZvbHV0UGF5T3JkZXJJZFVSTFBhcmFtLCBnZXRSZXZvbHV0UGF5U3VjY2Vzc1VSTFBhcmFtLCBnZXRSZXZvbHV0UGF5RmFpbHVyZVVSTFBhcmFtLCB9IGZyb20gJy4vaGVscGVycyc7XG4iLCJpbXBvcnQgeyBNT0RFLCBVUkxTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgUmV2b2x1dFBheW1lbnRzTG9hZGVyIH0gZnJvbSAnLi9wYXltZW50c0xvYWRlcic7XG5pbXBvcnQgeyBnZXRWZXJzaW9uZWRVcmwsIGxvYWRNb2R1bGUgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFJldm9sdXRVcHNlbGxMb2FkZXIgfSBmcm9tICcuL3Vwc2VsbExvYWRlcic7XG5pbXBvcnQgeyBSZXZvbHV0UGF5bWVudHNWZXJzaW9uTG9hZGVyIH0gZnJvbSAnLi92ZXJzaW9uTG9hZGVyJztcbnZhciBsb2FkZWQgPSBudWxsO1xuLyoqXG4gKiBMb2FkIFtgUmV2b2x1dENoZWNrb3V0LmpzYF0oaHR0cHM6Ly9kZXZlbG9wZXIucmV2b2x1dC5jb20vZG9jcy9yZXZvbHV0LWNoZWNrb3V0LWpzLyNyZXZvbHV0Y2hlY2tvdXQpXG4gKiBhbmQgY3JlYXRlIFtgSW5zdGFuY2VgXShodHRwczovL2RldmVsb3Blci5yZXZvbHV0LmNvbS9kb2NzL3Jldm9sdXQtY2hlY2tvdXQtanMvI2luc3RhbmNlKSBmb3IgdGhlIG9yZGVyIGB0b2tlbmAuXG4gKlxuICogQHBhcmFtIHRva2VuIGBwdWJsaWNfaWRgICBmcm9tIFtjcmVhdGUgcGF5bWVudCBvcmRlcl0oaHR0cHM6Ly9kZXZlbG9wZXIucmV2b2x1dC5jb20vYXBpLXJlZmVyZW5jZS9tZXJjaGFudC8jb3BlcmF0aW9uL2NyZWF0ZU9yZGVyKSBBUEkgcmVxdWVzdFxuICogQHBhcmFtIG1vZGUgW0FQSV0oaHR0cHM6Ly9kZXZlbG9wZXIucmV2b2x1dC5jb20vZG9jcy9yZXZvbHV0LWNoZWNrb3V0LWpzLyNyZXZvbHV0Y2hlY2tvdXQtcGFyYW1ldGVycykgZW52aXJvbm1lbnQsIGRlZmF1bHRzIHRvIGAncHJvZCdgXG4gKlxuICogQHNlZSBbYFJldm9sdXRDaGVja291dC5qc2AgcmVmZXJlbmNlXShodHRwczovL2RldmVsb3Blci5yZXZvbHV0LmNvbS9kb2NzL3Jldm9sdXQtY2hlY2tvdXQtanMpXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBSZXZvbHV0Q2hlY2tvdXQoJ1RPS0VOX1hYWCcsICdwcm9kJykudGhlbihmdW5jdGlvbihpbnN0YW5jZSkge1xuICogICAvLyBXb3JrIHdpdGggaW5zdGFuY2VcbiAqIH0pO1xuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBSZXZvbHV0Q2hlY2tvdXRMb2FkZXIodG9rZW4sIG1vZGUpIHtcbiAgICBpZiAobW9kZSA9PT0gdm9pZCAwKSB7IG1vZGUgPSBSZXZvbHV0Q2hlY2tvdXRMb2FkZXIubW9kZTsgfVxuICAgIGlmIChsb2FkZWQpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShsb2FkZWQodG9rZW4pKTtcbiAgICB9XG4gICAgcmV0dXJuIFJldm9sdXRQYXltZW50c1ZlcnNpb25Mb2FkZXIobW9kZSkudGhlbihmdW5jdGlvbiAodmVyc2lvbikge1xuICAgICAgICByZXR1cm4gbG9hZFJldm9sdXRDaGVja291dCh2ZXJzaW9uLCB0b2tlbiwgbW9kZSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBsb2FkUmV2b2x1dENoZWNrb3V0KHZlcnNpb24sIHRva2VuLCBtb2RlKSB7XG4gICAgcmV0dXJuIGxvYWRNb2R1bGUoe1xuICAgICAgICBzcmM6IGdldFZlcnNpb25lZFVybChVUkxTW21vZGVdLmVtYmVkLCB2ZXJzaW9uKSxcbiAgICAgICAgaWQ6ICdyZXZvbHV0LWNoZWNrb3V0JyxcbiAgICAgICAgbmFtZTogJ1Jldm9sdXRDaGVja291dCcsXG4gICAgfSkudGhlbihmdW5jdGlvbiAoc2NyaXB0RWxlbWVudCkge1xuICAgICAgICBpZiAodHlwZW9mIFJldm9sdXRDaGVja291dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbG9hZGVkID0gUmV2b2x1dENoZWNrb3V0O1xuICAgICAgICAgICAgZGVsZXRlIHdpbmRvdy5SZXZvbHV0Q2hlY2tvdXQ7XG4gICAgICAgICAgICByZXR1cm4gbG9hZGVkKHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoc2NyaXB0RWxlbWVudCk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCInUmV2b2x1dENoZWNrb3V0JyBmYWlsZWQgdG8gbG9hZDogUmV2b2x1dENoZWNrb3V0IGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5SZXZvbHV0Q2hlY2tvdXRMb2FkZXIubW9kZSA9IE1PREUuUFJPRFVDVElPTjtcblJldm9sdXRDaGVja291dExvYWRlci5wYXltZW50cyA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBsb2NhbGUgPSBfYS5sb2NhbGUsIHB1YmxpY1Rva2VuID0gX2EucHVibGljVG9rZW4sIF9iID0gX2EubW9kZSwgbW9kZSA9IF9iID09PSB2b2lkIDAgPyBSZXZvbHV0Q2hlY2tvdXRMb2FkZXIubW9kZSA6IF9iO1xuICAgIHJldHVybiBSZXZvbHV0UGF5bWVudHNMb2FkZXIocHVibGljVG9rZW4sIG1vZGUsIGxvY2FsZSk7XG59O1xuUmV2b2x1dENoZWNrb3V0TG9hZGVyLnVwc2VsbCA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBsb2NhbGUgPSBfYS5sb2NhbGUsIHB1YmxpY1Rva2VuID0gX2EucHVibGljVG9rZW4sIF9iID0gX2EubW9kZSwgbW9kZSA9IF9iID09PSB2b2lkIDAgPyBSZXZvbHV0Q2hlY2tvdXRMb2FkZXIubW9kZSA6IF9iO1xuICAgIHJldHVybiBSZXZvbHV0VXBzZWxsTG9hZGVyKHB1YmxpY1Rva2VuLCBtb2RlLCBsb2NhbGUpO1xufTtcbiIsImltcG9ydCB7IE1PREUsIFVSTFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRWZXJzaW9uZWRVcmwsIGxvYWRNb2R1bGUgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFJldm9sdXRQYXltZW50c1ZlcnNpb25Mb2FkZXIgfSBmcm9tICcuL3ZlcnNpb25Mb2FkZXInO1xudmFyIGxvYWRlZFBheW1lbnRJbnN0YW5jZSA9IG51bGw7XG5leHBvcnQgZnVuY3Rpb24gUmV2b2x1dFBheW1lbnRzTG9hZGVyKHRva2VuLCBtb2RlLCBsb2NhbGUpIHtcbiAgICBpZiAobW9kZSA9PT0gdm9pZCAwKSB7IG1vZGUgPSBSZXZvbHV0UGF5bWVudHNMb2FkZXIubW9kZTsgfVxuICAgIGlmIChsb2FkZWRQYXltZW50SW5zdGFuY2UpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gbG9hZGVkUGF5bWVudEluc3RhbmNlKHsgcHVibGljVG9rZW46IHRva2VuLCBsb2NhbGU6IGxvY2FsZSB9KTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpbnN0YW5jZSk7XG4gICAgfVxuICAgIHJldHVybiBSZXZvbHV0UGF5bWVudHNWZXJzaW9uTG9hZGVyKG1vZGUpLnRoZW4oZnVuY3Rpb24gKHZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIGxvYWRSZXZvbHV0UGF5bWVudHModmVyc2lvbiwgdG9rZW4sIG1vZGUsIGxvY2FsZSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBsb2FkUmV2b2x1dFBheW1lbnRzKHZlcnNpb24sIHRva2VuLCBtb2RlLCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9hZE1vZHVsZSh7XG4gICAgICAgIHNyYzogZ2V0VmVyc2lvbmVkVXJsKFVSTFNbbW9kZV0uZW1iZWQsIHZlcnNpb24pLFxuICAgICAgICBpZDogJ3Jldm9sdXQtcGF5bWVudHMnLFxuICAgICAgICBuYW1lOiAnUmV2b2x1dFBheW1lbnRzJyxcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChzY3JpcHRFbGVtZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgUmV2b2x1dENoZWNrb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsb2FkZWRQYXltZW50SW5zdGFuY2UgPSBSZXZvbHV0Q2hlY2tvdXQucGF5bWVudHM7XG4gICAgICAgICAgICBkZWxldGUgd2luZG93LlJldm9sdXRDaGVja291dDtcbiAgICAgICAgICAgIHJldHVybiBsb2FkZWRQYXltZW50SW5zdGFuY2UoeyBwdWJsaWNUb2tlbjogdG9rZW4sIGxvY2FsZTogbG9jYWxlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZChzY3JpcHRFbGVtZW50KTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIidSZXZvbHV0UGF5bWVudHMnIGZhaWxlZCB0byBsb2FkOiBSZXZvbHV0Q2hlY2tvdXQgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblJldm9sdXRQYXltZW50c0xvYWRlci5tb2RlID0gTU9ERS5QUk9EVUNUSU9OO1xuIiwiaW1wb3J0IHsgTU9ERSwgVVJMUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldFZlcnNpb25lZFVybCwgbG9hZE1vZHVsZSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgUmV2b2x1dFBheW1lbnRzVmVyc2lvbkxvYWRlciB9IGZyb20gJy4vdmVyc2lvbkxvYWRlcic7XG52YXIgbG9hZGVkVXBzZWxsSW5zdGFuY2UgPSBudWxsO1xuZXhwb3J0IGZ1bmN0aW9uIFJldm9sdXRVcHNlbGxMb2FkZXIodG9rZW4sIG1vZGUsIGxvY2FsZSkge1xuICAgIGlmIChtb2RlID09PSB2b2lkIDApIHsgbW9kZSA9IFJldm9sdXRVcHNlbGxMb2FkZXIubW9kZTsgfVxuICAgIGlmIChsb2FkZWRVcHNlbGxJbnN0YW5jZSkge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBsb2FkZWRVcHNlbGxJbnN0YW5jZSh7IHB1YmxpY1Rva2VuOiB0b2tlbiwgbG9jYWxlOiBsb2NhbGUgfSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaW5zdGFuY2UpO1xuICAgIH1cbiAgICByZXR1cm4gUmV2b2x1dFBheW1lbnRzVmVyc2lvbkxvYWRlcihtb2RlKS50aGVuKGZ1bmN0aW9uICh2ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiBsb2FkUmV2b2x1dFVwc2VsbCh2ZXJzaW9uLCB0b2tlbiwgbW9kZSwgbG9jYWxlKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGxvYWRSZXZvbHV0VXBzZWxsKHZlcnNpb24sIHRva2VuLCBtb2RlLCBsb2NhbGUpIHtcbiAgICByZXR1cm4gbG9hZE1vZHVsZSh7XG4gICAgICAgIHNyYzogZ2V0VmVyc2lvbmVkVXJsKFVSTFNbbW9kZV0udXBzZWxsLCB2ZXJzaW9uKSxcbiAgICAgICAgaWQ6ICdyZXZvbHV0LXVwc2VsbCcsXG4gICAgICAgIG5hbWU6ICdSZXZvbHV0VXBzZWxsJyxcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChzY3JpcHRFbGVtZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgUmV2b2x1dFVwc2VsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbG9hZGVkVXBzZWxsSW5zdGFuY2UgPSBSZXZvbHV0VXBzZWxsO1xuICAgICAgICAgICAgZGVsZXRlIHdpbmRvdy5SZXZvbHV0VXBzZWxsO1xuICAgICAgICAgICAgcmV0dXJuIGxvYWRlZFVwc2VsbEluc3RhbmNlKHsgcHVibGljVG9rZW46IHRva2VuLCBsb2NhbGU6IGxvY2FsZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoc2NyaXB0RWxlbWVudCk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCInUmV2b2x1dFVwc2VsbCcgZmFpbGVkIHRvIGxvYWQ6IFJldm9sdXRVcHNlbGwgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblJldm9sdXRVcHNlbGxMb2FkZXIubW9kZSA9IE1PREUuUFJPRFVDVElPTjtcbiIsImV4cG9ydCBmdW5jdGlvbiBsb2FkTW9kdWxlKF9hKSB7XG4gICAgdmFyIHNyYyA9IF9hLnNyYywgaWQgPSBfYS5pZCwgbmFtZSA9IF9hLm5hbWU7XG4gICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC5pZCA9IGlkO1xuICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlRXJyb3IocmVhc29uKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiJ1wiICsgbmFtZSArIFwiJyBmYWlsZWQgdG8gbG9hZDogXCIgKyByZWFzb24pKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgICAgICAgcmVzb2x2ZShzY3JpcHQpO1xuICAgICAgICB9XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSBoYW5kbGVMb2FkO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhhbmRsZUVycm9yKCdOZXR3b3JrIGVycm9yIGVuY291bnRlcmVkJyk7IH07XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VmVyc2lvbmVkVXJsKHVybCwgdmVyc2lvbikge1xuICAgIHZhciBxdWVyeVBhcmFtcyA9IHZlcnNpb24gPyBuZXcgVVJMU2VhcmNoUGFyYW1zKHsgdmVyc2lvbjogdmVyc2lvbiB9KS50b1N0cmluZygpIDogJyc7XG4gICAgcmV0dXJuIFwiXCIgKyB1cmwgKyAocXVlcnlQYXJhbXMgPyBcIj9cIiArIHF1ZXJ5UGFyYW1zIDogJycpO1xufVxuIiwiaW1wb3J0IHsgTU9ERSwgVVJMUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldFZlcnNpb25lZFVybCwgbG9hZE1vZHVsZSB9IGZyb20gJy4vdXRpbHMnO1xudmFyIGxvYWRlZFZlcnNpb24gPSBudWxsO1xuZXhwb3J0IGZ1bmN0aW9uIFJldm9sdXRQYXltZW50c1ZlcnNpb25Mb2FkZXIobW9kZSkge1xuICAgIGlmIChtb2RlID09PSB2b2lkIDApIHsgbW9kZSA9IFJldm9sdXRQYXltZW50c1ZlcnNpb25Mb2FkZXIubW9kZTsgfVxuICAgIGlmICh0eXBlb2YgbG9hZGVkVmVyc2lvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShsb2FkZWRWZXJzaW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvYWRNb2R1bGUoe1xuICAgICAgICBzcmM6IGdldFZlcnNpb25lZFVybChVUkxTW21vZGVdLnZlcnNpb24sIFwiXCIgKyBEYXRlLm5vdygpKSxcbiAgICAgICAgaWQ6ICdyZXZvbHV0LXBheS12ZXJzaW9uJyxcbiAgICAgICAgbmFtZTogJ1Jldm9sdXRQYXlWZXJzaW9uJyxcbiAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvYWRlZFZlcnNpb24gPVxuICAgICAgICAgICAgJ19fUkVWX1BBWV9WRVJTSU9OX18nIGluIHdpbmRvdyAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBfX1JFVl9QQVlfVkVSU0lPTl9fID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gX19SRVZfUEFZX1ZFUlNJT05fX1xuICAgICAgICAgICAgICAgIDogJyc7XG4gICAgICAgIGRlbGV0ZSB3aW5kb3cuX19SRVZfUEFZX1ZFUlNJT05fXztcbiAgICAgICAgcmV0dXJuIGxvYWRlZFZlcnNpb247XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9hZGVkVmVyc2lvbiA9ICcnO1xuICAgICAgICByZXR1cm4gbG9hZGVkVmVyc2lvbjtcbiAgICB9KTtcbn1cblJldm9sdXRQYXltZW50c1ZlcnNpb25Mb2FkZXIubW9kZSA9IE1PREUuUFJPRFVDVElPTjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbmltcG9ydCBSZXZvbHV0Q2hlY2tvdXQgZnJvbSBcIkByZXZvbHV0L2NoZWNrb3V0XCI7XHJcblxyXG5jb25zdCBnZXRPcmRlckNhcmRGaWVsZCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAvLyBHZXRcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9jaGVja291dFwiKTsgLy8gcmVzIHdpbGwgYmUgYSBwcm9taXNcclxuICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gIGNvbnN0IG9yZGVyVG9rZW4gPSBhd2FpdCByZXMuanNvbigpOyAvLyBFeHRyYWN0IG9yZGVyIFRva2VuXHJcbiAgY29uc29sZS5sb2cob3JkZXJUb2tlbik7XHJcbiAgY29uc3QgeyBjcmVhdGVDYXJkRmllbGQgfSA9IGF3YWl0IFJldm9sdXRDaGVja291dChvcmRlclRva2VuLCBcInNhbmRib3hcIik7IC8vIGNyZWF0ZXMgY2FyZCBmaWVsZFxyXG5cclxuICBjb25zdCBjYXJkRmllbGQgPSBjcmVhdGVDYXJkRmllbGQoe1xyXG4gICAgdGFyZ2V0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcnQtZmllbGRcIiksXHJcbiAgICBvblN1Y2Nlc3MoKSB7XHJcbiAgICAgIC8vIERvIHNvbWV0aGluZyB0byBoYW5kbGUgc3VjY2Vzc2Z1bCBwYXltZW50c1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJUaGFuayB5b3UhXCIpO1xyXG4gICAgfSxcclxuICAgIG9uRXJyb3IoZXJyb3IpIHtcclxuICAgICAgLy8gRG8gc29tZXRoaW5nIHRvIGhhbmRsZSBwYXltZW50IGVycm9yc1xyXG4gICAgICB3aW5kb3cuYWxlcnQoYFNvbWV0aGluZyB3ZW50IHdyb25nLiAke2Vycm9yfWApO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1zdWJtaXRcIilcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjYXJkRmllbGQuc3VibWl0KHtcclxuICAgICAgICBcImVtYWlsXCI6IFwiZmluYW5jZXRvZmlyZUBob3RtYWlsLmNvbVwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkpvcmRpZSBTaW1vbnNcIixcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmdldE9yZGVyQ2FyZEZpZWxkKCk7XHJcblxyXG5jb25zb2xlLmxvZyhcIjJcIik7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jb25zdCByZW5kZXJDb3VudHJ5ID0gZnVuY3Rpb24gKGRhdGEsIGNsYXNzTmFtZSA9IFwiXCIpIHtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBjb25zdCBodG1sID0gYFxyXG4gICAgPGFydGljbGUgY2xhc3M9XCJjb3VudHJ5ICR7Y2xhc3NOYW1lfVwiPlxyXG4gICAgICA8aW1nIGNsYXNzPVwiY291bnRyeV9faW1nXCIgc3JjPVwiJHtkYXRhLmZsYWdzLnN2Z31cIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY291bnRyeV9fZGF0YVwiPlxyXG4gICAgICAgIDxoMyBjbGFzcz1cImNvdW50cnlfX25hbWVcIj4ke2RhdGEubmFtZX08L2gzPlxyXG4gICAgICAgIDxoNCBjbGFzcz1cImNvdW50cnlfX3JlZ2lvblwiPiR7ZGF0YS5yZWdpb259PC9oND5cclxuICAgICAgICA8cCBjbGFzcz1cImNvdW50cnlfX3Jvd1wiPjxzcGFuPvCfkas8L3NwYW4+JHsoXHJcbiAgICAgICAgICArZGF0YS5wb3B1bGF0aW9uIC8gMTAwMDAwMFxyXG4gICAgICAgICkudG9GaXhlZCgxKX0gcGVvcGxlPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiY291bnRyeV9fcm93XCI+PHNwYW4+8J+Xo++4jzwvc3Bhbj4ke2RhdGEubGFuZ3VhZ2V9PC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiY291bnRyeV9fcm93XCI+PHNwYW4+8J+SsDwvc3Bhbj4ke2RhdGEuY3VycmVuY2llc308L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICAgYDtcclxuICBjb3VudHJpZXNDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGh0bWwpO1xyXG4gIGNvdW50cmllc0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMTtcclxufTtcclxuXHJcbmNvbnN0IGdldENvdW50cnlEYXRhID0gZnVuY3Rpb24gKGNvdW50cnkpIHtcclxuICAvLyBDb3VudHJ5IDFcclxuICBmZXRjaChgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92My4xL25hbWUvJHtjb3VudHJ5fWApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIHJlbmRlckNvdW50cnkoZGF0YVswXSk7XHJcbiAgICAgIGNvbnN0IG5laWdoYm91ciA9IGRhdGFbMF0uYm9yZGVyc1swXTtcclxuXHJcbiAgICAgIGlmICghbmVpZ2hib3VyKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBuZWlnaGJvdXIgZm91bmQhXCIpO1xyXG5cclxuICAgICAgLy8gQ291bnRyeSAyXHJcbiAgICAgIHJldHVybiBmZXRjaChgaHR0cHM6Ly9yZXN0Y291bnRyaWVzLmNvbS92My4xL2FscGhhLyR7bmVpZ2hib3VyfWApO1xyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHJlbmRlckNvdW50cnkoZGF0YVswXSwgXCJuZWlnaGJvdXJcIikpXHJcbiAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgIGNvdW50cmllc0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gYWxlcnQoZXJyKSk7XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==