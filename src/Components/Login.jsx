import React from "react";
import logo from "../Images/live-chat.png";

import "./myStyle.css";
import { Button, TextField } from "@mui/material";

const Login = () => {
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={logo} alt="LOGO" className="welcome-logo" />
      </div>
      <div className="login-box">
        <p className="login-text">Login to your account</p>
        <TextField
          id="standard-basic"
          label="Enter User Name"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="outlined">LOGIN</Button>
      </div>
    </div>
  );
};

export default Login;
