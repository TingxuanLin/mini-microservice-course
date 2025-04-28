const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const POSTS_URL = process.env.POSTS_URL || "http://localhost:4000";
const COMMENTS_URL = process.env.COMMENTS_URL || "http://localhost:4001";
const QUERY_URL = process.env.QUERY_URL || "http://localhost:4002";

app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post(`${POSTS_URL}/events`, event);
  axios.post(`${COMMENTS_URL}/events`, event);
  axios.post(`${QUERY_URL}/events`, event);

  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("Listening to 4005");
});
