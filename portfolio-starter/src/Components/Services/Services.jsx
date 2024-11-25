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
    <div className="container services">
      <div className='row'>
        <div className="col-lg-6 awesome">
           <h1 style={{color:darkMode ? 'white':''}}>My Awesome</h1>
           <h1>services</h1>
           <p>As a seasoned front-end and backend developer, I offer
             a dynamic and versatile web development service that brings 
              your digital projects to life. With a passion for coding
               and a keen eye for design, I'm dedicated to creating 
                seamless and engaging user experiences..</p>
           <a href={Resume} download>  <button className="button s-button">Download CV</button></a>
          
           <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
  

        <div className="col-lg-6 ">
          <div className='cards'>
          <div className='d-flex align-items-center'>
          {/* style={{left : '14rem'}} */}
          <Card
           emoji = {HeartEmoji}
           heading = {'Dsigning'}
           details = {"Html, Css, Javascript, Bootstrap, React etc.."}
          />
          </div>

          <div >
          {/* style={{top : '12rem', left:"-4rem"} */}
          <Card
          style = {{marginBottom: '30px'}}
           emoji = {Glasses}
           heading = {'Developer'}
           details = {"Node, MongoDB, Express, Mysql etc.."}
          />
          {/* </div>
          <div style={{top : '19rem', left:"12rem"}}> */}
          <Card
           emoji = {Humble}
           heading = {'UI/UX'}
           details = {"Will create Responsive innovation"}
          />
          </div>
          {/* <div className='blur s-blur2' style={{background : "var(--purple)"}}></div> */}
        </div>
        </div>
        </div>
    </div>
  )
}

export default Services