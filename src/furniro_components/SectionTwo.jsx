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
          className="container text-center py-4 py-md-5"
          id="section-two-header"
        >
          <h1>Browse The Range</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </header>
        <div className="container d-flex justify-content-center">
          <div className="row justify-content-center gap-3 gap-lg-0">
            <div className="col-12 col-lg-4 d-flex align-items-center flex-column">
              <img src={furniroDiningRoom} alt="" />
              <p className="text-center">Dining Room</p>
            </div>
            <div className="col-12 col-lg-4 d-flex align-items-center flex-column">
              <img src={furniroLivingRoom} alt="" />
              <p className="text-center">Living Room</p>
            </div>
            <div className="col-12 col-lg-4 d-flex align-items-center flex-column">
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
