//* Controllers for http://localhost:3001/spotify/v1/access_token

// Use Mongoose model
const AccessToken = require("../models/AccessToken");

// Get all access tokens
// GET /api/v1/access_tokens
const getAccessTokens = async (req, res) => {
  //   res.send("GET access tokens");
  console.log("GET access tokens");
  try {
    const accessTokens = await AccessToken.find();
    return res.status(200).json(accessTokens);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Add a new access token
// POST /api/v1/access_tokens
const addAccessToken = async (req, res) => {
  //   res.send("POST access token");
  console.log("POST access token");
  try {
    const accessToken = await AccessToken.create(req.body.data);
    return res.status(201).json(accessToken);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = { getAccessTokens, addAccessToken };
