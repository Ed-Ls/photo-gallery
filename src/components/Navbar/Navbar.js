import React from "react";
import "./Navbar.css";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <HeartBrokenIcon />
      </div>

      <ul>
        <li>Cases</li>
        <li>Culture</li>
        <li>Services</li>
      </ul>
    </div>
  );
}

export default Navbar;
