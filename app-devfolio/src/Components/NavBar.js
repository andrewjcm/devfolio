import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {menuToggled: false};
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({menuToggled: !this.state.menuToggled});
      }

    render() {
        return(
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
        );
    }
}

export default NavBar;