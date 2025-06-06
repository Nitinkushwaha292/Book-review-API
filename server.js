require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

// ✅ Route prefixes
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/reviews", reviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
