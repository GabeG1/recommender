import React from 'react';
import {LoginButtonStyled} from './LoginButtonStyles';
import {Link} from 'react-router-dom';

export function LoginButton() {
  return (
    <div>
      <LoginButtonStyled className='loginButton'>Login</LoginButtonStyled>
    </div>
  );
}
