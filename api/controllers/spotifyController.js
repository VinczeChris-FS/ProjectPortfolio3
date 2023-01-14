//* Controllers for http://localhost:3001/spotify/v1/access_token

// Use Mongoose model
const { request } = require("express");
// const AccessToken = require("../models/AccessToken");

// Get all access tokens
// GET /api/v1/access_tokens
const getAccessTokens = (req, res) => {
  res.send("GET access tokens");
};

module.exports = { getAccessTokens };
