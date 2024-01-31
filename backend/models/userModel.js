const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
// const cookie = require("cookie");

// models
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is Required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password length should be 6 characters long"],
  },
})

const User = mongoose.model("User", userSchema);

module.exports = User;
