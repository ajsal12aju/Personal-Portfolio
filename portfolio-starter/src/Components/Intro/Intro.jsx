import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
// import boy from '../../img/boy.png'
import mypic from "../../img/my-pic.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { useViewportScroll, useTransform } from "framer-motion";

function Intro() {
  const transition = { duaration: 0.5 };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const { scrollY } = useViewportScroll();
  const x = useTransform(scrollY, [0, 100], [-100, 0], transition);
  const y = useTransform(scrollY, [0, 100], [0, -100], transition);

  return (
    <div className="container intro">
      <div className="row">
        <div className="col-lg-7 i-left">
          <div className="i-name">
            <h1 style={{ color: darkMode ? "white" : "" }}>Hy! I Am</h1>
            <h1 className="hidden">Mohammed Ajsal vp</h1>
            <p className="details">
              A self taught developer who is interested to learn new concepts. I
              have a strong desire to devote myself to the tasks at hand and to
              track and review my progress in a responsible way until the task is
              completed. Seeking opportunities where I can utilize my analytical,
              mathematical, and technical skills to solve real-life problems
            </p>
          </div>
          <button className="button i-button">Hire me</button>
          <div className="i-icons">
            <a href="https://github.com/ajsal12aju">
              <img src={Github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/mohammed-ajsal-vp-946aab273/">
              {" "}
              <img src={LinkedIn} alt="" />
            </a>
            <a href="">
              {" "}
              <img src={Instagram} alt="" />
            </a>
          </div>
        </div>

        <div className="col-lg-5 i-right">
          <div className="emoji">
            <motion.img
              initial={{ x: -100, y: -100 }}
              animate={{ x: -50, y: -50 }}
              transition={{ duration: 1 }}
              src={glassesimoji} alt=""
              style={{width:'100%'}}
              />
            
          </div>
          {/* rounded-circle img-fluid */}

          <div className="profile-img">
            <div className="img-div">
            <img src={mypic} alt="" className="my-pic " />
            </div>
            <img src={Vector1} alt=""  className="blue-bg" />
            <img src={Vector2} alt="" className="yellow-bg" /> 
          </div>

          <motion.div
          initial={{ x: "10vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          // style={{ top: "-4%", left: "68%" }}
          className={'floatdiv-up'}
          // style={{position:'absolute', top: "20px", right: "20px" }}
        >
          <FloatingDiv image={Crown} text1="Web" text2="Developer" />
        </motion.div>

        <motion.div 
        initial={{ x: "-10vw" }}
        animate={{ x: '-5vw '}}
        transition={{ duration: 1 }}
        className={'floatdiv-down'}
        // style={{position:'absolute',  bottom: "20px", left: "20px" }}
        >
          <FloatingDiv image={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

          {/* for blur divs */}
          <div className="blur" style={{ background: "rgba(238 210 255)" }}></div>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>

      </div>
    </div>
  );
}
export default Intro;
