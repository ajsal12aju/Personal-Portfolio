import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import {useRef} from "react"
import { themeContext } from '../../Context'
import { useContext } from "react";


function Contact() {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs.sendForm('service_7ji0m1m', 'template_68vzrh8', form.current, {
          user_email: e.target.user_email.value,
         
        })
          .then((result) => {
            console.log(result.text);
            setDone(true);
          }, (error) => {
            console.log(error.text);
          });
      };
      
      
  return (
    <div className='container contact-form'>
      <div className='row'>
        <div className="col-md-5 w-left">
            <div className="awesome">
                <span style={{color:darkMode ? 'white':''}}>Get in touch her </span>
                <span>Contact Me</span>

                <div className='blur s-blur1'
                     style={{background:'#ABF1FF94'}}               
                ></div>
            </div>
        </div>
        <div className="col-md-7 c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message'></textarea>
                <input type="submit" value="Send"  className='button'/>
                <span>{done && "Thanks for contacting me"}</span>
                <div className='blur c-blur1'
                style={{background:"var(--purple)"}}
                ></div>

            </form>
        </div>
        </div>
    </div>
  )
}

export default Contact  