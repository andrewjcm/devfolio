import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/dashboard" exact element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;