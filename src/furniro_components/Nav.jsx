import React from "react";
import furniroLogo from "../furniro_assets/furniro-logo.svg";
import furniroAccountAlert from "../furniro_assets/furniro-account_alert.svg";
import furniroCart from "../furniro_assets/furniro-cart.svg";
import furniroHeart from "../furniro_assets/furniro-heart.svg";
import furniroSearch from "../furniro_assets/furniro-search.svg";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { BiMenuAltRight } from "react-icons/bi";
import "../furniro_components/NavStyle.css";
import { Menu } from "@mui/material";
function Nav() {
  return (
    <>
      <div
        className="container-fluid bg-white d-flex justify-content-between mt-0"
        id="heading-parent-container"
      >
        <div className="logo-container d-flex justify-content-center align-items-center flex-row gap-1">
          <img src={furniroLogo} alt={furniroLogo} />
          <h3 className="m-0">Furniro</h3>
        </div>
        {/* mobile nav */}
        <nav className="d-lg-none d-flex align-items-center justify-content-end">
          {<BiMenuAltRight size="2.5rem" />}
        </nav>
        <nav className="d-lg-flex d-sm-none d-none  justify-content-center align-items-center">
          <a href="#" className="text-decoration-none">
            Home
          </a>
          <a href="#" className="text-decoration-none">
            Shop
          </a>
          <a href="#" className="text-decoration-none">
            About
          </a>
          <a href="#" className="text-decoration-none">
            Contact
          </a>
        </nav>
        <div className="nav-icons-container d-lg-flex d-sm-none d-none justify-content-center align-items-center">
          <img src={furniroAccountAlert} alt={furniroAccountAlert} />
          <img src={furniroSearch} alt={furniroSearch} />
          <img src={furniroHeart} alt={furniroHeart} />
          <img src={furniroCart} alt={furniroCart} />
        </div>
      </div>
    </>
  );
}

export default Nav;
