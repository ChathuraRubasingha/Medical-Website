import React from "react";
import "../styles/Hero.css";
import phone from "../Assets/icons/phone.png";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-left">
          <div className="hero-text">
            <h6>Welcome To Our Clinic</h6>
            <h1>
              Take Care Of <br />
              Your Health
            </h1>
            <p>
              Feugiat primis ligula risus auctor egestas augue mauri viverra<br/>
              tortor in iaculis placerat eugiat mauris ipsum in viverra tortor<br/>
              and gravida purus pretium lorem
            </p>
            <div className="hero-buttons">
              <div className="herobutton-1">Book Appointment</div>
              <div className="herobutton-2">BMI Calculator</div>
            </div>
          </div>
        </div>
        <div className="hero-right"></div>
      </div>
      <div className="hero-card-container">
        <div className="hero-card-wrapper">
          <div className="hero-card-inner-wrapper">
            <div className="hero-card working-card">
              <h1 style={{ color: "#003020" }}>Working Time</h1>
              <div className="working-times">
                <div className="working-days">Monday - Friday</div>
                <div className="working-time">09:00 - 17:00</div>
              </div>
              <div className="working-times">
                <div className="working-days">Saturday</div>
                <div className="working-time">09:00 - 14:00</div>
              </div>
              <div className="working-times" style={{border:'none'}}>
                <div className="working-days">Sunday</div>
                <div className="working-time">Closed</div>
              </div>
            </div>
            <div className="hero-card appointment-card">
              <h1>Appointment</h1>
              <p>
                An magnis nulla dolor at sapien augue erat iaculis purus tempor
                magna ipsum and vitae a purus primis ipsum magna ipsum
              </p>
              <div className="appointment-card-button">Make an Appointment</div>
            </div>
            <div className="hero-card bmi-card">
              <h1>BMI Checker</h1>
              <p>
                An magnis nulla dolor at sapien augue erat iaculis purus tempor
                magna ipsum and vitae a purus primis ipsum magna ipsum
              </p>
              <div className="appointment-card-button">BMI Calculator</div>
            </div>
            <div className="hero-card emergency-card">
              <h1>Emergency Cases</h1>
              <h1 style={{display:'flex', alignItems:'center', paddingBottom:'30px'}}>
                <img src={phone} />
                1-800-123-4560
              </h1>
              <p>
                An magnis nulla dolor at sapien augue erat iaculis purus tempor
                magna ipsum and vitae a purus primis ipsum magna ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
