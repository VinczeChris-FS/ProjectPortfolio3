//* Create Express server

// For Dotenv
const dotenv = require("dotenv");
dotenv.config();

// For Express
const express = require("express");
const app = express();

// Environment variable from .env
const PORT = process.env.PORT || 3001;

// For http://localhost:3001 test
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Server
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});
