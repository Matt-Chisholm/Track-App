const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");
require("dotenv").config();

const key = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  /// authorization === 'Bearer sdksdfhkshdfd'
  if (!authorization) {
    return res.status(401).send({ error: "You must be logged in." });
  }

  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, key, async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "You must be logged in." });
    }

    const { userId } = payload;

    const user = await User.findById(userId);
  });
};
