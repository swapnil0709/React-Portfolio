import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>Quality Service</span>
        </h2>
        <div className="cards">
          <div className="icon">
            <img src={clock} alt="clock-img" />
            <h3>Efficient</h3>
          </div>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="cards">
          <div className="icon">
            <img src={clock} alt="clock-img" />
            <h3>Efficient</h3>
          </div>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="cards">
          <div className="icon">
            <img src={diaphragm} alt="diaphragm-img" />
            <h3>Efficient</h3>
          </div>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="cards">
          <div className="icon">
            <img src={money} alt="money-img" />
            <h3>Efficient</h3>
          </div>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="cards">
          <div className="icon">
            <img src={teamwork} alt="teamwork-img" />
            <h3>Efficient</h3>
          </div>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="home2-img" />
      </div>
    </div>
  );
};

export default ServicesSection;
