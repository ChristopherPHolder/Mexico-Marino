import React from 'react';

import SearchIcon from '../../assets/svg/icons8-search.svg';

import './general-search-bar.styles.scss';

const GeneralSearchBar = () => {
  return (
    <div className='search-bar'> 
      <div className='search-input'> Busquador General </div>
      <div className='search-btn'> 
        <SearchIcon className='search-icon'/> 
      </div>
    </div>
  )
};

export default GeneralSearchBar;