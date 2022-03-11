import React from 'react';

import SearchIcon from '../../assets/svg/icons8-search.svg';

import './general-button.styles.scss';

const GeneralButton = ({ buttonText, colors, icon }) => {
  return (
    <div 
      className={colors === 'secondary' ? 'secondary-btn' : 'general-btn'}
    >
      {icon === 'search-icon' ? <SearchIcon className='search-icon'/> : ''}
      {buttonText}
    </div>
  )
};

export default GeneralButton;