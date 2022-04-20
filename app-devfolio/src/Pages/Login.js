import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }

    onLoginSubmit(event) {
        console.log(`Username: ${this.state.username}, Password: ${this.state.password}`);
        this.props.updateAuthentication(true);
        
        event.preventDefault();
    }
    
    render() {
        return (
            <div className="login-form">
                <form onSubmit={this.onLoginSubmit}>
                    <div>
                        <label> Username </label>
                        <input type="text" name="username" onChange={e => this.setState({username: e.target.value })} required/>
                    </div>
                    <div>
                        <label> Password </label>
                        <input type="password" name="password" onChange={e => this.setState({password: e.target.value })} required/>
                    </div>
                    <div>
                        <input type="submit"/>
                    </div>
                </form>
            </div>

        );
    }
}

export default Login;