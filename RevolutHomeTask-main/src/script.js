"use strict";
import RevolutCheckout from "@revolut/checkout";

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
  const instance = await RevolutCheckout(token, "sandbox");
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
  const instance = await RevolutCheckout(token, "sandbox");
  this.popup = instance.payWithPopup({
    onSuccess: () => this.succesFullTransaction(), // Callback onsuccesfull payment
    onError: (error) => this.failedTransaction(error), // Callback if tranaction fails to complete -> Error contains the reasing
    onCancel: () => console.log("cancel"), // Gets called when user cancclled the authorisation or closed the pop-up
    ...this.popUpOptions,
  });
};

// Create Revolut Pay
paymentProcessor.revolutPay = async function () {
  const { revolutPay } = await RevolutCheckout.payments({
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
  const { paymentRequest } = await RevolutCheckout.payments({
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
