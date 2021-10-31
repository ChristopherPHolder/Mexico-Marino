import React from 'react';
import { Link } from 'gatsby';

import GeneralButton from '../general-button/general-button.component';
import GeneralSearchBar from '../general-search-bar/general-search-bar.component';
import LoginButton from '../login-button/login-button.component';
import NavbarLinks from '../navbar-links/navbar-links.component';

import Logo from '../../assets/svg/mexico-marino-logo.svg';
import NavIcon from '../../assets/svg/icons8-menu.svg';

import './navbar.styles.scss';

const Navbar = () => {
  return (
    <header>
      <nav className='navbar-desktop'>
        <div className='navbar-logo-container'>
          <Link to='/'>
            <Logo className='navbar-logo'/>
          </Link>
        </div>
        <div className='navbar-options'>
          <div className='navbar-actions'>
            <GeneralButton buttonText='ANÚNCIATE AQUÍ' />
            <GeneralSearchBar />
            <LoginButton buttonText='ACCESSO DE USUARIO'/>
          </div>
          <NavbarLinks />
        </div>
      </nav>
      <nav className='navbar-mobile'>
        <div className='nav-top-row'>
          <div className='nav-row-left'>
            <div className='nav-hamburger'>
              <NavIcon />
            </div>
            <div className='navbar-logo-container'>
              <Link to='/'>
                <Logo className='navbar-logo'/>
              </Link>
            </div>
          </div>
          <div>
            <LoginButton buttonText='ACCESSO'/>
          </div>
        </div>
        <div className='nav-middle-row'>
          <GeneralButton 
            buttonText='EMBARCATIONES'
            colors='secondary'
            icon='search-icon'
          />
          <GeneralButton 
            buttonText='ANÚNCIATE AQUÍ'
          />
        </div>
        <div className='nav-bottom-row'>
          <GeneralSearchBar />
        </div>
      </nav>
    </header>
  )
};

export default Navbar;