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



const getOrderCardField = async function (price = 0) {
  // Post request send the Price, so backend
  // can create the order with the price variable
  const res = await fetch("/createorder", {
    method: "POST",
    maxBodyLength: Infinity,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      orderPrice: price,
    }),
  });

  // res will get value when promise is fullfilled
  // console.log(res);
  const orderResponse = await res.json(); // {token: '...', order_id: '...'}
  console.log(orderResponse);

  //Show order token and order_id in webpage
  document.getElementById(
    "order-info"
  ).innerHTML = `<b>Order has been created:</b><br>
                 - Token: ${orderResponse.token}<br>
                 - Order id: ${orderResponse.order_id}<br> 
                `;

  //get the revolut checkout instance
  const instance = await (0,_revolut_checkout__WEBPACK_IMPORTED_MODULE_0__["default"])(orderResponse.token, "sandbox");

  // creates card field and mounts it to the "cart-field" div
  const cardField = instance.createCardField({
    target: document.getElementById("cart-field"),
    // Handle events related to the payment
    onSuccess() {
      document.getElementById("payment-status").innerText =
        "Payment Succesfull";
      document.getElementById("payment-status").style.color = "green";
      window.alert("Thank you for your purchase!");
    },
    onError(error) {
      document.getElementById(
        "payment-status"
      ).innerText = `Payment failed: ${error}`;

      document.getElementById("payment-status").style.color = "red";

      window.alert(`Oeps somethin happend :(. ${error}`);
    },
    theme: "light",
    styles: {
      border: "1px solid #ae9f9",
    },
  });

  //Ask for card details and show payment button
  document.getElementById("ask-card-details").style.visibility = "visible";
  document.getElementById("cart-field").style.border = "1px solid #ae9f9f";
  document.getElementById("button-pay").style.visibility = "visible";
  //console.log(cardField);

  //Add event listener to the pay button
  document.getElementById("button-pay").addEventListener("click", function () {
    cardField.submit({
      //both fields are required
      "email": "financetofire@hotmail.com",
      "name": "Jordie Simons",
    });
  });
};

// Reference to price input element in the webpage
const orderPriceElement = document.getElementById("order-price");

