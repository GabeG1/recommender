import React from "react";
import './SignupButton.css';
import {SignupButtonStyled} from './SignupButtonStyles'

export class SignupButton extends React.Component {
    constructor(props){
        super(props);

        this.displaySignupScreen = this.displaySignupScreen.bind(this)
    }
    
    displaySignupScreen() {
        this.props.onClick();
    }

    render() {
        return (
            <div>
                <SignupButtonStyled
                 onClick={this.displaySignupScreen}>
                Signup
               </SignupButtonStyled>

            </div>
        );
    }
}