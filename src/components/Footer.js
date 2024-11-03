import React from "react";
import "../styles/Footer.css";
import logo from "../Assets/Fotter/Final Corrected Logo Side 1.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="f-col">
          <div className="main-text">Aloy Mukherjee</div>
          <p style={{ padding: "0 80px 0 0" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy a type
            specimen book.
          </p>
        </div>
        <div className="f-col">
          <h6>Company</h6>
          <p>About Us</p>
          <p>How to work?</p>
          <p>Populer Story</p>
          <p>Service</p>
        </div>
        <div className="f-col">
          <h6>Courses</h6>
          <p>Categories</p>
          <p>Ofline Writing</p>
          <p>Storyboard</p>
        </div>
        <div className="f-col">
          <h6>Support</h6>
          <p>FAQ</p>
          <p>Help Center</p>
          <p>Career</p>
          <p>Privacy</p>
        </div>
        <div className="f-col">
          <h6>Contac Info</h6>
          <p>+91 99999-99999</p>
          <p>info@aloymukherjee.com</p>
          <p>4th Floor, Delhi, India</p>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="f-left">
          Copyright 2024 All Rights Reserved by Aloymukherjee.com
        </div>
        <div className="f-right">
          Designed and developed by 
          <img src={logo} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
