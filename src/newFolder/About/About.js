import React from "react";
import "./css/main.css"
import IMG from "./picture/lion.jpg"

function About() {
  return ( 
      <div className="container-fluid">
        <div className="row"> 
          <div className="col-12 HeaderBox">
            <h1 className="HeaderH1"><i>About Me</i></h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={IMG} alt="picture" id="AboutImg"/>
            </div>
            <div className="col-6 AboutBlock_1">
              <h6 className="AboutMe">About Me</h6>
              <h1 className="AboutName">Nodirbek Azizjonov</h1>
              <p>
                Men Azizjonov Nodirbek 03.10.2002 yili O'zbekiston Respublikasi Farg'ona viloyati
                Rishton tumani da tug'ulganman. Millatim o'zbek.
                Oilaviy hayotim juda ham mazmunli va faravon, oilada hozirda 4 nafar inson istiqomat qilamiz.
                .......... 
              </p>
              <button className="btn btn-warning AboutBtn">More CV</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;