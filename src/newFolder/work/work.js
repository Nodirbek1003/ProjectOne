import React from "react";
import { NavLink } from "react-router-dom";
import './work.css';
import WorkIMG1 from './picture/1.jpg'
import WorkIMG2 from './picture/2.jpg'
import WorkIMG3 from './picture/3.jpg'
import WorkIMG4 from './picture/4.jpg'
import WorkIMG5 from './picture/5.jpg'

function Work() {
  return ( 
    <div className="container-fluid">
      <div className="row workRow">
          <div className="col-12 HeaderBox">
            <h1 className="HeaderH1"><i>Work Page</i></h1>
          </div>
      </div>
{/* WorkBoday */}
      <div className="container">
        <table cellPadding='0px' cellSpacing='0px'>
          <tr>
            <td rowSpan='2'><img src={WorkIMG1} alt='picture' className='WorkImgRW'/></td>
            <td className="WorkTd"><img src={WorkIMG1} alt='picture' className='WorkImg'/></td>
            <td className="WorkTd"><img src={WorkIMG1} alt='picture' className='WorkImg'/></td>
          </tr>
          <tr>
            <td className="WorkTd"><img src={WorkIMG1} alt='picture' className='WorkImg'/></td>
            <td className="WorkTd"><img src={WorkIMG1} alt='picture' className='WorkImg'/></td>
          </tr>
        </table>
      </div>
{/* WorkFooter */}
      <div className="container-fluid Footer">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <ul>
              <li><NavLink className="nav-link" to="/home" id="FooterNav">Home</NavLink></li>
              <li><NavLink className="nav-link" to="/about" id="FooterNav">About</NavLink></li>
              <li><NavLink className="nav-link" to="/work" id="FooterNav">Gallery||work</NavLink></li>
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