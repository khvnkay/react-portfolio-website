import React from 'react';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import './about.css';
export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experince</h5>
              <small> 4+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small> 10+ Woldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small> 20+ Completed </small>
            </article>
          </div>
          <div className='content'>
            <p>
              Seeking to advance a growing tech career as a Software Developer.
              Skilled in Angular, React, HTML, Software Development, and
              JavaScript. To utilize logical thinking skills and programming
              expertise to provide the company with excellent software solution.
              Strong engineering professional with a Bachelor's degree focused
              in Engineering from King Mongkut's Institute of Technology
              Ladkrabang
            </p>
          </div>
          <a href='#contact' className='btn btn-primary'>
            let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
