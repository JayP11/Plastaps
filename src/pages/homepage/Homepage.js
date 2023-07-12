import React from "react";
import Hero from "../../components/hero/Hero";
import Aboutus from "../../components/aboutus/Aboutus";
import Introduction from "../../components/introduction/Introduction";
import Companyvision from "../../components/company_vision/Companyvision";
import Products_and_Services from "../../components/products_and_services/Products_and_Services";
import Why_Choose_Plastaps from "../../components/why_choose_plastaps/Why_Choose_Plastaps";

const Homepage = () => {
  return (
    <div>
      {/* <Hero /> */}
      <Hero />
      <Aboutus />
      <Introduction />
      <Companyvision />
      <Products_and_Services />
      <Why_Choose_Plastaps />
    </div>
  );
};

export default Homepage;
