import axios from 'axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const {auth, setAuth} = useAuth();

    const refresh = async () => {
        console.log(auth.accessToken);
        const response = await axios.post(
            'http://127.0.0.1:8000/api/token/refresh/', 
            {
                "refresh": auth.refreshToken
            }
        );
        const accessToken = response?.data?.access;
        setAuth({accessToken: accessToken});
        console.log(response.data.access);
        console.log(auth.accessToken);
        return response.data.access;
    }
    return refresh;
}

export default useRefreshToken;