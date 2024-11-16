// import './Portfolio.css';

// import { themeContext } from '../../Context';
// import { useContext } from 'react';

// function Portfolio() {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;


//   return (
//     <div className='portfolio'>
//       <span style={{ color: darkMode ? 'white' : '' }}>React Project</span>
//       <span>Portfolio</span>

//       <div class="card1">
//         <div class="content">
//             <h3>Lily Green</h3>
//             <div class="icons">
//                 <a href="#"><i class="fab fa-instagram"></i></a>
//                 <a href="#"><i class="fab fa-twitter"></i></a>
//                 <a href="#"><i class="fab fa-telegram-plane"></i></a>
//             </div>
//         </div>
// </div>
//     </div>
//   );
// }

// export default Portfolio;

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

function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const cardsData = [
    {
      image: Ecommerce,
      name: 'Ecommerce',
      socialLink: { url: '#', iconClass: 'fab fa-instagram' },
      description:'hello world'
    },
     {
      image: Admin,
      name: 'Shopie',
      socialLink: { url: '#', iconClass: 'fab fa-instagram' },
            description:'hello world'

    },
    // Add more card objects as needed
  ];

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

