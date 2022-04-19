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
    this.state = {isAuthenticated: true};
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/dashboard" exact element={<Dashboard/>}/>
          <Route path="/login" exact element={<h1>Please login</h1>}/>
          <Route element={ <PrivateRoute auth={this.state}/>}>
            <Route path="/edit" element={<h1>Edit</h1>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;