import React, { useState } from "react";
import "../styles/Testtimonials.css";
import TestimonialCard from "./TestimonialCard";
import avetar1 from "../Assets/testimonial/Ellipse 33.png";
import avetar2 from "../Assets/testimonial/Ellipse 34.png";
import avetar3 from "../Assets/testimonial/Ellipse 35.png";
import start1 from "../Assets/testimonial/Group 138.png";
import start2 from "../Assets/testimonial/Group 139.png";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      image: avetar1,
      stars: start1,
      body: "Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat",
    },
    {
      id: 2,
      image: avetar2,
      stars: start2,
      body: "Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat",
    },
    {
      id: 3,
      image: avetar3,
      stars: start1,
      body: "Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat",
    },
    {
      id: 3,
      image: avetar3,
      stars: start1,
      body: "Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat",
    },

    {
      id: 1,
      image: avetar1,
      stars: start1,
      body: "Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat",
    },
    {
      id: 2,
      image: avetar2,
      stars: start2,
      body: "Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat",
    },
    {
      id: 1,
      image: avetar1,
      stars: start1,
      body: "Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat",
    },

    {
      id: 3,
      image: avetar3,
      stars: start1,
      body: "Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat",
    },
    {
      id: 2,
      image: avetar2,
      stars: start2,
      body: "Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialsPerPage = 3; // Display only one testimonial at a time
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerPage);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  // Calculate the current visible testimonials based on the active slide
  const visibleTestimonials = testimonials.slice(
    currentSlide * testimonialsPerPage,
    currentSlide * testimonialsPerPage + testimonialsPerPage
  );

  return (
    <div className="test-container">
      <div className="test-header">
        <div className="test-header-bar"></div>
        <div className="test-header-text">Testimonials</div>
      </div>
      <div className="test-wrapper">
        {visibleTestimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            image={testimonial.image}
            stars={testimonial.stars}
            body={testimonial.body}
          />
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="pagination-dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
