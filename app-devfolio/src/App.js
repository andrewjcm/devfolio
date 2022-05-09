import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Missing from './Pages/Missing';
import Layout from './Components/Layout';
import RequireAuth from './Components/RequireAuth';
import Profile from './Pages/Profile';
import NavBar from './Components/NavBar';
import { axiosPrivate } from './Services/Api';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isAuthenticated: false, auth: {}, isAdmin: false};
    this.onAuthChange = this.onAuthChange.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount(){
    let authData = JSON.parse(localStorage.getItem("auth"));
    if (authData) {
      this.setState({auth: authData, isAuthenticated: true});
      this.setSuperuserStatus(authData.userId);
    }
  }
  
  onAuthChange(authData) {
    this.setState({auth: authData, isAuthenticated: true});
    localStorage.setItem("auth", JSON.stringify(authData));
    this.setSuperuserStatus(authData.userId);
  }

  async setSuperuserStatus(userId){
    try {
      const response = await axiosPrivate.get(`users/${userId}`);
      if (response.data?.is_superuser) {
        this.setState({isAdmin: true});
      }
    } 
    catch (error) {
      console.log(error);
    }
  }

  logout() {
    this.setState({isAuthenticated: false, auth: {}, isAdmin: false});
    localStorage.removeItem('auth');
  }

  render() {
    return (
      <div className='container-fluid'>
        {
          this.state.isAuthenticated
            ? <NavBar onLogout={this.logout} isAdmin={this.state.isAdmin}/>
            : <div></div>
        }
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/dev-admin" element={<Login authChange={this.onAuthChange}/>}/>
            <Route element={<RequireAuth/>}>
              <Route path="/profile" element={<Profile auth={this.state.auth}/>}/>
              <Route path="/dashboard" element={<Dashboard auth={this.state.auth}/>}/>
              <Route path="/edit" element={<h1>Edit</h1>}/>
            </Route>
            <Route path='/logout' element={<Logout/>}/>
            <Route path="*" element={<Missing/>}/>
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;