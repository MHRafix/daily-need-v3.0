import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SliderArrow from "../../../../utilities/SliderArrow";

export default function BannerSlider({ all_sliders }) {
  // slider arrows are import from utilities
  const { SampleNextArrow, SamplePrevArrow } = SliderArrow();

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  console.log(all_sliders);
  return (
    <div className="banner_slider_wrapper">
      <Slider {...settings}>
        {all_sliders.map((slider) => (
          <div key={slider._id} className="slider_banner_wrapper h-96 w-full">
            {/* {slider.slider_image && ( */}
            <Image
              priority
              src={slider?.slider_image}
              alt={slider?.image_name}
              layout="fill"
              objectFit="contain"
            />
            {/* )} */}
          </div>
        ))}
      </Slider>
    </div>
  );
}
