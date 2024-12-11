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



//Global Variables
let token = "";
let orderId = "";
let publicKey = "pk_kIU6iOgto5T2fVasDCcDzoc8KE3ANwfPfl2Afd1vEhu9AZsa";

//Payment processor object
const paymentProcessor = {
  cardField: null,
  popup: null,
};

//Successful payment
paymentProcessor.succesFullTransaction = async function () {
  console.log("success");
  window.location.href = `/order-status-page?state=success`;
  // document.getElementById("payment-status").innerText = "Payment Successful";
  // document.getElementById("payment-status").style.color = "green";
  // window.alert("Thank you for your purchase!");
};
//Failed payment
paymentProcessor.failedTransaction = function (error) {
  document.getElementById(
    "payment-status"
  ).innerText = `Payment failed: ${error}`;
  document.getElementById("payment-status").style.color = "red";
  window.alert(`Oeps somethin happend :(. ${error}`);
};

// Select Payment method
paymentProcessor.selectedPaymentMethod = async function (
  methodSelected,
  element
) {
  console.log(methodSelected);
  console.log(this);
  const tokenReq =
    methodSelected !== "revolut-pay" && methodSelected !== "apple-google-pay";
  if (!token && tokenReq) alert("Please create an order first!");
  if (!token && tokenReq) element.checked = false;
  if (!token && tokenReq) return;
  if (this.cardField) this.cardField.destroy();

  console.log(`The token is: ${token}`);
  switch (methodSelected) {
    case "revolut-pay":
      await this.revolutPay();
      break;
    case "apple-google-pay":
      await this.appleGooglePay();
      break;
    case "payment-links":
      console.log("here");
      await getCheckout(orderId);
      break;
    case "universal-link":
      await this.universalLink();
      break;
    case "card-field":
      this.createCardField(token);
      break;
    case "pop-up":
      this.createPopup(token);
      break;
    default:
      break;
  }
};

//QUESTION: REMOVING THE EMAIL FROM THE CUSTOMER OBJECT MAKES THAT THE EMAIL IS REQUESted IN THE POPUP FIELD
// --> STILL GET EN ERROR WHEN I FILL IT IN ? WHY ?
// --> Save payment Merthod for caused the problem
paymentProcessor.popUpOptions = {
  name: "Jordie Simons", // [OPT] Card holder firstname and lastname -> not send -> asked in the popup
  email: "teststorerev@gamil.com", // [OPT] Customer email -> Not send -> asked in the popup
  phone: "0497160655", // [OPT] Customer phone number
  locale: "ES", //[OPT] Controls the language of the text in the widget - Default detects the browser language
  upsellBanner: true, // [OPT] Controls if the upsell banner is displayed in the popup
  // savePaymentMethodFor: "merchant", // [OPT] Can choose merchant/customer - merchant can initiate transactions
  billingAddress: {
    // Is requeried if not set on order via API
    countryCode: "ES", // [REQ]
    region: "Alicante", // [OPT]
    city: "Xabia", // [OPT]
    postcode: "03730", // [REQ]
    streetLine1: "Carrer Thiviers 2", // [OPT]
    streetLine2: "aka paradise",
  },
  shippingAddress: {
    // Same as billing will be displayed on order details Merchant Dashboard
    countryCode: "ES", // [REQ]
    region: "Alicante", // [OPT]
    city: "Xabia", // [OPT]
    postcode: "03730", // [REQ]
    streetLine1: "Carrer Thiviers 2", // [OPT]
    streetLine2: "aka paradise",
  },
};

paymentProcessor.meta = {
  name: "Jordie Simons", // [REQ] used as cardholder name if not specified
  email: "test@revolut.com", // [OPT] // [REQ] This is required if not set onder the order API
  phone: "0497160655", //[OPT]
  //savePaymentMethodFor: "merchant", // [OPT] "customer"
  cardholderName: "First Last", // [OPT]
  billingAddress: {
    countryCode: "BE",
    region: "Limburg",
    city: "Hamont",
    postcode: "3930",
    streetLine1: "test 123",
    streetLine2: "",
  },
  shippingAddress: {
    //Displayed only in the order details on the Merchant Dashboard
    countryCode: "BE",
    postcode: "3930",
  },
};
// Create Cardfield
paymentProcessor.createCardField = async function (token) {
  //get the revolut checkout instance
  const instance = await (0,_revolut_checkout__WEBPACK_IMPORTED_MODULE_0__["default"])(token, "sandbox");
  // creates card field and mounts it to the "cart-field" div
  this.cardField = instance.createCardField({
    target: document.getElementById("cart-field"), // DOM element where secure iframe with card field is rendered
    // Handle events related to the payment
    onSuccess: () => this.succesFullTransaction(), // Callback when transaction is completed successfuly
    onError: (error) => this.failedTransaction(error), // Callback if the tranaction fails to complete, the reason is in the msg parameter
    onValidation: (message) => {
      console.log(message);
      return false;
    }, // Callback called on validation of status change, function contains msg as first parameter.
    onCancel: () => console.log("Cancelled"), // Gets called when user cancclled the authorisation or closed the pop-up
    locale: "auto", // Controls the language of the widget
    theme: "light", // Cibtriks the color scheme of the widget
    styles: {
      // Applies styles within the iframe
      default: {
        color: "#000",
        backgroundColor: "brown",
        "::placeholder": { color: "#00FF00" },
      },
      focused: {
        backgroundColor: "yellow",
      },
    },
    classes: {
      // Applies style outside the iframe
      default: "custom-card-field",
      focused: "custom-card-field-focused",
      invalid: "custom-card-field-invalid",
      completed: "custom-card-field-completed",
    },
  });

  //Ask for card details and show payment button
  document.getElementById("ask-card-details").style.visibility = "visible";
  document.getElementById("cart-field").style.border = "1px solid #ae9f9f";
  document.getElementById("button-pay").style.visibility = "visible";
  //console.log(cardField);

  //Add event listener to the pay button
  document.getElementById("button-pay").addEventListener(
    "click",
    function () {
      this.cardField.submit({
        //both fields are required
        // email: "financetofire@hotmail.com",
        // name: "Jordie Simons",
        // savePaymentMethodFor: "merchant",
        ...paymentProcessor.meta,
      });
    }.bind(paymentProcessor)
  );
};

// Create PopUp field
paymentProcessor.createPopup = async function (token) {
  const instance = await (0,_revolut_checkout__WEBPACK_IMPORTED_MODULE_0__["default"])(token, "sandbox");
  this.popup = instance.payWithPopup({
    onSuccess: () => this.succesFullTransaction(), // Callback onsuccesfull payment
    onError: (error) => this.failedTransaction(error), // Callback if tranaction fails to complete -> Error contains the reasing
    onCancel: () => console.log("cancel"), // Gets called when user cancclled the authorisation or closed the pop-up
    ...this.popUpOptions,
  });
};

// Create Revolut Pay
paymentProcessor.revolutPay = async function () {
  const { revolutPay } = await _revolut_checkout__WEBPACK_IMPORTED_MODULE_0__["default"].payments({
    locale: "en", // [OPT], defaults to 'auto'
    mode: "sandbox", // [OPT], defaults to 'prod'
    publicToken: "pk_TluI4mRr0NNWTi142IykfDmFTbqcBy6SoauvntAW0jEptRzo", // [REQ] Merchant public API key
  });

  const paymentOptions = {
    currency: "GBP", // 3-letter currency code
    totalAmount: document.getElementById("order-price").value * 100, // In lowest denomination e.g., cents
    //requestShipping: true, // shipping and delivery address collected, your backend must support fast checkout for this functionallity
    savePaymentMethodForMerchant: true, //Reoccuring payments, for customer not needed as it part of RevPay

    // If you wish to implement Revolut Pay with event listening and mobile redirect URLs (skip this option if you only listen to events or only use redirect URLs):
    mobileRedirectUrls: {
      success: "https://www.example.com/success",
      failure: "https://www.example.com/failure",
      cancel: "https://www.example.com/cancel",
    },

    // If you wish to implement Revolut Pay with redirect URLs (skip this option if you listen to events):
    // redirectUrls: {
    //   success: "https://www.example.com/success",
    //   failure: "https://www.example.com/failure",
    //   cancel: "https://www.example.com/cancel",
    // },

    createOrder: async () => {
      // Call your backend here to create an order
      // For more information, see: https://developer.revolut.com/docs/merchant/create-order
      const order = await createOrder(
        document.getElementById("order-price").value
      );
      return { publicId: order.token };
    },

    // You can put other optional parameters here
    lineItems: [
      {
        name: "Products 1", // [REQ]
        totalAmount: document.getElementById("order-price").value * 100, // [REQ]
        unitPriceAmount: document.getElementById("order-price").value * 100, // [REQ]
        quantity: {
          // [OPT]
          value: 1,
          unit: "PIECES",
        },
        type: "PHYSICAL", //[OPT] TAX, GIFT, MISC, REFUND, CHARGE, SERVICE, PHYSICAL, ADJUSTMENT
        productId: "ID1", // [OPT]
        productUrl: "www.yourock.com", // [OPT]
        description: "Best product in the world", // [OPT]
      },
      {
        name: "Products 2",
        totalAmount: document.getElementById("order-price").value * 100,
        unitPriceAmount: document.getElementById("order-price").value * 100,
        quantity: {
          value: 1,
          unit: "PIECES",
        },
        type: "SERVICE",
        productId: "ID2",
        productUrl: "www.yourock.com",
        description: "Best product in the world",
      },
    ],

    buttonStyle: {
      height: "50px",
      size: "large",
      variant: "dark",
      radius: "round",
      cashback: "true",
      cashbackCurrency: "EUR",
    },

    popupOptions: {
      closeOnOverlayClick: false,
    },

    validate: async () => {
      return new Promise((resolve) => resolve(true)); // If false then it won't open the popup field
    },
    // customer: {
    //   email: "revtest@gmail.com",
    // },
  };

  revolutPay.mount(document.getElementById("cart-field"), paymentOptions);

  // Call this method if you wish to implement Revolut Pay with event listening (skip this option if you use redirect URLs):
  revolutPay.on("payment", (event) => {
    switch (event.type) {
      case "cancel": {
        if (event.dropOffState === "payment_summary") {
          console.log("what a shame, please complete your payment");
        }
        break;
      }

      case "success":
        this.succesFullTransaction();
        break;

      case "error":
        console.log(event.error);
        break;
    }
  });
};

// Create Apple/Google Pay

