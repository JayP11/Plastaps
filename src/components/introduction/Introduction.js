import React from "react";
import "./Introduction.css";
import images from "../../constant/images";
const Introduction = () => {
  return (
    <main>
      <div className="intro_sec">
        <div className="intro_inner">
          <div className="intro_us">
            <h1>Introduction</h1>
            <div className="intro_p" style={{ width: "500px" }}>
              <p>
                Plastaps is revolutionizing the way plastic resins are bought
                and sold. With our innovative middleware technology, we provide
                a seamless platform that simplifies the process of trading
                plastic virgin resins, recycle resins, and regrinded resins. Our
                goal is to foster a circular economy within the plastic
                industry, promoting sustainable practices and reducing
                environmental impact.
              </p>
            </div>
          </div>
          {/* <div className="intro_img">
            <img src={images.aboutus} className="intro_image_size" />
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Introduction;
