import React from "react";
import image1 from "../../assets/images/slider-image-2.jpeg";
import image2 from "../../assets/images/slider-image-3.jpeg";
import image3 from "../../assets/images/grocery-banner.png";
import image4 from "../../assets/images/grocery-banner-2.jpeg";

import Slider from "react-slick";
export default function MainSlider() {
  var settings = {
    arrows:false,
    autoplay:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row my-2">
        <div className="md:w-3/4 w-full">
          <Slider {...settings}>
            <img src={image1} className="w-full h-[400px]" alt="main slider" />
            <img src={image2} className="w-full h-[400px]" alt="main slider" />
          </Slider>
        </div>
        <div className="md:w-1/4 flex md:block">
          <img src={image3} className="md:block w-1/2 md:w-full h-[200px]" alt="" />
          <img src={image4} className="md:block w-1/2 md:w-full h-[200px]" alt="" />
        </div>
      </div>
    </>
  );
}
