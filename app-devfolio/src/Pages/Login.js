import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Providers/AuthProvider';

const Login = () => {
    const setAuth = useContext(AuthContext);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate();


    useEffect(() => {
        setErrorMessage('');
    }, [username, password])

    const onLoginSubmit = (e) => {
        e.preventDefault();
        setAuth = {username, password}
        navigate('/edit');

    }


    return (
        <div>
            <p className={errorMessage ? "error-message" : "hidden"}>{errorMessage}</p>
            <h1>Sign In</h1>
            <div className="login-form">

                <form onSubmit={onLoginSubmit}>
                    <div>
                        <label htmlFor='username'> Username </label>
                        <input 
                            type="text" 
                            id="username" 
                            onChange={(e) => setUsername(e.target.value)} 
                            value={username}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='password'> Password </label>
                        <input 
                            type="password" 
                            id="password" 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </div>
                    <div>
                        <button>Sign In</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Login;