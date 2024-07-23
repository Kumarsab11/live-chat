import React from "react";

const MessageOthers = () => {
  var props1 = { name: "SampleUser", message: "This is a Sample message" };
  return (
    <div className="other-message-container">
      <div className="conversation-container">
        <p className="con-icon">{props1.name[0]}</p>
        <div className="other-text-content">
          <p className="con-title">{props1.name}</p>
          <p className="con-message">{props1.message}</p>
          <p className="self-timeStamp">12:00pm</p>
        </div>
      </div>
    </div>
  );
};

export default MessageOthers;
