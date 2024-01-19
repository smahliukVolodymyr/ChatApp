import React, { useContext } from "react";
import "./sidenavbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
function SideNavbar() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar__container">
      <span className="navbar__container-logo">ChatBox</span>
      <div className="navbar__container-user">
        <img src={currentUser.photoURL} alt="avatar" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
}

export default SideNavbar;
