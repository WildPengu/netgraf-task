import React from "react";
import Button from "../components/Button";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <hr />
      <div className="header">
        <div className="rectangle"></div>
        <div className="header-menu">
          <span>O Nas</span>
          <span>Aktualności</span>
          <span>Koszty dostawy</span>
          <Button></Button>
        </div>
        <div className="contact-container"></div>
      </div>
    </div>
  );
};

export default Header;
