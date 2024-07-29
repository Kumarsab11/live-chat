const express = require("express");
const UserModel = require("../modals/userModel");
const expressAsyncHandler = require("express-async-handler");
//Login
const loginController = () => {};

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
});

module.exports = { loginController, registerController };
