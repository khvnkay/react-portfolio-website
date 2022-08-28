import React from 'react';
import './footer.css'
import { FiInstagram } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';

export const Footer = () => {
  return (
    <footer>
      <a href='' className='footer__logo'>
        EGator
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Service</a>
        </li>
        <li>
          <a href='#portfolio'>PortFolio</a>
        </li>
        <li>
          <a href='#testimonail'>Testimonail</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://facebook.com"><FiInstagram/></a>
        <a href="https://facebook.com"><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; KRongkan Toturils. All right reserved.</small>
      </div>
    </footer>
  );
};
