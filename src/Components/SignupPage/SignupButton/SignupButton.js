import React from "react";
import './SignupButton.css';
import {SignupButtonStyled} from './SignupButtonStyles'

export class SignupButton extends React.Component {

    render() {
        return (
            <div>
                <SignupButtonStyled>
                Signup
               </SignupButtonStyled>

            </div>
        );
    }
}