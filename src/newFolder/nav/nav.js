import React from "react";
import { NavLink } from "react-router-dom";
import './css/nav.css'

function Navbar() {
  return ( 
      <nav className="navbar navbar-expand-lg navbar-light nav">
        <div className="container-fluid header">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="col-6">
              <a href="#">
                <h2 id="logo">N_A</h2>
                <h3 id="logo"><i>Portfolio</i></h3>
              </a>
            </div>
            <div className="col-6">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link Home" to="/home" id="nav">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about" id="nav">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to='/work' id="nav">Work</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to='/contact' id="nav">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
   );
}

export default Navbar;