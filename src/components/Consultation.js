import React, { useState } from "react";
import "../styles/Consultation.css";
import avetar from "../Assets/consultation/Ellipse 4.png";
import clock from "../Assets/icons/clock.png";
import zoom from "../Assets/icons/zoom.png";
import AR from "../Assets/icons/angle-right.svg";
import AL from "../Assets/icons/angle-left.svg";

function Consultation() {
  const [value, setValue] = useState(new Date());
  return (
    <div className="con-container">
      <div className="con-header">
        <div className="con-header-bar"></div>
        <div className="con-header-text">Online Consultation</div>
      </div>
      <div className="con-wrapper">
        <div className="con-col-1">
          <div className="col-1-row-1"></div>
          <div className="col-1-row-2">
            <div className="row-2-wrapper">
              <img className="checkin-avetar" src={avetar} />
              <h6>Madhava J</h6>
              <h2>Patient Check-in</h2>
              <div className="check-in">
                <img src={clock} />
                <p>30 mins</p>
              </div>
              <div className="check-in">
                <img src={zoom} />
                <p>Zoom</p>
              </div>
            </div>
          </div>
        </div>
        <div className="con-col-2">
          <div className="col-2-header">Select a Date & Time</div>
          <div className="calender">
            <div className="calender-wrapper">
              <div className="c-y-m">
                <img style={{ width: "10px", paddingRight: "20px" }} src={AL} />
                July <span style={{ paddingLeft: "10px" }}>2004</span>{" "}
                <img style={{ width: "10px", paddingLeft: "20px" }} src={AR} />
              </div>
              <div className="calender-grid">
                <div className="c-col">
                  <div className="c-row">
                    <div className="c-tile days">Sun</div>
                    <div className="c-tile noback"> .</div>
                    <div className="c-tile noback">07</div>
                    <div className="c-tile noback">14</div>
                    <div className="c-tile noback">21</div>
                    <div className="c-tile noback">28</div>
                  </div>
                  <div className="c-row">
                    <div className="c-tile days">Mon</div>
                    <div className="c-tile">01</div>
                    <div className="c-tile">08</div>
                    <div className="c-tile">15</div>
                    <div className="c-tile textspecial" style={{backgroundColor:'#01D48F',color:'white'}}>22</div>
                    <div className="c-tile textspecial">29</div>
                  </div>
                  <div className="c-row">
                    <div className="c-tile days">Tue</div>
                    <div className="c-tile">02</div>
                    <div className="c-tile">09</div>
                    <div className="c-tile">16</div>
                    <div className="c-tile textspecial">23</div>
                    <div className="c-tile textspecial">30</div>
                  </div>
                  <div className="c-row">
                    <div className="c-tile days">Wed</div>
                    <div className="c-tile">03</div>
                    <div className="c-tile">10</div>
                    <div className="c-tile">17</div>
                    <div className="c-tile textspecial">24</div>
                    <div className="c-tile textspecial">31</div>
                  </div>
                  <div className="c-row">
                    <div className="c-tile days">Thu</div>
                    <div className="c-tile">04</div>
                    <div className="c-tile">11</div>
                    <div className="c-tile">18</div>
                    <div className="c-tile textspecial">25</div>
                  </div>
                  <div className="c-row">
                    <div className="c-tile days">Fri</div>
                    <div className="c-tile">05</div>
                    <div className="c-tile">12</div>
                    <div className="c-tile">19</div>
                    <div className="c-tile textspecial">26</div>
                  </div>
                  <div className="c-row">
                    <div className="c-tile days">Sat</div>
                    <div className="c-tile">06</div>
                    <div className="c-tile">13</div>
                    <div className="c-tile">20</div>
                    <div className="c-tile textspecial">27</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="con-col-3">
          <div className="col-3-header">Monday, Jul 22</div>
          <div className="col-3-wrapper">
            <div className="col-3-row">09:00 am</div>
            <div className=" sub-row">
              <div className="sub-row-col col1">11:00 am</div>
              <div className="sub-row-col col2">Confirm</div>
            </div>
            <div className="col-3-row">01:00 am</div>
            <div className="col-3-row">03:00 pm</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
