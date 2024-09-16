import React from "react";
import "/src/furniro_components/HeroStyle.css";
function Hero() {
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center  px-2"
        id="hero-parent-container"
      >
        <div className="container px-4 px-md-0">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <div className="call-to-action-container p-5 ">
                <p>New Arrival</p>
                <h2>
                  Discover Our <br /> New Collection
                </h2>
                <article>
                  Refresh your home with our latest furniture. Stylish,
                  functional pieces to elevate your space.
                </article>
                <button>BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
