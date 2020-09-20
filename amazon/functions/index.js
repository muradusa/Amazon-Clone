const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HSZbFJjij9IehHufRnzScqXPH1pnkQi5wyPYixR9qQTm6d8rClU5ln0B8qSAjPgkodzYoWa1H079F3FW7IT9z4b00ZPeE3Kp2"
);

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request Recieved BOOM!!! for this amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, /// subunits of the currency
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);

// Example end point from firebase functions emulator
//     http://localhost:5001/clone-5e751/us-central1/api
