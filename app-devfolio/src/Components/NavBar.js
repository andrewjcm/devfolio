import React from 'react';
import { NavLink } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';


library.add(faCircleUser);


class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {menuToggled: false, dropToggled: false};
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleDrop = this.toggleDrop.bind(this);
    }

    toggleMenu() {
        this.setState({menuToggled: !this.state.menuToggled});
      }

    toggleDrop(){
        this.setState({dropToggled: !this.state.dropToggled});
    }

    render() {
        return(
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container-xxl'>
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
                        <li className="nav-item me-auto">
                        <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                        </li>
                    </ul>
                    {
                        this.props.isAdmin 
                            ?   <ul className='navbar-nav ms-auto me-5'>
                                    <li className="nav-item dropdown">
                                        <a className={`btn nav-link dropdown-toggle ${this.state.dropToggled ? ' show' : ''}`} 
                                            onClick={this.toggleDrop}
                                            onMouseEnter={this.toggleDrop}
                                            id="navbarDropdown" 
                                            role="button" 
                                            data-bs-toggle="dropdown" 
                                            aria-expanded={this.state.dropToggled}
                                            >
                                            <FontAwesomeIcon icon="fa-circle-user" size="lg"/>
                                        </a>
                                        <ul className={`dropdown-menu dropdown-menu-end ${this.state.dropToggled ? ' show' : ''}`}
                                            onMouseLeave={() => this.setState({dropToggle: false})} 
                                            aria-labelledby="navbarDropdown">
                                            <li><NavLink className="dropdown-item" to="/profile">Profile</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/logout" onClick={() => this.props.onLogout()}>Logout</NavLink></li>
                                        </ul>
                                    </li>
                                </ul>
                            : <span></span>
                    }
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;