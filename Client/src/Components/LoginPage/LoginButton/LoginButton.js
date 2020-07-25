import React from 'react';
import { LoginButtonStyled } from './LoginButtonStyles';
import { Link } from 'react-router-dom';

export class LoginButton extends React.Component {
  render() {
    return (
      <div>
        <LoginButtonStyled className="loginButton">Login</LoginButtonStyled>
      </div>
    );
  }
}
