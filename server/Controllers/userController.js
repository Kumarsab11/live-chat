const express = require("express");
const UserModel = require("../modals/userModel");
const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../Config/generateToken");
//Login
const loginController = expressAsyncHandler(async (res, req) => {
  const { name, password } = req.body;
  const user = UserModel.findOne({ name });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    throw new Error("Invalid Username or Password");
  }
});

//Registration
const registerController = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // check for all fields
  if (!name || !email || !password) {
    res.send(400);
    throw Error("All necessary input fields are required.");
  }

  //pre-existing user
  const userExist = await UserModel.findOne({ email });
  if (userExist) {
    throw new Error("User already exist.");
  }

  //username already taken
  const userNameExist = await UserModel.findOne({ name });
  if (userNameExist) {
    throw new Error("Username already taken");
  }

  //create an entry in the db
  const user = await UserModel.create({ name, email, password });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Registration error");
  }
});

module.exports = { loginController, registerController };
