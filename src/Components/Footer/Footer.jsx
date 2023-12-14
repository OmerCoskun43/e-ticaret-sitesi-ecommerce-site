import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="footer" />
        <p>CSKN</p>
      </div>
      <ul className="footer-link">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="ins" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest_icon} alt="pin" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="what" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr className="hr" />

        <p>
          Copyright <sup>©</sup> {new Date().toLocaleDateString()} - All Right
          Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
