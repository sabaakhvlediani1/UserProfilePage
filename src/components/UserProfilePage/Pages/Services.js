import React from "react";
import Carousel from "../Carousel/Carousel";
import ShareAndDownload from "../ShareAndDownloadComp/ShareAndDownload";

const Services = ({ onAddContact }) => {
 
  return (
    <>
      <div
        style={{
          padding: "10px",
        }}
      >
        <Carousel />
      </div>
      <ShareAndDownload onAddContact={onAddContact}/>
    </>
  );
};

export default Services;
