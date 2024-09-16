import React from "react";
import "../furniro_components/SectionFiveStyle.css";
import furniroSlider1 from "../furniro_assets/furniro-slider-one.jpg";
import furniroSlider2 from "../furniro_assets/furniro-slider-two.jpg";
import furniroSlider3 from "../furniro_assets/furniro-slider-three.jpg";
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
      title: "1 - Bedroom",
      description: "Inner Peace",
    },
    {
      src: furniroSlider2,
      title: "2 - Dining Room",
      description: "Elegance and Style",
    },
    {
      src: furniroSlider3,
      title: "3 - Office",
      description: "Modern Workspace",
    },
  ];

  //---------Slick Settings------------//
  const settings = {
    dots: true,
    infinite: true,
    Speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div
        className="container-fluid d-flex p-5 align-items-center position-relative flex-column flex-lg-row"
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
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <img src={furniroSlider1} alt="" />
              </div>
              <div>
                <img src={furniroSlider2} alt="" />
              </div>
              <div>
                <img src={furniroSlider3} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionFive;
