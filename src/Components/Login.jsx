import React from "react";
import logo from "../Images/live-chat.png";

const Login = () => {
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={logo} alt="" />
      </div>
      <div className="login-box">
        <p>Login to your Account</p>
      </div>
    </div>
  );
};

export default Login;
