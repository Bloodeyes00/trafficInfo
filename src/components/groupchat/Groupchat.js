import React from "react";
import "./Groupchat.css";
import logo from '../../assets/logo.png'

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
        <div className="imgs ps-2 pt-2">
         <img src={logo} className="imges" />
        </div>
        <div className="col-8 ps-2 pt-3">
        <h5 className="text">Kumar Partik</h5>
          <p> Doing what you like will always keep you  </p>
        </div>
        </div>

      <div className="hi mt-5 col-sm-10 offset-1">
        <div className="imgs ps-2 pt-2">
         <img src={logo} className="imges" />
        </div>
        <div className="col-8 ps-2 pt-3">
        <h5 className="text">Kumar Partik</h5>
          <p> Doing what you like will always keep you  </p>
        </div>
        </div>

      <div className="hi mt-5 col-sm-10 offset-1">
        <div className="imgs ps-2 pt-2">
         <img src={logo} className="imges" />
        </div>
        <div className="col-8 ps-2 pt-3">
        <h5 className="text">Kumar Partik</h5>
          <p> Doing what you like will always keep you  </p>
        </div>
        </div>

      <div className="hi mt-5 col-sm-10 offset-1">
        <div className="imgs ps-2 pt-2">
         <img src={logo} className="imges" />
        </div>
        <div className="col-8 ps-2 pt-3">
        <h5 className="text">Kumar Partik</h5>
          <p> Doing what you like will always keep you  </p>
        </div>
        </div>

      
      
    </div>
  );
}
