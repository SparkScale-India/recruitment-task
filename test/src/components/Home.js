import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // Import custom CSS
import image1 from "../assets/image1.jpg";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const sliderRef = useRef(null);

  return (
    <div>
      {/* Carousel Section */}
      <div className="carousel-container">
        <Slider ref={sliderRef} {...settings}>
          <div className="slide">
            <div
              className="slide-background"
              style={{ backgroundImage: `url(${image1})` }}
            >
              <div className="overlay"></div>
              <div className="content">
                <h1>The Power of Choice.</h1>
                <p>We bring you an awesomeness of design, creative skills, thoughts, and ideas.</p>
              </div>
            </div>
          </div>
          <div className="slide">
            <div
              className="slide-background"
              style={{ backgroundImage: `url(${image1})` }}
            >
              <div className="overlay"></div>
              <div className="content">
                <h1>Creative Innovation</h1>
                <p>Unlocking new possibilities with technology and design.</p>
              </div>
            </div>
          </div>
        </Slider>

        {/* Navigation Buttons */}
        <div className="carousel-controls">
          <button className="prev-btn" onClick={() => sliderRef.current.slickPrev()}>
            ← Prev
          </button>
          <button className="next-btn" onClick={() => sliderRef.current.slickNext()}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home; 