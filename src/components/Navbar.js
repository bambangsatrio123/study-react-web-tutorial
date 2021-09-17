import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/pizzaLogo.png";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="" />
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
