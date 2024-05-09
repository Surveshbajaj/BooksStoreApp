const express = require("express");
const User = require("../model/user");
const bcrypt = require("bcryptjs");

module.exports.signupController = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    // console.log("Received data:", { fullname, email, password });
    if (!fullname || !email || !password) {
      // console.log(fullname, email, password);
      return res.status(400).json({ msg: "Please fill out all fields" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ msg: "Email already in use" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });
    await newUser.save();
    res.status(200).json({ msg: "User created successfully" });
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({ msg: "Server error" });
  }
};

module.exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "Please fill out all fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ msg: "Invalid Email or password" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ msg: "Invalid Email or password" });
    }
    res.status(200).json({ msg: "Login Successfully" });
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};
