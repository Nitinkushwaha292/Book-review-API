const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// ✅ Fix: use `mongoose.models.User` to avoid re-defining
module.exports = mongoose.models.User || mongoose.model("User", userSchema);

