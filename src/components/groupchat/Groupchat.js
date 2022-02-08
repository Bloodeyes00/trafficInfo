import React from "react";
import "./Groupchat.css";
import sveaTaxi from '../../assets/images/SveaTaxi.png'
import microsoftteams from '../../assets/images/MicrosoftTeams.png'
import sverigetaxi from '../../assets/images/Sverigetaxi.jpg'
import T1212 from '../../assets/images/T1212.jpg'
import { IoMdArrowBack } from "react-icons/io";
import { useHistory } from "react-router-dom";


export default function Groupchat() {

let history = useHistory()

  return (
    <div className="container-fluid-groupchat">
      <div className="header sm">
        <div className="groups sm">

        <button className="btnsss " 
          onClick={() => history.goBack()}>
          <IoMdArrowBack />
          </button>

          <h3 style={{color:"white",textAlign:"center"}}>
            <b>MY GROUPS</b>
            </h3>
        </div>

        <div className="button">
          <button className="btn" type="button">
          <b>Friends</b>
          </button>
          <button className="btn" type="button">
            <b>Employees</b>
          </button>
          <button className="btn"   type="button">
            <b>Family</b>
          </button>
          <button className="btn9" type="button">
            <b>Health Care</b>
          </button>
        </div>
      </div>

      <div className="hi mt-5 col-sm-10 offset-1">
        <div className="imgs ps-2 pt-2 mt-4">
          <img src={sveaTaxi} className="imges" />
        </div>
        <div className="col-8 ps-2 pt-3">
          <h5 className="text ms-2">Svea Taxi</h5>
          <p> Doing what you like will always keep you  </p>
        </div>
      </div>

      <div className="hi mt-5 col-sm-10 offset-1">
        <div className="imgs ps-2 pt-2 mt-4">
          <img src={microsoftteams} className="imges" />
        </div>
        <div className="col-8 ps-2 pt-3">
          <h5 className="text ms-2">Microsoft Teams</h5>
          <p> Doing what you like will always keep you  </p>
        </div>
      </div>

      <div className="hi mt-5 col-sm-10 offset-1">
        <div className="imgs ps-2 pt-2 mt-4">
          <img src={sverigetaxi} className="imges" />
        </div>
        
        <div className="col-8 ps-2 pt-3">
          <h5 className="text ms-2">Sverige Taxi</h5>
          <p> Doing what you like will always keep you  </p>
        </div>
      </div>

      <div className="hi mt-5 col-sm-10 offset-1">
        <div className="imgs ps-2 pt-2 mt-4">
          <img src={T1212} className="imges" />
        </div>
        <div className="col-8 ps-2 pt-3">
          <h5 className="text ms-2">Taxi 1212</h5>
          <p> Doing what you like will always keep you  </p>
        </div>
      </div>
<br/>
<br/>
<br/>
<br/>


    </div>
  );
}
