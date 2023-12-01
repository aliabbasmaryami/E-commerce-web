import React from "react";
import "./Hero.css";
import hand_icon from "../../Assets/hand_icon.png";
import arrow_icon from '../../Assets/arrow.png';
import her0_img from '../../Assets/hero_image.png';

const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero-left">
        <h2>NEW arrivals only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collectios </p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>latest collections</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="her0-right">
      <img src={her0_img} alt="" />

      </div>
    </div>
  );
};

export default Hero;
