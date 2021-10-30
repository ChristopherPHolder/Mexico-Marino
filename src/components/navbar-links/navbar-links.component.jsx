import React from "react";
import { Link } from 'gatsby';

import SearchIcon from '../../assets/svg/icons8-search.svg';

import './navbar-links.styles.scss';
const NavbarLinks = () => {
  const sections = [
    {sectionName: 'EMBARCATIONES', link: '/'},
    {sectionName: 'DISTRIBUDORES', link: '/'},
    {sectionName: 'PRODUCTOS', link: '/'},
    {sectionName: 'CLIMA', link: '/'},
    {sectionName: 'SERVICIOS', link: '/'},
    {sectionName: 'CONTACTO', link: '/'}
  ]

  return (
    <div className='navbar-links'>

      { sections.map((section) => (
        <Link>
          <span className='navbar-link'>
            { section.sectionName === 'EMBARCATIONES' ?
            <SearchIcon className='search-icon'/> : '' }
            {section.sectionName}
          </span>
        </Link>
      ))}

    </div>
  )
};

export default NavbarLinks;