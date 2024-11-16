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
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span className="hidden">Mohammed Ajsal vp</span>
          <span className="details">
            A self taught developer who is interested to learn new concepts. I
            have a strong desire to devote myself to the tasks at hand and to
            track and review my progress in a responsible way until the task is
            completed. Seeking opportunities where I can utilize my analytical,
            mathematical, and technical skills to solve real-life problems
          </span>
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
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={mypic} alt="" className="my-pic" />
        <motion.img
          initial={{ x: 0, y: 0 }}
          animate={{ x: 30, y: 50 }}
          transition={{ duration: 1 }}
          src={glassesimoji}
            className="floating-div"
          alt=""
        />
        <motion.div
          initial={{ x: "10vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
            className="floating-div"
          style={{ top: "-4%", left: "68%" }}
        >
          <FloatingDiv image={Crown} text1="Web" text2="Developer" />
        </motion.div>
        <motion.div style={{ y, x, top: "18rem", left: "0rem" }}>
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
  );
}
export default Intro;
