import React from 'react';

import NavbarLinks from '../navbar-links/navbar-links.component';

import CloseIcon from '../../assets/svg/close-icon.svg';
import BoatIcon from '../../assets/svg/mexico-marino-logo-barco.svg';

import './nav-dropdown.styles.scss';

const NavDropdown = ({ navDropdownState, setNavDropdownState }) => {
  console.log(navDropdownState)
  return (
    <nav className='nav-dropdown'>
      <div className='nav-dropdown-header'>
        <CloseIcon className='nav-dropdown-close-btn'
          onClick={() => setNavDropdownState(!navDropdownState)}
        />
        <BoatIcon className='nav-dropdown-logo'/>
      </div>
      <NavbarLinks />
    </nav>
  )
};

export default NavDropdown;