// Eventlistener to create order
document
  .getElementById("button-create-order")
  .addEventListener("click", () => getOrderCardField(orderPriceElement.value));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmV2b2x1dGhvbWV0YXNrLy4vbm9kZV9tb2R1bGVzL0ByZXZvbHV0L2NoZWNrb3V0L2VzbS9jaGVja3MuanMiLCJ3ZWJwYWNrOi8vcmV2b2x1dGhvbWV0YXNrLy4vbm9kZV9tb2R1bGVzL0ByZXZvbHV0L2NoZWNrb3V0L2VzbS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcmV2b2x1dGhvbWV0YXNrLy4vbm9kZV9tb2R1bGVzL0ByZXZvbHV0L2NoZWNrb3V0L2VzbS9oZWxwZXJzLmpzIiwid2VicGFjazovL3Jldm9sdXRob21ldGFzay8uL25vZGVfbW9kdWxlcy9AcmV2b2x1dC9jaGVja291dC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmV2b2x1dGhvbWV0YXNrLy4vbm9kZV9tb2R1bGVzL0ByZXZvbHV0L2NoZWNrb3V0L2VzbS9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcmV2b2x1dGhvbWV0YXNrLy4vbm9kZV9tb2R1bGVzL0ByZXZvbHV0L2NoZWNrb3V0L2VzbS9wYXltZW50c0xvYWRlci5qcyIsIndlYnBhY2s6Ly9yZXZvbHV0aG9tZXRhc2svLi9ub2RlX21vZHVsZXMvQHJldm9sdXQvY2hlY2tvdXQvZXNtL3Vwc2VsbExvYWRlci5qcyIsIndlYnBhY2s6Ly9yZXZvbHV0aG9tZXRhc2svLi9ub2RlX21vZHVsZXMvQHJldm9sdXQvY2hlY2tvdXQvZXNtL3V0aWxzLmpzIiwid2VicGFjazovL3Jldm9sdXRob21ldGFzay8uL25vZGVfbW9kdWxlcy9AcmV2b2x1dC9jaGVja291dC9lc20vdmVyc2lvbkxvYWRlci5qcyIsIndlYnBhY2s6Ly9yZXZvbHV0aG9tZXRhc2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmV2b2x1dGhvbWV0YXNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXZvbHV0aG9tZXRhc2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXZvbHV0aG9tZXRhc2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXZvbHV0aG9tZXRhc2svLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExPQ0FMRVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZGF0aW9uRXJyb3IoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgIT0gbnVsbCAmJiBlcnJvci5uYW1lID09PSAnVmFsaWRhdGlvbic7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNSZXZvbHV0Q2hlY2tvdXRFcnJvcihlcnJvcikge1xuICAgIHJldHVybiBlcnJvciAhPSBudWxsICYmIGVycm9yLm5hbWUgPT09ICdSZXZvbHV0Q2hlY2tvdXQnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRMb2NhbGUobG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBMT0NBTEVTLnNvbWUoZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZSA9PT0gbG9jYWxlOyB9KTtcbn1cbiIsInZhciBfYTtcbmV4cG9ydCB2YXIgTE9DQUxFUyA9IFtcbiAgICAnZW4nLFxuICAgICdlbi1VUycsXG4gICAgJ25sJyxcbiAgICAnZnInLFxuICAgICdkZScsXG4gICAgJ2NzJyxcbiAgICAnaXQnLFxuICAgICdsdCcsXG4gICAgJ3BsJyxcbiAgICAncHQnLFxuICAgICdlcycsXG4gICAgJ2h1JyxcbiAgICAnc2snLFxuICAgICdqYScsXG4gICAgJ3N2JyxcbiAgICAnYmcnLFxuICAgICdybycsXG4gICAgJ2VsJyxcbiAgICAnaHInLFxuXTtcbmV4cG9ydCB2YXIgTU9ERSA9IHtcbiAgICBQUk9EVUNUSU9OOiAncHJvZCcsXG4gICAgREVWRUxPUE1FTlQ6ICdkZXYnLFxuICAgIFNBTkRCT1g6ICdzYW5kYm94Jyxcbn07XG5leHBvcnQgdmFyIFVSTFMgPSAoX2EgPSB7fSxcbiAgICBfYVtNT0RFLlNBTkRCT1hdID0ge1xuICAgICAgICBlbWJlZDogJ2h0dHBzOi8vc2FuZGJveC1tZXJjaGFudC5yZXZvbHV0LmNvbS9lbWJlZC5qcycsXG4gICAgICAgIHZlcnNpb246ICdodHRwczovL3NhbmRib3gtbWVyY2hhbnQucmV2b2x1dC5jb20vdmVyc2lvbi5qcycsXG4gICAgICAgIHVwc2VsbDogJ2h0dHBzOi8vc2FuZGJveC1tZXJjaGFudC5yZXZvbHV0LmNvbS91cHNlbGwvZW1iZWQuanMnLFxuICAgIH0sXG4gICAgX2FbTU9ERS5QUk9EVUNUSU9OXSA9IHtcbiAgICAgICAgZW1iZWQ6ICdodHRwczovL21lcmNoYW50LnJldm9sdXQuY29tL2VtYmVkLmpzJyxcbiAgICAgICAgdmVyc2lvbjogJ2h0dHBzOi8vbWVyY2hhbnQucmV2b2x1dC5jb20vdmVyc2lvbi5qcycsXG4gICAgICAgIHVwc2VsbDogJ2h0dHBzOi8vbWVyY2hhbnQucmV2b2x1dC5jb20vdXBzZWxsL2VtYmVkLmpzJyxcbiAgICB9LFxuICAgIF9hW01PREUuREVWRUxPUE1FTlRdID0ge1xuICAgICAgICBlbWJlZDogJ2h0dHBzOi8vbWVyY2hhbnQucmV2b2x1dC5jb2Rlcy9lbWJlZC5qcycsXG4gICAgICAgIHZlcnNpb246ICdodHRwczovL21lcmNoYW50LnJldm9sdXQuY29kZXMvdmVyc2lvbi5qcycsXG4gICAgICAgIHVwc2VsbDogJ2h0dHBzOi8vbWVyY2hhbnQucmV2b2x1dC5jb2Rlcy91cHNlbGwvZW1iZWQuanMnLFxuICAgIH0sXG4gICAgX2EpO1xuZXhwb3J0IHZhciBSRVZPTFVUX1BBWV9PUkRFUl9JRF9VUkxfUEFSQU1FVEVSID0gJ19ycF9vaWQnO1xuZXhwb3J0IHZhciBSRVZPTFVUX1BBWV9TVUNDRVNTX1JFRElSRUNUX1VSTF9QQVJBTUVURVIgPSAnX3JwX3MnO1xuZXhwb3J0IHZhciBSRVZPTFVUX1BBWV9GQUlMVVJFX1JFRElSRUNUX1VSTF9QQVJBTUVURVIgPSAnX3JwX2ZyJztcbiIsImltcG9ydCB7IFJFVk9MVVRfUEFZX09SREVSX0lEX1VSTF9QQVJBTUVURVIsIFJFVk9MVVRfUEFZX1NVQ0NFU1NfUkVESVJFQ1RfVVJMX1BBUkFNRVRFUiwgUkVWT0xVVF9QQVlfRkFJTFVSRV9SRURJUkVDVF9VUkxfUEFSQU1FVEVSLCB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBnZXRTZWFyY2hQYXJhbXNCeU5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldChuYW1lKTtcbn07XG4vKipcbiAqIFJldHJpZXZlIHRoZSByZXZvbHV0IHBheSBvcmRlciBJRCBVUkwgcGFyYW1ldGVyIHVwb24gcmVkaXJlY3QgdG8geW91ciBtZXJjaGFudCBzaXRlXG4gKi9cbmV4cG9ydCB2YXIgZ2V0UmV2b2x1dFBheU9yZGVySWRVUkxQYXJhbSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0U2VhcmNoUGFyYW1zQnlOYW1lKFJFVk9MVVRfUEFZX09SREVSX0lEX1VSTF9QQVJBTUVURVIpO1xufTtcbi8qKlxuICogUmV0cmlldmUgdGhlIHJldm9sdXQgcGF5IHN1Y2Nlc3MgVVJMIHBhcmFtZXRlciB1cG9uIHJlZGlyZWN0IHRvIHlvdXIgbWVyY2hhbnQgc2l0ZVxuICovXG5leHBvcnQgdmFyIGdldFJldm9sdXRQYXlTdWNjZXNzVVJMUGFyYW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdldFNlYXJjaFBhcmFtc0J5TmFtZShSRVZPTFVUX1BBWV9TVUNDRVNTX1JFRElSRUNUX1VSTF9QQVJBTUVURVIpO1xufTtcbi8qKlxuICogUmV0cmlldmUgdGhlIHJldm9sdXQgcGF5IGZhaWx1cmUgVVJMIHBhcmFtZXRlciB1cG9uIHJlZGlyZWN0IHRvIHlvdXIgbWVyY2hhbnQgc2l0ZVxuICovXG5leHBvcnQgdmFyIGdldFJldm9sdXRQYXlGYWlsdXJlVVJMUGFyYW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdldFNlYXJjaFBhcmFtc0J5TmFtZShSRVZPTFVUX1BBWV9GQUlMVVJFX1JFRElSRUNUX1VSTF9QQVJBTUVURVIpO1xufTtcbiIsImV4cG9ydCB7IFJldm9sdXRDaGVja291dExvYWRlciBhcyBkZWZhdWx0IH0gZnJvbSAnLi9sb2FkZXInO1xuZXhwb3J0IHsgaXNSZXZvbHV0Q2hlY2tvdXRFcnJvciwgaXNWYWxpZGF0aW9uRXJyb3IsIGlzVmFsaWRMb2NhbGUsIH0gZnJvbSAnLi9jaGVja3MnO1xuZXhwb3J0IHsgZ2V0UmV2b2x1dFBheU9yZGVySWRVUkxQYXJhbSwgZ2V0UmV2b2x1dFBheVN1Y2Nlc3NVUkxQYXJhbSwgZ2V0UmV2b2x1dFBheUZhaWx1cmVVUkxQYXJhbSwgfSBmcm9tICcuL2hlbHBlcnMnO1xuIiwiaW1wb3J0IHsgTU9ERSwgVVJMUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IFJldm9sdXRQYXltZW50c0xvYWRlciB9IGZyb20gJy4vcGF5bWVudHNMb2FkZXInO1xuaW1wb3J0IHsgZ2V0VmVyc2lvbmVkVXJsLCBsb2FkTW9kdWxlIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBSZXZvbHV0VXBzZWxsTG9hZGVyIH0gZnJvbSAnLi91cHNlbGxMb2FkZXInO1xuaW1wb3J0IHsgUmV2b2x1dFBheW1lbnRzVmVyc2lvbkxvYWRlciB9IGZyb20gJy4vdmVyc2lvbkxvYWRlcic7XG52YXIgbG9hZGVkID0gbnVsbDtcbi8qKlxuICogTG9hZCBbYFJldm9sdXRDaGVja291dC5qc2BdKGh0dHBzOi8vZGV2ZWxvcGVyLnJldm9sdXQuY29tL2RvY3MvcmV2b2x1dC1jaGVja291dC1qcy8jcmV2b2x1dGNoZWNrb3V0KVxuICogYW5kIGNyZWF0ZSBbYEluc3RhbmNlYF0oaHR0cHM6Ly9kZXZlbG9wZXIucmV2b2x1dC5jb20vZG9jcy9yZXZvbHV0LWNoZWNrb3V0LWpzLyNpbnN0YW5jZSkgZm9yIHRoZSBvcmRlciBgdG9rZW5gLlxuICpcbiAqIEBwYXJhbSB0b2tlbiBgcHVibGljX2lkYCAgZnJvbSBbY3JlYXRlIHBheW1lbnQgb3JkZXJdKGh0dHBzOi8vZGV2ZWxvcGVyLnJldm9sdXQuY29tL2FwaS1yZWZlcmVuY2UvbWVyY2hhbnQvI29wZXJhdGlvbi9jcmVhdGVPcmRlcikgQVBJIHJlcXVlc3RcbiAqIEBwYXJhbSBtb2RlIFtBUEldKGh0dHBzOi8vZGV2ZWxvcGVyLnJldm9sdXQuY29tL2RvY3MvcmV2b2x1dC1jaGVja291dC1qcy8jcmV2b2x1dGNoZWNrb3V0LXBhcmFtZXRlcnMpIGVudmlyb25tZW50LCBkZWZhdWx0cyB0byBgJ3Byb2QnYFxuICpcbiAqIEBzZWUgW2BSZXZvbHV0Q2hlY2tvdXQuanNgIHJlZmVyZW5jZV0oaHR0cHM6Ly9kZXZlbG9wZXIucmV2b2x1dC5jb20vZG9jcy9yZXZvbHV0LWNoZWNrb3V0LWpzKVxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogUmV2b2x1dENoZWNrb3V0KCdUT0tFTl9YWFgnLCAncHJvZCcpLnRoZW4oZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAqICAgLy8gV29yayB3aXRoIGluc3RhbmNlXG4gKiB9KTtcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gUmV2b2x1dENoZWNrb3V0TG9hZGVyKHRva2VuLCBtb2RlKSB7XG4gICAgaWYgKG1vZGUgPT09IHZvaWQgMCkgeyBtb2RlID0gUmV2b2x1dENoZWNrb3V0TG9hZGVyLm1vZGU7IH1cbiAgICBpZiAobG9hZGVkKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobG9hZGVkKHRva2VuKSk7XG4gICAgfVxuICAgIHJldHVybiBSZXZvbHV0UGF5bWVudHNWZXJzaW9uTG9hZGVyKG1vZGUpLnRoZW4oZnVuY3Rpb24gKHZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIGxvYWRSZXZvbHV0Q2hlY2tvdXQodmVyc2lvbiwgdG9rZW4sIG1vZGUpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gbG9hZFJldm9sdXRDaGVja291dCh2ZXJzaW9uLCB0b2tlbiwgbW9kZSkge1xuICAgIHJldHVybiBsb2FkTW9kdWxlKHtcbiAgICAgICAgc3JjOiBnZXRWZXJzaW9uZWRVcmwoVVJMU1ttb2RlXS5lbWJlZCwgdmVyc2lvbiksXG4gICAgICAgIGlkOiAncmV2b2x1dC1jaGVja291dCcsXG4gICAgICAgIG5hbWU6ICdSZXZvbHV0Q2hlY2tvdXQnLFxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHNjcmlwdEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBSZXZvbHV0Q2hlY2tvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxvYWRlZCA9IFJldm9sdXRDaGVja291dDtcbiAgICAgICAgICAgIGRlbGV0ZSB3aW5kb3cuUmV2b2x1dENoZWNrb3V0O1xuICAgICAgICAgICAgcmV0dXJuIGxvYWRlZCh0b2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKHNjcmlwdEVsZW1lbnQpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ1Jldm9sdXRDaGVja291dCcgZmFpbGVkIHRvIGxvYWQ6IFJldm9sdXRDaGVja291dCBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuUmV2b2x1dENoZWNrb3V0TG9hZGVyLm1vZGUgPSBNT0RFLlBST0RVQ1RJT047XG5SZXZvbHV0Q2hlY2tvdXRMb2FkZXIucGF5bWVudHMgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgbG9jYWxlID0gX2EubG9jYWxlLCBwdWJsaWNUb2tlbiA9IF9hLnB1YmxpY1Rva2VuLCBfYiA9IF9hLm1vZGUsIG1vZGUgPSBfYiA9PT0gdm9pZCAwID8gUmV2b2x1dENoZWNrb3V0TG9hZGVyLm1vZGUgOiBfYjtcbiAgICByZXR1cm4gUmV2b2x1dFBheW1lbnRzTG9hZGVyKHB1YmxpY1Rva2VuLCBtb2RlLCBsb2NhbGUpO1xufTtcblJldm9sdXRDaGVja291dExvYWRlci51cHNlbGwgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgbG9jYWxlID0gX2EubG9jYWxlLCBwdWJsaWNUb2tlbiA9IF9hLnB1YmxpY1Rva2VuLCBfYiA9IF9hLm1vZGUsIG1vZGUgPSBfYiA9PT0gdm9pZCAwID8gUmV2b2x1dENoZWNrb3V0TG9hZGVyLm1vZGUgOiBfYjtcbiAgICByZXR1cm4gUmV2b2x1dFVwc2VsbExvYWRlcihwdWJsaWNUb2tlbiwgbW9kZSwgbG9jYWxlKTtcbn07XG4iLCJpbXBvcnQgeyBNT0RFLCBVUkxTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0VmVyc2lvbmVkVXJsLCBsb2FkTW9kdWxlIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBSZXZvbHV0UGF5bWVudHNWZXJzaW9uTG9hZGVyIH0gZnJvbSAnLi92ZXJzaW9uTG9hZGVyJztcbnZhciBsb2FkZWRQYXltZW50SW5zdGFuY2UgPSBudWxsO1xuZXhwb3J0IGZ1bmN0aW9uIFJldm9sdXRQYXltZW50c0xvYWRlcih0b2tlbiwgbW9kZSwgbG9jYWxlKSB7XG4gICAgaWYgKG1vZGUgPT09IHZvaWQgMCkgeyBtb2RlID0gUmV2b2x1dFBheW1lbnRzTG9hZGVyLm1vZGU7IH1cbiAgICBpZiAobG9hZGVkUGF5bWVudEluc3RhbmNlKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IGxvYWRlZFBheW1lbnRJbnN0YW5jZSh7IHB1YmxpY1Rva2VuOiB0b2tlbiwgbG9jYWxlOiBsb2NhbGUgfSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaW5zdGFuY2UpO1xuICAgIH1cbiAgICByZXR1cm4gUmV2b2x1dFBheW1lbnRzVmVyc2lvbkxvYWRlcihtb2RlKS50aGVuKGZ1bmN0aW9uICh2ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiBsb2FkUmV2b2x1dFBheW1lbnRzKHZlcnNpb24sIHRva2VuLCBtb2RlLCBsb2NhbGUpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gbG9hZFJldm9sdXRQYXltZW50cyh2ZXJzaW9uLCB0b2tlbiwgbW9kZSwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvYWRNb2R1bGUoe1xuICAgICAgICBzcmM6IGdldFZlcnNpb25lZFVybChVUkxTW21vZGVdLmVtYmVkLCB2ZXJzaW9uKSxcbiAgICAgICAgaWQ6ICdyZXZvbHV0LXBheW1lbnRzJyxcbiAgICAgICAgbmFtZTogJ1Jldm9sdXRQYXltZW50cycsXG4gICAgfSkudGhlbihmdW5jdGlvbiAoc2NyaXB0RWxlbWVudCkge1xuICAgICAgICBpZiAodHlwZW9mIFJldm9sdXRDaGVja291dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbG9hZGVkUGF5bWVudEluc3RhbmNlID0gUmV2b2x1dENoZWNrb3V0LnBheW1lbnRzO1xuICAgICAgICAgICAgZGVsZXRlIHdpbmRvdy5SZXZvbHV0Q2hlY2tvdXQ7XG4gICAgICAgICAgICByZXR1cm4gbG9hZGVkUGF5bWVudEluc3RhbmNlKHsgcHVibGljVG9rZW46IHRva2VuLCBsb2NhbGU6IGxvY2FsZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoc2NyaXB0RWxlbWVudCk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCInUmV2b2x1dFBheW1lbnRzJyBmYWlsZWQgdG8gbG9hZDogUmV2b2x1dENoZWNrb3V0IGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5SZXZvbHV0UGF5bWVudHNMb2FkZXIubW9kZSA9IE1PREUuUFJPRFVDVElPTjtcbiIsImltcG9ydCB7IE1PREUsIFVSTFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRWZXJzaW9uZWRVcmwsIGxvYWRNb2R1bGUgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFJldm9sdXRQYXltZW50c1ZlcnNpb25Mb2FkZXIgfSBmcm9tICcuL3ZlcnNpb25Mb2FkZXInO1xudmFyIGxvYWRlZFVwc2VsbEluc3RhbmNlID0gbnVsbDtcbmV4cG9ydCBmdW5jdGlvbiBSZXZvbHV0VXBzZWxsTG9hZGVyKHRva2VuLCBtb2RlLCBsb2NhbGUpIHtcbiAgICBpZiAobW9kZSA9PT0gdm9pZCAwKSB7IG1vZGUgPSBSZXZvbHV0VXBzZWxsTG9hZGVyLm1vZGU7IH1cbiAgICBpZiAobG9hZGVkVXBzZWxsSW5zdGFuY2UpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gbG9hZGVkVXBzZWxsSW5zdGFuY2UoeyBwdWJsaWNUb2tlbjogdG9rZW4sIGxvY2FsZTogbG9jYWxlIH0pO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGluc3RhbmNlKTtcbiAgICB9XG4gICAgcmV0dXJuIFJldm9sdXRQYXltZW50c1ZlcnNpb25Mb2FkZXIobW9kZSkudGhlbihmdW5jdGlvbiAodmVyc2lvbikge1xuICAgICAgICByZXR1cm4gbG9hZFJldm9sdXRVcHNlbGwodmVyc2lvbiwgdG9rZW4sIG1vZGUsIGxvY2FsZSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBsb2FkUmV2b2x1dFVwc2VsbCh2ZXJzaW9uLCB0b2tlbiwgbW9kZSwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvYWRNb2R1bGUoe1xuICAgICAgICBzcmM6IGdldFZlcnNpb25lZFVybChVUkxTW21vZGVdLnVwc2VsbCwgdmVyc2lvbiksXG4gICAgICAgIGlkOiAncmV2b2x1dC11cHNlbGwnLFxuICAgICAgICBuYW1lOiAnUmV2b2x1dFVwc2VsbCcsXG4gICAgfSkudGhlbihmdW5jdGlvbiAoc2NyaXB0RWxlbWVudCkge1xuICAgICAgICBpZiAodHlwZW9mIFJldm9sdXRVcHNlbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxvYWRlZFVwc2VsbEluc3RhbmNlID0gUmV2b2x1dFVwc2VsbDtcbiAgICAgICAgICAgIGRlbGV0ZSB3aW5kb3cuUmV2b2x1dFVwc2VsbDtcbiAgICAgICAgICAgIHJldHVybiBsb2FkZWRVcHNlbGxJbnN0YW5jZSh7IHB1YmxpY1Rva2VuOiB0b2tlbiwgbG9jYWxlOiBsb2NhbGUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKHNjcmlwdEVsZW1lbnQpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ1Jldm9sdXRVcHNlbGwnIGZhaWxlZCB0byBsb2FkOiBSZXZvbHV0VXBzZWxsIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5SZXZvbHV0VXBzZWxsTG9hZGVyLm1vZGUgPSBNT0RFLlBST0RVQ1RJT047XG4iLCJleHBvcnQgZnVuY3Rpb24gbG9hZE1vZHVsZShfYSkge1xuICAgIHZhciBzcmMgPSBfYS5zcmMsIGlkID0gX2EuaWQsIG5hbWUgPSBfYS5uYW1lO1xuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuaWQgPSBpZDtcbiAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUVycm9yKHJlYXNvbikge1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIidcIiArIG5hbWUgKyBcIicgZmFpbGVkIHRvIGxvYWQ6IFwiICsgcmVhc29uKSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgICAgICAgIHJlc29sdmUoc2NyaXB0KTtcbiAgICAgICAgfVxuICAgICAgICBzY3JpcHQub25sb2FkID0gaGFuZGxlTG9hZDtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBoYW5kbGVFcnJvcignTmV0d29yayBlcnJvciBlbmNvdW50ZXJlZCcpOyB9O1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFZlcnNpb25lZFVybCh1cmwsIHZlcnNpb24pIHtcbiAgICB2YXIgcXVlcnlQYXJhbXMgPSB2ZXJzaW9uID8gbmV3IFVSTFNlYXJjaFBhcmFtcyh7IHZlcnNpb246IHZlcnNpb24gfSkudG9TdHJpbmcoKSA6ICcnO1xuICAgIHJldHVybiBcIlwiICsgdXJsICsgKHF1ZXJ5UGFyYW1zID8gXCI/XCIgKyBxdWVyeVBhcmFtcyA6ICcnKTtcbn1cbiIsImltcG9ydCB7IE1PREUsIFVSTFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRWZXJzaW9uZWRVcmwsIGxvYWRNb2R1bGUgfSBmcm9tICcuL3V0aWxzJztcbnZhciBsb2FkZWRWZXJzaW9uID0gbnVsbDtcbmV4cG9ydCBmdW5jdGlvbiBSZXZvbHV0UGF5bWVudHNWZXJzaW9uTG9hZGVyKG1vZGUpIHtcbiAgICBpZiAobW9kZSA9PT0gdm9pZCAwKSB7IG1vZGUgPSBSZXZvbHV0UGF5bWVudHNWZXJzaW9uTG9hZGVyLm1vZGU7IH1cbiAgICBpZiAodHlwZW9mIGxvYWRlZFZlcnNpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobG9hZGVkVmVyc2lvbik7XG4gICAgfVxuICAgIHJldHVybiBsb2FkTW9kdWxlKHtcbiAgICAgICAgc3JjOiBnZXRWZXJzaW9uZWRVcmwoVVJMU1ttb2RlXS52ZXJzaW9uLCBcIlwiICsgRGF0ZS5ub3coKSksXG4gICAgICAgIGlkOiAncmV2b2x1dC1wYXktdmVyc2lvbicsXG4gICAgICAgIG5hbWU6ICdSZXZvbHV0UGF5VmVyc2lvbicsXG4gICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2FkZWRWZXJzaW9uID1cbiAgICAgICAgICAgICdfX1JFVl9QQVlfVkVSU0lPTl9fJyBpbiB3aW5kb3cgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgX19SRVZfUEFZX1ZFUlNJT05fXyA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IF9fUkVWX1BBWV9WRVJTSU9OX19cbiAgICAgICAgICAgICAgICA6ICcnO1xuICAgICAgICBkZWxldGUgd2luZG93Ll9fUkVWX1BBWV9WRVJTSU9OX187XG4gICAgICAgIHJldHVybiBsb2FkZWRWZXJzaW9uO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvYWRlZFZlcnNpb24gPSAnJztcbiAgICAgICAgcmV0dXJuIGxvYWRlZFZlcnNpb247XG4gICAgfSk7XG59XG5SZXZvbHV0UGF5bWVudHNWZXJzaW9uTG9hZGVyLm1vZGUgPSBNT0RFLlBST0RVQ1RJT047XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5pbXBvcnQgUmV2b2x1dENoZWNrb3V0IGZyb20gXCJAcmV2b2x1dC9jaGVja291dFwiO1xyXG5cclxuY29uc3QgZ2V0T3JkZXJDYXJkRmllbGQgPSBhc3luYyBmdW5jdGlvbiAocHJpY2UgPSAwKSB7XHJcbiAgLy8gUG9zdCByZXF1ZXN0IHNlbmQgdGhlIFByaWNlLCBzbyBiYWNrZW5kXHJcbiAgLy8gY2FuIGNyZWF0ZSB0aGUgb3JkZXIgd2l0aCB0aGUgcHJpY2UgdmFyaWFibGVcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9jcmVhdGVvcmRlclwiLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgbWF4Qm9keUxlbmd0aDogSW5maW5pdHksXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIG9yZGVyUHJpY2U6IHByaWNlLFxyXG4gICAgfSksXHJcbiAgfSk7XHJcblxyXG4gIC8vIHJlcyB3aWxsIGdldCB2YWx1ZSB3aGVuIHByb21pc2UgaXMgZnVsbGZpbGxlZFxyXG4gIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgY29uc3Qgb3JkZXJSZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKCk7IC8vIHt0b2tlbjogJy4uLicsIG9yZGVyX2lkOiAnLi4uJ31cclxuICBjb25zb2xlLmxvZyhvcmRlclJlc3BvbnNlKTtcclxuXHJcbiAgLy9TaG93IG9yZGVyIHRva2VuIGFuZCBvcmRlcl9pZCBpbiB3ZWJwYWdlXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICBcIm9yZGVyLWluZm9cIlxyXG4gICkuaW5uZXJIVE1MID0gYDxiPk9yZGVyIGhhcyBiZWVuIGNyZWF0ZWQ6PC9iPjxicj5cclxuICAgICAgICAgICAgICAgICAtIFRva2VuOiAke29yZGVyUmVzcG9uc2UudG9rZW59PGJyPlxyXG4gICAgICAgICAgICAgICAgIC0gT3JkZXIgaWQ6ICR7b3JkZXJSZXNwb25zZS5vcmRlcl9pZH08YnI+IFxyXG4gICAgICAgICAgICAgICAgYDtcclxuXHJcbiAgLy9nZXQgdGhlIHJldm9sdXQgY2hlY2tvdXQgaW5zdGFuY2VcclxuICBjb25zdCBpbnN0YW5jZSA9IGF3YWl0IFJldm9sdXRDaGVja291dChvcmRlclJlc3BvbnNlLnRva2VuLCBcInNhbmRib3hcIik7XHJcblxyXG4gIC8vIGNyZWF0ZXMgY2FyZCBmaWVsZCBhbmQgbW91bnRzIGl0IHRvIHRoZSBcImNhcnQtZmllbGRcIiBkaXZcclxuICBjb25zdCBjYXJkRmllbGQgPSBpbnN0YW5jZS5jcmVhdGVDYXJkRmllbGQoe1xyXG4gICAgdGFyZ2V0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcnQtZmllbGRcIiksXHJcbiAgICAvLyBIYW5kbGUgZXZlbnRzIHJlbGF0ZWQgdG8gdGhlIHBheW1lbnRcclxuICAgIG9uU3VjY2VzcygpIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXltZW50LXN0YXR1c1wiKS5pbm5lclRleHQgPVxyXG4gICAgICAgIFwiUGF5bWVudCBTdWNjZXNmdWxsXCI7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF5bWVudC1zdGF0dXNcIikuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XHJcbiAgICAgIHdpbmRvdy5hbGVydChcIlRoYW5rIHlvdSBmb3IgeW91ciBwdXJjaGFzZSFcIik7XHJcbiAgICB9LFxyXG4gICAgb25FcnJvcihlcnJvcikge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICBcInBheW1lbnQtc3RhdHVzXCJcclxuICAgICAgKS5pbm5lclRleHQgPSBgUGF5bWVudCBmYWlsZWQ6ICR7ZXJyb3J9YDtcclxuXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF5bWVudC1zdGF0dXNcIikuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xyXG5cclxuICAgICAgd2luZG93LmFsZXJ0KGBPZXBzIHNvbWV0aGluIGhhcHBlbmQgOiguICR7ZXJyb3J9YCk7XHJcbiAgICB9LFxyXG4gICAgdGhlbWU6IFwibGlnaHRcIixcclxuICAgIHN0eWxlczoge1xyXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNhZTlmOVwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgLy9Bc2sgZm9yIGNhcmQgZGV0YWlscyBhbmQgc2hvdyBwYXltZW50IGJ1dHRvblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXNrLWNhcmQtZGV0YWlsc1wiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0LWZpZWxkXCIpLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNhZTlmOWZcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1wYXlcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gIC8vY29uc29sZS5sb2coY2FyZEZpZWxkKTtcclxuXHJcbiAgLy9BZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHBheSBidXR0b25cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1wYXlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNhcmRGaWVsZC5zdWJtaXQoe1xyXG4gICAgICAvL2JvdGggZmllbGRzIGFyZSByZXF1aXJlZFxyXG4gICAgICBcImVtYWlsXCI6IFwiZmluYW5jZXRvZmlyZUBob3RtYWlsLmNvbVwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJKb3JkaWUgU2ltb25zXCIsXHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbi8vIFJlZmVyZW5jZSB0byBwcmljZSBpbnB1dCBlbGVtZW50IGluIHRoZSB3ZWJwYWdlXHJcbmNvbnN0IG9yZGVyUHJpY2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmRlci1wcmljZVwiKTtcclxuXHJcbi8vIEV2ZW50bGlzdGVuZXIgdG8gY3JlYXRlIG9yZGVyXHJcbmRvY3VtZW50XHJcbiAgLmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNyZWF0ZS1vcmRlclwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZ2V0T3JkZXJDYXJkRmllbGQob3JkZXJQcmljZUVsZW1lbnQudmFsdWUpKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9