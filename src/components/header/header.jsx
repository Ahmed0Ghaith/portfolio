import React from "react";
import "./header.css";
import CTA from "./cta";
import Me from "../../assets/AhmedGhaith.jpg";
import Socials from "../header/socials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello , I am</h5>

        <h1>Ahmed Ghaith</h1>
        <h5 className="text-light">A Dotnet Fullstack and Mobile Developer </h5>

        <CTA />
        <Socials />
        <div  className="main_img mask">
          <img className="my-img" src={Me} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
      
  );
};

export default header;
