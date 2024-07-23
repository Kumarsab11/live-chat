import React from "react";
import "./myStyle.css";
import Sidebar from "./Sidebar";
//import Welcome from "./Welcome";
//import CreateGroups from "./CreateGroups";
import Login from "./Login";
//import ChatArea from "./ChatArea";

const MainContainer = () => {
  // const [conversations, setConversations] = useState([
  //   {
  //     name: "Sample_User1",
  //     lastMessage: "Last Message #1",
  //     timeStamp: "today",
  //   },
  //   {
  //     name: "Sample_User2",
  //     lastMessage: "Last Message #2",
  //     timeStamp: "today",
  //   },
  // ]);
  return (
    <div className="main-container">
      <Sidebar />
      {/* <ChatArea props={conversations[0]} /> */}
      {/* <Welcome /> */}
      {/* <CreateGroups /> */}
      <Login />
    </div>
  );
};

export default MainContainer;
