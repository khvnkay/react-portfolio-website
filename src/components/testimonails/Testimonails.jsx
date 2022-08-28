import React from 'react';
import './testimonail.css';
import AVATR1 from '../../assets/avatar1.jpg';
import AVATR2 from '../../assets/avatar2.jpg';
import AVATR3 from '../../assets/avatar3.jpg';
import AVATR4 from '../../assets/avatar4.jpg';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// init Swiper:

const data = [
  {
    avatar: AVATR1,
    name: 'Tina Snow',
    review: 'lofddmmmmdsmdsmdsadmsfkldslfdsfksdfljsdfjlskdj',
  },
  {
    avatar: AVATR2,
    name: 'Tina Snow',
    review: 'lofddmmmmdsmdsmdsadmsfkldslfdsfksdfljsdfjlskdj',
  },
  {
    avatar: AVATR3,
    name: 'xxx Snow',
    review: 'lofddmmmmdsmdsmdsadmsfkldslfdsfksdfljsdfjlskdj',
  },
  {
    avatar: AVATR4,
    name: 'vvv Snow',
    review: 'lofddmmmmdsmdsmdsadmsfkldslfdsfksdfljsdfjlskdj',
  },
];

export const Testimonails = () => {
  return (
    <section id='testimonails'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className='container testimonails__container'
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, idx) => {
          return (
            <SwiperSlide className='testimonial' key={idx}>
              <div className='client__avatar'>
                <img src={avatar} alt='Avartar one' />
              </div>
              <h5>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
