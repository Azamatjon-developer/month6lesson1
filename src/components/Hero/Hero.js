import React from "react";
import Button from "../Button/Button";
import "./hero.css"
import hero from "../../assets/images/hero.png"


const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <h1 className="hero-headingOne">Tell your creativity to the world with <span className="hero-span">UIUXer</span></h1>
        
        <p className="hero-text">
          UIUXer is a creative, minimal, and cleanly designed personal and
          portfolio Webflow template.
        </p>

        <div className="hero-btn">
        <Button title={"Buy Template"} bgBtn={false} />
        <Button title={"Explore Page"} bgBtn={true} />
        </div>
        <div className="hero-img"> 
          <img src= {hero} alt="hero"/>
        </div>

      </section>
    </>
  );
};

export default Hero;
