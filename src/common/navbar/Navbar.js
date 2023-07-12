import React from "react";
import "./Navbar.css";
import images from "../../constant/images";
const Navbar = () => {
  return (
    <nav>
      <div className="nav">
        <div>
          <img src={images.plastapslogo} className="plastaps_logo" />
        </div>
        <div className="buy_sell_btn">
          <a href="https://plastaps.com/admin/buyer/login" target="_blank">
            <button className="button">Buy</button>
          </a>
          <a href="https://plastaps.com/admin/seller/login" target="_blank">
            <button className="button">Sell</button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
