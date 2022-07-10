import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { signOut } from "firebase/auth";
import Logo from "../../assets/logo.svg";

import "./Navigation.css";

export default function Navigation() {


  function logout(){;
    signOut(auth).then(() => console.log("user has loged out"))
  }

  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img src={Logo} alt="Logo" />
        <p>Logo</p>
      </div>
      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="notes">Notes</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
      <button onClick={logout}>Log out</button>
    </div>
  );
}


