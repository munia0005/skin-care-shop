import React from "react";
import "./AppDownload.css";
import { assets } from "./../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> Blissfull App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="play" />
        <img src={assets.app_store} alt="app" />
      </div>
    </div>
  );
};

export default AppDownload;
