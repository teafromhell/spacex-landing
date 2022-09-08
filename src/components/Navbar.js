import React, { useState } from "react";
import "../styles/Navbar.scss";
import logo from "../assets/logo.png";

function Navbar() {
  const [drawer, setDrawer] = useState(false);
  const [toggleIcon, setToggleIcon] = useState("toggler");

  const sidebarToggle = () => {
    setDrawer(!drawer);
    drawer
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");

    toggleIcon === "toggler"
      ? setToggleIcon("toggle toggler")
      : setToggleIcon("toggler");
  };
  return (
    <nav className="nav">
      <div className="nav_logo">
        <div className="nav_logo__inner">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <ul className="nav_menu">
        <li>Главная</li>
        <li>Технология</li>
        <li>График полетов</li>
        <li>Гарантии</li>
        <li>О компании</li>
        <li>Контакты</li>
      </ul>
      <div onClick={sidebarToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      {drawer && (
        <div className={`overlay ${drawer ? "active" : ""}`}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`sidebar ${drawer ? "active_sidebar" : ""}`}
          >
            <ul className="sidebar_menu">
              <li>Главная</li>
              <li>Технология</li>
              <li>График полетов</li>
              <li>Гарантии</li>
              <li>О компании</li>
              <li>Контакты</li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
