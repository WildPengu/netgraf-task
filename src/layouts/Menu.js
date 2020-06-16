import React from "react";
import "../styles/Menu.css";
import searchIcon from "../images/search.svg";
import Button from "../components/Button";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-left-side">
        <div className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span>Kategorie produktów</span>
      </div>
      <div className="menu-right-side">
        <img src={searchIcon} alt="search" />
        <input placeholder="Wpisz czego szukasz" />
        <Button value="Szukaj" />
      </div>
    </div>
  );
};

export default Menu;
