import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/image.png"; // Ensure this path is correct
import "./Navbar.css"; // Import external CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Skyline India" className="logo" />
        <span className="brand-name">SKYLINE INDIA</span>
      </div>
      <div className="navbar-links">
        <NavLink to="/" className="nav-link" activeclassname="active">Home</NavLink>
        <NavLink to="/recruitment" className="nav-link" activeclassname="active">Recruitment Process</NavLink>
        <NavLink to="/clients" className="nav-link" activeclassname="active">Our Client</NavLink>
        <NavLink to="/contact" className="nav-link" activeclassname="active">Contact Us</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
