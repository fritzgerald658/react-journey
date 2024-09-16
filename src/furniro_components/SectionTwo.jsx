import React from "react";
import furniroLivingRoom from "../furniro_assets/furniro-living-room.png";
import furniroDiningRoom from "../furniro_assets/furniro-dining-room.png";
import furniroBedRoom from "../furniro_assets/furniro-bedroom.jpg";
import "../furniro_components/SectionTwoStyle.css";
function SectionTwo() {
  return (
    <>
      <div className="container-fluid">
        <header
          className="container text-center px-4 py-4 py-md-5 px-md-5"
          id="section-two-header"
        >
          <h1>Browse The Range</h1>
          <p>
            Explore our new furniture collection and find the perfect pieces to
            enhance your home.
          </p>
        </header>
        <div
          className="container d-flex justify-content-center"
          id="section-two-image-container"
        >
          <div className="row justify-content-center gap-3 gap-lg-0">
            <div className="col-12 px-0 px-md-3 col-lg-4 d-flex align-items-center justify-content-center flex-column gap-3">
              <img src={furniroDiningRoom} alt="" />
              <p className="text-center">Dining</p>
            </div>
            <div className="col-12 px-0 px-md-3 col-lg-4 d-flex align-items-center justify-content-center flex-column gap-3">
              <img src={furniroLivingRoom} alt="" />
              <p className="text-center">Living</p>
            </div>
            <div className="col-12 px-0 px-md-3 col-lg-4 d-flex align-items-center justify-content-center flex-column gap-3">
              <img src={furniroBedRoom} alt="" />
              <p className="text-center">Bedroom</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
