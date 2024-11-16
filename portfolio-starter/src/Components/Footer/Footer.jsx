import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'

import Insta from '@iconscout/react-unicons/icons/uil-linkedin-alt'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

function Footer() {
  return (
    <div className='footer'>
        <img src={Wave} alt="" style={{width:'100%'}} />
        <div className="f-content">
            <span>ajsal12aju@gmail.com</span>
            <div className='f-icons'>
               <a href="https://www.linkedin.com/feed/"><Insta color='white' size='3rem' /></a> 
               <a href="https://github.com/ajsal12aju"></a> <Github color='white' size='3rem'/>
               <a href=""> <Facebook color='white' size='3rem'/> </a>
                
            </div>
        </div>
    </div>
  )
}

export default Footer