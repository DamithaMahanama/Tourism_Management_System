import React, { useState, useEffect } from "react";
import '../Styles/SlideShow.css'
import slide1 from "../images/slideshow1.jpg";
import slide2 from "../images/slideshow2.jpg";
import slide3 from "../images/slideshow3.jpg";
import slide4 from "../images/slideshow4.jpg";
import slide5 from "../images/slideshow5.jpg";
import slide6 from "../images/slideshow6.jpg";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [slide1, slide2, slide3, slide4, slide5, slide6];

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide, images.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  return (
    <div className="slideshow-container">
      <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} />
      <div>
        <button className="prev" onClick={handlePrevSlide}>  &#10094;</button>
        <button className="next" onClick={handleNextSlide}> &#10095;</button>
      </div>
    </div>
  );
};

export default Slideshow;
