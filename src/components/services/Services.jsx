import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

export const Services = () => {
  return (
    <section id='serivces'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container  services__container'>
        {/* <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                This handy tool helps you create dummy text for all your layout
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                This handy tool helps you create dummy text for all your layout
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                This handy tool helps you create dummy text for all your layout
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                This handy tool helps you create dummy text for all your layout
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                This handy tool helps you create dummy text for all your layout
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                This handy tool helps you create dummy text for all your layout
              </p>
            </li>
          </ul>
        </article> */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon' />
              <p>
                2022 work at IBM
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                2020 work at refinitiv
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
              2017 work at angstrom
              </p>
            </li>
          </ul>
        </article>
        {/* <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                This handy tool helps you create dummy text for all your layout
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                This handy tool helps you create dummy text for all your layout
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                This handy tool helps you create dummy text for all your layout
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                This handy tool helps you create dummy text for all your layout
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                This handy tool helps you create dummy text for all your layout
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                This handy tool helps you create dummy text for all your layout
              </p>
            </li>
          </ul>
        </article> */}
      </div>
    </section>
  );
};
