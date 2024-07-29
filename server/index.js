const express = require("express");
const dotenv = require("dotenv");
const { mongo, default: mongoose } = require("mongoose");
const userRoutes = require("./Routes/userRoutes");

const app = express();
dotenv.config();

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log("Server is connected to DB");
  } catch (error) {
    console.log("Server is not Connected to DB", error.message);
  }
};
connectDb();

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("users/", userRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log("Running..."));
