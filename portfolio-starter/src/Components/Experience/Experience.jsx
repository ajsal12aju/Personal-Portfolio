import React from 'react'
import './Experience.css'
import { themeContext } from '../../Context'
import { useContext } from "react";

 function Experience() {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  return (
    <div className='experience'>
        <div className='achievement'>
            <div className='circle'>1+</div>
            <span style={{fontSize:' 1.2rem'}}>years</span>
            <span>Experience</span>
        </div>
        <div className='achievement'>
            <div className='circle'>10+</div>
            <span style={{fontSize:' 1.2rem'}}>completed</span>
            <span>Projects</span>
        </div>
        <div className='achievement'>
            <div className='circle'>1+</div>
            <span style={{fontSize:' 1.2rem'}}>companies</span>
            <span>work</span>
            
        </div>
    </div>
  )
}

export default Experience