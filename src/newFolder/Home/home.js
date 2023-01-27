import React from "react";
import IMG from "./picture/3.jpg"
import './css/main.css'
import { FaInstagram } from "react-icons/fa";
import {FaTelegram} from "react-icons/fa";
import {FaGithub} from "react-icons/fa"

function Home() {
  return ( 
    <div className="container-fluid home">
        <div className="row">
          <div className="col-6">
            <img src={IMG} id="HomeImg" alt="Responsive image"/>
          </div>
          <div className="col-6 HomeImgDiv">
            <p id="lorem">
              <h6 id="digital">Hey there !</h6><hr/>
              <h1 id="digital_1"><i>I am Nodirbek Azizjonov</i></h1><hr/>
              Full Stack Developer
            </p>
            <div id="homeIconDiv">
              <a href="" id="faIns"><FaInstagram/></a>
              <a href="https://t.me/Abssbsbbejd" id="faTeg"><FaTelegram/></a>
              <a href="https://github.com/Nodirbek1003" id="faGit"><FaGithub/></a>
            </div>
            <button  className="btn btn-warning" id="HomeBtn">See More</button>
          </div>
        </div>
    </div>
  );
}

export default Home;