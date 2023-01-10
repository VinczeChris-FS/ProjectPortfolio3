//* Route for http://localhost:3001/spotify/v1/login

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Login route");
});

module.exports = router;
