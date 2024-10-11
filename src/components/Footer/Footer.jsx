import React from "react";
import "./Footer.css";
import { assets } from "./../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Skin care is a routine daily procedure in many settings, such as
            skin that is either too dry or too moist, and prevention of
            dermatitis and prevention of skin injuries.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="fb" />
            <img src={assets.twitter_icon} alt="twit" />
            <img src={assets.linkedin_icon} alt="linke" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privecy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+88-000-448-555</li>
            <li>contact@blissfullskin.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Blissfull.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
