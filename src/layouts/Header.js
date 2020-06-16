import React from "react";
import Menu from "./Menu";
import Button from "../components/Button";
import "../styles/Header.css";
import groupsPhoto from "../images/Group.svg";
import verificationPhoto from "../images/verification.svg";
import basketPhoto from "../images/basket.svg";
import ActivityCircle from "../components/ActivityCircle";

const Header = () => {
  return (
    <div className="header-menu-container">
      <div className="header-container">
        <hr />
        <div className="header">
          <div className="rectangle"></div>
          <div className="header-menu">
            <span>O Nas</span>
            <span>Aktualności</span>
            <span>Koszty dostawy</span>
            <Button value="Promocje" />
          </div>
          <div className="contact-container">
            <div className="phone-photo"></div>
            <div className="contact-info">
              <span className="contact-desc">Pomoc w zakupach:</span>
              <span className="contact-number">94 375 3821</span>
            </div>
            <Button value="Odwiedź nas" />
          </div>
          <div className="options-container">
            <div className="options-image-container">
              <img src={groupsPhoto} alt="groups"></img>
            </div>

            <div className="options-image-container">
              <img src={verificationPhoto} alt="verification"></img>
              <ActivityCircle value={99} />
            </div>

            <div className="options-image-container">
              <img src={basketPhoto} alt="basket"></img>
              <ActivityCircle value={99} />
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Header;
