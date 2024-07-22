import React, { useState } from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import Welcome from "./Welcome";
//import ChatArea from "./ChatArea";

const MainContainer = () => {
  const [conversations, setConversations] = useState([
    {
      name: "Teat#1",
      lastMessage: "Last Message #1",
      timeStamp: "today",
    },
    {
      name: "Teat#2",
      lastMessage: "Last Message #2",
      timeStamp: "today",
    },
  ]);
  return (
    <div className="main-container">
      <Sidebar />
      <Welcome />
      {/* <ChatArea props={conversations[0]} /> */}
    </div>
  );
};

export default MainContainer;
