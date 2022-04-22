import { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();


    useEffect(() => {
        setErrorMessage('');
    }, [username, password])

    const onLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(`Username: ${username}, Password: ${password}`);
            const response = await axios.post(
                'http://127.0.0.1:8000/api/token/', 
                JSON.stringify({username, password}),
                {
                    headers: {'Content-Type': 'application/json'}
                }
            );

            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.access;
            const refreshToken = response?.data?.refresh;
            setAuth({username, password, accessToken, refreshToken});
            setUsername('');
            setPassword('');

            navigate(from, { replace: true });
        } catch (error) {
            if (!error?.response){
                console.log(error);
                setErrorMessage('No server response');
            } else if (error.response?.status === 400) {
                setErrorMessage('Missing username or password');
            } else if (error.response?.status === 401) {
                setErrorMessage('Username and password combination incorrect');
            } else {
                setErrorMessage('Login failed');
            }

        }
    }


    return (
        <main className='container-sm' >
            <p className={errorMessage ? "alert alert-danger" : "hidden"}>{errorMessage}</p>
            <h1>Sign In</h1>
            <div className="shadow p-3 mb-5 bg-body rounded">

                <form onSubmit={onLoginSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='username' className='form-label'> Username </label>
                        <input
                            className='form-control' 
                            type="text" 
                            id="username" 
                            onChange={(e) => setUsername(e.target.value)} 
                            value={username}
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'> Password </label>
                        <input 
                            className='form-control'
                            type="password" 
                            id="password" 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                    </div>
                    <div>
                        <button type='submit' className='btn btn-primary'>Sign In</button>
                    </div>
                </form>
            </div>
        </main>

    );
}

export default Login;