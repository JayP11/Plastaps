import React from "react";
import "./Aboutus.css";
import images from "../../constant/images";
const Aboutus = () => {
  return (
    <main>
      <div className="about_sec">
        <div className="about_inner">
          <div className="about_us">
            <h1>About us</h1>
            <div className="about_p" style={{ width: "500px" }}>
              <p>
                Welcome to Plastaps, the leading middleware platform for plastic
                virgin resins, recycle resins, and regrinded resins. We are a
                vibrant community of buyers and sellers dedicated to creating a
                sustainable and efficient marketplace for the plastic industry.
                With a comprehensive selection of PP, PE, PS, PVC, and PET
                resins, we connect businesses from various sectors, empowering
                them to make responsible and informed decisions.
              </p>
            </div>
          </div>
          {/* <div className="about_img">
            <img src={images.aboutus} className="about_image_size" />
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Aboutus;
