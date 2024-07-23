import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import "./myStyle.css";
import { IconButton } from "@mui/material";
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";

function ChatArea() {
  const [conversations, setConversations] = useState([
    {
      name: "Sample_User1",
      lastMessage: "Last Message #1",
      timeStamp: "today",
    },
    {
      name: "Sample_User2",
      lastMessage: "Last Message #2",
      timeStamp: "today",
    },
  ]);
  var props = conversations[0];
  return (
    <div className="chatArea-container">
      <div className="chatArea-header">
        <p className="con-icon">{props.name[0]}</p>
        <div className="header-text">
          <p className="con-title">{props.name}</p>
          <p className="con-timeStamp">{props.timeStamp}</p>
        </div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className="messages-container">
        <MessageOthers />
        <MessageSelf />
        <MessageSelf />
      </div>
      <div className="text-input-area">
        <input placeholder="Type a Message..." className="search-box" />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatArea;
