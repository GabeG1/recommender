import React from "react";
import './LoginInfo.css';

class LoginInfo extends React.Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        console.log(event.target.value)
    }
    render() {
        return (
            <div>
                <form className = "loginInfo">
                    <h1>Log in to Explore <span> New </span> Possibilities</h1>
                <label className = 'LoginTextLabels' id = 'usernameLabel' for='usernameTextbox'> Username </label>
                <input className = 'LoginTextBoxes' id = 'usernameTextbox' type="text" name="username" onChange={this.handleChange} />
                <div className="lineBreak"> </div>
                <label className = 'LoginTextLabels' id= 'passwordLabel' for='passwordTextbox'> Password </label>
                <input className = 'LoginTextBoxes' id='passwordTextbox' type="password" name="password" onChange={this.handleChange}/>
                <button className = "submitLoginButton" id='submitLoginButton'> Submit </button>
                </form>


            </div>
        );
    }
}

export default LoginInfo