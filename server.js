"use strict";
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const axios = require("axios");

// initialize
const app = express();
dotenv.config();

// Init variables
const PORT = 3342;
const apiKey = process.env.MERCHANT_API_KEY;
const apiSecret = process.env.MERCHANT_API_SECRET;

// Use static middleware to serve files from the 'public' directory
app.use(express.static(path.join(__dirname, "publicAppRevolut")));

//Listen to checkout directory
app.get("/checkout", (req, res) => {
  console.log("Rout called");
  res.send("Welcome to the checkout page");
});

// Listen on the port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// --- Merchant services
// [Done] create checkout route
// [Done] server creates an order
// [Todo] client side creates an instance using the createCardField (using date form server)

let data = JSON.stringify({
  "amount": 1,
  "currency": "GBP",
});

let config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "https://sandbox-merchant.revolut.com/api/orders",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${apiSecret}`,
    "Revolut-Api-Version": "2023-09-01",
  },
  data: data,
};

console.log(config);

axios(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

// [Done] setup Service
// [Done] setup Front end
// [Done] Do first commit to git

// Widget
