import React from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { RiMessage2Line } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import './contact.css';
export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>

      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail  className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dfdfdfdf@dfdf.com</h5>
            <a href='mailto:khvnkay@gmail.com' target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessage2Line className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>dfdfdfdf@dfdf.com</h5>
            <a href='https://m.me/khvnkay' target='_blank' rel="noreferrer" >Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp  className='contact__option-icon' />
            <h4>WhatApps</h4>
            <h5>+1212121212</h5>
            <a href='https://api.whatsapp.com/send?phone+830730404' target='_blank' rel="noreferrer"  >Send a message</a>
          </article>
         
        </div>
        <form action=''>
            <input type="text" name='name' placeholder='Your Full Name'  required/>
            <input type="email" name='email' placeholder='Your Email'  required/>
            <textarea name="message" id="" placeholder='Your Message' rows="7" required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>


          </form>
      </div>
    </section>
  );
};
