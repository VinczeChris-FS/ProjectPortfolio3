//* Route for http://localhost:3001/spotify/v1/access_token

const express = require("express");
const router = express.Router();

// Get functions from controller
const {
  getAccessTokens,
  addAccessToken,
} = require("../controllers/spotifyController");

// Chain route handlers with route()
// Call functions for routes and HTTP methods
router.route("/").get(getAccessTokens).post(addAccessToken);

module.exports = router;
