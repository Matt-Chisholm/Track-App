const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const MONGO_PW = process.env.MONGO_PW;
const mongoUri = `mongodb+srv://mattchiz:${MONGO_PW}@cluster0.mjgyjrb.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(mongoUri);
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});

app.get("/", (req, res) => {
  res.send("Hi there!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
