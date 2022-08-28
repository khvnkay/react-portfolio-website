import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiAlarm } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { useState } from 'react';


export const Nav = () => {
    const [activeNav, setActive] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActive('#')} className={activeNav == '#'? 'active': ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=> setActive('about')}  className={activeNav === 'about'? 'active': ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=> setActive('experience')}  className={activeNav === 'experience'? 'active': ''}><BiAlarm/></a>
      <a href='#serivces' onClick={()=> setActive('serivces')} className={activeNav === 'serivces'? 'active': ''}><RiServiceLine/></a>
      <a href='#contact'  onClick={()=> setActive('contact')}  className={activeNav === 'contact'? 'active': ''}><BiMessageSquareDetail/></a>
    </nav>
  );
};
