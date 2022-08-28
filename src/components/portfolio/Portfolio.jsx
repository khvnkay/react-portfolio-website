import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Cypto Currency Dashboard & Finance Visulization',
    github: 'http://guthub.com/khvkay',
    demo: 'cccc',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Cypto Currency Dashboard & Finance Visulization',
    github: 'http://guthub.com/khvkay',
    demo: 'cccc',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Cypto Currency Dashboard & Finance Visulization',
    github: 'http://guthub.com/khvkay',
    demo: 'cccc',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Cypto Currency Dashboard & Finance Visulization',
    github: 'http://guthub.com/khvkay',
    demo: 'cccc',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Cypto Currency Dashboard & Finance Visulization',
    github: 'http://guthub.com/khvkay',
    demo: 'cccc',
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
