import React from 'react';
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login';
import Missing from './Pages/Missing';
import Layout from './Components/Layout';
import RequireAuth from './Components/RequireAuth';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isAuthenticated: false, menuToggled: false};
    this.onAuthenticationChange = this.onAuthenticationChange.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }


  toggleMenu() {
    this.setState({menuToggled: !this.state.menuToggled});
  }

  onAuthenticationChange(authData) {
    this.setState({isAuthenticated: authData});
    console.log(`Is auth: ${this.state.isAuthenticated}`);
  }

  render() {
    return (
      <div className='container-fluid'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container-fluid'>
            <NavLink className='navbar-brand' to="/">Devfolio</NavLink>
            <button className="navbar-toggler" 
              onClick={this.toggleMenu}
              type="button" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${this.state.menuToggled ? ' show' : ''}`} id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/edit">Edit</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route element={<RequireAuth/>}>
            <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/edit" element={<h1>Edit</h1>}/>
            </Route>
            <Route path="*" element={<Missing/>}/>
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;