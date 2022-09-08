import React from "react";
import "../styles/Header.scss";
import cornerlight1 from "../assets/cornerlight1.png";
import cornerlight2 from "../assets/cornerlight2.png";
import point_line from "../assets/point_line.png";
import Navbar from "./Navbar";
import Cards from "./Cards";

function Header() {
  return (
    <div className="header">
      <Navbar />
      <div className="header_left">
        <div className="header_left__btn">
          <img id="cornerlight1" src={cornerlight1} alt="cl1" />
          <img id="cornerlight2" src={cornerlight2} alt="cl2" />
          <button>Начать путешествие</button>
        </div>
        <div className="point">
          <img src={point_line} alt="point_line" />
        </div>
      </div>
      <Cards />
    </div>
  );
}

export default Header;
