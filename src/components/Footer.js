import React from 'react'
import footerPic from "../images/footerPic.JPG";
import "../Footer.css"
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const today = new Date();
  return (
    <>
      <div className=" row footer__section">
        <div className="col-md-4 links__footer">
          <NavLink exact to="/">
            <p>Home</p>
          </NavLink>
          <NavLink exact to="/about">
            <p>About</p>
          </NavLink>
          <NavLink exact to="/contact">
            <p> Contact</p>
          </NavLink>
        </div>
        <div className="col-md-4">
          <p>
            <i class="fa fas fa-phone-alt pr-2"></i> +49 176 7486 5418
          </p>

          <p>
            <i class="fas fa-envelope pr-2"></i> info@upscaleadvisory.com
          </p>
        </div>
        <NavLink exact to="/contact">
          <div className="col-md-4 footer__image">
            <img src={footerPic} alt="" />
          </div>
        </NavLink>
      </div>
      <div className="copy1">
        <p>Copyright © {today.getFullYear()} All Rights Reserved.</p>
      </div>
    </>
  );
}