import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Real estate ',
    github: 'http://guthub.com/khvkay',
    demo: 'https://knightflats.com',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Office of Agricultural Economics (สํานักงานเศรษฐกิจการเกษตร)',
    github: 'http://guthub.com/khvkay',
    demo: 'xxx',
  },
  {
    id: 3,
    image: IMG3,
    title: 'ระบบ ERP โรงพยาบาล กรมการแพทย์',
    github: 'http://guthub.com/khvkay',
    demo: 'https://drt-e-office.web.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Department of Rail Transport (กรมการขนส่งทางราง)',
    github: 'http://guthub.com/khvkay',
    demo: 'https://drt-e-office.web.app/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'DRT  ระบบจองรถยนต์อิเล็กทรอนิกส์',
    github: 'http://guthub.com/khvkay',
    demo: 'https://drt-e-office.web.app/',
  },
  {
    id: 5,
    image: IMG6,
    title: 'DRT ระบบการบริหารวัสดุ ครุภัณฑ์',
    github: 'http://guthub.com/khvkay',
    demo: 'https://drt-e-office.web.app/',
  },
];

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} srcset='' />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn'>
                  Github
                </a>
                <a
                  href={demo}
                  className='btn btn-primary'
                  target='_blank'
                  rel='noreferrer'
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
