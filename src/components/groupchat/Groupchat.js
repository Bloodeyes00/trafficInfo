import React from "react";
import "./Groupchat.css";
import sveaTaxi from '../../assets/images/SveaTaxi.png'
import microsoftteams from '../../assets/images/MicrosoftTeams.png'
import sverigetaxi from '../../assets/images/Sverigetaxi.jpg'
import T1212 from '../../assets/images/T1212.jpg'

export default function Groupchat() {
  return (
    <div className="container-fluid-groupchat">

      <div className="header sm">
        <div className="groups sm">

          <h3>MY GROUPS</h3>
        </div>

        <div className="button">
          <button type="button" className="btn">
            Friends
          </button>
          <button type="button" className="btn">
            Employees
          </button>
          <button type="button" className="btn">
            Family
          </button>
          <button type="button" className="btn">
            Health Care
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



    </div>
  );
}
