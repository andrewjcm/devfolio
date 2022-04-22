import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login';
import Missing from './Pages/Missing';
import Layout from './Components/Layout';
import RequireAuth from './Components/RequireAuth';

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
    );
  }
}

export default App;