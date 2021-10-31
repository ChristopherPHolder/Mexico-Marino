import React from "react";

import LoginIcon from '../../assets/svg/icon-circle-user.svg';

import './login-button.styles.scss';

const LoginButton = ({buttonText}) => {
  return (
    <div className='login-btn'>
      <LoginIcon className='login-icon'/>
      <span>{buttonText}</span>
    </div>
  )
};

export default LoginButton;