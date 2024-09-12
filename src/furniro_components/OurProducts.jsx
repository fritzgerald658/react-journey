import React from "react";
import furniroMuggo from "../furniro_assets/furniro-muggo.jpg";
import furniroLolito from "../furniro_assets/furniro-lolito.jpg";
import furniroPingky from "../furniro_assets/furniro-pingky.jpg";
import furniroSyltherine from "../furniro_assets/furniro-syltherine.jpg";
import furniroPotty from "../furniro_assets/furniro-potty.jpg";
import furniroGrifo from "../furniro_assets/furniro-grifo.jpg";
import furniroLeviosa from "../furniro_assets/furniro-leviosa.jpg";
import furniroRespira from "../furniro_assets/furniro-respira.jpg";
import "../furniro_components/OurProductsStyle.css";
function OurProductsCard({
  productImage,
  productTitle,
  productSubtitle,
  productSalePrice,
  productOriginalPrice,
  productSaleRateBalloon,
}) {
  return (
    <>
      <div
        className="card "
        style={{ width: "19rem", height: "auto", borderRadius: "0px" }}
      >
        <div>{productSaleRateBalloon}</div>
        <img src={productImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{productTitle}</h5>
          <p
            className="card-text"
            style={{ color: "#898989", fontSize: "1rem", fontWeight: "500" }}
          >
            {productSubtitle}
          </p>
          <div className="card-prices-container d-flex gap-2 justify-content-start align-items-center mx-0">
            <p
              className="card-text m-0"
              style={{
                color: "#333333",
                fontSize: "1.25rem",
                fontWeight: "500",
              }}
            >
              {productSalePrice}
            </p>
            <p
              className="card-text"
              style={{
                color: "#898989",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              <del>{productOriginalPrice}</del>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function OurProducts() {
  return (
    <>
      <div className="container-fluid " id="our-product-parent-container">
        <header className="d-flex justify-content-center px-4 py-4 py-md-5 px-md-5">
          <h1>Our Products</h1>
        </header>
        <div className="container d-flex justify-content-center">
          <div className="row d-lg-flex justify-content-center">
            <div className="col-12 col-lg-4 col-xl-3  col-md-6 d-flex justify-content-center d-lg-block p-lg-2 my-3">
              <OurProductsCard
                productImage={furniroSyltherine}
                productTitle="Syltherine"
                productSubtitle="Stylish Cafe Chair"
                productSalePrice="PHP 1,666.399"
                productOriginalPrice="PHP 2,332.958"
              />
            </div>
            <div className="col-12 col-lg-4 col-xl-3  col-md-6 d-flex justify-content-center d-lg-block p-lg-2 my-3">
              <OurProductsCard
                productImage={furniroSyltherine}
                productTitle="Syltherine"
                productSubtitle="Stylish Cafe Chair"
                productSalePrice="PHP 1,666.399"
                productOriginalPrice="PHP 2,332.958"
              />
            </div>
            <div className="col-12 col-lg-4 col-xl-3  col-md-6 d-flex justify-content-center d-lg-block p-lg-2 my-3">
              <OurProductsCard
                productImage={furniroSyltherine}
                productTitle="Syltherine"
                productSubtitle="Stylish Cafe Chair"
                productSalePrice="PHP 1,666.399"
                productOriginalPrice="PHP 2,332.958"
              />
            </div>
            <div className="col-12 col-lg-4 col-xl-3  col-md-6 d-flex justify-content-center d-lg-block p-lg-2 my-3">
              <OurProductsCard
                productImage={furniroSyltherine}
                productTitle="Syltherine"
                productSubtitle="Stylish Cafe Chair"
                productSalePrice="PHP 1,666.399"
                productOriginalPrice="PHP 2,332.958"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurProducts;
