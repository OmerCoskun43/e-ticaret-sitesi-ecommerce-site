import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hero-hand-icon">
          <p>New</p>
          <img src={hand_icon} alt="hand" />
        </div>
        <p>Collection</p>
        <p>For Eveyone</p>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow} alt="arrow" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
