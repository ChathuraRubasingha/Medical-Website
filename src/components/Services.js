import React from "react";
import "../styles/Services.css";
import ServiceCard from "./serviceCard";
import s1 from '../Assets/services/Ellipse 27.png'
import s2 from '../Assets/services/Ellipse 28.png'
import s3 from '../Assets/services/Ellipse 29.png'
import s4 from '../Assets/services/Ellipse 30.png'
import s5 from '../Assets/services/Ellipse 31.png'

function Services() {
  return (
    <div className="services-container">
      <div className="services-wrapper">
        <h1>Our Medical Services </h1>
        <p>
          Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis
          libero <br />
          at tempus, blandit posuere ligula varius congue cursus porta feugiat
        </p>
        <div className="services-card-wrapper">
          <ServiceCard title='Gastric Bypass Surgery' body='Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat' image={s1} />
          <ServiceCard title='Endoscopic Anorectal Surgery' body='Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat' image={s2} />
          <ServiceCard title='Varicocelectomy Surgery' body='Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat' image={s3} />
          <ServiceCard title='Appendix Surgery' body='Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat' image={s4} />
          <ServiceCard title='Gallbladder Stone Surgery' body='Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat' image={s5} />
        </div>
      </div>
    </div>
  );
}

export default Services;
