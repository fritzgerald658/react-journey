import React, { useState } from "react";
import furniroMuggo from "../furniro_assets/furniro-muggo.jpg";
import furniroLolito from "../furniro_assets/furniro-lolito.jpg";
import furniroPingky from "../furniro_assets/furniro-pingky.jpg";
import furniroSyltherine from "../furniro_assets/furniro-syltherine.jpg";
import furniroPotty from "../furniro_assets/furniro-potty.jpg";
import furniroGrifo from "../furniro_assets/furniro-grifo.jpg";
import furniroLeviosa from "../furniro_assets/furniro-leviosa.jpg";
import furniroRespira from "../furniro_assets/furniro-respira.jpg";
import "../furniro_components/OurProductsStyle.css";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineCompareArrows } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import { IoShareSocial } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";

import { CiHeart } from "react-icons/ci";

function OurProductsCard({
  productImage,
  productTitle,
  productSubtitle,
  productSalePrice,
  productOriginalPrice,
  saleRateBalloon,
  newItemBalloon,
}) {
  const [overlay, setOverlay] = useState(false);

  const activateOverlay = () => {
    setOverlay(true);
  };
  return (
    <>
      <div className="card">
        <div className="container card-overlay" id="overlay-container">
          <div
            id="overlay"
            className=" d-flex justify-content-center align-items-center"
          >
            <button className="add-to-cart">Add to cart</button>
          </div>
          <div
            className="container d-flex justify-content-center align-items-center gap-4 mt-3"
            id="product-interactive-buttons"
          >
            <span className="d-flex justify-content-center align-items-center gap-2">
              <IoShareSocial size="1rem" />
              Share
            </span>
            <span className="d-flex justify-content-center align-items-center gap-2">
              <GoArrowSwitch size="1rem" />
              Compare
            </span>
            <span className="d-flex justify-content-center align-items-center gap-2">
              <GoHeart size="1rem" />
              Like
            </span>
          </div>
        </div>
        {saleRateBalloon && (
          <span className="sale-rate-balloon d-flex justify-content-center align-items-center">
            {saleRateBalloon}
          </span>
        )}
        {newItemBalloon && (
          <span className="new-item-balloon d-flex justify-content-center align-items-center">
            {newItemBalloon}
          </span>
        )}
        <img src={productImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title my-1">{productTitle}</h5>
          <p
            className="card-text mx-0 my-1"
            style={{ color: "#898989", fontSize: "1rem", fontWeight: "500" }}
          >
            {productSubtitle}
          </p>
          <div className="card-prices-container d-flex gap-2 justify-content-start align-items-center mx-0">
            <p
              className="card-text m-0"
              style={{
                color: "#333333",
              }}
            >
              {productSalePrice}
            </p>
            <p
              className="card-text"
              style={{
                color: "#898989",
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
          <div className="container p-0 m-0 row d-lg-flex justify-content">
            <div className="col-12 col-lg-4 col-xl-3  col-md-6 d-flex justify-content-center d-lg-block p-lg-2 my-3">
              <OurProductsCard
                saleRateBalloon="-50%"
                productImage={furniroSyltherine}
                productTitle="Syltherine"
                productSubtitle="Stylish Cafe Chair"
                productSalePrice="PHP 1,666.399"
                productOriginalPrice="PHP 2,332.958"
              />
            </div>
            <div className="col-12 col-lg-4 col-xl-3  col-md-6 d-flex justify-content-center d-lg-block p-lg-2 my-3">
              <OurProductsCard
                newItemBalloon="New"
                productImage={furniroLeviosa}
                productTitle="Leviosa"
                productSubtitle="Stylish Cafe Chair"
                productSalePrice="PHP 2,500.199"
                productOriginalPrice=""
              />
            </div>
            <div className="col-12 col-lg-4 col-xl-3  col-md-6 d-flex justify-content-center d-lg-block p-lg-2 my-3">
              <OurProductsCard
                saleRateBalloon="-30%"
                productImage={furniroLolito}
                productTitle="Lolito"
                productSubtitle="Luxury Big Sofa"
                productSalePrice="PHP 1,666.399"
                productOriginalPrice="PHP 2,332.958"
              />
            </div>
            <div className="col-12 col-lg-4 col-xl-3  col-md-6 d-flex justify-content-center d-lg-block p-lg-2 my-3">
              <OurProductsCard
                saleRateBalloon="-45%"
                productImage={furniroMuggo}
                productTitle="Muggo"
                productSubtitle="Small Mug"
                productSalePrice="PHP 1,666.399"
                productOriginalPrice="PHP 2,332.958"
              />
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center mt-4">
          <button className="see-more-button">SEE MORE</button>
        </div>
      </div>
    </>
  );
}

export default OurProducts;
