import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <main>
      <div className="hero_sec">
        <div className="hero_inner">
          <div className="buy_car">
            <h2>Become a buyer</h2>
            <p>Buy direct from sellers.</p>
            <a href="https://plastaps.com/admin/buyer/login" target="_blank">
              <button className="button" style={{ width: "100%" }}>
                Buy
              </button>
            </a>
          </div>
          <div className="sell_car">
            <h2 style={{ color: "#fff" }}>Become a seller</h2>
            <div className="hero_p">
              <p style={{ color: "#fff" }}>
                Sell directly to serious buyers. We handle every step.
              </p>
            </div>

            <a href="https://plastaps.com/admin/seller/login" target="_blank">
              <button className="button" style={{ width: "100%" }}>
                Sell
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
