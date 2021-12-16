import React from "react";
import "../Home/Home.css";


import { useHistory } from 'react-router'
export default function Home() {
  let history = useHistory();
  return (
    <div className="container-fluid-home px-0 custom_bg_Home pb-3">
      <div className="row px-0">
        
        <div onClick={() => { history.push(`/chat/${11}`) }} className="img-logo mt-20">
        
        
        </div>
        <div className="container  py-2">
        

          <div className="container">
            <div className="row ">
              <div className='col '>
                <button type="button" className="home-btn btn-primary btn-lg "  onClick={() => { history.push(`/chatroom`) }}
                   >
                  <b> Company Room</b>
                </button>
              </div>
              <div className='col px-0'>
                <button type="button" onClick={() => { history.push("/Jobs") }}
                className="home-btn btn-primary btn-lg mh-100 w-100" >
                  <b>Find jobs</b>
                </button>
              </div>
              <div className='col order-last'>
                <button type="button" onClick={() => { history.push("/Services") }}
                  className="home-btn btn-success px-0 custom_btn_company mh-100 w-100 ">
                  <b>Services</b>
                </button>
              </div>

            </div>
          </div>
          <div className="container-fluid ">
            <h2 style={{ textAlign: 'center' }}>
              Ads Components
            </h2>
            <div className=" Dat d-flex justify-content-center  align-items-center py-4 flex-wrap"></div>

          </div>
        </div>
      </div>
    </div>
  );
}
