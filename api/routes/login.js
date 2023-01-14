//* Route for http://localhost:3001/spotify/v1/login

const express = require("express");
const router = express.Router();

// Get function from controller
const { loginSpotify } = require("../controllers/loginController");

// For route test
router.get("/", (req, res) => {
  res.send("Login route");
});

// Get access and refresh token from Spotify Web API
router.post("/", loginSpotify);

module.exports = router;
