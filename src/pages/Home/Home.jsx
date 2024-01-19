import React from "react";
import "./home.css";
import SideBar from "../../components/SideBar/SideBar";
import Chat from "../../components/Chat/Chat";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}

export default Home;
