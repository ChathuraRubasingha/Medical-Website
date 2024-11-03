import React, { useState } from "react";
import "../styles/Blogs.css";
import b1 from "../Assets/blog/b1.png";
import b2 from "../Assets/blog/b2.png";
import b3 from "../Assets/blog/b3.png";
import b4 from "../Assets/blog/b4.png";
import arrow from '../Assets/icons/angle-right-solid.svg'

function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: "The Benefits of a Healthy Lifestyle",
      description:
        "Discover the benefits of maintaining a healthy lifestyle and how it impacts your overall well-being.",
      image: b1,
    },
    {
      id: 2,
      title: "Exploring Mental Health Awareness",
      description:
        "A guide to understanding mental health and the importance of awareness in modern society.",
      image: b2,
    },
    {
      id: 3,
      title: "How Technology is Changing Education",
      description:
        "Technology is reshaping education with e-learning platforms, virtual classrooms, and more.",
      image: b3,
    },
    {
      id: 4,
      title: "The Future of Artificial Intelligence",
      description:
        "Artificial intelligence is evolving, creating new opportunities and challenges across industries.",
      image: b4,
    },
    {
      id: 5,
      title: "Eco-Friendly Living for a Sustainable Future",
      description:
        "Learn how to live sustainably and reduce your carbon footprint with small daily changes.",
      image: b1,
    },
    {
      id: 1,
      title: "The Benefits of a Healthy Lifestyle",
      description:
        "Discover the benefits of maintaining a healthy lifestyle and how it impacts your overall well-being.",
      image: b1,
    },
    {
      id: 2,
      title: "Exploring Mental Health Awareness",
      description:
        "A guide to understanding mental health and the importance of awareness in modern society.",
      image: b2,
    },
    {
      id: 3,
      title: "How Technology is Changing Education",
      description:
        "Technology is reshaping education with e-learning platforms, virtual classrooms, and more.",
      image: b3,
    },
    {
      id: 4,
      title: "The Future of Artificial Intelligence",
      description:
        "Artificial intelligence is evolving, creating new opportunities and challenges across industries.",
      image: b4,
    },
    {
      id: 5,
      title: "Eco-Friendly Living for a Sustainable Future",
      description:
        "Learn how to live sustainably and reduce your carbon footprint with small daily changes.",
      image: b1,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const postsPerPage = 4;
  const totalSlides = Math.ceil(blogPosts.length / postsPerPage);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setActiveCard(null);
  };

  const toggleCard = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  const visiblePosts = blogPosts.slice(
    currentSlide * postsPerPage,
    currentSlide * postsPerPage + postsPerPage
  );

  return (
    <div className="blog-container">
      <div className="blog-header">
        <div className="blog-header-bar"></div>
        <div className="blog-header-text">Blog’s</div>
      </div>
      <div className="blog-wrapper">
        {visiblePosts.map((post) => (
          <div
            key={post.id}
            className={`blog-card ${activeCard === post.id ? "active" : ""}`}
            onClick={() => toggleCard(post.id)}
          >
            <img src={post.image} className="blog-image" />
            {activeCard === post.id && (
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-description">{post.description}</p>
                <div className="read-more">Read More <img style={{width:'10px', paddingLeft:'10px'}} src={arrow}/></div>
              </div>
            )}
          </div>
        ))}
      </div>
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

export default Blogs;
