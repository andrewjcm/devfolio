import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './Routes/PrivateRoute';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isAuthenticated: false};
    this.onAuthenticationChange = this.onAuthenticationChange.bind(this);
  }

  onAuthenticationChange(authStatus) {
    this.setState({isAuthenticated: authStatus});
    console.log(`Is auth: ${this.state.isAuthenticated}`)
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/login" element={<Login updateAuthentication={this.onAuthenticationChange}/>}/>
          <Route element={ <PrivateRoute isAuthenticated={this.state.isAuthenticated}/>}>
            <Route path="/edit" element={<h1>Edit</h1>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;