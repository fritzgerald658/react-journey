import React from "react";
import funiroMuggo from "../furniro_assets/furniro-muggo.jpg";
import funiroLolito from "../furniro_assets/furniro-lolito.jpg";
import funiroPingky from "../furniro_assets/furniro-pingky.jpg";
import funiroSyltherine from "../furniro_assets/furniro-syltherine.jpg";
import funiroPotty from "../furniro_assets/furniro-potty.jpg";
import funiroGrifo from "../furniro_assets/furniro-grifo.jpg";
import funiroLeviosa from "../furniro_assets/furniro-leviosa.jpg";
import funiroRespira from "../furniro_assets/furniro-respira.jpg";

function OurProductsCard({productTitle, productSubtitle, productSalePrice, productOriginalPrice}) {
  return (
    <>
      <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
  );
}

function OurProducts() {
  return (
    <>
      <div className="container-fluid"></div>
    </>
  );
}

export default OurProducts;
