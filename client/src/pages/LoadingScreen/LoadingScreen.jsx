import React from "react";
import "./style.css";

const LoadingScreen = () => {
  return (
    <div>
      <div class="center_loader">
        <div class="ring"></div>
        <span>
          <img src="images/logomark.png" alt="" />
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;
