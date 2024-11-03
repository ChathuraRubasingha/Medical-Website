import React from "react";
import "../styles/Appointment.css";

function Appointment() {
  return (
    <div className="contactus-container">
      <div className="contactus-wrapper">
        <div className="cont-left"></div>
        <div className="cont-right">
          <div className="cont-form-wrapper">
            <h1>Make an Appointment</h1>
            <div className="form">
              <div className="form-row">
                <div className="form-col">
                  <label>First Name</label>
                  <input type="text" name="fn" />
                </div>
                <div className="form-col">
                  <label>Last Name</label>
                  <input type="text" name="ln" />
                </div>
              </div>
              <div className="form-row one-col">
                <label>Email Id</label>
                <input type="text" name="email" />
              </div>
              <div className="form-row">
                <div className="form-col">
                  <label>Phone Number</label>
                  <input type="text" name="phone" />
                </div>
                <div className="form-col">
                  <label>Appointment Date</label>
                  <input type="date" name="apointment" />
                </div>
              </div>
              <div className="form-row one-col">
                <label>Message</label>
                <textarea />
              </div>
            </div>
            <div className="submit">
              <div className="submit-button">Send Message</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