paymentProcessor.appleGooglePay = async function () {
  const { paymentRequest } = await _revolut_checkout__WEBPACK_IMPORTED_MODULE_0__["default"].payments({
    locale: "en", // [OPT], defaults to 'auto'
    publicToken: "pk_kIU6iOgto5T2fVasDCcDzoc8KE3ANwfPfl2Afd1vEhu9AZsa", // [REQ] Merchant public API key
  });

  const paymentOptions = {
    currency: "GBP",
    amount: document.getElementById("order-price").value * 100,

    // Call your backend here to create an order
    // For more information, see: https://developer.revolut.com/docs/merchant/create-order
    createOrder: async () => {
      const order = await createOrder(
        document.getElementById("order-price").value
      );
      return { publicId: order.token };
    },
    onSuccess() {
      this.succesFullTransaction();
    },
    onError(error) {
      console.log(error);
    },
  };

  console.log(paymentRequest);
  const instance = paymentRequest(
    document.getElementById("cart-field"),
    paymentOptions
  );

  const method = await instance.canMakePayment();
  if (method) {
    instance.render();
  } else {
    instance.destroy();
  }
};

// Create universtal link
paymentProcessor.universalLink = function () {
  const tunnelUrl = "https://046d-90-169-234-18.ngrok-free.app";
  //--------- MINIMUM Parameters ---------
  let universalLinkUrl = `https://sandbox-checkout.revolut.com/revolut-pay/order/${token}?publicToken=${publicKey}`;
  universalLinkUrl += `&redirectUrls.success=${tunnelUrl}/order-status-page?state=success`;
  universalLinkUrl += `&redirectUrls.failure=${tunnelUrl}/order-status-page?state=failure`;
  universalLinkUrl += `&redirectUrls.cancel=${tunnelUrl}/order-status-page?state=cancel`;
  //--------- MINIMUM Parameters ---------
  universalLinkUrl += `&locale=es`; // Controls language of Revolut Pay
  universalLinkUrl += `&requestShipping=false`; // Shipping and delivery method are quicky collected - can't be both true with
  universalLinkUrl += `&savePaymentMethodForMerchant=false`; // Controls language of Revolut Pay  - can't be both true with
  //--------- Question ---------
  universalLinkUrl += `&appReturnURL=www.example.com/test`; // So this url will be called when you are using the revolut app?
  universalLinkUrl += `&customer.phone=+32497160621`; // Where is this information added and what if the customer already exists?
  universalLinkUrl += `&customer.email=teststore@gmail.com`;
  universalLinkUrl += `&customer.name=toni+simoni`;
  universalLinkUrl += `&customer.dob.day=31`;
  universalLinkUrl += `&customer.dob.month=03`;
  universalLinkUrl += `&customer.dob.year=1990`;
  //--------- Question ---------

  console.log(universalLinkUrl);
  window.location.href = universalLinkUrl;
};

const getCheckout = async function (orderId) {
  try {
    const res = await fetch(`/order-detials?orderId=${orderId}`);
    if (!res.ok) throw new Error("Failed to fetch checkout page");
    const { checkout_url } = await res.json();
    window.location.href = checkout_url;
  } catch (error) {
    console.error(error);
  }
};

const createOrder = async function (price = 0) {
  console.log("creating order NOW for RevPay");
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
  ({ token, orderId } = orderResponse);
  console.log(orderResponse);

  //Show order token and order_id in webpage
  document.getElementById(
    "order-info"
  ).innerHTML = `<b>Order has been created:</b><br>
                 - Token: ${orderResponse.token}<br>
                 - Order id: ${orderResponse.orderId}<br> 
                `;

  return orderResponse;
};

const selectedPaymentOption = function () {};

// Reference to price input element in the webpage
const orderPriceElement = document.getElementById("order-price");

// Eventlistener to create order
document
  .getElementById("button-create-order")
  .addEventListener("click", () => createOrder(orderPriceElement.value));

// Select the payment options
const paymentOptionDiv = document.getElementById("payment-options-selection");
const paymentOptions = paymentOptionDiv.querySelectorAll(
  'input[name="payment-method"]'
);
paymentOptions.forEach((selector) =>
  selector.addEventListener("change", function () {
    paymentProcessor.selectedPaymentMethod(selector.value, this);
  })
);

// Destroy cardfield
document.getElementById("button-destroy").addEventListener("click", () => {
  document.getElementById("ask-card-details").style.visibility = "hidden";
  document.getElementById("button-pay").style.visibility = "hidden";
  document.getElementById("cart-field").style.visibility = "hidden";
  paymentProcessor.cardField.destroy();
});

