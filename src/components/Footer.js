import React from "react";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Instagram />
        <Twitter />
        <Facebook />
        <LinkedIn />
      </div>
      <p> &copy; 2021 bambangpizzahots.com</p>
    </div>
  );
}
