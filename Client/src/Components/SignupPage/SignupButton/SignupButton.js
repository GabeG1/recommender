import React from 'react';
import './SignupButton.css';
import { SignupButtonStyled } from './SignupButtonStyles';
import { Link } from 'react-router-dom';
import { LoginButtonStyled } from '../../LoginPage/LoginButton/LoginButtonStyles';

export class SignupButton extends React.Component {
  render() {
    return (
      <div>
        <SignupButtonStyled>Signup</SignupButtonStyled>
      </div>
    );
  }
}