window.test = function () {
  console.log("You rock");
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9DQUFvQztBQUNuRDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBLDBDQUEwQyxJQUFJO0FBQzlDLEtBQUssaUJBQWlCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRCwrQkFBK0Isc0JBQXNCO0FBQ3JEOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmV2b2x1dGhvbWV0YXNrLy4vbm9kZV9tb2R1bGVzL0ByZXZvbHV0L2NoZWNrb3V0L2VzbS9jaGVja3MuanMiLCJ3ZWJwYWNrOi8vcmV2b2x1dGhvbWV0YXNrLy4vbm9kZV9tb2R1bGVzL0ByZXZvbHV0L2NoZWNrb3V0L2VzbS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcmV2b2x1dGhvbWV0YXNrLy4vbm9kZV9tb2R1bGVzL0ByZXZvbHV0L2NoZWNrb3V0L2VzbS9oZWxwZXJzLmpzIiwid2VicGFjazovL3Jldm9sdXRob21ldGFzay8uL25vZGVfbW9kdWxlcy9AcmV2b2x1dC9jaGVja291dC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmV2b2x1dGhvbWV0YXNrLy4vbm9kZV9tb2R1bGVzL0ByZXZvbHV0L2NoZWNrb3V0L2VzbS9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcmV2b2x1dGhvbWV0YXNrLy4vbm9kZV9tb2R1bGVzL0ByZXZvbHV0L2NoZWNrb3V0L2VzbS9wYXltZW50c0xvYWRlci5qcyIsIndlYnBhY2s6Ly9yZXZvbHV0aG9tZXRhc2svLi9ub2RlX21vZHVsZXMvQHJldm9sdXQvY2hlY2tvdXQvZXNtL3Vwc2VsbExvYWRlci5qcyIsIndlYnBhY2s6Ly9yZXZvbHV0aG9tZXRhc2svLi9ub2RlX21vZHVsZXMvQHJldm9sdXQvY2hlY2tvdXQvZXNtL3V0aWxzLmpzIiwid2VicGFjazovL3Jldm9sdXRob21ldGFzay8uL25vZGVfbW9kdWxlcy9AcmV2b2x1dC9jaGVja291dC9lc20vdmVyc2lvbkxvYWRlci5qcyIsIndlYnBhY2s6Ly9yZXZvbHV0aG9tZXRhc2svd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmV2b2x1dGhvbWV0YXNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXZvbHV0aG9tZXRhc2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXZvbHV0aG9tZXRhc2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXZvbHV0aG9tZXRhc2svLi9zcmMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExPQ0FMRVMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZGF0aW9uRXJyb3IoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgIT0gbnVsbCAmJiBlcnJvci5uYW1lID09PSAnVmFsaWRhdGlvbic7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNSZXZvbHV0Q2hlY2tvdXRFcnJvcihlcnJvcikge1xuICAgIHJldHVybiBlcnJvciAhPSBudWxsICYmIGVycm9yLm5hbWUgPT09ICdSZXZvbHV0Q2hlY2tvdXQnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRMb2NhbGUobG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBMT0NBTEVTLnNvbWUoZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZSA9PT0gbG9jYWxlOyB9KTtcbn1cbiIsInZhciBfYTtcbmV4cG9ydCB2YXIgTE9DQUxFUyA9IFtcbiAgICAnZW4nLFxuICAgICdlbi1VUycsXG4gICAgJ25sJyxcbiAgICAnZnInLFxuICAgICdkZScsXG4gICAgJ2NzJyxcbiAgICAnaXQnLFxuICAgICdsdCcsXG4gICAgJ3BsJyxcbiAgICAncHQnLFxuICAgICdlcycsXG4gICAgJ2h1JyxcbiAgICAnc2snLFxuICAgICdqYScsXG4gICAgJ3N2JyxcbiAgICAnYmcnLFxuICAgICdybycsXG4gICAgJ2VsJyxcbiAgICAnaHInLFxuXTtcbmV4cG9ydCB2YXIgTU9ERSA9IHtcbiAgICBQUk9EVUNUSU9OOiAncHJvZCcsXG4gICAgREVWRUxPUE1FTlQ6ICdkZXYnLFxuICAgIFNBTkRCT1g6ICdzYW5kYm94Jyxcbn07XG5leHBvcnQgdmFyIFVSTFMgPSAoX2EgPSB7fSxcbiAgICBfYVtNT0RFLlNBTkRCT1hdID0ge1xuICAgICAgICBlbWJlZDogJ2h0dHBzOi8vc2FuZGJveC1tZXJjaGFudC5yZXZvbHV0LmNvbS9lbWJlZC5qcycsXG4gICAgICAgIHZlcnNpb246ICdodHRwczovL3NhbmRib3gtbWVyY2hhbnQucmV2b2x1dC5jb20vdmVyc2lvbi5qcycsXG4gICAgICAgIHVwc2VsbDogJ2h0dHBzOi8vc2FuZGJveC1tZXJjaGFudC5yZXZvbHV0LmNvbS91cHNlbGwvZW1iZWQuanMnLFxuICAgIH0sXG4gICAgX2FbTU9ERS5QUk9EVUNUSU9OXSA9IHtcbiAgICAgICAgZW1iZWQ6ICdodHRwczovL21lcmNoYW50LnJldm9sdXQuY29tL2VtYmVkLmpzJyxcbiAgICAgICAgdmVyc2lvbjogJ2h0dHBzOi8vbWVyY2hhbnQucmV2b2x1dC5jb20vdmVyc2lvbi5qcycsXG4gICAgICAgIHVwc2VsbDogJ2h0dHBzOi8vbWVyY2hhbnQucmV2b2x1dC5jb20vdXBzZWxsL2VtYmVkLmpzJyxcbiAgICB9LFxuICAgIF9hW01PREUuREVWRUxPUE1FTlRdID0ge1xuICAgICAgICBlbWJlZDogJ2h0dHBzOi8vbWVyY2hhbnQucmV2b2x1dC5jb2Rlcy9lbWJlZC5qcycsXG4gICAgICAgIHZlcnNpb246ICdodHRwczovL21lcmNoYW50LnJldm9sdXQuY29kZXMvdmVyc2lvbi5qcycsXG4gICAgICAgIHVwc2VsbDogJ2h0dHBzOi8vbWVyY2hhbnQucmV2b2x1dC5jb2Rlcy91cHNlbGwvZW1iZWQuanMnLFxuICAgIH0sXG4gICAgX2EpO1xuZXhwb3J0IHZhciBSRVZPTFVUX1BBWV9PUkRFUl9JRF9VUkxfUEFSQU1FVEVSID0gJ19ycF9vaWQnO1xuZXhwb3J0IHZhciBSRVZPTFVUX1BBWV9TVUNDRVNTX1JFRElSRUNUX1VSTF9QQVJBTUVURVIgPSAnX3JwX3MnO1xuZXhwb3J0IHZhciBSRVZPTFVUX1BBWV9GQUlMVVJFX1JFRElSRUNUX1VSTF9QQVJBTUVURVIgPSAnX3JwX2ZyJztcbiIsImltcG9ydCB7IFJFVk9MVVRfUEFZX09SREVSX0lEX1VSTF9QQVJBTUVURVIsIFJFVk9MVVRfUEFZX1NVQ0NFU1NfUkVESVJFQ1RfVVJMX1BBUkFNRVRFUiwgUkVWT0xVVF9QQVlfRkFJTFVSRV9SRURJUkVDVF9VUkxfUEFSQU1FVEVSLCB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBnZXRTZWFyY2hQYXJhbXNCeU5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldChuYW1lKTtcbn07XG4vKipcbiAqIFJldHJpZXZlIHRoZSByZXZvbHV0IHBheSBvcmRlciBJRCBVUkwgcGFyYW1ldGVyIHVwb24gcmVkaXJlY3QgdG8geW91ciBtZXJjaGFudCBzaXRlXG4gKi9cbmV4cG9ydCB2YXIgZ2V0UmV2b2x1dFBheU9yZGVySWRVUkxQYXJhbSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0U2VhcmNoUGFyYW1zQnlOYW1lKFJFVk9MVVRfUEFZX09SREVSX0lEX1VSTF9QQVJBTUVURVIpO1xufTtcbi8qKlxuICogUmV0cmlldmUgdGhlIHJldm9sdXQgcGF5IHN1Y2Nlc3MgVVJMIHBhcmFtZXRlciB1cG9uIHJlZGlyZWN0IHRvIHlvdXIgbWVyY2hhbnQgc2l0ZVxuICovXG5leHBvcnQgdmFyIGdldFJldm9sdXRQYXlTdWNjZXNzVVJMUGFyYW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdldFNlYXJjaFBhcmFtc0J5TmFtZShSRVZPTFVUX1BBWV9TVUNDRVNTX1JFRElSRUNUX1VSTF9QQVJBTUVURVIpO1xufTtcbi8qKlxuICogUmV0cmlldmUgdGhlIHJldm9sdXQgcGF5IGZhaWx1cmUgVVJMIHBhcmFtZXRlciB1cG9uIHJlZGlyZWN0IHRvIHlvdXIgbWVyY2hhbnQgc2l0ZVxuICovXG5leHBvcnQgdmFyIGdldFJldm9sdXRQYXlGYWlsdXJlVVJMUGFyYW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdldFNlYXJjaFBhcmFtc0J5TmFtZShSRVZPTFVUX1BBWV9GQUlMVVJFX1JFRElSRUNUX1VSTF9QQVJBTUVURVIpO1xufTtcbiIsImV4cG9ydCB7IFJldm9sdXRDaGVja291dExvYWRlciBhcyBkZWZhdWx0IH0gZnJvbSAnLi9sb2FkZXInO1xuZXhwb3J0IHsgaXNSZXZvbHV0Q2hlY2tvdXRFcnJvciwgaXNWYWxpZGF0aW9uRXJyb3IsIGlzVmFsaWRMb2NhbGUsIH0gZnJvbSAnLi9jaGVja3MnO1xuZXhwb3J0IHsgZ2V0UmV2b2x1dFBheU9yZGVySWRVUkxQYXJhbSwgZ2V0UmV2b2x1dFBheVN1Y2Nlc3NVUkxQYXJhbSwgZ2V0UmV2b2x1dFBheUZhaWx1cmVVUkxQYXJhbSwgfSBmcm9tICcuL2hlbHBlcnMnO1xuIiwiaW1wb3J0IHsgTU9ERSwgVVJMUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IFJldm9sdXRQYXltZW50c0xvYWRlciB9IGZyb20gJy4vcGF5bWVudHNMb2FkZXInO1xuaW1wb3J0IHsgZ2V0VmVyc2lvbmVkVXJsLCBsb2FkTW9kdWxlIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBSZXZvbHV0VXBzZWxsTG9hZGVyIH0gZnJvbSAnLi91cHNlbGxMb2FkZXInO1xuaW1wb3J0IHsgUmV2b2x1dFBheW1lbnRzVmVyc2lvbkxvYWRlciB9IGZyb20gJy4vdmVyc2lvbkxvYWRlcic7XG52YXIgbG9hZGVkID0gbnVsbDtcbi8qKlxuICogTG9hZCBbYFJldm9sdXRDaGVja291dC5qc2BdKGh0dHBzOi8vZGV2ZWxvcGVyLnJldm9sdXQuY29tL2RvY3MvcmV2b2x1dC1jaGVja291dC1qcy8jcmV2b2x1dGNoZWNrb3V0KVxuICogYW5kIGNyZWF0ZSBbYEluc3RhbmNlYF0oaHR0cHM6Ly9kZXZlbG9wZXIucmV2b2x1dC5jb20vZG9jcy9yZXZvbHV0LWNoZWNrb3V0LWpzLyNpbnN0YW5jZSkgZm9yIHRoZSBvcmRlciBgdG9rZW5gLlxuICpcbiAqIEBwYXJhbSB0b2tlbiBgcHVibGljX2lkYCAgZnJvbSBbY3JlYXRlIHBheW1lbnQgb3JkZXJdKGh0dHBzOi8vZGV2ZWxvcGVyLnJldm9sdXQuY29tL2FwaS1yZWZlcmVuY2UvbWVyY2hhbnQvI29wZXJhdGlvbi9jcmVhdGVPcmRlcikgQVBJIHJlcXVlc3RcbiAqIEBwYXJhbSBtb2RlIFtBUEldKGh0dHBzOi8vZGV2ZWxvcGVyLnJldm9sdXQuY29tL2RvY3MvcmV2b2x1dC1jaGVja291dC1qcy8jcmV2b2x1dGNoZWNrb3V0LXBhcmFtZXRlcnMpIGVudmlyb25tZW50LCBkZWZhdWx0cyB0byBgJ3Byb2QnYFxuICpcbiAqIEBzZWUgW2BSZXZvbHV0Q2hlY2tvdXQuanNgIHJlZmVyZW5jZV0oaHR0cHM6Ly9kZXZlbG9wZXIucmV2b2x1dC5jb20vZG9jcy9yZXZvbHV0LWNoZWNrb3V0LWpzKVxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogUmV2b2x1dENoZWNrb3V0KCdUT0tFTl9YWFgnLCAncHJvZCcpLnRoZW4oZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAqICAgLy8gV29yayB3aXRoIGluc3RhbmNlXG4gKiB9KTtcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gUmV2b2x1dENoZWNrb3V0TG9hZGVyKHRva2VuLCBtb2RlKSB7XG4gICAgaWYgKG1vZGUgPT09IHZvaWQgMCkgeyBtb2RlID0gUmV2b2x1dENoZWNrb3V0TG9hZGVyLm1vZGU7IH1cbiAgICBpZiAobG9hZGVkKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobG9hZGVkKHRva2VuKSk7XG4gICAgfVxuICAgIHJldHVybiBSZXZvbHV0UGF5bWVudHNWZXJzaW9uTG9hZGVyKG1vZGUpLnRoZW4oZnVuY3Rpb24gKHZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIGxvYWRSZXZvbHV0Q2hlY2tvdXQodmVyc2lvbiwgdG9rZW4sIG1vZGUpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gbG9hZFJldm9sdXRDaGVja291dCh2ZXJzaW9uLCB0b2tlbiwgbW9kZSkge1xuICAgIHJldHVybiBsb2FkTW9kdWxlKHtcbiAgICAgICAgc3JjOiBnZXRWZXJzaW9uZWRVcmwoVVJMU1ttb2RlXS5lbWJlZCwgdmVyc2lvbiksXG4gICAgICAgIGlkOiAncmV2b2x1dC1jaGVja291dCcsXG4gICAgICAgIG5hbWU6ICdSZXZvbHV0Q2hlY2tvdXQnLFxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHNjcmlwdEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBSZXZvbHV0Q2hlY2tvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxvYWRlZCA9IFJldm9sdXRDaGVja291dDtcbiAgICAgICAgICAgIGRlbGV0ZSB3aW5kb3cuUmV2b2x1dENoZWNrb3V0O1xuICAgICAgICAgICAgcmV0dXJuIGxvYWRlZCh0b2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKHNjcmlwdEVsZW1lbnQpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ1Jldm9sdXRDaGVja291dCcgZmFpbGVkIHRvIGxvYWQ6IFJldm9sdXRDaGVja291dCBpcyBub3QgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuUmV2b2x1dENoZWNrb3V0TG9hZGVyLm1vZGUgPSBNT0RFLlBST0RVQ1RJT047XG5SZXZvbHV0Q2hlY2tvdXRMb2FkZXIucGF5bWVudHMgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgbG9jYWxlID0gX2EubG9jYWxlLCBwdWJsaWNUb2tlbiA9IF9hLnB1YmxpY1Rva2VuLCBfYiA9IF9hLm1vZGUsIG1vZGUgPSBfYiA9PT0gdm9pZCAwID8gUmV2b2x1dENoZWNrb3V0TG9hZGVyLm1vZGUgOiBfYjtcbiAgICByZXR1cm4gUmV2b2x1dFBheW1lbnRzTG9hZGVyKHB1YmxpY1Rva2VuLCBtb2RlLCBsb2NhbGUpO1xufTtcblJldm9sdXRDaGVja291dExvYWRlci51cHNlbGwgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgbG9jYWxlID0gX2EubG9jYWxlLCBwdWJsaWNUb2tlbiA9IF9hLnB1YmxpY1Rva2VuLCBfYiA9IF9hLm1vZGUsIG1vZGUgPSBfYiA9PT0gdm9pZCAwID8gUmV2b2x1dENoZWNrb3V0TG9hZGVyLm1vZGUgOiBfYjtcbiAgICByZXR1cm4gUmV2b2x1dFVwc2VsbExvYWRlcihwdWJsaWNUb2tlbiwgbW9kZSwgbG9jYWxlKTtcbn07XG4iLCJpbXBvcnQgeyBNT0RFLCBVUkxTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0VmVyc2lvbmVkVXJsLCBsb2FkTW9kdWxlIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBSZXZvbHV0UGF5bWVudHNWZXJzaW9uTG9hZGVyIH0gZnJvbSAnLi92ZXJzaW9uTG9hZGVyJztcbnZhciBsb2FkZWRQYXltZW50SW5zdGFuY2UgPSBudWxsO1xuZXhwb3J0IGZ1bmN0aW9uIFJldm9sdXRQYXltZW50c0xvYWRlcih0b2tlbiwgbW9kZSwgbG9jYWxlKSB7XG4gICAgaWYgKG1vZGUgPT09IHZvaWQgMCkgeyBtb2RlID0gUmV2b2x1dFBheW1lbnRzTG9hZGVyLm1vZGU7IH1cbiAgICBpZiAobG9hZGVkUGF5bWVudEluc3RhbmNlKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IGxvYWRlZFBheW1lbnRJbnN0YW5jZSh7IHB1YmxpY1Rva2VuOiB0b2tlbiwgbG9jYWxlOiBsb2NhbGUgfSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaW5zdGFuY2UpO1xuICAgIH1cbiAgICByZXR1cm4gUmV2b2x1dFBheW1lbnRzVmVyc2lvbkxvYWRlcihtb2RlKS50aGVuKGZ1bmN0aW9uICh2ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiBsb2FkUmV2b2x1dFBheW1lbnRzKHZlcnNpb24sIHRva2VuLCBtb2RlLCBsb2NhbGUpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gbG9hZFJldm9sdXRQYXltZW50cyh2ZXJzaW9uLCB0b2tlbiwgbW9kZSwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvYWRNb2R1bGUoe1xuICAgICAgICBzcmM6IGdldFZlcnNpb25lZFVybChVUkxTW21vZGVdLmVtYmVkLCB2ZXJzaW9uKSxcbiAgICAgICAgaWQ6ICdyZXZvbHV0LXBheW1lbnRzJyxcbiAgICAgICAgbmFtZTogJ1Jldm9sdXRQYXltZW50cycsXG4gICAgfSkudGhlbihmdW5jdGlvbiAoc2NyaXB0RWxlbWVudCkge1xuICAgICAgICBpZiAodHlwZW9mIFJldm9sdXRDaGVja291dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbG9hZGVkUGF5bWVudEluc3RhbmNlID0gUmV2b2x1dENoZWNrb3V0LnBheW1lbnRzO1xuICAgICAgICAgICAgZGVsZXRlIHdpbmRvdy5SZXZvbHV0Q2hlY2tvdXQ7XG4gICAgICAgICAgICByZXR1cm4gbG9hZGVkUGF5bWVudEluc3RhbmNlKHsgcHVibGljVG9rZW46IHRva2VuLCBsb2NhbGU6IGxvY2FsZSB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoc2NyaXB0RWxlbWVudCk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCInUmV2b2x1dFBheW1lbnRzJyBmYWlsZWQgdG8gbG9hZDogUmV2b2x1dENoZWNrb3V0IGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5SZXZvbHV0UGF5bWVudHNMb2FkZXIubW9kZSA9IE1PREUuUFJPRFVDVElPTjtcbiIsImltcG9ydCB7IE1PREUsIFVSTFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRWZXJzaW9uZWRVcmwsIGxvYWRNb2R1bGUgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFJldm9sdXRQYXltZW50c1ZlcnNpb25Mb2FkZXIgfSBmcm9tICcuL3ZlcnNpb25Mb2FkZXInO1xudmFyIGxvYWRlZFVwc2VsbEluc3RhbmNlID0gbnVsbDtcbmV4cG9ydCBmdW5jdGlvbiBSZXZvbHV0VXBzZWxsTG9hZGVyKHRva2VuLCBtb2RlLCBsb2NhbGUpIHtcbiAgICBpZiAobW9kZSA9PT0gdm9pZCAwKSB7IG1vZGUgPSBSZXZvbHV0VXBzZWxsTG9hZGVyLm1vZGU7IH1cbiAgICBpZiAobG9hZGVkVXBzZWxsSW5zdGFuY2UpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gbG9hZGVkVXBzZWxsSW5zdGFuY2UoeyBwdWJsaWNUb2tlbjogdG9rZW4sIGxvY2FsZTogbG9jYWxlIH0pO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGluc3RhbmNlKTtcbiAgICB9XG4gICAgcmV0dXJuIFJldm9sdXRQYXltZW50c1ZlcnNpb25Mb2FkZXIobW9kZSkudGhlbihmdW5jdGlvbiAodmVyc2lvbikge1xuICAgICAgICByZXR1cm4gbG9hZFJldm9sdXRVcHNlbGwodmVyc2lvbiwgdG9rZW4sIG1vZGUsIGxvY2FsZSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBsb2FkUmV2b2x1dFVwc2VsbCh2ZXJzaW9uLCB0b2tlbiwgbW9kZSwgbG9jYWxlKSB7XG4gICAgcmV0dXJuIGxvYWRNb2R1bGUoe1xuICAgICAgICBzcmM6IGdldFZlcnNpb25lZFVybChVUkxTW21vZGVdLnVwc2VsbCwgdmVyc2lvbiksXG4gICAgICAgIGlkOiAncmV2b2x1dC11cHNlbGwnLFxuICAgICAgICBuYW1lOiAnUmV2b2x1dFVwc2VsbCcsXG4gICAgfSkudGhlbihmdW5jdGlvbiAoc2NyaXB0RWxlbWVudCkge1xuICAgICAgICBpZiAodHlwZW9mIFJldm9sdXRVcHNlbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGxvYWRlZFVwc2VsbEluc3RhbmNlID0gUmV2b2x1dFVwc2VsbDtcbiAgICAgICAgICAgIGRlbGV0ZSB3aW5kb3cuUmV2b2x1dFVwc2VsbDtcbiAgICAgICAgICAgIHJldHVybiBsb2FkZWRVcHNlbGxJbnN0YW5jZSh7IHB1YmxpY1Rva2VuOiB0b2tlbiwgbG9jYWxlOiBsb2NhbGUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKHNjcmlwdEVsZW1lbnQpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ1Jldm9sdXRVcHNlbGwnIGZhaWxlZCB0byBsb2FkOiBSZXZvbHV0VXBzZWxsIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5SZXZvbHV0VXBzZWxsTG9hZGVyLm1vZGUgPSBNT0RFLlBST0RVQ1RJT047XG4iLCJleHBvcnQgZnVuY3Rpb24gbG9hZE1vZHVsZShfYSkge1xuICAgIHZhciBzcmMgPSBfYS5zcmMsIGlkID0gX2EuaWQsIG5hbWUgPSBfYS5uYW1lO1xuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuaWQgPSBpZDtcbiAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUVycm9yKHJlYXNvbikge1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIidcIiArIG5hbWUgKyBcIicgZmFpbGVkIHRvIGxvYWQ6IFwiICsgcmVhc29uKSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgICAgICAgIHJlc29sdmUoc2NyaXB0KTtcbiAgICAgICAgfVxuICAgICAgICBzY3JpcHQub25sb2FkID0gaGFuZGxlTG9hZDtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBoYW5kbGVFcnJvcignTmV0d29yayBlcnJvciBlbmNvdW50ZXJlZCcpOyB9O1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFZlcnNpb25lZFVybCh1cmwsIHZlcnNpb24pIHtcbiAgICB2YXIgcXVlcnlQYXJhbXMgPSB2ZXJzaW9uID8gbmV3IFVSTFNlYXJjaFBhcmFtcyh7IHZlcnNpb246IHZlcnNpb24gfSkudG9TdHJpbmcoKSA6ICcnO1xuICAgIHJldHVybiBcIlwiICsgdXJsICsgKHF1ZXJ5UGFyYW1zID8gXCI/XCIgKyBxdWVyeVBhcmFtcyA6ICcnKTtcbn1cbiIsImltcG9ydCB7IE1PREUsIFVSTFMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRWZXJzaW9uZWRVcmwsIGxvYWRNb2R1bGUgfSBmcm9tICcuL3V0aWxzJztcbnZhciBsb2FkZWRWZXJzaW9uID0gbnVsbDtcbmV4cG9ydCBmdW5jdGlvbiBSZXZvbHV0UGF5bWVudHNWZXJzaW9uTG9hZGVyKG1vZGUpIHtcbiAgICBpZiAobW9kZSA9PT0gdm9pZCAwKSB7IG1vZGUgPSBSZXZvbHV0UGF5bWVudHNWZXJzaW9uTG9hZGVyLm1vZGU7IH1cbiAgICBpZiAodHlwZW9mIGxvYWRlZFZlcnNpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobG9hZGVkVmVyc2lvbik7XG4gICAgfVxuICAgIHJldHVybiBsb2FkTW9kdWxlKHtcbiAgICAgICAgc3JjOiBnZXRWZXJzaW9uZWRVcmwoVVJMU1ttb2RlXS52ZXJzaW9uLCBcIlwiICsgRGF0ZS5ub3coKSksXG4gICAgICAgIGlkOiAncmV2b2x1dC1wYXktdmVyc2lvbicsXG4gICAgICAgIG5hbWU6ICdSZXZvbHV0UGF5VmVyc2lvbicsXG4gICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2FkZWRWZXJzaW9uID1cbiAgICAgICAgICAgICdfX1JFVl9QQVlfVkVSU0lPTl9fJyBpbiB3aW5kb3cgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgX19SRVZfUEFZX1ZFUlNJT05fXyA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IF9fUkVWX1BBWV9WRVJTSU9OX19cbiAgICAgICAgICAgICAgICA6ICcnO1xuICAgICAgICBkZWxldGUgd2luZG93Ll9fUkVWX1BBWV9WRVJTSU9OX187XG4gICAgICAgIHJldHVybiBsb2FkZWRWZXJzaW9uO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvYWRlZFZlcnNpb24gPSAnJztcbiAgICAgICAgcmV0dXJuIGxvYWRlZFZlcnNpb247XG4gICAgfSk7XG59XG5SZXZvbHV0UGF5bWVudHNWZXJzaW9uTG9hZGVyLm1vZGUgPSBNT0RFLlBST0RVQ1RJT047XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IFJldm9sdXRDaGVja291dCBmcm9tIFwiQHJldm9sdXQvY2hlY2tvdXRcIjtcblxuLy9HbG9iYWwgVmFyaWFibGVzXG5sZXQgdG9rZW4gPSBcIlwiO1xubGV0IG9yZGVySWQgPSBcIlwiO1xubGV0IHB1YmxpY0tleSA9IFwicGtfa0lVNmlPZ3RvNVQyZlZhc0RDY0R6b2M4S0UzQU53ZlBmbDJBZmQxdkVodTlBWnNhXCI7XG5cbi8vUGF5bWVudCBwcm9jZXNzb3Igb2JqZWN0XG5jb25zdCBwYXltZW50UHJvY2Vzc29yID0ge1xuICBjYXJkRmllbGQ6IG51bGwsXG4gIHBvcHVwOiBudWxsLFxufTtcblxuLy9TdWNjZXNzZnVsIHBheW1lbnRcbnBheW1lbnRQcm9jZXNzb3Iuc3VjY2VzRnVsbFRyYW5zYWN0aW9uID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZyhcInN1Y2Nlc3NcIik7XG4gIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYC9vcmRlci1zdGF0dXMtcGFnZT9zdGF0ZT1zdWNjZXNzYDtcbiAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXltZW50LXN0YXR1c1wiKS5pbm5lclRleHQgPSBcIlBheW1lbnQgU3VjY2Vzc2Z1bFwiO1xuICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBheW1lbnQtc3RhdHVzXCIpLnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xuICAvLyB3aW5kb3cuYWxlcnQoXCJUaGFuayB5b3UgZm9yIHlvdXIgcHVyY2hhc2UhXCIpO1xufTtcbi8vRmFpbGVkIHBheW1lbnRcbnBheW1lbnRQcm9jZXNzb3IuZmFpbGVkVHJhbnNhY3Rpb24gPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJwYXltZW50LXN0YXR1c1wiXG4gICkuaW5uZXJUZXh0ID0gYFBheW1lbnQgZmFpbGVkOiAke2Vycm9yfWA7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF5bWVudC1zdGF0dXNcIikuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICB3aW5kb3cuYWxlcnQoYE9lcHMgc29tZXRoaW4gaGFwcGVuZCA6KC4gJHtlcnJvcn1gKTtcbn07XG5cbi8vIFNlbGVjdCBQYXltZW50IG1ldGhvZFxucGF5bWVudFByb2Nlc3Nvci5zZWxlY3RlZFBheW1lbnRNZXRob2QgPSBhc3luYyBmdW5jdGlvbiAoXG4gIG1ldGhvZFNlbGVjdGVkLFxuICBlbGVtZW50XG4pIHtcbiAgY29uc29sZS5sb2cobWV0aG9kU2VsZWN0ZWQpO1xuICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgY29uc3QgdG9rZW5SZXEgPVxuICAgIG1ldGhvZFNlbGVjdGVkICE9PSBcInJldm9sdXQtcGF5XCIgJiYgbWV0aG9kU2VsZWN0ZWQgIT09IFwiYXBwbGUtZ29vZ2xlLXBheVwiO1xuICBpZiAoIXRva2VuICYmIHRva2VuUmVxKSBhbGVydChcIlBsZWFzZSBjcmVhdGUgYW4gb3JkZXIgZmlyc3QhXCIpO1xuICBpZiAoIXRva2VuICYmIHRva2VuUmVxKSBlbGVtZW50LmNoZWNrZWQgPSBmYWxzZTtcbiAgaWYgKCF0b2tlbiAmJiB0b2tlblJlcSkgcmV0dXJuO1xuICBpZiAodGhpcy5jYXJkRmllbGQpIHRoaXMuY2FyZEZpZWxkLmRlc3Ryb3koKTtcblxuICBjb25zb2xlLmxvZyhgVGhlIHRva2VuIGlzOiAke3Rva2VufWApO1xuICBzd2l0Y2ggKG1ldGhvZFNlbGVjdGVkKSB7XG4gICAgY2FzZSBcInJldm9sdXQtcGF5XCI6XG4gICAgICBhd2FpdCB0aGlzLnJldm9sdXRQYXkoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJhcHBsZS1nb29nbGUtcGF5XCI6XG4gICAgICBhd2FpdCB0aGlzLmFwcGxlR29vZ2xlUGF5KCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwicGF5bWVudC1saW5rc1wiOlxuICAgICAgY29uc29sZS5sb2coXCJoZXJlXCIpO1xuICAgICAgYXdhaXQgZ2V0Q2hlY2tvdXQob3JkZXJJZCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwidW5pdmVyc2FsLWxpbmtcIjpcbiAgICAgIGF3YWl0IHRoaXMudW5pdmVyc2FsTGluaygpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImNhcmQtZmllbGRcIjpcbiAgICAgIHRoaXMuY3JlYXRlQ2FyZEZpZWxkKHRva2VuKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwb3AtdXBcIjpcbiAgICAgIHRoaXMuY3JlYXRlUG9wdXAodG9rZW4pO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG59O1xuXG4vL1FVRVNUSU9OOiBSRU1PVklORyBUSEUgRU1BSUwgRlJPTSBUSEUgQ1VTVE9NRVIgT0JKRUNUIE1BS0VTIFRIQVQgVEhFIEVNQUlMIElTIFJFUVVFU3RlZCBJTiBUSEUgUE9QVVAgRklFTERcbi8vIC0tPiBTVElMTCBHRVQgRU4gRVJST1IgV0hFTiBJIEZJTEwgSVQgSU4gPyBXSFkgP1xuLy8gLS0+IFNhdmUgcGF5bWVudCBNZXJ0aG9kIGZvciBjYXVzZWQgdGhlIHByb2JsZW1cbnBheW1lbnRQcm9jZXNzb3IucG9wVXBPcHRpb25zID0ge1xuICBuYW1lOiBcIkpvcmRpZSBTaW1vbnNcIiwgLy8gW09QVF0gQ2FyZCBob2xkZXIgZmlyc3RuYW1lIGFuZCBsYXN0bmFtZSAtPiBub3Qgc2VuZCAtPiBhc2tlZCBpbiB0aGUgcG9wdXBcbiAgZW1haWw6IFwidGVzdHN0b3JlcmV2QGdhbWlsLmNvbVwiLCAvLyBbT1BUXSBDdXN0b21lciBlbWFpbCAtPiBOb3Qgc2VuZCAtPiBhc2tlZCBpbiB0aGUgcG9wdXBcbiAgcGhvbmU6IFwiMDQ5NzE2MDY1NVwiLCAvLyBbT1BUXSBDdXN0b21lciBwaG9uZSBudW1iZXJcbiAgbG9jYWxlOiBcIkVTXCIsIC8vW09QVF0gQ29udHJvbHMgdGhlIGxhbmd1YWdlIG9mIHRoZSB0ZXh0IGluIHRoZSB3aWRnZXQgLSBEZWZhdWx0IGRldGVjdHMgdGhlIGJyb3dzZXIgbGFuZ3VhZ2VcbiAgdXBzZWxsQmFubmVyOiB0cnVlLCAvLyBbT1BUXSBDb250cm9scyBpZiB0aGUgdXBzZWxsIGJhbm5lciBpcyBkaXNwbGF5ZWQgaW4gdGhlIHBvcHVwXG4gIC8vIHNhdmVQYXltZW50TWV0aG9kRm9yOiBcIm1lcmNoYW50XCIsIC8vIFtPUFRdIENhbiBjaG9vc2UgbWVyY2hhbnQvY3VzdG9tZXIgLSBtZXJjaGFudCBjYW4gaW5pdGlhdGUgdHJhbnNhY3Rpb25zXG4gIGJpbGxpbmdBZGRyZXNzOiB7XG4gICAgLy8gSXMgcmVxdWVyaWVkIGlmIG5vdCBzZXQgb24gb3JkZXIgdmlhIEFQSVxuICAgIGNvdW50cnlDb2RlOiBcIkVTXCIsIC8vIFtSRVFdXG4gICAgcmVnaW9uOiBcIkFsaWNhbnRlXCIsIC8vIFtPUFRdXG4gICAgY2l0eTogXCJYYWJpYVwiLCAvLyBbT1BUXVxuICAgIHBvc3Rjb2RlOiBcIjAzNzMwXCIsIC8vIFtSRVFdXG4gICAgc3RyZWV0TGluZTE6IFwiQ2FycmVyIFRoaXZpZXJzIDJcIiwgLy8gW09QVF1cbiAgICBzdHJlZXRMaW5lMjogXCJha2EgcGFyYWRpc2VcIixcbiAgfSxcbiAgc2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgLy8gU2FtZSBhcyBiaWxsaW5nIHdpbGwgYmUgZGlzcGxheWVkIG9uIG9yZGVyIGRldGFpbHMgTWVyY2hhbnQgRGFzaGJvYXJkXG4gICAgY291bnRyeUNvZGU6IFwiRVNcIiwgLy8gW1JFUV1cbiAgICByZWdpb246IFwiQWxpY2FudGVcIiwgLy8gW09QVF1cbiAgICBjaXR5OiBcIlhhYmlhXCIsIC8vIFtPUFRdXG4gICAgcG9zdGNvZGU6IFwiMDM3MzBcIiwgLy8gW1JFUV1cbiAgICBzdHJlZXRMaW5lMTogXCJDYXJyZXIgVGhpdmllcnMgMlwiLCAvLyBbT1BUXVxuICAgIHN0cmVldExpbmUyOiBcImFrYSBwYXJhZGlzZVwiLFxuICB9LFxufTtcblxucGF5bWVudFByb2Nlc3Nvci5tZXRhID0ge1xuICBuYW1lOiBcIkpvcmRpZSBTaW1vbnNcIiwgLy8gW1JFUV0gdXNlZCBhcyBjYXJkaG9sZGVyIG5hbWUgaWYgbm90IHNwZWNpZmllZFxuICBlbWFpbDogXCJ0ZXN0QHJldm9sdXQuY29tXCIsIC8vIFtPUFRdIC8vIFtSRVFdIFRoaXMgaXMgcmVxdWlyZWQgaWYgbm90IHNldCBvbmRlciB0aGUgb3JkZXIgQVBJXG4gIHBob25lOiBcIjA0OTcxNjA2NTVcIiwgLy9bT1BUXVxuICAvL3NhdmVQYXltZW50TWV0aG9kRm9yOiBcIm1lcmNoYW50XCIsIC8vIFtPUFRdIFwiY3VzdG9tZXJcIlxuICBjYXJkaG9sZGVyTmFtZTogXCJGaXJzdCBMYXN0XCIsIC8vIFtPUFRdXG4gIGJpbGxpbmdBZGRyZXNzOiB7XG4gICAgY291bnRyeUNvZGU6IFwiQkVcIixcbiAgICByZWdpb246IFwiTGltYnVyZ1wiLFxuICAgIGNpdHk6IFwiSGFtb250XCIsXG4gICAgcG9zdGNvZGU6IFwiMzkzMFwiLFxuICAgIHN0cmVldExpbmUxOiBcInRlc3QgMTIzXCIsXG4gICAgc3RyZWV0TGluZTI6IFwiXCIsXG4gIH0sXG4gIHNoaXBwaW5nQWRkcmVzczoge1xuICAgIC8vRGlzcGxheWVkIG9ubHkgaW4gdGhlIG9yZGVyIGRldGFpbHMgb24gdGhlIE1lcmNoYW50IERhc2hib2FyZFxuICAgIGNvdW50cnlDb2RlOiBcIkJFXCIsXG4gICAgcG9zdGNvZGU6IFwiMzkzMFwiLFxuICB9LFxufTtcbi8vIENyZWF0ZSBDYXJkZmllbGRcbnBheW1lbnRQcm9jZXNzb3IuY3JlYXRlQ2FyZEZpZWxkID0gYXN5bmMgZnVuY3Rpb24gKHRva2VuKSB7XG4gIC8vZ2V0IHRoZSByZXZvbHV0IGNoZWNrb3V0IGluc3RhbmNlXG4gIGNvbnN0IGluc3RhbmNlID0gYXdhaXQgUmV2b2x1dENoZWNrb3V0KHRva2VuLCBcInNhbmRib3hcIik7XG4gIC8vIGNyZWF0ZXMgY2FyZCBmaWVsZCBhbmQgbW91bnRzIGl0IHRvIHRoZSBcImNhcnQtZmllbGRcIiBkaXZcbiAgdGhpcy5jYXJkRmllbGQgPSBpbnN0YW5jZS5jcmVhdGVDYXJkRmllbGQoe1xuICAgIHRhcmdldDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0LWZpZWxkXCIpLCAvLyBET00gZWxlbWVudCB3aGVyZSBzZWN1cmUgaWZyYW1lIHdpdGggY2FyZCBmaWVsZCBpcyByZW5kZXJlZFxuICAgIC8vIEhhbmRsZSBldmVudHMgcmVsYXRlZCB0byB0aGUgcGF5bWVudFxuICAgIG9uU3VjY2VzczogKCkgPT4gdGhpcy5zdWNjZXNGdWxsVHJhbnNhY3Rpb24oKSwgLy8gQ2FsbGJhY2sgd2hlbiB0cmFuc2FjdGlvbiBpcyBjb21wbGV0ZWQgc3VjY2Vzc2Z1bHlcbiAgICBvbkVycm9yOiAoZXJyb3IpID0+IHRoaXMuZmFpbGVkVHJhbnNhY3Rpb24oZXJyb3IpLCAvLyBDYWxsYmFjayBpZiB0aGUgdHJhbmFjdGlvbiBmYWlscyB0byBjb21wbGV0ZSwgdGhlIHJlYXNvbiBpcyBpbiB0aGUgbXNnIHBhcmFtZXRlclxuICAgIG9uVmFsaWRhdGlvbjogKG1lc3NhZ2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sIC8vIENhbGxiYWNrIGNhbGxlZCBvbiB2YWxpZGF0aW9uIG9mIHN0YXR1cyBjaGFuZ2UsIGZ1bmN0aW9uIGNvbnRhaW5zIG1zZyBhcyBmaXJzdCBwYXJhbWV0ZXIuXG4gICAgb25DYW5jZWw6ICgpID0+IGNvbnNvbGUubG9nKFwiQ2FuY2VsbGVkXCIpLCAvLyBHZXRzIGNhbGxlZCB3aGVuIHVzZXIgY2FuY2NsbGVkIHRoZSBhdXRob3Jpc2F0aW9uIG9yIGNsb3NlZCB0aGUgcG9wLXVwXG4gICAgbG9jYWxlOiBcImF1dG9cIiwgLy8gQ29udHJvbHMgdGhlIGxhbmd1YWdlIG9mIHRoZSB3aWRnZXRcbiAgICB0aGVtZTogXCJsaWdodFwiLCAvLyBDaWJ0cmlrcyB0aGUgY29sb3Igc2NoZW1lIG9mIHRoZSB3aWRnZXRcbiAgICBzdHlsZXM6IHtcbiAgICAgIC8vIEFwcGxpZXMgc3R5bGVzIHdpdGhpbiB0aGUgaWZyYW1lXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGNvbG9yOiBcIiMwMDBcIixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJyb3duXCIsXG4gICAgICAgIFwiOjpwbGFjZWhvbGRlclwiOiB7IGNvbG9yOiBcIiMwMEZGMDBcIiB9LFxuICAgICAgfSxcbiAgICAgIGZvY3VzZWQ6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNsYXNzZXM6IHtcbiAgICAgIC8vIEFwcGxpZXMgc3R5bGUgb3V0c2lkZSB0aGUgaWZyYW1lXG4gICAgICBkZWZhdWx0OiBcImN1c3RvbS1jYXJkLWZpZWxkXCIsXG4gICAgICBmb2N1c2VkOiBcImN1c3RvbS1jYXJkLWZpZWxkLWZvY3VzZWRcIixcbiAgICAgIGludmFsaWQ6IFwiY3VzdG9tLWNhcmQtZmllbGQtaW52YWxpZFwiLFxuICAgICAgY29tcGxldGVkOiBcImN1c3RvbS1jYXJkLWZpZWxkLWNvbXBsZXRlZFwiLFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vQXNrIGZvciBjYXJkIGRldGFpbHMgYW5kIHNob3cgcGF5bWVudCBidXR0b25cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc2stY2FyZC1kZXRhaWxzXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0LWZpZWxkXCIpLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNhZTlmOWZcIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tcGF5XCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgLy9jb25zb2xlLmxvZyhjYXJkRmllbGQpO1xuXG4gIC8vQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBwYXkgYnV0dG9uXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLXBheVwiKS5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmNhcmRGaWVsZC5zdWJtaXQoe1xuICAgICAgICAvL2JvdGggZmllbGRzIGFyZSByZXF1aXJlZFxuICAgICAgICAvLyBlbWFpbDogXCJmaW5hbmNldG9maXJlQGhvdG1haWwuY29tXCIsXG4gICAgICAgIC8vIG5hbWU6IFwiSm9yZGllIFNpbW9uc1wiLFxuICAgICAgICAvLyBzYXZlUGF5bWVudE1ldGhvZEZvcjogXCJtZXJjaGFudFwiLFxuICAgICAgICAuLi5wYXltZW50UHJvY2Vzc29yLm1ldGEsXG4gICAgICB9KTtcbiAgICB9LmJpbmQocGF5bWVudFByb2Nlc3NvcilcbiAgKTtcbn07XG5cbi8vIENyZWF0ZSBQb3BVcCBmaWVsZFxucGF5bWVudFByb2Nlc3Nvci5jcmVhdGVQb3B1cCA9IGFzeW5jIGZ1bmN0aW9uICh0b2tlbikge1xuICBjb25zdCBpbnN0YW5jZSA9IGF3YWl0IFJldm9sdXRDaGVja291dCh0b2tlbiwgXCJzYW5kYm94XCIpO1xuICB0aGlzLnBvcHVwID0gaW5zdGFuY2UucGF5V2l0aFBvcHVwKHtcbiAgICBvblN1Y2Nlc3M6ICgpID0+IHRoaXMuc3VjY2VzRnVsbFRyYW5zYWN0aW9uKCksIC8vIENhbGxiYWNrIG9uc3VjY2VzZnVsbCBwYXltZW50XG4gICAgb25FcnJvcjogKGVycm9yKSA9PiB0aGlzLmZhaWxlZFRyYW5zYWN0aW9uKGVycm9yKSwgLy8gQ2FsbGJhY2sgaWYgdHJhbmFjdGlvbiBmYWlscyB0byBjb21wbGV0ZSAtPiBFcnJvciBjb250YWlucyB0aGUgcmVhc2luZ1xuICAgIG9uQ2FuY2VsOiAoKSA9PiBjb25zb2xlLmxvZyhcImNhbmNlbFwiKSwgLy8gR2V0cyBjYWxsZWQgd2hlbiB1c2VyIGNhbmNjbGxlZCB0aGUgYXV0aG9yaXNhdGlvbiBvciBjbG9zZWQgdGhlIHBvcC11cFxuICAgIC4uLnRoaXMucG9wVXBPcHRpb25zLFxuICB9KTtcbn07XG5cbi8vIENyZWF0ZSBSZXZvbHV0IFBheVxucGF5bWVudFByb2Nlc3Nvci5yZXZvbHV0UGF5ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCB7IHJldm9sdXRQYXkgfSA9IGF3YWl0IFJldm9sdXRDaGVja291dC5wYXltZW50cyh7XG4gICAgbG9jYWxlOiBcImVuXCIsIC8vIFtPUFRdLCBkZWZhdWx0cyB0byAnYXV0bydcbiAgICBtb2RlOiBcInNhbmRib3hcIiwgLy8gW09QVF0sIGRlZmF1bHRzIHRvICdwcm9kJ1xuICAgIHB1YmxpY1Rva2VuOiBcInBrX1RsdUk0bVJyME5OV1RpMTQySXlrZkRtRlRicWNCeTZTb2F1dm50QVcwakVwdFJ6b1wiLCAvLyBbUkVRXSBNZXJjaGFudCBwdWJsaWMgQVBJIGtleVxuICB9KTtcblxuICBjb25zdCBwYXltZW50T3B0aW9ucyA9IHtcbiAgICBjdXJyZW5jeTogXCJHQlBcIiwgLy8gMy1sZXR0ZXIgY3VycmVuY3kgY29kZVxuICAgIHRvdGFsQW1vdW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yZGVyLXByaWNlXCIpLnZhbHVlICogMTAwLCAvLyBJbiBsb3dlc3QgZGVub21pbmF0aW9uIGUuZy4sIGNlbnRzXG4gICAgLy9yZXF1ZXN0U2hpcHBpbmc6IHRydWUsIC8vIHNoaXBwaW5nIGFuZCBkZWxpdmVyeSBhZGRyZXNzIGNvbGxlY3RlZCwgeW91ciBiYWNrZW5kIG11c3Qgc3VwcG9ydCBmYXN0IGNoZWNrb3V0IGZvciB0aGlzIGZ1bmN0aW9uYWxsaXR5XG4gICAgc2F2ZVBheW1lbnRNZXRob2RGb3JNZXJjaGFudDogdHJ1ZSwgLy9SZW9jY3VyaW5nIHBheW1lbnRzLCBmb3IgY3VzdG9tZXIgbm90IG5lZWRlZCBhcyBpdCBwYXJ0IG9mIFJldlBheVxuXG4gICAgLy8gSWYgeW91IHdpc2ggdG8gaW1wbGVtZW50IFJldm9sdXQgUGF5IHdpdGggZXZlbnQgbGlzdGVuaW5nIGFuZCBtb2JpbGUgcmVkaXJlY3QgVVJMcyAoc2tpcCB0aGlzIG9wdGlvbiBpZiB5b3Ugb25seSBsaXN0ZW4gdG8gZXZlbnRzIG9yIG9ubHkgdXNlIHJlZGlyZWN0IFVSTHMpOlxuICAgIG1vYmlsZVJlZGlyZWN0VXJsczoge1xuICAgICAgc3VjY2VzczogXCJodHRwczovL3d3dy5leGFtcGxlLmNvbS9zdWNjZXNzXCIsXG4gICAgICBmYWlsdXJlOiBcImh0dHBzOi8vd3d3LmV4YW1wbGUuY29tL2ZhaWx1cmVcIixcbiAgICAgIGNhbmNlbDogXCJodHRwczovL3d3dy5leGFtcGxlLmNvbS9jYW5jZWxcIixcbiAgICB9LFxuXG4gICAgLy8gSWYgeW91IHdpc2ggdG8gaW1wbGVtZW50IFJldm9sdXQgUGF5IHdpdGggcmVkaXJlY3QgVVJMcyAoc2tpcCB0aGlzIG9wdGlvbiBpZiB5b3UgbGlzdGVuIHRvIGV2ZW50cyk6XG4gICAgLy8gcmVkaXJlY3RVcmxzOiB7XG4gICAgLy8gICBzdWNjZXNzOiBcImh0dHBzOi8vd3d3LmV4YW1wbGUuY29tL3N1Y2Nlc3NcIixcbiAgICAvLyAgIGZhaWx1cmU6IFwiaHR0cHM6Ly93d3cuZXhhbXBsZS5jb20vZmFpbHVyZVwiLFxuICAgIC8vICAgY2FuY2VsOiBcImh0dHBzOi8vd3d3LmV4YW1wbGUuY29tL2NhbmNlbFwiLFxuICAgIC8vIH0sXG5cbiAgICBjcmVhdGVPcmRlcjogYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gQ2FsbCB5b3VyIGJhY2tlbmQgaGVyZSB0byBjcmVhdGUgYW4gb3JkZXJcbiAgICAgIC8vIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLnJldm9sdXQuY29tL2RvY3MvbWVyY2hhbnQvY3JlYXRlLW9yZGVyXG4gICAgICBjb25zdCBvcmRlciA9IGF3YWl0IGNyZWF0ZU9yZGVyKFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yZGVyLXByaWNlXCIpLnZhbHVlXG4gICAgICApO1xuICAgICAgcmV0dXJuIHsgcHVibGljSWQ6IG9yZGVyLnRva2VuIH07XG4gICAgfSxcblxuICAgIC8vIFlvdSBjYW4gcHV0IG90aGVyIG9wdGlvbmFsIHBhcmFtZXRlcnMgaGVyZVxuICAgIGxpbmVJdGVtczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlByb2R1Y3RzIDFcIiwgLy8gW1JFUV1cbiAgICAgICAgdG90YWxBbW91bnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JkZXItcHJpY2VcIikudmFsdWUgKiAxMDAsIC8vIFtSRVFdXG4gICAgICAgIHVuaXRQcmljZUFtb3VudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmRlci1wcmljZVwiKS52YWx1ZSAqIDEwMCwgLy8gW1JFUV1cbiAgICAgICAgcXVhbnRpdHk6IHtcbiAgICAgICAgICAvLyBbT1BUXVxuICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgIHVuaXQ6IFwiUElFQ0VTXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IFwiUEhZU0lDQUxcIiwgLy9bT1BUXSBUQVgsIEdJRlQsIE1JU0MsIFJFRlVORCwgQ0hBUkdFLCBTRVJWSUNFLCBQSFlTSUNBTCwgQURKVVNUTUVOVFxuICAgICAgICBwcm9kdWN0SWQ6IFwiSUQxXCIsIC8vIFtPUFRdXG4gICAgICAgIHByb2R1Y3RVcmw6IFwid3d3LnlvdXJvY2suY29tXCIsIC8vIFtPUFRdXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkJlc3QgcHJvZHVjdCBpbiB0aGUgd29ybGRcIiwgLy8gW09QVF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUHJvZHVjdHMgMlwiLFxuICAgICAgICB0b3RhbEFtb3VudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmRlci1wcmljZVwiKS52YWx1ZSAqIDEwMCxcbiAgICAgICAgdW5pdFByaWNlQW1vdW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yZGVyLXByaWNlXCIpLnZhbHVlICogMTAwLFxuICAgICAgICBxdWFudGl0eToge1xuICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgIHVuaXQ6IFwiUElFQ0VTXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IFwiU0VSVklDRVwiLFxuICAgICAgICBwcm9kdWN0SWQ6IFwiSUQyXCIsXG4gICAgICAgIHByb2R1Y3RVcmw6IFwid3d3LnlvdXJvY2suY29tXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkJlc3QgcHJvZHVjdCBpbiB0aGUgd29ybGRcIixcbiAgICAgIH0sXG4gICAgXSxcblxuICAgIGJ1dHRvblN0eWxlOiB7XG4gICAgICBoZWlnaHQ6IFwiNTBweFwiLFxuICAgICAgc2l6ZTogXCJsYXJnZVwiLFxuICAgICAgdmFyaWFudDogXCJkYXJrXCIsXG4gICAgICByYWRpdXM6IFwicm91bmRcIixcbiAgICAgIGNhc2hiYWNrOiBcInRydWVcIixcbiAgICAgIGNhc2hiYWNrQ3VycmVuY3k6IFwiRVVSXCIsXG4gICAgfSxcblxuICAgIHBvcHVwT3B0aW9uczoge1xuICAgICAgY2xvc2VPbk92ZXJsYXlDbGljazogZmFsc2UsXG4gICAgfSxcblxuICAgIHZhbGlkYXRlOiBhc3luYyAoKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmUodHJ1ZSkpOyAvLyBJZiBmYWxzZSB0aGVuIGl0IHdvbid0IG9wZW4gdGhlIHBvcHVwIGZpZWxkXG4gICAgfSxcbiAgICAvLyBjdXN0b21lcjoge1xuICAgIC8vICAgZW1haWw6IFwicmV2dGVzdEBnbWFpbC5jb21cIixcbiAgICAvLyB9LFxuICB9O1xuXG4gIHJldm9sdXRQYXkubW91bnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0LWZpZWxkXCIpLCBwYXltZW50T3B0aW9ucyk7XG5cbiAgLy8gQ2FsbCB0aGlzIG1ldGhvZCBpZiB5b3Ugd2lzaCB0byBpbXBsZW1lbnQgUmV2b2x1dCBQYXkgd2l0aCBldmVudCBsaXN0ZW5pbmcgKHNraXAgdGhpcyBvcHRpb24gaWYgeW91IHVzZSByZWRpcmVjdCBVUkxzKTpcbiAgcmV2b2x1dFBheS5vbihcInBheW1lbnRcIiwgKGV2ZW50KSA9PiB7XG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlIFwiY2FuY2VsXCI6IHtcbiAgICAgICAgaWYgKGV2ZW50LmRyb3BPZmZTdGF0ZSA9PT0gXCJwYXltZW50X3N1bW1hcnlcIikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwid2hhdCBhIHNoYW1lLCBwbGVhc2UgY29tcGxldGUgeW91ciBwYXltZW50XCIpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlIFwic3VjY2Vzc1wiOlxuICAgICAgICB0aGlzLnN1Y2Nlc0Z1bGxUcmFuc2FjdGlvbigpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcImVycm9yXCI6XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmVycm9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIENyZWF0ZSBBcHBsZS9Hb29nbGUgUGF5XG5cbnBheW1lbnRQcm9jZXNzb3IuYXBwbGVHb29nbGVQYXkgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHsgcGF5bWVudFJlcXVlc3QgfSA9IGF3YWl0IFJldm9sdXRDaGVja291dC5wYXltZW50cyh7XG4gICAgbG9jYWxlOiBcImVuXCIsIC8vIFtPUFRdLCBkZWZhdWx0cyB0byAnYXV0bydcbiAgICBwdWJsaWNUb2tlbjogXCJwa19rSVU2aU9ndG81VDJmVmFzRENjRHpvYzhLRTNBTndmUGZsMkFmZDF2RWh1OUFac2FcIiwgLy8gW1JFUV0gTWVyY2hhbnQgcHVibGljIEFQSSBrZXlcbiAgfSk7XG5cbiAgY29uc3QgcGF5bWVudE9wdGlvbnMgPSB7XG4gICAgY3VycmVuY3k6IFwiR0JQXCIsXG4gICAgYW1vdW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yZGVyLXByaWNlXCIpLnZhbHVlICogMTAwLFxuXG4gICAgLy8gQ2FsbCB5b3VyIGJhY2tlbmQgaGVyZSB0byBjcmVhdGUgYW4gb3JkZXJcbiAgICAvLyBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlOiBodHRwczovL2RldmVsb3Blci5yZXZvbHV0LmNvbS9kb2NzL21lcmNoYW50L2NyZWF0ZS1vcmRlclxuICAgIGNyZWF0ZU9yZGVyOiBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBvcmRlciA9IGF3YWl0IGNyZWF0ZU9yZGVyKFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yZGVyLXByaWNlXCIpLnZhbHVlXG4gICAgICApO1xuICAgICAgcmV0dXJuIHsgcHVibGljSWQ6IG9yZGVyLnRva2VuIH07XG4gICAgfSxcbiAgICBvblN1Y2Nlc3MoKSB7XG4gICAgICB0aGlzLnN1Y2Nlc0Z1bGxUcmFuc2FjdGlvbigpO1xuICAgIH0sXG4gICAgb25FcnJvcihlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0sXG4gIH07XG5cbiAgY29uc29sZS5sb2cocGF5bWVudFJlcXVlc3QpO1xuICBjb25zdCBpbnN0YW5jZSA9IHBheW1lbnRSZXF1ZXN0KFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FydC1maWVsZFwiKSxcbiAgICBwYXltZW50T3B0aW9uc1xuICApO1xuXG4gIGNvbnN0IG1ldGhvZCA9IGF3YWl0IGluc3RhbmNlLmNhbk1ha2VQYXltZW50KCk7XG4gIGlmIChtZXRob2QpIHtcbiAgICBpbnN0YW5jZS5yZW5kZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gIH1cbn07XG5cbi8vIENyZWF0ZSB1bml2ZXJzdGFsIGxpbmtcbnBheW1lbnRQcm9jZXNzb3IudW5pdmVyc2FsTGluayA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdHVubmVsVXJsID0gXCJodHRwczovLzA0NmQtOTAtMTY5LTIzNC0xOC5uZ3Jvay1mcmVlLmFwcFwiO1xuICAvLy0tLS0tLS0tLSBNSU5JTVVNIFBhcmFtZXRlcnMgLS0tLS0tLS0tXG4gIGxldCB1bml2ZXJzYWxMaW5rVXJsID0gYGh0dHBzOi8vc2FuZGJveC1jaGVja291dC5yZXZvbHV0LmNvbS9yZXZvbHV0LXBheS9vcmRlci8ke3Rva2VufT9wdWJsaWNUb2tlbj0ke3B1YmxpY0tleX1gO1xuICB1bml2ZXJzYWxMaW5rVXJsICs9IGAmcmVkaXJlY3RVcmxzLnN1Y2Nlc3M9JHt0dW5uZWxVcmx9L29yZGVyLXN0YXR1cy1wYWdlP3N0YXRlPXN1Y2Nlc3NgO1xuICB1bml2ZXJzYWxMaW5rVXJsICs9IGAmcmVkaXJlY3RVcmxzLmZhaWx1cmU9JHt0dW5uZWxVcmx9L29yZGVyLXN0YXR1cy1wYWdlP3N0YXRlPWZhaWx1cmVgO1xuICB1bml2ZXJzYWxMaW5rVXJsICs9IGAmcmVkaXJlY3RVcmxzLmNhbmNlbD0ke3R1bm5lbFVybH0vb3JkZXItc3RhdHVzLXBhZ2U/c3RhdGU9Y2FuY2VsYDtcbiAgLy8tLS0tLS0tLS0gTUlOSU1VTSBQYXJhbWV0ZXJzIC0tLS0tLS0tLVxuICB1bml2ZXJzYWxMaW5rVXJsICs9IGAmbG9jYWxlPWVzYDsgLy8gQ29udHJvbHMgbGFuZ3VhZ2Ugb2YgUmV2b2x1dCBQYXlcbiAgdW5pdmVyc2FsTGlua1VybCArPSBgJnJlcXVlc3RTaGlwcGluZz1mYWxzZWA7IC8vIFNoaXBwaW5nIGFuZCBkZWxpdmVyeSBtZXRob2QgYXJlIHF1aWNreSBjb2xsZWN0ZWQgLSBjYW4ndCBiZSBib3RoIHRydWUgd2l0aFxuICB1bml2ZXJzYWxMaW5rVXJsICs9IGAmc2F2ZVBheW1lbnRNZXRob2RGb3JNZXJjaGFudD1mYWxzZWA7IC8vIENvbnRyb2xzIGxhbmd1YWdlIG9mIFJldm9sdXQgUGF5ICAtIGNhbid0IGJlIGJvdGggdHJ1ZSB3aXRoXG4gIC8vLS0tLS0tLS0tIFF1ZXN0aW9uIC0tLS0tLS0tLVxuICB1bml2ZXJzYWxMaW5rVXJsICs9IGAmYXBwUmV0dXJuVVJMPXd3dy5leGFtcGxlLmNvbS90ZXN0YDsgLy8gU28gdGhpcyB1cmwgd2lsbCBiZSBjYWxsZWQgd2hlbiB5b3UgYXJlIHVzaW5nIHRoZSByZXZvbHV0IGFwcD9cbiAgdW5pdmVyc2FsTGlua1VybCArPSBgJmN1c3RvbWVyLnBob25lPSszMjQ5NzE2MDYyMWA7IC8vIFdoZXJlIGlzIHRoaXMgaW5mb3JtYXRpb24gYWRkZWQgYW5kIHdoYXQgaWYgdGhlIGN1c3RvbWVyIGFscmVhZHkgZXhpc3RzP1xuICB1bml2ZXJzYWxMaW5rVXJsICs9IGAmY3VzdG9tZXIuZW1haWw9dGVzdHN0b3JlQGdtYWlsLmNvbWA7XG4gIHVuaXZlcnNhbExpbmtVcmwgKz0gYCZjdXN0b21lci5uYW1lPXRvbmkrc2ltb25pYDtcbiAgdW5pdmVyc2FsTGlua1VybCArPSBgJmN1c3RvbWVyLmRvYi5kYXk9MzFgO1xuICB1bml2ZXJzYWxMaW5rVXJsICs9IGAmY3VzdG9tZXIuZG9iLm1vbnRoPTAzYDtcbiAgdW5pdmVyc2FsTGlua1VybCArPSBgJmN1c3RvbWVyLmRvYi55ZWFyPTE5OTBgO1xuICAvLy0tLS0tLS0tLSBRdWVzdGlvbiAtLS0tLS0tLS1cblxuICBjb25zb2xlLmxvZyh1bml2ZXJzYWxMaW5rVXJsKTtcbiAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1bml2ZXJzYWxMaW5rVXJsO1xufTtcblxuY29uc3QgZ2V0Q2hlY2tvdXQgPSBhc3luYyBmdW5jdGlvbiAob3JkZXJJZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvb3JkZXItZGV0aWFscz9vcmRlcklkPSR7b3JkZXJJZH1gKTtcbiAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGNoZWNrb3V0IHBhZ2VcIik7XG4gICAgY29uc3QgeyBjaGVja291dF91cmwgfSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBjaGVja291dF91cmw7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZU9yZGVyID0gYXN5bmMgZnVuY3Rpb24gKHByaWNlID0gMCkge1xuICBjb25zb2xlLmxvZyhcImNyZWF0aW5nIG9yZGVyIE5PVyBmb3IgUmV2UGF5XCIpO1xuICAvLyBQb3N0IHJlcXVlc3Qgc2VuZCB0aGUgUHJpY2UsIHNvIGJhY2tlbmRcbiAgLy8gY2FuIGNyZWF0ZSB0aGUgb3JkZXIgd2l0aCB0aGUgcHJpY2UgdmFyaWFibGVcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvY3JlYXRlb3JkZXJcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgbWF4Qm9keUxlbmd0aDogSW5maW5pdHksXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG9yZGVyUHJpY2U6IHByaWNlLFxuICAgIH0pLFxuICB9KTtcblxuICAvLyByZXMgd2lsbCBnZXQgdmFsdWUgd2hlbiBwcm9taXNlIGlzIGZ1bGxmaWxsZWRcbiAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgY29uc3Qgb3JkZXJSZXNwb25zZSA9IGF3YWl0IHJlcy5qc29uKCk7IC8vIHt0b2tlbjogJy4uLicsIG9yZGVyX2lkOiAnLi4uJ31cbiAgKHsgdG9rZW4sIG9yZGVySWQgfSA9IG9yZGVyUmVzcG9uc2UpO1xuICBjb25zb2xlLmxvZyhvcmRlclJlc3BvbnNlKTtcblxuICAvL1Nob3cgb3JkZXIgdG9rZW4gYW5kIG9yZGVyX2lkIGluIHdlYnBhZ2VcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJvcmRlci1pbmZvXCJcbiAgKS5pbm5lckhUTUwgPSBgPGI+T3JkZXIgaGFzIGJlZW4gY3JlYXRlZDo8L2I+PGJyPlxuICAgICAgICAgICAgICAgICAtIFRva2VuOiAke29yZGVyUmVzcG9uc2UudG9rZW59PGJyPlxuICAgICAgICAgICAgICAgICAtIE9yZGVyIGlkOiAke29yZGVyUmVzcG9uc2Uub3JkZXJJZH08YnI+IFxuICAgICAgICAgICAgICAgIGA7XG5cbiAgcmV0dXJuIG9yZGVyUmVzcG9uc2U7XG59O1xuXG5jb25zdCBzZWxlY3RlZFBheW1lbnRPcHRpb24gPSBmdW5jdGlvbiAoKSB7fTtcblxuLy8gUmVmZXJlbmNlIHRvIHByaWNlIGlucHV0IGVsZW1lbnQgaW4gdGhlIHdlYnBhZ2VcbmNvbnN0IG9yZGVyUHJpY2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmRlci1wcmljZVwiKTtcblxuLy8gRXZlbnRsaXN0ZW5lciB0byBjcmVhdGUgb3JkZXJcbmRvY3VtZW50XG4gIC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jcmVhdGUtb3JkZXJcIilcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjcmVhdGVPcmRlcihvcmRlclByaWNlRWxlbWVudC52YWx1ZSkpO1xuXG4vLyBTZWxlY3QgdGhlIHBheW1lbnQgb3B0aW9uc1xuY29uc3QgcGF5bWVudE9wdGlvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF5bWVudC1vcHRpb25zLXNlbGVjdGlvblwiKTtcbmNvbnN0IHBheW1lbnRPcHRpb25zID0gcGF5bWVudE9wdGlvbkRpdi5xdWVyeVNlbGVjdG9yQWxsKFxuICAnaW5wdXRbbmFtZT1cInBheW1lbnQtbWV0aG9kXCJdJ1xuKTtcbnBheW1lbnRPcHRpb25zLmZvckVhY2goKHNlbGVjdG9yKSA9PlxuICBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBwYXltZW50UHJvY2Vzc29yLnNlbGVjdGVkUGF5bWVudE1ldGhvZChzZWxlY3Rvci52YWx1ZSwgdGhpcyk7XG4gIH0pXG4pO1xuXG4vLyBEZXN0cm95IGNhcmRmaWVsZFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tZGVzdHJveVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzay1jYXJkLWRldGFpbHNcIikuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLXBheVwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJ0LWZpZWxkXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICBwYXltZW50UHJvY2Vzc29yLmNhcmRGaWVsZC5kZXN0cm95KCk7XG59KTtcblxud2luZG93LnRlc3QgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUubG9nKFwiWW91IHJvY2tcIik7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9