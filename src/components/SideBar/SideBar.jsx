import React from "react";
import "./sidebar.css";
import SideNavbar from "../SideNavbar/SideNavbar";
import Search from "../Search/Search";
import Chats from "../Chats/Chats";
function SideBar() {
  return (
    <div className="sidebar">
      <SideNavbar />
      <Search />
      <Chats />
    </div>
  );
}

export default SideBar;
