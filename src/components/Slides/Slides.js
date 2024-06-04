import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import q from "../../Assets/slider-image/1.jpg";
import r from "../../Assets/slider-image/4.jpg";
import t from "../../Assets/slider-image/5.jpg";
import y from "../../Assets/slider-image/6.jpg";
import a from "../../Assets/slider-image/7.jpg";
import z from "../../Assets/slider-image/a1.jpg";
import Tilt from "react-parallax-tilt";

export default function Slides() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [q, r, t, y, a, z];

  return (
    <Slider {...sliderSettings}>
      {images.map((image, index) => (
        <Tilt key={index}>
          <img
            src={image}
            className="img-fluid"
            alt={`slide-${index}`}
            style={{ borderRadius: "10px" }}
          />
        </Tilt>
      ))}
    </Slider>
  );
}
