import React from 'react';
import './experince.css';
import { BsPatchCheck } from 'react-icons/bs';
export const Experience = () => {
  return (
    <section id='experience'>
      <h5>what Skills I have</h5>
      <h2>My Experince</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend DEvelopment</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon '  />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon '  />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon '  />
              <div>
                <h4>JavaScritp</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon '  />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>experiences</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon '  />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend DEvelopment</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon '  />
              <div>
                <h4>NODEJS</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon '  />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon '  />
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheck className='experience__details-icon ' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>experiences</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
