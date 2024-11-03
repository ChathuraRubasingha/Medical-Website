import React from "react";
import "../styles/AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="aboutus-wrapper">
        <div className="aboutus-left"></div>
        <div className="aboutus-right">
          <h3>About</h3>
          <h1>Dr Aloy J Mukherjee</h1>
          <ul>
            <li>
              An magnis nulla dolor at sapien augue erat iaculis purus tempor
              magna <br /> ipsum and vitae a purus primis ipsum magna ipsum
            </li>
            <li>
              An magnis nulla dolor at sapien augue erat iaculis purus tempor
              magna <br />
              ipsum and vitae a purus primis ipsum magna ipsum
            </li>
            <li>
              An magnis nulla dolor at sapien augue erat iaculis purus tempor
              magna <br />
              ipsum and vitae a purus primis ipsum magna ipsum
            </li>
          </ul>
          <div className="about-bitton-container">
            <div className="about-button1">Online Consultation</div>
            <div className="about-button2">Make an Appointment</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
