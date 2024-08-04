"use strict";
import RevolutCheckout from "@revolut/checkout";

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
  console.log(res);
  const orderResponse = await res.json(); // Extract order Token
  console.log(orderResponse);
  document.getElementById(
    "order-info"
  ).innerHTML = `<b>Order has been created:</b><br>
                 - Token: ${orderResponse.token}<br>
                 - Order id: ${orderResponse.order_id}<br> 
                `;

  const instance = await RevolutCheckout(orderResponse.token, "sandbox"); // creates card field

  const cardField = instance.createCardField({
    target: document.getElementById("cart-field"),
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

// Reference to price
const orderPriceElement = document.getElementById("order-price");

// Eventlistener to create order
document
  .getElementById("button-create-order")
  .addEventListener("click", () => getOrderCardField(orderPriceElement.value));
