import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login';
import Missing from './Pages/Missing';
import Layout from './Components/Layout';
import RequireAuth from './Components/RequireAuth';
import Profile from './Pages/Profile';
import NavBar from './Components/NavBar';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isAuthenticated: false, auth: {}};
    this.onAuthChange = this.onAuthChange.bind(this);
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
        {
          this.state.isAuthenticated
            ? <NavBar/>
            : <div></div>
        }
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