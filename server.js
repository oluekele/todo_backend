const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const { connect, default: mongoose } = require("mongoose");
const Task = require("./model/taskModel");
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
//OR
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: ["http://localhost:3000/", "https://mern-task.onrender.com"],
  })
);
app.use(cors());

app.use(taskRoutes);

// Route
app.get("/", (req, res) => {
  res.send("Welcome to home page!");
});

const PORT = process.env.PORT || 5000;

// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen(PORT, () => {
//       console.log(`Server running at ${PORT}`);
//     });
//   } catch(err){
//     console.log(err);
//   }
// }

// startServer()

//OR

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
