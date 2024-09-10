import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Carousel.scss";

const CarouselSlick = ({ props }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
    className: "slider variable-width",
    variableWidth: true,
  };

  return (
    <Slider {...settings}>
      {props.map((img, index) => (
        <div className="imgCarrusel" key={index}>
          <img src={`../../img/${img}`} />
        </div>
      ))}
    </Slider>
  );
};

export default CarouselSlick;