import React from "react";
import Carousel from "../Carousel/Carousel";

const Properties = () => {
  return (
    <>
    <div
      style={{
        marginTop: "20px",
        padding: "10px" 
      }}
    >
      <h5>New York Property</h5>
      <Carousel />
    </div>
    <div
      style={{
        marginTop: "20px",
        padding: "10px" 
      }}
    >
      <h5>Arizona Property</h5>
      <Carousel />
    </div>
    </>
  );
};

export default Properties;
