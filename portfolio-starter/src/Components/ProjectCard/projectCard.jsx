import React from 'react';
import './ProjectCard.css';

function Card({ image, name, socialLink,description }) {
    console.log(socialLink)
  return (
    <div 
      className='card1' 
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className='content'>
        <div style={{display:'flex',width:'100%',flexDirection:'column'}}>
        <h3 className='heading' style={{padding:'0px', margin:'0px'}}>{name}</h3>
        <p style={{padding:'0px', margin:'0px'}}>{description}</p>
         <div className='icons'>
          <a style={{  textDecoration: 'none'}} href={socialLink.url} target='_blank' rel='noopener noreferrer'>
            <i className={socialLink.iconClass}>{socialLink.iconClass}</i>
          </a>
        </div>
        </div>
       
      </div>
    </div>
  );
}

export default Card;
