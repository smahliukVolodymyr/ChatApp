import React from "react";
import "./chat.css";
import ChatNavbar from "../ChatNavbar/ChatNavbar";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";
function Chat() {
  return (
    <div className="chat">
      <ChatNavbar />
      <Messages />
      <Input />
    </div>
  );
}

export default Chat;
