import React from "react";
import "./myStyle.css";
import Sidebar from "./Sidebar";
//import Welcome from "./Welcome";
//import CreateGroups from "./CreateGroups";
//import Login from "./Login";
//import ChatArea from "./ChatArea";
//import Users from "./Users";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <Outlet />
      {/* <ChatArea props={conversations[0]} /> */}
      {/* <Welcome /> */}
      {/* <CreateGroups /> */}
      {/* <Login /> */}
      {/* <Users /> */}
    </div>
  );
};

export default MainContainer;
