//* Route for http://localhost:3001/spotify/v1/access_token

const express = require("express");
const router = express.Router();

// Get functions from controller
const {
  getAccessTokens,
  addAccessToken,
} = require("../controllers/accessTokenController");

// Call functions for routes and HTTP methods
// Chain route handlers with route()
// router.route("/").get(getAccessTokens).post(addAccessToken);
// Alternatively
router.get("/", getAccessTokens);
router.post("/", addAccessToken);

module.exports = router;
