const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoute");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(
//   cors({
//     origin: ["http://localhost:3000", "https://mern-task.onrender.com"], // Add your frontend's production URL here
//   })
// );

// Routes
app.use("/api/tasks", taskRoutes); // Prefix for API routes

app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
