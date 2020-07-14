import React from "react";
import './LoginButton.css';
import {LoginButtonStyled} from './LoginButtonStyles'

export class LoginButton extends React.Component {
    constructor(props){
        super(props);

        this.displayLoginScreen = this.displayLoginScreen.bind(this)
    }
    
    displayLoginScreen() {
        this.props.onClick();
    }

    render() {
        return (
            <div>
                <LoginButtonStyled
                 onClick={this.displayLoginScreen}>
                Login
               </LoginButtonStyled>

            </div>
        );
    }
}