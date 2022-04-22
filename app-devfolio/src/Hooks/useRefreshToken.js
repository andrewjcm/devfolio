import axios from '../Services/Api';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const {auth, setAuth} = useAuth();

    const refresh = async () => {
        const response = await axios.post(
            'token/refresh/', 
            {
                "refresh": auth.refreshToken
            }
        );
        setAuth(auth => {
            return {...auth, accessToken: response.data.access}
        });

        return response.data.access;
    }
    return refresh;
}

export default useRefreshToken;