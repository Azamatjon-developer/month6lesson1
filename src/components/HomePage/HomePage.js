import React from "react";
import "./homePage.css";

import HomeLeft from "../../assets/images/HomePageLEft.png"
import HomeRight from "../../assets/images/HomePageLEft.png"


const HomePage = () => {
  return (
    <>
      <div className="HomeInfo">
        <h2> Professional Home Pages </h2>
        <p>
          Attractive and stylish home layouts bring your portfolio website to
          the next level.
        </p>
      </div>

      <div className="HomePhoto">
        <img src= {HomeLeft} alt="HomeLeft"/>
        <img src= {HomeRight} alt="HomeRight"/>
       
      </div>
    </>
  );
};

export default HomePage;
