"use strict";
import RevolutCheckout from "@revolut/checkout";

const getOrderCardField = async function () {
  // Get
  const res = await fetch("/checkout"); // res will be a promis
  console.log(res);
  const orderToken = await res.json(); // Extract order Token
  console.log(orderToken);
  const { createCardField } = await RevolutCheckout(orderToken, "sandbox"); // creates card field

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
