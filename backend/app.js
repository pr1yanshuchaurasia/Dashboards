const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// ✅ Register the route here
const authRoutes = require("./server/routes/authRoutes");
app.use("/api/auth", authRoutes); // ← This line was missing!

module.exports = app;
