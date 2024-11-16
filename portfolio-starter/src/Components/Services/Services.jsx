import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './MOHAMMED AJSAL CV NEW 001.pdf'
import { themeContext } from '../../Context'
import { useContext } from "react";


function Services() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="services">
        <div className="awesome">
           <span style={{color:darkMode ? 'white':''}}>My Awesome</span>
           <span>services</span>
           <spane>As a seasoned front-end and backend developer, I offer <br />
             a dynamic and versatile web development service that brings <br />
              your digital projects to life. With a passion for coding <br />
               and a keen eye for design, I'm dedicated to creating <br />
                seamless and engaging user experiences..</spane>
           <a href={Resume} download>  <button className="button s-button">Download CV</button></a>
          
           <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
       
        <div className="cards">
          <div style={{left : '14rem'}}>
          <Card
           emoji = {HeartEmoji}
           heading = {'Dsigning'}
           details = {"Html,Css,Javascript,Bootstrap ,React etc.."}
          />
          </div>

          <div style={{top : '12rem', left:"-4rem"}}>
          <Card
           emoji = {Glasses}
           heading = {'Developer'}
           details = {"Node,MongoDB,Express,Mysql etc.."}
          />
          </div>
          <div style={{top : '19rem', left:"12rem"}}>
          <Card
           emoji = {Humble}
           heading = {'UI/UX'}
           details = {"Will create Responsive innovation"}
          />
          </div>
          <div className='blur s-blur2' style={{background : "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services