import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.username && auth?.accessToken 
            ? <Outlet/> 
            : <Navigate to='/404' state={{ from: location }} replace />
    );
}

export default RequireAuth;