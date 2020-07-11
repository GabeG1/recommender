import React from 'react';
import './Login.css';
import LoginInfo from '../LoginInfo/LoginInfo'

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: ""
        };
    }

    render() {

        return (
            <div className="Login">
                <body>
                    <LoginInfo/>
                </body>
            </div>
        );
    }
}

export default Login;
