const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const AirlineRoute = require('./airline.route.js');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", AirlineRoute);

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to database!");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Connection failed!", err);
  });
