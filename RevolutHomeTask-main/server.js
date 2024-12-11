//Import packages
const express = require("express"); // Express Server
const path = require("path");
const dotenv = require("dotenv");
const axios = require("axios");
const { url } = require("inspector");

// Initialize
const app = express();
dotenv.config();

// Init variables
const PORT = 3342;
const apiKey = process.env.MERCHANT_API_KEY;
const apiSecret = process.env.MERCHANT_API_SECRET;
const tunnelURL =
  "https://4889-2a02-1810-84a8-4900-e8be-f536-506a-3b6d.ngrok-free.app";

const userOrders = [];
let userOrderID = 0;

const addOrder = function (userID, userOrderID, revOrderID) {
  userOrderID.push({ userID, userOrderID, revOrderID });
  console.log(userOrders);
};

function getOrderByFrontendId(frontendOrderId) {
  return userOrders.find((order) => order.frontendOrderId === frontendOrderId);
}

// Use middleware to serve files from the 'dist/publicAppRevolut' directory
app.use(express.static(path.join(__dirname, "dist/publicAppRevolut")));

//.well-known
app.use(
  express.static(path.join(__dirname, "dist/publicAppRevolut/.well-known"))
);
app.get(
  "/.well-known/apple-developer-merchantid-domain-association",
  (req, res) => {
    try {
      res.sendFile(
        path.join(
          __dirname,
          "dist/publicAppRevolut/.well-known/",
          "apple-developer-merchantid-domain-association"
        )
      );
    } catch (error) {
      console.error(error);
    }
  }
);
// Endpoint - /order-status-page
app.get("/order-status-page", express.json(), async (req, res) => {
  console.log("Create order called");
  try {
    res.sendFile(
      path.join(__dirname, "dist/publicAppRevolut", "order-status.html")
    );
  } catch (error) {
    console.error(error);
  }
});

// Endpoint - /createorder
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

//Endpoint /order-details
app.get("/order-detials", express.json(), async (req, res) => {
  try {
    const { orderId } = req.query;
    const orderResponse = await merchantServicesGetOrder(orderId);
    //    console.log(orderResponse);
    if (!orderResponse) return res.status(404).send("Checkout URL not found");
    res.send(orderResponse);
  } catch (error) {
    console.error("Error fetching checkout URL:", error);
    res.status(500).send("Failed to fetch checkout URL");
  }
});

// Endpoint /webhooks/
app.post("/webhooks/validate-address", express.json(), async (req, res) => {
  console.log("validate adress called");

  const deliveryMethods = {
    valid: true,
    delivery_methods: [
      {
        ref: "ID1",
        amount: 0,
        label: "Free Shipping",
        description: "Free Shipping is nice",
      },
      {
        ref: "ID2",
        amount: 1999,
        label: "Not Shipping",
        description: "Not Free Shipping is not so nice",
      },
    ],
  };

  try {
    console.log(req.body);
    res.send(JSON.stringify(deliveryMethods));
  } catch (error) {
    res.status(500).json({
      error: "Address Validation Failed",
    });
  }
});

// -------- merchantServices -----------
const getOrderConfigObj = function (httpMethod, endpoint) {
  let config = {
    method: `${httpMethod}`,
    maxBodyLength: Infinity,
    url: `https://merchant.revolut.com/api${endpoint}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${apiSecret}`,
      "Revolut-Api-Version": "2023-09-01",
    },
  };
  return config;
};

const merchantServicesGetOrder = async function (orderId) {
  // Config for the post request
  const config = getOrderConfigObj("get", `/orders/${orderId}`);
  try {
    const response = await axios(config); // Await the promise and get the response
    console.log(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

// Async function to create an order - price can be specified
const merchantServicesCreateOrder = async function (price = 100) {
  let data = JSON.stringify({
    amount: price,
    currency: "GBP",
    //redirect_url: "https://7695-90-169-234-18.ngrok-free.app/success",
    customer: {
      //id: "9f1dbf9f-0f27-4967-ba3b-8b414397e770",
      email: "yourock@revolut.com",
    },
    merchant_order_data: {
      url: "https://example.com/orders/12345",
      reference: "Ref1 - Magnifincent!",
    },
    metadata: {
      meta_1: "meta text...1",
      meta_2: "meta text...2",
    },
  });

  // Config for the post request
  const config = getOrderConfigObj("post", "/orders");
  config.data = data;

  try {
    const response = await axios(config); // Await the promise and get the response
    console.log(JSON.stringify(response.data));
    return JSON.stringify({
      token: response.data.token, //Token is need to create an cart field in the webpage
      orderId: response.data.id,
      checkout_url: response.data.checkout_url,
    }); // Return the resolved data
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

// Configure webhooks
const webhookConfiguration = async function () {
  // Address Validation
  const config = getOrderConfigObj("post", "/synchronous-webhooks");

  const data = {
    event_type: "fast_checkout.validate_address",
    url: `${tunnelURL}/webhooks/validate-address`,
  };
  config.data = data;

  const config2 = getOrderConfigObj("post", "/apple-pay/domains/register");
  const data2 = {
    domain: `4889-2a02-1810-84a8-4900-e8be-f536-506a-3b6d.ngrok-free.app`,
  };
  config2.data = data2;

  try {
    // const response = await axios(config); // Await the promise and get the response
    // console.log(JSON.stringify(response.data));
    const response2 = await axios(config2); // Await the promise and get the response
    console.log(JSON.stringify(response2.data));
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

//Init webhooks
webhookConfiguration();
// Listen on the port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
