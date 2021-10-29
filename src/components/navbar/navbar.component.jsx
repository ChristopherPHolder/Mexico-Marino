import React from 'react';
import { Link } from 'gatsby';

import Logo from '../../assets/svg//mexico-marino-logo.svg';
import SearchIcon from '../../assets/svg/icons8-search.svg';

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
            <div className='register-btn'>ANÚNCIATE AQUÍ</div>
            <div className='search-bar'> 
              <div className='search-input'> Search Bar </div>
              <div className='search-btn'> 
                <SearchIcon className='search-icon'/> 
              </div>
            </div>
            <div className='login-btn'>
              <span> O </span>
              <span> Log In </span>
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