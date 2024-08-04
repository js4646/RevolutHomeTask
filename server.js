"use strict";
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const axios = require("axios");

// initialize
const app = express();
dotenv.config();

// --- Merchant services
// [Done] create an order route
// [Done] server creates an order
// [Done] client side creates an instance using the createCardField (using data form server)

const merchantServicesCreateOrder = async function (price = 1) {
  let data = JSON.stringify({
    "amount": price,
    "currency": "GBP",
    // "customer": {
    //   "email": "simons.jordie@gmail.com",
    //   "full_name": "Jordie Simons",
    // },
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

  try {
    const response = await axios(config); // Await the promise and get the response
    console.log(JSON.stringify(response.data));
    return JSON.stringify(response.data.token); // Return the resolved data
  } catch (error) {
    console.log(error);
    throw error; // Propagate the error so it can be caught by the caller
  }
};

// Init variables
const PORT = 3342;
const apiKey = process.env.MERCHANT_API_KEY;
const apiSecret = process.env.MERCHANT_API_SECRET;

// Use static middleware to serve files from the 'public' directory
app.use(express.static(path.join(__dirname, "dist/publicAppRevolut")));

//Listen to checkout directory
app.get("/createorder", async (req, res) => {
  console.log("Check out called");
  const orderToken = await merchantServicesCreateOrder(200);
  res.send(orderToken);
});

// Listen on the port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// [Done] setup Service
// [Done] setup Front end
// [Done] Do first commit to git

// Widget
