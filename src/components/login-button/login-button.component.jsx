import React from "react";

import LoginIcon from '../../assets/svg/icon-circle-user.svg';

import './login-button.styles.scss';

const LoginButton = () => {
  return (
    <div className='login-btn'>
      <LoginIcon className='login-icon'/>
      <span> ACCESSO DE USUARIO </span>
    </div>
  )
};

export default LoginButton;