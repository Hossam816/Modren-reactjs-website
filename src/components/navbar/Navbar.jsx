import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Logo from '../../assets/logo.svg';
import './navbar.css';


function Navbar() {
  return (
    <div className='gpt__navbar'>
      <div className='gpt__navbar-links'>
        <div className='gpt__navbar-links_logo'>
          <img src={ Logo } alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;