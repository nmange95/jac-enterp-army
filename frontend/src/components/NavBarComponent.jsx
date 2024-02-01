import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  // Keeps track of the current "Active" section
  const [activeSection, setActiveSection] = useState(null);

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className="navbar">
      <div className="nav-title">History Explorer</div>

      <div className="nav-links">
        <button onClick={() => handleButtonClick("home")}>
          <Link className={`home ${activeSection === "home" ? "active" : ""}`} to="/">Home</Link>
        </button>
        <button onClick={() => handleButtonClick("aboutUs")}>
          <Link className={`aboutUs ${activeSection === "aboutUs" ? "active" : ""}`} to="/about">About</Link>
        </button>
      </div>
    </nav>
  );
};


export default NavBar;
