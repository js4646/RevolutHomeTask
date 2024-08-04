"use strict";
//Import packages
const express = require("express"); // Express Server
const path = require("path");
const dotenv = require("dotenv");
const axios = require("axios");

// Initialize
const app = express();
dotenv.config();

// Init variables
const PORT = 3342;
const apiKey = process.env.MERCHANT_API_KEY;
const apiSecret = process.env.MERCHANT_API_SECRET;

// Use middleware to serve files from the 'dist/publicAppRevolut' directory
app.use(express.static(path.join(__dirname, "dist/publicAppRevolut")));

//Listen to createOrder api call
app.post("/createorder", express.json(), async (req, res) => {
  console.log("Create order called");
  try {
    let { orderPrice } = req.body;
    //Wait for the prosime fullfilled
    const orderResponse = await merchantServicesCreateOrder(orderPrice * 100);
    res.send(orderResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Order failed to create",
    });
  }
});

// Listen on the port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// -------- merchantServices -----------

// Async function to create an order - price can be specified
const merchantServicesCreateOrder = async function (price = 100) {
  let data = JSON.stringify({
    "amount": price,
    "currency": "GBP",
  });

  // Config for the post request
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
    return JSON.stringify({
      token: response.data.token, //Token is need to create an cart field in the webpage
      order_id: response.data.id,
    }); // Return the resolved data
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
