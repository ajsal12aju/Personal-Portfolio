import React from 'react'
import './Card.css'

function Card({emoji,heading,details}) {
  return (
    <div className='card'>
      <div>
        <img src={emoji} alt="" />
        </div>
        <span>{heading}</span>
        <p>{details}</p>
        <button className="c-button">LEARN MORE</button>
    </div>
  )
}

export default Card