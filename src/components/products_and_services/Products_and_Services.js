import React from "react";
import "./Products_and_Services.css";
import images from "../../constant/images";
const Products_and_Services = () => {
  return (
    <div className="home-revr-card-main">
      <div class="home-services-container">
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Products and Services
        </h1>
        <div class="home-services-table container">
          <div class="home-service-card">
            <div class="home-service-face home-service-front">
              <img
                src={images.Plastic_Resins}
                alt=""
                style={{ objectFit: "cover" }}
              />
              <div className="home-service-card-frint-txt-box">
                <div className="home-service-card-inner-txt-box">
                  <h3 className="home-service-card-title">
                    Plastic Virgin Resins
                  </h3>
                  {/* <p className="home-services-card-txt">Starting from $50</p> */}
                </div>
              </div>
            </div>
            <div class="home-service-face home-service-back">
              <img src={images.Plastic_Resins} className="card-back-icon" />
              <p className="home-card-back-heading">Plastic Virgin Resins</p>
              <p>
                <div class="box">
                  Our platform offers a comprehensive range of plastic virgin
                  resins, including PP, PE, PS, PVC, and PET. These high-quality
                  resins are sourced from trusted suppliers, ensuring consistent
                  performance and reliability. Whether you require specific
                  grades, colors, or quantities, Plastaps provides a wide
                  selection to meet your unique needs.
                </div>
              </p>
            </div>
          </div>
          <div class="home-service-card">
            <div class="home-service-face home-service-front">
              <img
                src={images.Recycle_Resins}
                alt=""
                className="home-service-card-img"
              />
              <div className="home-service-card-frint-txt-box">
                <div className="home-service-card-inner-txt-box">
                  <h3 className="home-service-card-title">
                    <b>Recycle Resins</b>
                  </h3>
                  {/* <p className="home-services-card-txt">Starting from $90</p> */}
                </div>
              </div>
            </div>
            <div class="home-service-face home-service-back">
              <img src={images.Recycle} className="card-back-icon" />
              <p className="home-card-back-heading">Recycle Resins</p>
              <p>
                <div class="box">
                  Plastaps is committed to promoting the use of recycled resins,
                  which are essential for reducing plastic waste and conserving
                  resources. We connect buyers with reputable suppliers offering
                  recycled PP, PE, PS, PVC, and PET resins. These resins undergo
                  rigorous quality checks to ensure they meet industry
                  standards, enabling businesses to integrate sustainable
                  materials into their products.
                </div>
              </p>
              {/* <a href="#" className="home-card-back-link">
                DISCOVER MORE
              </a> */}
            </div>
          </div>
          <div class="home-service-card">
            <div class="home-service-face home-service-front">
              <img
                src={images.card_img3}
                alt=""
                className="home-service-card-img"
              />
              <div className="home-service-card-frint-txt-box">
                <div className="home-service-card-inner-txt-box">
                  <h3 className="home-service-card-title">Regrinded Resins</h3>
                  {/* <p className="home-services-card-txt">Starting from $75</p> */}
                </div>
              </div>
            </div>
            <div class="home-service-face home-service-back">
              <img src={images.card_back_icon3} className="card-back-icon" />
              <p className="home-card-back-heading">Regrinded Resins</p>
              <p>
                <div class="box">
                  Regrinded resins play a crucial role in the circular economy,
                  as they are made from post-industrial or post-consumer plastic
                  waste. Plastaps facilitates the trading of regrinded PP, PE,
                  PS, PVC, and PET resins, enabling businesses to reduce their
                  carbon footprint and contribute to a more sustainable future.
                  Our platform ensures that regrinded resins meet strict quality
                  requirements, providing businesses with eco-friendly
                  alternatives.
                </div>
              </p>
              {/* <a href="#" className="home-card-back-link">
                DISCOVER MORE
              </a> */}
            </div>
          </div>

          {/* <div class="home-service-card">
            <div class="home-service-face home-service-front">
              <img
                src={images.card_img4}
                alt=""
                className="home-service-card-img"
              />
              <div className="home-service-card-frint-txt-box">
                <div className="home-service-card-inner-txt-box">
                  <h3 className="home-service-card-title">
                    Relaxing and Tranquil Environment
                  </h3>
                  <p className="home-services-card-txt">Starting from $75</p>
                </div>
              </div>
            </div>
            <div class="home-service-face home-service-back">
              <img src={images.card_back_icon4} className="card-back-icon" />
              <p className="home-card-back-heading">
                Relaxing and Tranquil Environment
              </p>
              <p>
                <div class="box">
                  When you step into Ish Essence Studio, you'll experience a
                  serene and calming ambiance designed to promote relaxation and
                  rejuvenation. I believe in providing a peaceful escape where
                  you can unwind, de-stress, and enjoy a pampering facial
                  experience that revitalizes both your skin and your spirit.
                </div>
              </p>
              <a href="#" className="home-card-back-link">
                DISCOVER MORE
              </a>
            </div>
          </div> */}
        </div>
      </div>

      {/* <div className="revr-card-down-flex container">
        <div className="revr-card-down-flex-part1">
          <p className="revr-card-down-flex-part1-txt">
            Facial Massage therapy for rest and relaxation. You owe yourself
            this moment.
          </p>
        </div>
        <div className="revr-card-down-flex-part2">
          <p className="revr-card-down-part2-txt">
            Facial skin massage involves gentle manipulation of the facial
            muscles and tissues to improve the appearance and health of the
            skin. It offers benefits like improved circulation, relaxation,
            lymphatic drainage, muscle toning, and enhanced product absorption.
          </p>
          <a href="#" className="home-card-back-link">
            EXPLORE MORE
          </a>
        </div>
      </div>  */}
    </div>
  );
};

export default Products_and_Services;
