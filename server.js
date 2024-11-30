require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoute = require("./routes/task.routes");
const userRoute = require("./routes/user.routes");

// const port = 5000;
const port = process.env.PORT || 3000;
const app = express();
const uri = process.env.MONGO_URI 

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Routes
app.use("/tasks", taskRoute);
app.use("/users", userRoute);

mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error.message);
  });
