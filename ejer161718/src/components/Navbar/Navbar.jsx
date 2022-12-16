import '../../App.css';
import React from "react";
import { Link } from 'react-router-dom';

const styleLinkNavbar = {
  textDecoration: 'none', 
  color:'white'
}

const Navbar = () => {
  return (
    <div>
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <ul >
            <li className="" ><Link rel="stylesheet" style={styleLinkNavbar} to ="/" > Home </Link></li>
            <li className="" ><Link rel="stylesheet" style={ styleLinkNavbar} to ="/About" > About </Link></li>
            <li className="" ><Link rel="stylesheet" style={styleLinkNavbar} to ="/Login" > Sing-in </Link></li>
            <li className="" ><Link rel="stylesheet" style={styleLinkNavbar} to ="/forms" > User list </Link></li> 
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
