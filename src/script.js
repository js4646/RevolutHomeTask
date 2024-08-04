"use strict";
import RevolutCheckout from "@revolut/checkout";

const getOrderCardField = async function () {
  // Get
  const res = await fetch("/createorder"); // res will get value when promise is fullfilled
  console.log(res);
  const orderToken = await res.json(); // Extract order Token
  console.log(orderToken);
  document.getElementById(
    "order-info"
  ).innerText = `Order has been created with token: ${orderToken}`;

  const instance = await RevolutCheckout(orderToken, "sandbox"); // creates card field

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
