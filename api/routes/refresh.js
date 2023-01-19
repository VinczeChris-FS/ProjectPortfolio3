//* Route for http://localhost:3001/spotify/v1/refresh

const express = require("express");
const router = express.Router();

// Get function from controller
const { refreshSpotify } = require("../controllers/refreshController");

// For route test
router.get("/", (req, res) => {
  res.send("Refresh route");
});

// Get access and refresh token from Spotify Web API
router.post("/", refreshSpotify);

module.exports = router;
