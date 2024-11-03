import React from "react";
import "../styles/ContactUs.css";
import phone from "../Assets/icons/phone.png";
import avetar from "../Assets/contact/Ellipse 44.png";

function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="left-wrapper">
          <img src={avetar} />
        </div>
        <div className="right-wrapper">
          <h1>Contact - Us</h1>
          <h6>Please free to contact us for emergency case.</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy a type
            specimen book.
          </p>
          <h5>
            <img src={phone} /> +91 98105 32834
          </h5>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
