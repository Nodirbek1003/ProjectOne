import React from "react";
import { NavLink } from "react-router-dom";
import './work.css';

function Work() {
  return ( 
    <div className="container-fluid">
      <div className="row workRow">
          <div className="col-12 HeaderBox">
            <h1 className="HeaderH1"><i>Work Page</i></h1>
          </div>
      </div>
      <div className="container">
        <div className="row tbody"></div>
      </div>
      <div className="container-fluid Footer">
        <div className="row">
          <div className="col-4">
          </div>
          <div className="col-4">
            <ul>
              <li><NavLink className="nav-link" to="/home" id="FooterNav">Home</NavLink></li>
              <li><NavLink className="nav-link" to="/about" id="FooterNav">About</NavLink></li>
              <li><NavLink className="nav-link" to="/work" id="FooterNav">Work</NavLink></li>
              <li><NavLink className="nav-link" to="/contact" id="FooterNav">Contact</NavLink></li>
            </ul>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
   ); 
}

export default Work;