import React from "react";
import { Outlet, Navigate } from "react-router-dom";


export class PrivateRoute extends React.Component {
  render(){
    return this.props.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  }
}