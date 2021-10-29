import React from 'react';

import './general-button.styles.scss';

const GeneralButton = ({buttonText}) => {
  return (
    <div className='general-btn'>{buttonText}</div>
  )
};

export default GeneralButton;