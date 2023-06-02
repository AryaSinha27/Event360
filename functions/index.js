// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NDPN3SEBmGjpz02PnsrfIj7DPjaXsMJMQuhLtEJlTln27xNwWJCrNC2Ypude2AJxG8Qxn4CoPpJC9otQ86lxUdK00ty0CkHoC")

// API

// API  config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.get("/qaz", (request, response) =>
  response.status(200).send("WHATS  UP QAZI")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment Request Recieved Boom!!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd,",
  });
  // ok created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command
exports.api = functions.https.onRequest(app);

// example of end point
// http://127.0.0.1:5001/clone-8c9a8/us-central1/api
