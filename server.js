"use strict";
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const app = express(); // initialize application
app.listen(3434, () => console.log("Application listening on port 3434!"));

const PORT = 3342;
const apiKey = process.env.SHOPIFY_API_KEY;
const apiSecret = process.env.SHOPIFY_API_SECRET;

// Use static middleware to serve files from the 'public' directory
app.use(express.static(path.join(__dirname, "publicAppRevolut")));

// //Listen to root directory
// //Respond wiht the mainpage
// app.get("/", (req, res) => {
//   console.log("Rout called");
//   res.sendFile(path.join(__dirname, "publicAppRevolut", "index.html"));
// });

// Listen on the port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

///---
// [Ongoing] setup Service
// [Todo] setup front end
// [Todo] render in front end
// [Todo] create order
