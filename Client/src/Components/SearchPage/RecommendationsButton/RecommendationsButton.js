import React from 'react';
import './SignupButton.css';
import {SignupButtonStyled} from './RecommendationsButtonStyles';
import {Link} from 'react-router-dom';
import {LoginButtonStyled} from '../../LoginPage/LoginButton/LoginButtonStyles';

export function RecommendationsButton() {
  return (
    <div>
      <RecommendationsButtonStyles>
        View Recommendations
      </RecommendationsButtonStyles>
    </div>
  );
}
