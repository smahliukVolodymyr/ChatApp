import React from "react";
import "./chatnavbar.css";
import Cam from "../../assets/cam.png";
import Add from "../../assets/add.png";
import More from "../../assets/more.png";
import { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
function ChatNavbar() {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat__navbar">
      <div className="chat__navbar__info">
        <span>{data.user?.displayName}</span>
        <div className="chat__navbar__info-icons">
          <img src={Cam} alt="camera" />
          <img src={Add} alt="add" />
          <img src={More} alt="more" />
        </div>
      </div>
    </div>
  );
}

export default ChatNavbar;
