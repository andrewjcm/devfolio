import React from 'react';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.username = "";
        this.password = "";
        this.loginClick = this.loginClick.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    loginClick(event) {
        console.log(`Username: ${this.username}, Password: ${this.password}`);
        event.preventDefault();
    }

    setUsername(event) {
        this.username = event.target.value;
    }

    setPassword(event) {
        this.password = event.target.value;
    }
    
    render() {
        return (
            <div className="login-form">
                <form onSubmit={this.loginClick}>
                    <div>
                        <label> Username </label>
                        <input type="text" name="username" onChange={this.setUsername} required/>
                    </div>
                    <div>
                        <label> Password </label>
                        <input type="password" name="password" onChange={this.setPassword} required/>
                    </div>
                    <div>
                        <input type="submit"/>
                    </div>
                </form>
            </div>

        );
    }
}

export default LoginComponent;