import React from "react";
import "../styles/Solution.css";
import video from '../Assets/solutions/Rectangle 51.png'
import videoButton from '../Assets/solutions/Group (1).png'

function Solutions() {
  return (
    <div className="sol-container">
      <div className="sol-wrapper">
        <div className="sol-left">
          <h4>HIGHEST QUALITY CARE</h4>
          <h1>
            Solutions to Complex <br />
            Medical Problems
          </h1>
          <ul>
            <li>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat</li>
            <li>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat</li>
            <li>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat</li>
          </ul>
        </div>
        <div className="sol-right">
            <img src={video}/>
            <div className="video-play-button">
                <img src={videoButton}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
