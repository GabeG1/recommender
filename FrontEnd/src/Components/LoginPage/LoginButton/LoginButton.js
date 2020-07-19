import React from "react";
import './LoginButton.css';
import {LoginButtonStyled} from './LoginButtonStyles'
import {Link} from "react-router-dom";

export class LoginButton extends React.Component {

    render() {
        return (
            <div>
                <LoginButtonStyled className="loginButton" component={Link} to="/login">
                    Login
                </LoginButtonStyled>

            </div>
        );
    }
}