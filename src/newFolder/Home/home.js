import React from "react";
import IMG from "./picture/3.jpg"
import './css/main.css'

function Home() {
  return ( 
    <div className="container-fluid home">
        <div className="row">
          <div className="col-6">
            <h1 id="digital"><i>Azizjonov Nodirbek</i></h1>
            <p id="lorem">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque incidunt in provident laboriosam molestiae quod quasi, tempora consectetur error maxime ullam nesciunt, veritatis quaerat illo labore at recusandae ad qui soluta. Optio reiciendis excepturi nihil dolore maiores asperiores eum sequi odit dicta, placeat, saepe quaerat qui natus beatae? Distinctio, doloremque!
            </p>
            <button  className="btn btn-primary" id="btn">yangiliklar</button>
          </div>
          <div className="col-6">
            <img src={IMG} classname="img" alt="Responsive image"/>
          </div>
        </div>
    </div>
   );
}

export default Home;