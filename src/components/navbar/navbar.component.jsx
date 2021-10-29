import React from 'react';
import { Link } from 'gatsby';

import GeneralButton from '../general-button/general-button.component';
import GeneralSearchBar from '../general-search-bar/general-search-bar.component';

import Logo from '../../assets/svg//mexico-marino-logo.svg';
import SearchIcon from '../../assets/svg/icons8-search.svg';
import LoginIcon from '../../assets/svg/icon-circle-user.svg';

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
            <div className='login-btn'>
              <LoginIcon className='login-icon'/>
              <span> ACCESSO DE USUARIO </span>
            </div>
          </div>
          <div className='navbar-links'>
            <div> <SearchIcon className='search-icon'/> EMBARCATIONES</div>
            <div>DISTRIBUDORES</div>
            <div>PRODUCTOS</div>
            <div>CLIMA</div>
            <div>SERVICIOS</div>
            <div>CONTACTO</div>
          </div>
        </div>
      </nav>
    </header>
  )
};

export default Navbar;