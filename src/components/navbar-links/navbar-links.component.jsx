import React from "react";
import { Link } from 'gatsby';

import SearchIcon from '../../assets/svg/icons8-search.svg';

import './navbar-links.styles.scss';

const NavbarLinks = () => {
  const sections = [
    {sectionName: 'EMBARCACIONES', location: 'Internal', link: '/'},
    {sectionName: 'DISTRIBUDORES', location: 'Internal', link: '/'},
    {sectionName: 'PRODUCTOS', location: 'Internal', link: '/'},
    {sectionName: 'CLIMA', location: 'External', link: 'https://mexicomarino.com/clima/informacion'},
    {sectionName: 'SERVICIOS', location: 'Internal', link: '/'},
    {sectionName: 'CONTACTO', location: 'External', link: 'https://mexicomarino.com/contacto'}
  ]

  return (
    <div className='navbar-links'>

      { sections.map((section) => (
        <spam>
          { 
            section.location === 'External' ?
            
              <a href={section.link} className='navbar-link'>
                {section.sectionName}
              </a> 
            :
              <Link to={section.link} className='navbar-link'>
                  { section.sectionName === 'EMBARCACIONES' ?
                    <SearchIcon className='search-icon'/> : '' }
                  {section.sectionName}
              </Link>
          }
        </spam>
      ))}

    </div>
  )
};

export default NavbarLinks;