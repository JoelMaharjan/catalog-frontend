import React from "react";
import { bannerData } from "../utils/bannerData";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-row">
        <ArrowBackIos style={{ fontSize: 20, color: "#585858" }} />
        {bannerData.map((item, index) => (
          <div className="banner-items" key={index}>
            <img src={item.logo} alt="logo" />
            <img src={item.logotype} alt="logo" />
          </div>
        ))}
        <ArrowForwardIos style={{ fontSize: 20, color: "#585858" }} />
      </div>
    </div>
  );
}

export default Banner;
