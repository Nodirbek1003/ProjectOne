import React from "react";
import "./css/main.css"
import { NavLink } from "react-router-dom";
import IMG from "./picture/lion.jpg"

function About() {
  return ( 
      <div className="container-fluid">
        <div className="row"> 
          <div className="col-12 HeaderBox">
          <h1 className="HeaderH1"><i>About Me</i></h1>
          </div>
        </div>
{/* Boday Page */}
        <div className="container AboutBoday">
          <div className="row">
            <div className="col-6">
              <img src={IMG} alt="picture" id="AboutImg"/>
            </div>
            <div className="col-6 AboutBlock_1">
              <hr className="AboutHr1"/><h6 className="AboutMe">About Me</h6><hr className="AboutHr2"/>
              <h2 className="AboutName">Nodirbek Azizjonov</h2>
              <p>
                Men Azizjonov Nodirbek 03.10.2002 yili O'zbekiston Respublikasi Farg'ona viloyati
                Rishton tumani da tug'ulganman. Millatim o'zbek.
                Oilaviy hayotim juda ham mazmunli va faravon, oilada hozirda 4 nafar inson istiqomat qilamiz.
                .......... 
              </p>
              <button className="Btn" id="AboutBtn">More CV</button>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row AboutAnimated">
            <marquee>About Me</marquee>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div class="card">
              <img src={IMG} class="card-img-top" alt="Picture"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="Btn">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card">
              <img src={IMG} class="card-img-top" alt="Picture"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="Btn">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card">
              <img src={IMG} class="card-img-top" alt="Picture"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="Btn">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row AboutAnimated">
            <marquee>About Me</marquee>
          </div>
        </div>
{/* Footer Page */}
        <div className="container-fluid Footer">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <ul>
                <li><NavLink className="nav-link" to="/home" id="FooterNav">Home</NavLink></li>
                <li><NavLink className="nav-link" to="/about" id="FooterNav">About</NavLink></li>
                <li><NavLink className="nav-link" to="/work" id="FooterNav">Gallery||Work</NavLink></li>
                <li><NavLink className="nav-link" to="/contact" id="FooterNav">Contact</NavLink></li>
              </ul>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    );
}

export default About;