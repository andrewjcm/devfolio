import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = ({ auth: { isAuthenticated } }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };