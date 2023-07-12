import React from "react";
import "./Footer.css";
import images from "../../constant/images";
const Footer = () => {
  return (
    <div className="footer_main">
      <div>
        <img src={images.PlastaplogoRemovebg} className="plastaps_logo" />
      </div>
      <div className="store_btn">
        <p style={{ color: "#fff" }}>Download the app</p>
        <div className="store_img_size">
          <div>
            <a
              href="https://play.google.com/store/apps/details?id=com.plastaps&pli=1"
              target="_blank">
              <img
                src={images.GPlaystore}
                style={{ height: "49px", width: "156px" }}
              />
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <a
              href="https://apps.apple.com/us/app/plastaps/id1671760576"
              target="_blank">
              <img
                src={images.AppStore}
                style={{ height: "49px", width: "156px" }}
              />
            </a>
          </div>
        </div>
        <br />
      </div>
      <hr />
      <div>
        {/* <br /> */}
        <p style={{ color: "#fff", display: "flex", justifyContent: "center" }}>
          Contact us
        </p>
      </div>
    </div>
  );
};

export default Footer;
