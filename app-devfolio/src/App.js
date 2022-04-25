import React from 'react';
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login';
import Missing from './Pages/Missing';
import Layout from './Components/Layout';
import RequireAuth from './Components/RequireAuth';
import Profile from './Pages/Profile';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isAuthenticated: false, auth: {}, menuToggled: false};
    this.onAuthChange = this.onAuthChange.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }


  toggleMenu() {
    this.setState({menuToggled: !this.state.menuToggled});
  }

  onAuthChange(authData) {
    this.setState({auth: authData, isAuthenticated: true});
  }

  logout() {
    this.setState({isAuthenticated: false, auth: {}});
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
            <div className={`collapse navbar-collapse ${this.state.menuToggled ? ' show' : ''}`} id="navbarNav" onMouseLeave={(e) => this.setState({menuToggled: false})}>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">Profile</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login authChange={this.onAuthChange}/>}/>
            <Route element={<RequireAuth/>}>
              <Route path="/profile" element={<Profile auth={this.state.auth}/>}/>
              <Route path="/dashboard" element={<Dashboard auth={this.state.auth}/>}/>
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