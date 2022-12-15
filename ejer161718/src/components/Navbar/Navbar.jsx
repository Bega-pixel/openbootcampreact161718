import '../../App.css';
import React from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <ul>
            <li className="" > <Link rel="stylesheet" to ="/Forms" > sing-in </Link></li>
            <li className="" > <Link rel="stylesheet" to ="/" > About </Link></li>
            <li className="" > about</li>
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
