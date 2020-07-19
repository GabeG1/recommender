import React from "react";
import './LoginButton.css';
import {LoginButtonStyled} from './LoginButtonStyles'

export class LoginButton extends React.Component {

    render() {
        return (
            <div>
                <LoginButtonStyled>
                Login
               </LoginButtonStyled>

            </div>
        );
    }
}