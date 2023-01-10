//* Create Express server

// For Dotenv
const dotenv = require("dotenv");
dotenv.config();

// For Express
const express = require("express");
const app = express();
app.use(express.json());

// For Cors
const cors = require("cors");
app.use(cors());

// Environment variable from .env
const PORT = process.env.PORT || 3001;

// Route
const loginRouter = require("./routes/login");

// For http://localhost:3001 test
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Route for http://localhost:3001/spotify/v1/login
app.use("/spotify/v1/login", loginRouter);

// Server
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});
