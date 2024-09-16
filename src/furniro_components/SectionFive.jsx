import React from "react";
import "../furniro_components/SectionFiveStyle.css";
import furniroSlider1 from "../furniro_assets/furniro-slider-1.jpg";
import furniroSlider2 from "../furniro_assets/furniro-slider-2.jpg";
import furniroSlider3 from "../furniro_assets/furniro-slider-3.jpg";
import { CgChevronLeft } from "react-icons/cg";
import { CgChevronRight } from "react-icons/cg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Speed } from "@mui/icons-material";
function SectionFive() {
  const swiperImages = [
    {
      src: furniroSlider1,
      title: "1 - Office",
      description: "Modern Workspace",
    },
    {
      src: furniroSlider2,
      title: "2 - Bedroom ",
      description: "Elegance and Style",
    },
    {
      src: furniroSlider3,
      title: "3 - Living",
      description: "Inner Peace",
    },
  ];

  //---------Slick Settings------------//
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        className="container-fluid d-flex p-5 align-items-center position-relative flex-column flex-lg-row mt-5 gap-5"
        id="section-five-parent-container"
      >
        <div className="container col-12 col-lg-4" id="left-side-content">
          <h1>50+ Beautiful rooms inspiration</h1>
          <article>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </article>
          <button>Explore More</button>
        </div>
        <div className="col-12 col-lg-8">
          <div className="slider-container position-relative">
            <Slider {...settings}>
              {swiperImages.map((images, index) => (
                <div key={index}>
                  <img src={images.src} alt="" />
                  <div
                    className="container images-description-container"
                    id={`images-description-${index + 1}`}
                    key={index}
                  >
                    <p>{images.title}</p>
                    <h1>{images.description}</h1>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionFive;
