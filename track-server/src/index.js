const express = require("express");
require("dotenv").config();

const app = express();
const MONGO_PW = process.env.MONGO_PW;

const mongoUri = `mongodb+srv://mattchiz:${MONGO_PW}@cluster0.mjgyjrb.mongodb.net/?retryWrites=true&w=majority`;

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
