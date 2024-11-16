import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Savitha from "../../img/logo1.png";
import India from "../../img/india.webp";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from '../../Context';
import { useContext } from "react";

function Work() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
      <div className="awesome">
        <span  style={{ color: darkMode ? "white" : "" }}>Works for all these</span>
        <span>Brands & clients</span>
        <div>
          <p>
            I have worked with a wide range of brands and clients<br />
          from small businesses to Fortune 500 companies. I have helped <br />
           them with a variety of projects, including website development, <br />
            social media marketing, and content creation. I am confident that<br />
             I can use my skills and experience to help you achieve your goals.
          </p>
        </div>
        <button className="button s-button">Hire me</button>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img className="work" src={Savitha} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle ">
            <img className="work" src={India} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>
        {/* Background circle */}
        <div className="w-backCircle blueCircle" />
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Work;
