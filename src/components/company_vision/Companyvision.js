import React from "react";
import "./Companyvision.css";
import images from "../../constant/images";
const Companyvision = () => {
  return (
    <main>
      <div className="cVision_sec">
        <div className="cVision_inner">
          <div className="cVision_us">
            <h1>Company Vision</h1>
            <div className="cVision_p" style={{ width: "500px" }}>
              <p>
                At Plastaps, we envision a future where the plastic industry
                thrives while prioritizing sustainability and responsibility. We
                believe that by connecting buyers and sellers in an efficient
                and transparent manner, we can revolutionize the way plastic
                resins are traded. Our vision is to facilitate the adoption of
                recycled resins and regrinded resins, minimizing plastic waste
                and contributing to a greener planet.
              </p>
            </div>
          </div>
          {/* <div className="cVision_img">
            <img src={images.aboutus} className="cVision_image_size" />
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Companyvision;
