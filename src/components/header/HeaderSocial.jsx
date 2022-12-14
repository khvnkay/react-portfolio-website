import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';

export const HeaderSocial = () => {
  return (
    <div className='header__social'>
      <a href='https://www.linkedin.com/in/khvnkay/' target='_blank' rel='noreferrer'>
        <BsLinkedin />
      </a>
      <a href='https://github.com/khvnkay' target='_blank' rel='noreferrer'>
        <FaGithub />
      </a>
      <a href='https://krongkan.com' target='_blank' rel='noreferrer'>
        <FiDribbble />
      </a>
    </div>
  );
};
