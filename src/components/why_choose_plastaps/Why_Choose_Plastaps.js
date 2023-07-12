import React from "react";
import "./Why_Choose_Plastaps.css";
import images from "../../constant/images";
const Why_Choose_Plastaps = () => {
  return (
    <main>
      <div className="Choose_Plastaps_sec">
        <div className="Choose_Plastaps_inner">
          <div className="Choose_Plastaps">
            <h1>Why Choose Plastaps?</h1>
            <div className="wcp_p">
              <p>
                Seamless Trading Experience: Plastaps offers a user-friendly
                interface and advanced search capabilities, making it easy for
                buyers and sellers to navigate the platform and find the resin
                they need. Our intuitive design streamlines the trading process,
                saving you time and effort.
              </p>

              <p>
                Robust Middleware Technology: Our cutting-edge middleware
                technology automates various aspects of the trading process,
                ensuring efficiency and accuracy. From transaction management to
                logistics support, Plastaps optimizes every step, allowing you
                to focus on your core business.
              </p>

              <p>
                Transparency and Security: We prioritize transparency and
                security in all transactions. Plastaps verifies the credentials
                of sellers and provides detailed information about each resin
                listing. Our platform also incorporates secure payment gateways,
                safeguarding your financial transactions.
              </p>

              <p>
                Sustainability and Responsibility: Plastaps is committed to
                driving sustainability within the plastic industry. By promoting
                the use of recycled resins and regrinded resins, we enable
                businesses to embrace responsible practices and reduce their
                environmental impact.
              </p>

              <p>
                Comprehensive Support: Plastaps provides comprehensive support
                throughout the trading process. From logistics coordination to
                quality assurance, our team is dedicated to ensuring a seamless
                experience for all users. We are here to assist you every step
                of the way.
              </p>
              <a href="https://google.com" style={{ color: "#fff" }}>
                Join Plastaps Today
              </a>
            </div>
          </div>
          {/* <div className="Choose_Plastaps_img">
            <img src={images.aboutus} className="Choose_Plastaps_image_size" />
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Why_Choose_Plastaps;
