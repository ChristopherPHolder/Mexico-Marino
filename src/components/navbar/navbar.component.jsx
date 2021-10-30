import React from 'react';
import { Link } from 'gatsby';

import GeneralButton from '../general-button/general-button.component';
import GeneralSearchBar from '../general-search-bar/general-search-bar.component';
import LoginButton from '../login-button/login-button.component';
import NavbarLinks from '../navbar-links/navbar-links.component';

import Logo from '../../assets/svg//mexico-marino-logo.svg';

import './navbar.styles.scss';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className='navbar-logo-container'>
          <Link to='/'>
            <Logo className='navbar-logo'/>
          </Link>
        </div>
        <div className='navbar-options'>
          <div className='navbar-actions'>
            <GeneralButton buttonText='ANÚNCIATE AQUÍ' />
            <GeneralSearchBar />
            <LoginButton />
          </div>
          <NavbarLinks />
        </div>
      </nav>
    </header>
  )
};

export default Navbar;