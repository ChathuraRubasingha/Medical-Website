import React from "react";
import "../styles/HeaderBar.css";
import fb from "../Assets/icons/facebook.png";
import insta from "../Assets/icons/insta.png";
import linkedin from "../Assets/icons/linkedin.png";
import phone from "../Assets/icons/phone.png";
import youtube from "../Assets/icons/youtube.png";

function HeaderBar() {
  return (
    <div className="header-bar">
      <div className="bar-left">
        <img src={phone} />
        <p>+91 98105 32834</p>
      </div>
      <div className="bar-right">
        <img src={fb} />
        <img src={insta} />
        <img src={linkedin} />
        <img src={youtube} />
      </div>
    </div>
  );
}

export default HeaderBar;
