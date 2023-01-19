//* Express server

// For Express
const express = require("express");
const app = express();
// To parse body data
app.use(express.json());

// For Dotenv
const dotenv = require("dotenv");
dotenv.config();

// For Cors
const cors = require("cors");
app.use(cors());

// Connect to database
const connectDB = require("./config/db");
connectDB();

// Environment variable from .env
const PORT = process.env.PORT || 3001;

// Import routes
const loginRouter = require("./routes/login");
const refreshRouter = require("./routes/refresh");
const accessTokenRouter = require("./routes/accessToken");

// Route for http://localhost:3001/spotify/v1/login
app.use("/spotify/v1/login", loginRouter);

// Route for http://localhost:3001/spotify/v1/refresh
app.use("/spotify/v1/refresh", refreshRouter);

// Route for http://localhost:3001/spotify/v1/access_token
app.use("/spotify/v1/access_token", accessTokenRouter);

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
