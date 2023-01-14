//* Mongoose schema

const mongoose = require("mongoose");

const accessTokenSchema = new mongoose.Schema({
  accessToken: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
  tokenType: {
    type: String,
    required: true,
  },
  expiresIn: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("AccessToken", accessTokenSchema);
