


import React, { useContext } from 'react';
import './Portfolio.css';
import Card from '../ProjectCard/projectCard';
import { themeContext } from '../../Context';
import {cardsData} from '../../utils'

function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  

  return (
    <div className='portfolio container'>
      <span style={{ color: darkMode ? 'white' : '' }}>React Project</span>
      <span>Portfolio</span>
  {/* <div className='row'> */}
      <div className='card-container row'>
        {cardsData.map((card, index) => (
          <Card 
            key={index} 
            image={card.image} 
            name={card.name} 
            socialLink={card.socialLink}  
            description={card.description}
          />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}

export default Portfolio;

