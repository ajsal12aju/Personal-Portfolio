// import React from 'react'
// import './Navbar.css'
// import Toggle from '../Toggle/Toggle'
// import { Link } from "react-scroll";


// function Navbar() {
//   return (
//     <div className="container n-wrapper" id="Navbar">
//       {/* left */}
//       <div className="n-left">
//         <div className="n-name">Andrew</div>
//         <Toggle />
//       </div>
//       {/* right */}
//       <div className="n-right">
//         <div className="n-list">
//           <ul style={{ listStyleType: "none" }}>
//             <li>
//               <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="services" spy={true} smooth={true}>
//                 Serivces
//               </Link>
//             </li>
//             <li>
//               <Link to="works" spy={true} smooth={true}>
//                 Experience
//               </Link>
//             </li>
//             <li>
//               <Link to="portfolio" spy={true} smooth={true}>
//                 Protfolio
//               </Link>
//             </li>
//             <li>
//               <Link to="testimonial" spy={true} smooth={true}>
//                 Testimonial
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <Link to="contact" spy={true} smooth={true}>
//         <button className="button n-button">Contact</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Navbar




import React, { useState } from 'react';
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for menu

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Andrew</div>
        <Toggle />
      </div>

   
      <div className="n-right">
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

    
        <div className={`n-list ${menuOpen ? 'open' : ''}`}>
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <Link
                activeClass="active"
                to="Navbar"
                spy={true}
                smooth={true}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="works"
                spy={true}
                smooth={true}
                onClick={() => setMenuOpen(false)}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                onClick={() => setMenuOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="testimonial"
                spy={true}
                smooth={true}
                onClick={() => setMenuOpen(false)}
              >
                Testimonial
              </Link>
            </li>
          </ul>
        </div>

     
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
