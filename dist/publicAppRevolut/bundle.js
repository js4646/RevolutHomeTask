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
  const res = await fetch("/createorder"); // res will get value when promise is fullfilled
  console.log(res);
  const orderToken = await res.json(); // Extract order Token
  console.log(orderToken);
  document.getElementById(
    "order-info"
  ).innerText = `Order has been created with token: ${orderToken}`;

  const instance = await (0,_revolut_checkout__WEBPACK_IMPORTED_MODULE_0__["default"])(orderToken, "sandbox"); // creates card field

  const cardField = instance.createCardField({
    target: document.getElementById("cart-field"),
    onSuccess() {
      window.alert("Thank you for your purchase!");
    },
    onError(error) {
      window.alert(`Oeps somethin happend :(. ${error}`);
    },
  });

  console.log(cardField);

  //Add event listener to the pay button
  const temp = await document
    .getElementById("button-pay")
    .addEventListener("click", function () {
      cardField.submit({
        "email": "financetofire@hotmail.com",
        "name": "Jordie Simons",
      });
    });
};

// Button to create order
document
  .getElementById("button-create-order")
  .addEventListener("click", getOrderCardField);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQy9CO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1AscUJBQXFCLCtDQUFPLHlCQUF5QiwwQkFBMEI7QUFDL0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ08sbUJBQW1CO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ087QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q21KO0FBQzFKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsaUNBQWlDLDBFQUFrQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsaUNBQWlDLGtGQUEwQztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsaUNBQWlDLGtGQUEwQztBQUMzRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckI0RDtBQUN5QjtBQUNpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGN0U7QUFDZ0I7QUFDSDtBQUNEO0FBQ1U7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ087QUFDUCwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0RUFBNEI7QUFDdkM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFdBQVcsa0RBQVU7QUFDckIsYUFBYSx1REFBZSxDQUFDLDRDQUFJO0FBQ2pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsNkJBQTZCLDRDQUFJO0FBQ2pDO0FBQ0E7QUFDQSxXQUFXLHNFQUFxQjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxXQUFXLGtFQUFtQjtBQUM5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeER5QztBQUNhO0FBQ1M7QUFDL0Q7QUFDTztBQUNQLDJCQUEyQjtBQUMzQjtBQUNBLCtDQUErQyxvQ0FBb0M7QUFDbkY7QUFDQTtBQUNBLFdBQVcsNEVBQTRCO0FBQ3ZDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxXQUFXLGtEQUFVO0FBQ3JCLGFBQWEsdURBQWUsQ0FBQyw0Q0FBSTtBQUNqQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxvQ0FBb0M7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDZCQUE2Qiw0Q0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JRO0FBQ2E7QUFDUztBQUMvRDtBQUNPO0FBQ1AsMkJBQTJCO0FBQzNCO0FBQ0EsOENBQThDLG9DQUFvQztBQUNsRjtBQUNBO0FBQ0EsV0FBVyw0RUFBNEI7QUFDdkM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFdBQVcsa0RBQVU7QUFDckIsYUFBYSx1REFBZSxDQUFDLDRDQUFJO0FBQ2pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLG9DQUFvQztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkJBQTJCLDRDQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0J4QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxLQUFLO0FBQ0w7QUFDTztBQUNQLHNEQUFzRCxrQkFBa0I7QUFDeEU7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QnlDO0FBQ2E7QUFDdEQ7QUFDTztBQUNQLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtEQUFVO0FBQ3JCLGFBQWEsdURBQWUsQ0FBQyw0Q0FBSTtBQUNqQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esb0NBQW9DLDRDQUFJOzs7Ozs7O1VDM0J4QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ05hO0FBQ21DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQSxzREFBc0QsV0FBVztBQUNqRTtBQUNBLHlCQUF5Qiw2REFBZSx5QkFBeUI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGdEQUFnRCxNQUFNO0FBQ3RELEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4Qyx1Q0FBdUMsZUFBZTtBQUN0RDtBQUNBLG9DQUFvQyxVQUFVO0FBQzlDLHNDQUFzQyxZQUFZO0FBQ2xELGlEQUFpRDtBQUNqRDtBQUNBLHNCQUFzQjtBQUN0QixrREFBa0QsY0FBYztBQUNoRSxpREFBaUQsZ0JBQWdCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsVUFBVTtBQUNyRSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jldm9sdXRob21ldGFzay8uL25vZGVfbW9kdWxlcy9AcmV2b2x1dC9jaGVja291dC9lc20vY2hlY2tzLmpzIiwid2VicGFjazovL3Jldm9sdXRob21ldGFzay8uL25vZGVfbW9kdWxlcy9AcmV2b2x1dC9jaGVja291dC9lc20vY29uc3RhbnRzLmpzIiwid2VicGFjazovL3Jldm9sdXRob21ldGFzay8uL25vZGVfbW9kdWxlcy9AcmV2b2x1dC9jaGVja291dC9lc20vaGVscGVycy5qcyIsIndlYnBhY2s6Ly9yZXZvbHV0aG9tZXRhc2svLi9ub2RlX21vZHVsZXMvQHJldm9sdXQvY2hlY2tvdXQvZXNtL2luZGV4LmpzIiwid2VicGFjazovL3Jldm9sdXRob21ldGFzay8uL25vZGVfbW9kdWxlcy9AcmV2b2x1dC9jaGVja291dC9lc20vbG9hZGVyLmpzIiwid2VicGFjazovL3Jldm9sdXRob21ldGFzay8uL25vZGVfbW9kdWxlcy9AcmV2b2x1dC9jaGVja291dC9lc20vcGF5bWVudHNMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcmV2b2x1dGhvbWV0YXNrLy4vbm9kZV9tb2R1bGVzL0ByZXZvbHV0L2NoZWNrb3V0L2VzbS91cHNlbGxMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcmV2b2x1dGhvbWV0YXNrLy4vbm9kZV9tb2R1bGVzL0ByZXZvbHV0L2NoZWNrb3V0L2VzbS91dGlscy5qcyIsIndlYnBhY2s6Ly9yZXZvbHV0aG9tZXRhc2svLi9ub2RlX21vZHVsZXMvQHJldm9sdXQvY2hlY2tvdXQvZXNtL3ZlcnNpb25Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcmV2b2x1dGhvbWV0YXNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jldm9sdXRob21ldGFzay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmV2b2x1dGhvbWV0YXNrL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmV2b2x1dGhvbWV0YXNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmV2b2x1dGhvbWV0YXNrLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMT0NBTEVTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRhdGlvbkVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yICE9IG51bGwgJiYgZXJyb3IubmFtZSA9PT0gJ1ZhbGlkYXRpb24nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUmV2b2x1dENoZWNrb3V0RXJyb3IoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgIT0gbnVsbCAmJiBlcnJvci5uYW1lID09PSAnUmV2b2x1dENoZWNrb3V0Jztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkTG9jYWxlKGxvY2FsZSkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgTE9DQUxFUy5zb21lKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgPT09IGxvY2FsZTsgfSk7XG59XG4iLCJ2YXIgX2E7XG5leHBvcnQgdmFyIExPQ0FMRVMgPSBbXG4gICAgJ2VuJyxcbiAgICAnZW4tVVMnLFxuICAgICdubCcsXG4gICAgJ2ZyJyxcbiAgICAnZGUnLFxuICAgICdjcycsXG4gICAgJ2l0JyxcbiAgICAnbHQnLFxuICAgICdwbCcsXG4gICAgJ3B0JyxcbiAgICAnZXMnLFxuICAgICdodScsXG4gICAgJ3NrJyxcbiAgICAnamEnLFxuICAgICdzdicsXG4gICAgJ2JnJyxcbiAgICAncm8nLFxuICAgICdlbCcsXG4gICAgJ2hyJyxcbl07XG5leHBvcnQgdmFyIE1PREUgPSB7XG4gICAgUFJPRFVDVElPTjogJ3Byb2QnLFxuICAgIERFVkVMT1BNRU5UOiAnZGV2JyxcbiAgICBTQU5EQk9YOiAnc2FuZGJveCcsXG59O1xuZXhwb3J0IHZhciBVUkxTID0gKF9hID0ge30sXG4gICAgX2FbTU9ERS5TQU5EQk9YXSA9IHtcbiAgICAgICAgZW1iZWQ6ICdodHRwczovL3NhbmRib3gtbWVyY2hhbnQucmV2b2x1dC5jb20vZW1iZWQuanMnLFxuICAgICAgICB2ZXJzaW9uOiAnaHR0cHM6Ly9zYW5kYm94LW1lcmNoYW50LnJldm9sdXQuY29tL3ZlcnNpb24uanMnLFxuICAgICAgICB1cHNlbGw6ICdodHRwczovL3NhbmRib3gtbWVyY2hhbnQucmV2b2x1dC5jb20vdXBzZWxsL2VtYmVkLmpzJyxcbiAgICB9LFxuICAgIF9hW01PREUuUFJPRFVDVElPTl0gPSB7XG4gICAgICAgIGVtYmVkOiAnaHR0cHM6Ly9tZXJjaGFudC5yZXZvbHV0LmNvbS9lbWJlZC5qcycsXG4gICAgICAgIHZlcnNpb246ICdodHRwczovL21lcmNoYW50LnJldm9sdXQuY29tL3ZlcnNpb24uanMnLFxuICAgICAgICB1cHNlbGw6ICdodHRwczovL21lcmNoYW50LnJldm9sdXQuY29tL3Vwc2VsbC9lbWJlZC5qcycsXG4gICAgfSxcbiAgICBfYVtNT0RFLkRFVkVMT1BNRU5UXSA9IHtcbiAgICAgICAgZW1iZWQ6ICdodHRwczovL21lcmNoYW50LnJldm9sdXQuY29kZXMvZW1iZWQuanMnLFxuICAgICAgICB2ZXJzaW9uOiAnaHR0cHM6Ly9tZXJjaGFudC5yZXZvbHV0LmNvZGVzL3ZlcnNpb24uanMnLFxuICAgICAgICB1cHNlbGw6ICdodHRwczovL21lcmNoYW50LnJldm9sdXQuY29kZXMvdXBzZWxsL2VtYmVkLmpzJyxcbiAgICB9LFxuICAgIF9hKTtcbmV4cG9ydCB2YXIgUkVWT0xVVF9QQVlfT1JERVJfSURfVVJMX1BBUkFNRVRFUiA9ICdfcnBfb2lkJztcbmV4cG9ydCB2YXIgUkVWT0xVVF9QQVlfU1VDQ0VTU19SRURJUkVDVF9VUkxfUEFSQU1FVEVSID0gJ19ycF9zJztcbmV4cG9ydCB2YXIgUkVWT0xVVF9QQVlfRkFJTFVSRV9SRURJUkVDVF9VUkxfUEFSQU1FVEVSID0gJ19ycF9mcic7XG4iLCJpbXBvcnQgeyBSRVZPTFVUX1BBWV9PUkRFUl9JRF9VUkxfUEFSQU1FVEVSLCBSRVZPTFVUX1BBWV9TVUNDRVNTX1JFRElSRUNUX1VSTF9QQVJBTUVURVIsIFJFVk9MVVRfUEFZX0ZBSUxVUkVfUkVESVJFQ1RfVVJMX1BBUkFNRVRFUiwgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgZ2V0U2VhcmNoUGFyYW1zQnlOYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQobmFtZSk7XG59O1xuLyoqXG4gKiBSZXRyaWV2ZSB0aGUgcmV2b2x1dCBwYXkgb3JkZXIgSUQgVVJMIHBhcmFtZXRlciB1cG9uIHJlZGlyZWN0IHRvIHlvdXIgbWVyY2hhbnQgc2l0ZVxuICovXG5leHBvcnQgdmFyIGdldFJldm9sdXRQYXlPcmRlcklkVVJMUGFyYW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdldFNlYXJjaFBhcmFtc0J5TmFtZShSRVZPTFVUX1BBWV9PUkRFUl9JRF9VUkxfUEFSQU1FVEVSKTtcbn07XG4vKipcbiAqIFJldHJpZXZlIHRoZSByZXZvbHV0IHBheSBzdWNjZXNzIFVSTCBwYXJhbWV0ZXIgdXBvbiByZWRpcmVjdCB0byB5b3VyIG1lcmNoYW50IHNpdGVcbiAqL1xuZXhwb3J0IHZhciBnZXRSZXZvbHV0UGF5U3VjY2Vzc1VSTFBhcmFtID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnZXRTZWFyY2hQYXJhbXNCeU5hbWUoUkVWT0xVVF9QQVlfU1VDQ0VTU19SRURJUkVDVF9VUkxfUEFSQU1FVEVSKTtcbn07XG4vKipcbiAqIFJldHJpZXZlIHRoZSByZXZvbHV0IHBheSBmYWlsdXJlIFVSTCBwYXJhbWV0ZXIgdXBvbiByZWRpcmVjdCB0byB5b3VyIG1lcmNoYW50IHNpdGVcbiAqL1xuZXhwb3J0IHZhciBnZXRSZXZvbHV0UGF5RmFpbHVyZVVSTFBhcmFtID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnZXRTZWFyY2hQYXJhbXNCeU5hbWUoUkVWT0xVVF9QQVlfRkFJTFVSRV9SRURJUkVDVF9VUkxfUEFSQU1FVEVSKTtcbn07XG4iLCJleHBvcnQgeyBSZXZvbHV0Q2hlY2tvdXRMb2FkZXIgYXMgZGVmYXVsdCB9IGZyb20gJy4vbG9hZGVyJztcbmV4cG9ydCB7IGlzUmV2b2x1dENoZWNrb3V0RXJyb3IsIGlzVmFsaWRhdGlvbkVycm9yLCBpc1ZhbGlkTG9jYWxlLCB9IGZyb20gJy4vY2hlY2tzJztcbmV4cG9ydCB7IGdldFJldm9sdXRQYXlPcmRlcklkVVJMUGFyYW0sIGdldFJldm9sdXRQYXlTdWNjZXNzVVJMUGFyYW0sIGdldFJldm9sdXRQYXlGYWlsdXJlVVJMUGFyYW0sIH0gZnJvbSAnLi9oZWxwZXJzJztcbiIsImltcG9ydCB7IE1PREUsIFVSTFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBSZXZvbHV0UGF5bWVudHNMb2FkZXIgfSBmcm9tICcuL3BheW1lbnRzTG9hZGVyJztcbmltcG9ydCB7IGdldFZlcnNpb25lZFVybCwgbG9hZE1vZHVsZSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgUmV2b2x1dFVwc2VsbExvYWRlciB9IGZyb20gJy4vdXBzZWxsTG9hZGVyJztcbmltcG9ydCB7IFJldm9sdXRQYXltZW50c1ZlcnNpb25Mb2FkZXIgfSBmcm9tICcuL3ZlcnNpb25Mb2FkZXInO1xudmFyIGxvYWRlZCA9IG51bGw7XG4vKipcbiAqIExvYWQgW2BSZXZvbHV0Q2hlY2tvdXQuanNgXShodHRwczovL2RldmVsb3Blci5yZXZvbHV0LmNvbS9kb2NzL3Jldm9sdXQtY2hlY2tvdXQtanMvI3Jldm9sdXRjaGVja291dClcbiAqIGFuZCBjcmVhdGUgW2BJbnN0YW5jZWBdKGh0dHBzOi8vZGV2ZWxvcGVyLnJldm9sdXQuY29tL2RvY3MvcmV2b2x1dC1jaGVja291dC1qcy8jaW5zdGFuY2UpIGZvciB0aGUgb3JkZXIgYHRva2VuYC5cbiAqXG4gKiBAcGFyYW0gdG9rZW4gYHB1YmxpY19pZGAgIGZyb20gW2NyZWF0ZSBwYXltZW50IG9yZGVyXShodHRwczovL2RldmVsb3Blci5yZXZvbHV0LmNvbS9hcGktcmVmZXJlbmNlL21lcmNoYW50LyNvcGVyYXRpb24vY3JlYXRlT3JkZXIpIEFQSSByZXF1ZXN0XG4gKiBAcGFyYW0gbW9kZSBbQVBJXShodHRwczovL2RldmVsb3Blci5yZXZvbHV0LmNvbS9kb2NzL3Jldm9sdXQtY2hlY2tvdXQtanMvI3Jldm9sdXRjaGVja291dC1wYXJhbWV0ZXJzKSBlbnZpcm9ubWVudCwgZGVmYXVsdHMgdG8gYCdwcm9kJ2BcbiAqXG4gKiBAc2VlIFtgUmV2b2x1dENoZWNrb3V0LmpzYCByZWZlcmVuY2VdKGh0dHBzOi8vZGV2ZWxvcGVyLnJldm9sdXQuY29tL2RvY3MvcmV2b2x1dC1jaGVja291dC1qcylcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIFJldm9sdXRDaGVja291dCgnVE9LRU5fWFhYJywgJ3Byb2QnKS50aGVuKGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gKiAgIC8vIFdvcmsgd2l0aCBpbnN0YW5jZVxuICogfSk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFJldm9sdXRDaGVja291dExvYWRlcih0b2tlbiwgbW9kZSkge1xuICAgIGlmIChtb2RlID09PSB2b2lkIDApIHsgbW9kZSA9IFJldm9sdXRDaGVja291dExvYWRlci5tb2RlOyB9XG4gICAgaWYgKGxvYWRlZCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGxvYWRlZCh0b2tlbikpO1xuICAgIH1cbiAgICByZXR1cm4gUmV2b2x1dFBheW1lbnRzVmVyc2lvbkxvYWRlcihtb2RlKS50aGVuKGZ1bmN0aW9uICh2ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiBsb2FkUmV2b2x1dENoZWNrb3V0KHZlcnNpb24sIHRva2VuLCBtb2RlKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGxvYWRSZXZvbHV0Q2hlY2tvdXQodmVyc2lvbiwgdG9rZW4sIG1vZGUpIHtcbiAgICByZXR1cm4gbG9hZE1vZHVsZSh7XG4gICAgICAgIHNyYzogZ2V0VmVyc2lvbmVkVXJsKFVSTFNbbW9kZV0uZW1iZWQsIHZlcnNpb24pLFxuICAgICAgICBpZDogJ3Jldm9sdXQtY2hlY2tvdXQnLFxuICAgICAgICBuYW1lOiAnUmV2b2x1dENoZWNrb3V0JyxcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChzY3JpcHRFbGVtZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgUmV2b2x1dENoZWNrb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsb2FkZWQgPSBSZXZvbHV0Q2hlY2tvdXQ7XG4gICAgICAgICAgICBkZWxldGUgd2luZG93LlJldm9sdXRDaGVja291dDtcbiAgICAgICAgICAgIHJldHVybiBsb2FkZWQodG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZChzY3JpcHRFbGVtZW50KTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIidSZXZvbHV0Q2hlY2tvdXQnIGZhaWxlZCB0byBsb2FkOiBSZXZvbHV0Q2hlY2tvdXQgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblJldm9sdXRDaGVja291dExvYWRlci5tb2RlID0gTU9ERS5QUk9EVUNUSU9OO1xuUmV2b2x1dENoZWNrb3V0TG9hZGVyLnBheW1lbnRzID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGxvY2FsZSA9IF9hLmxvY2FsZSwgcHVibGljVG9rZW4gPSBfYS5wdWJsaWNUb2tlbiwgX2IgPSBfYS5tb2RlLCBtb2RlID0gX2IgPT09IHZvaWQgMCA/IFJldm9sdXRDaGVja291dExvYWRlci5tb2RlIDogX2I7XG4gICAgcmV0dXJuIFJldm9sdXRQYXltZW50c0xvYWRlcihwdWJsaWNUb2tlbiwgbW9kZSwgbG9jYWxlKTtcbn07XG5SZXZvbHV0Q2hlY2tvdXRMb2FkZXIudXBzZWxsID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGxvY2FsZSA9IF9hLmxvY2FsZSwgcHVibGljVG9rZW4gPSBfYS5wdWJsaWNUb2tlbiwgX2IgPSBfYS5tb2RlLCBtb2RlID0gX2IgPT09IHZvaWQgMCA/IFJldm9sdXRDaGVja291dExvYWRlci5tb2RlIDogX2I7XG4gICAgcmV0dXJuIFJldm9sdXRVcHNlbGxMb2FkZXIocHVibGljVG9rZW4sIG1vZGUsIGxvY2FsZSk7XG59O1xuIiwiaW1wb3J0IHsgTU9ERSwgVVJMUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGdldFZlcnNpb25lZFVybCwgbG9hZE1vZHVsZSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgUmV2b2x1dFBheW1lbnRzVmVyc2lvbkxvYWRlciB9IGZyb20gJy4vdmVyc2lvbkxvYWRlcic7XG52YXIgbG9hZGVkUGF5bWVudEluc3RhbmNlID0gbnVsbDtcbmV4cG9ydCBmdW5jdGlvbiBSZXZvbHV0UGF5bWVudHNMb2FkZXIodG9rZW4sIG1vZGUsIGxvY2FsZSkge1xuICAgIGlmIChtb2RlID09PSB2b2lkIDApIHsgbW9kZSA9IFJldm9sdXRQYXltZW50c0xvYWRlci5tb2RlOyB9XG4gICAgaWYgKGxvYWRlZFBheW1lbnRJbnN0YW5jZSkge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBsb2FkZWRQYXltZW50SW5zdGFuY2UoeyBwdWJsaWNUb2tlbjogdG9rZW4sIGxvY2FsZTogbG9jYWxlIH0pO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGluc3RhbmNlKTtcbiAgICB9XG4gICAgcmV0dXJuIFJldm9sdXRQYXltZW50c1ZlcnNpb25Mb2FkZXIobW9kZSkudGhlbihmdW5jdGlvbiAodmVyc2lvbikge1xuICAgICAgICByZXR1cm4gbG9hZFJldm9sdXRQYXltZW50cyh2ZXJzaW9uLCB0b2tlbiwgbW9kZSwgbG9jYWxlKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGxvYWRSZXZvbHV0UGF5bWVudHModmVyc2lvbiwgdG9rZW4sIG1vZGUsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2FkTW9kdWxlKHtcbiAgICAgICAgc3JjOiBnZXRWZXJzaW9uZWRVcmwoVVJMU1ttb2RlXS5lbWJlZCwgdmVyc2lvbiksXG4gICAgICAgIGlkOiAncmV2b2x1dC1wYXltZW50cycsXG4gICAgICAgIG5hbWU6ICdSZXZvbHV0UGF5bWVudHMnLFxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHNjcmlwdEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBSZXZvbHV0Q2hlY2tvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxvYWRlZFBheW1lbnRJbnN0YW5jZSA9IFJldm9sdXRDaGVja291dC5wYXltZW50cztcbiAgICAgICAgICAgIGRlbGV0ZSB3aW5kb3cuUmV2b2x1dENoZWNrb3V0O1xuICAgICAgICAgICAgcmV0dXJuIGxvYWRlZFBheW1lbnRJbnN0YW5jZSh7IHB1YmxpY1Rva2VuOiB0b2tlbiwgbG9jYWxlOiBsb2NhbGUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKHNjcmlwdEVsZW1lbnQpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ1Jldm9sdXRQYXltZW50cycgZmFpbGVkIHRvIGxvYWQ6IFJldm9sdXRDaGVja291dCBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuUmV2b2x1dFBheW1lbnRzTG9hZGVyLm1vZGUgPSBNT0RFLlBST0RVQ1RJT047XG4iLCJpbXBvcnQgeyBNT0RFLCBVUkxTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0VmVyc2lvbmVkVXJsLCBsb2FkTW9kdWxlIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBSZXZvbHV0UGF5bWVudHNWZXJzaW9uTG9hZGVyIH0gZnJvbSAnLi92ZXJzaW9uTG9hZGVyJztcbnZhciBsb2FkZWRVcHNlbGxJbnN0YW5jZSA9IG51bGw7XG5leHBvcnQgZnVuY3Rpb24gUmV2b2x1dFVwc2VsbExvYWRlcih0b2tlbiwgbW9kZSwgbG9jYWxlKSB7XG4gICAgaWYgKG1vZGUgPT09IHZvaWQgMCkgeyBtb2RlID0gUmV2b2x1dFVwc2VsbExvYWRlci5tb2RlOyB9XG4gICAgaWYgKGxvYWRlZFVwc2VsbEluc3RhbmNlKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IGxvYWRlZFVwc2VsbEluc3RhbmNlKHsgcHVibGljVG9rZW46IHRva2VuLCBsb2NhbGU6IGxvY2FsZSB9KTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpbnN0YW5jZSk7XG4gICAgfVxuICAgIHJldHVybiBSZXZvbHV0UGF5bWVudHNWZXJzaW9uTG9hZGVyKG1vZGUpLnRoZW4oZnVuY3Rpb24gKHZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIGxvYWRSZXZvbHV0VXBzZWxsKHZlcnNpb24sIHRva2VuLCBtb2RlLCBsb2NhbGUpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gbG9hZFJldm9sdXRVcHNlbGwodmVyc2lvbiwgdG9rZW4sIG1vZGUsIGxvY2FsZSkge1xuICAgIHJldHVybiBsb2FkTW9kdWxlKHtcbiAgICAgICAgc3JjOiBnZXRWZXJzaW9uZWRVcmwoVVJMU1ttb2RlXS51cHNlbGwsIHZlcnNpb24pLFxuICAgICAgICBpZDogJ3Jldm9sdXQtdXBzZWxsJyxcbiAgICAgICAgbmFtZTogJ1Jldm9sdXRVcHNlbGwnLFxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHNjcmlwdEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBSZXZvbHV0VXBzZWxsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsb2FkZWRVcHNlbGxJbnN0YW5jZSA9IFJldm9sdXRVcHNlbGw7XG4gICAgICAgICAgICBkZWxldGUgd2luZG93LlJldm9sdXRVcHNlbGw7XG4gICAgICAgICAgICByZXR1cm4gbG9hZGVkVXBzZWxsSW5zdGFuY2UoeyBwdWJsaWNUb2tlbjogdG9rZW4sIGxvY2FsZTogbG9jYWxlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZChzY3JpcHRFbGVtZW50KTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIidSZXZvbHV0VXBzZWxsJyBmYWlsZWQgdG8gbG9hZDogUmV2b2x1dFVwc2VsbCBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuUmV2b2x1dFVwc2VsbExvYWRlci5tb2RlID0gTU9ERS5QUk9EVUNUSU9OO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRNb2R1bGUoX2EpIHtcbiAgICB2YXIgc3JjID0gX2Euc3JjLCBpZCA9IF9hLmlkLCBuYW1lID0gX2EubmFtZTtcbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LmlkID0gaWQ7XG4gICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBoYW5kbGVFcnJvcihyZWFzb24pIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCInXCIgKyBuYW1lICsgXCInIGZhaWxlZCB0byBsb2FkOiBcIiArIHJlYXNvbikpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICAgICAgICByZXNvbHZlKHNjcmlwdCk7XG4gICAgICAgIH1cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGhhbmRsZUxvYWQ7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoJ05ldHdvcmsgZXJyb3IgZW5jb3VudGVyZWQnKTsgfTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRWZXJzaW9uZWRVcmwodXJsLCB2ZXJzaW9uKSB7XG4gICAgdmFyIHF1ZXJ5UGFyYW1zID0gdmVyc2lvbiA/IG5ldyBVUkxTZWFyY2hQYXJhbXMoeyB2ZXJzaW9uOiB2ZXJzaW9uIH0pLnRvU3RyaW5nKCkgOiAnJztcbiAgICByZXR1cm4gXCJcIiArIHVybCArIChxdWVyeVBhcmFtcyA/IFwiP1wiICsgcXVlcnlQYXJhbXMgOiAnJyk7XG59XG4iLCJpbXBvcnQgeyBNT0RFLCBVUkxTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0VmVyc2lvbmVkVXJsLCBsb2FkTW9kdWxlIH0gZnJvbSAnLi91dGlscyc7XG52YXIgbG9hZGVkVmVyc2lvbiA9IG51bGw7XG5leHBvcnQgZnVuY3Rpb24gUmV2b2x1dFBheW1lbnRzVmVyc2lvbkxvYWRlcihtb2RlKSB7XG4gICAgaWYgKG1vZGUgPT09IHZvaWQgMCkgeyBtb2RlID0gUmV2b2x1dFBheW1lbnRzVmVyc2lvbkxvYWRlci5tb2RlOyB9XG4gICAgaWYgKHR5cGVvZiBsb2FkZWRWZXJzaW9uID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGxvYWRlZFZlcnNpb24pO1xuICAgIH1cbiAgICByZXR1cm4gbG9hZE1vZHVsZSh7XG4gICAgICAgIHNyYzogZ2V0VmVyc2lvbmVkVXJsKFVSTFNbbW9kZV0udmVyc2lvbiwgXCJcIiArIERhdGUubm93KCkpLFxuICAgICAgICBpZDogJ3Jldm9sdXQtcGF5LXZlcnNpb24nLFxuICAgICAgICBuYW1lOiAnUmV2b2x1dFBheVZlcnNpb24nLFxuICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9hZGVkVmVyc2lvbiA9XG4gICAgICAgICAgICAnX19SRVZfUEFZX1ZFUlNJT05fXycgaW4gd2luZG93ICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIF9fUkVWX1BBWV9WRVJTSU9OX18gPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBfX1JFVl9QQVlfVkVSU0lPTl9fXG4gICAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgZGVsZXRlIHdpbmRvdy5fX1JFVl9QQVlfVkVSU0lPTl9fO1xuICAgICAgICByZXR1cm4gbG9hZGVkVmVyc2lvbjtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2FkZWRWZXJzaW9uID0gJyc7XG4gICAgICAgIHJldHVybiBsb2FkZWRWZXJzaW9uO1xuICAgIH0pO1xufVxuUmV2b2x1dFBheW1lbnRzVmVyc2lvbkxvYWRlci5tb2RlID0gTU9ERS5QUk9EVUNUSU9OO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0IFJldm9sdXRDaGVja291dCBmcm9tIFwiQHJldm9sdXQvY2hlY2tvdXRcIjtcclxuXHJcbmNvbnN0IGdldE9yZGVyQ2FyZEZpZWxkID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gIC8vIEdldFxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2NyZWF0ZW9yZGVyXCIpOyAvLyByZXMgd2lsbCBnZXQgdmFsdWUgd2hlbiBwcm9taXNlIGlzIGZ1bGxmaWxsZWRcclxuICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gIGNvbnN0IG9yZGVyVG9rZW4gPSBhd2FpdCByZXMuanNvbigpOyAvLyBFeHRyYWN0IG9yZGVyIFRva2VuXHJcbiAgY29uc29sZS5sb2cob3JkZXJUb2tlbik7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcIm9yZGVyLWluZm9cIlxyXG4gICkuaW5uZXJUZXh0ID0gYE9yZGVyIGhhcyBiZWVuIGNyZWF0ZWQgd2l0aCB0b2tlbjogJHtvcmRlclRva2VufWA7XHJcblxyXG4gIGNvbnN0IGluc3RhbmNlID0gYXdhaXQgUmV2b2x1dENoZWNrb3V0KG9yZGVyVG9rZW4sIFwic2FuZGJveFwiKTsgLy8gY3JlYXRlcyBjYXJkIGZpZWxkXHJcblxyXG4gIGNvbnN0IGNhcmRGaWVsZCA9IGluc3RhbmNlLmNyZWF0ZUNhcmRGaWVsZCh7XHJcbiAgICB0YXJnZXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydC1maWVsZFwiKSxcclxuICAgIG9uU3VjY2VzcygpIHtcclxuICAgICAgd2luZG93LmFsZXJ0KFwiVGhhbmsgeW91IGZvciB5b3VyIHB1cmNoYXNlIVwiKTtcclxuICAgIH0sXHJcbiAgICBvbkVycm9yKGVycm9yKSB7XHJcbiAgICAgIHdpbmRvdy5hbGVydChgT2VwcyBzb21ldGhpbiBoYXBwZW5kIDooLiAke2Vycm9yfWApO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgY29uc29sZS5sb2coY2FyZEZpZWxkKTtcclxuXHJcbiAgLy9BZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHBheSBidXR0b25cclxuICBjb25zdCB0ZW1wID0gYXdhaXQgZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1wYXlcIilcclxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICBjYXJkRmllbGQuc3VibWl0KHtcclxuICAgICAgICBcImVtYWlsXCI6IFwiZmluYW5jZXRvZmlyZUBob3RtYWlsLmNvbVwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkpvcmRpZSBTaW1vbnNcIixcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vIEJ1dHRvbiB0byBjcmVhdGUgb3JkZXJcclxuZG9jdW1lbnRcclxuICAuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY3JlYXRlLW9yZGVyXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXRPcmRlckNhcmRGaWVsZCk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY29uc3QgcmVuZGVyQ291bnRyeSA9IGZ1bmN0aW9uIChkYXRhLCBjbGFzc05hbWUgPSBcIlwiKSB7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgY29uc3QgaHRtbCA9IGBcclxuICAgIDxhcnRpY2xlIGNsYXNzPVwiY291bnRyeSAke2NsYXNzTmFtZX1cIj5cclxuICAgICAgPGltZyBjbGFzcz1cImNvdW50cnlfX2ltZ1wiIHNyYz1cIiR7ZGF0YS5mbGFncy5zdmd9XCIgLz5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvdW50cnlfX2RhdGFcIj5cclxuICAgICAgICA8aDMgY2xhc3M9XCJjb3VudHJ5X19uYW1lXCI+JHtkYXRhLm5hbWV9PC9oMz5cclxuICAgICAgICA8aDQgY2xhc3M9XCJjb3VudHJ5X19yZWdpb25cIj4ke2RhdGEucmVnaW9ufTwvaDQ+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJjb3VudHJ5X19yb3dcIj48c3Bhbj7wn5GrPC9zcGFuPiR7KFxyXG4gICAgICAgICAgK2RhdGEucG9wdWxhdGlvbiAvIDEwMDAwMDBcclxuICAgICAgICApLnRvRml4ZWQoMSl9IHBlb3BsZTwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cImNvdW50cnlfX3Jvd1wiPjxzcGFuPvCfl6PvuI88L3NwYW4+JHtkYXRhLmxhbmd1YWdlfTwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cImNvdW50cnlfX3Jvd1wiPjxzcGFuPvCfkrA8L3NwYW4+JHtkYXRhLmN1cnJlbmNpZXN9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYXJ0aWNsZT5cclxuICAgIGA7XHJcbiAgY291bnRyaWVzQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBodG1sKTtcclxuICBjb3VudHJpZXNDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDE7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDb3VudHJ5RGF0YSA9IGZ1bmN0aW9uIChjb3VudHJ5KSB7XHJcbiAgLy8gQ291bnRyeSAxXHJcbiAgZmV0Y2goYGh0dHBzOi8vcmVzdGNvdW50cmllcy5jb20vdjMuMS9uYW1lLyR7Y291bnRyeX1gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICByZW5kZXJDb3VudHJ5KGRhdGFbMF0pO1xyXG4gICAgICBjb25zdCBuZWlnaGJvdXIgPSBkYXRhWzBdLmJvcmRlcnNbMF07XHJcblxyXG4gICAgICBpZiAoIW5laWdoYm91cikgdGhyb3cgbmV3IEVycm9yKFwiTm8gbmVpZ2hib3VyIGZvdW5kIVwiKTtcclxuXHJcbiAgICAgIC8vIENvdW50cnkgMlxyXG4gICAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vcmVzdGNvdW50cmllcy5jb20vdjMuMS9hbHBoYS8ke25laWdoYm91cn1gKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiByZW5kZXJDb3VudHJ5KGRhdGFbMF0sIFwibmVpZ2hib3VyXCIpKVxyXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICBjb3VudHJpZXNDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGFsZXJ0KGVycikpO1xyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=