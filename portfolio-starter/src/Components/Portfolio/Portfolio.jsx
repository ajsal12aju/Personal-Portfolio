


import React, { useContext } from 'react';
import './Portfolio.css';
import Ecommerce from '../../img/banner.png';
import HOC from '../../img/homw.png';
import SHop from '../../img/shopping cart.png';
import Admin from '../../img/admin.png';
// import Banner from '../../img/banner.png';
// import Home from '../../img/homw.png';
import Card from '../ProjectCard/projectCard';
import { themeContext } from '../../Context';
import {cardsData} from '../../utils'

function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  

  return (
    <div className='portfolio'>
      <span style={{ color: darkMode ? 'white' : '' }}>React Project</span>
      <span>Portfolio</span>

      <div className='card-container'>
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
    </div>
  );
}

export default Portfolio;

