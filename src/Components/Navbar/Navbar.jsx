import React from 'react'
import { useState } from 'react';
import './navbar.css'
import { MdTravelExplore } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active,setActive] = useState('navBar')
  const showNav = () => {
    setActive('navBar activeNavbar')
  }
  const remove = () => {
    setActive('navBar ')
  }
  return (
    <section className="navSection">
      <header className='header flex'>
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1><MdTravelExplore className='icon' />Travel.</h1>
          </a>
        </div>
        <div className={active}>
           <ul className="navList flex">
            <li className="navItem"><a href="#" className="navLink">Home</a></li>
            <li className="navItem"><a href="#" className="navLink">Packages</a></li>
            <li className="navItem"><a href="#" className="navLink">Shop</a></li>
            <li className="navItem"><a href="#" className="navLink">About</a></li>
            <li className="navItem"><a href="#" className="navLink">Pages</a></li>
            <li className="navItem"><a href="#" className="navLink">News</a></li>
            <li className="navItem"><a href="#" className="navLink">Contact</a></li>
            <button className="btn"><a href="#">BOOK NOW</a></button>
           </ul>
           <div onClick={remove} className="closeNavbar">
           <IoMdCloseCircle className='icon' />
           </div>
        </div>
        <div onClick={showNav} className="toggle">
        <TbGridDots className='icon' />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
