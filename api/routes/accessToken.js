//* Route for http://localhost:3001/spotify/v1/access_token

const express = require("express");
const router = express.Router();

// Get functions from controller
const { getAccessTokens } = require("../controllers/spotifyController");

// Call function for routes and HTTP methods
router.route("/").get(getAccessTokens);

module.exports = router;
