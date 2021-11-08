import React from "react";
import "../Home/Home.css";

import { useHistory } from 'react-router'
export default function Home() {
  let history = useHistory();
  return (
    <div className="container-fluid-home px-0 custom_bg_Home pb-3">
      <div className="row px-0">
        <div onClick={() => { history.push(`/chat/${11}`) }} className="row-home mt-20">
        </div>
        <div className="container  py-2">
          {/* <h3>START SOCIALISING</h3> */}
          {/* <h4 className="mt-3  Tlogo">Join Groups </h4> <span>For All The Information!</span> */}

          <div className="container">
            <div className="row ">
              <div className='col order-first'>
                <button type="button" className="btn btn-primary btn-lg"  onClick={() => { history.push(`/chatroom`) }}
                   style={{ width: '137px',  backgroundColor: 'purple', border: " #af1f1f", border: '1px solid',
                  borderRadius: '21px', color: "white" }}>
                  <b> Company Room</b>
                </button>
              </div>
              <div className='col px-0'>
                <button type="button" onClick={() => { history.push("/Jobs") }}
                className="btn btn-primary btn-lg mh-100 w-100" style={{
                    backgroundColor: 'purple', border: " #af1f1f", border: '1px solid',
                    borderRadius: '21px', color: "white"
                  }} >
                  <b>Find jobs</b>
                </button>
              </div>
              <div className='col order-last'>
                <button type="button" onClick={() => { history.push("/Services") }}
                  className="btn btn-success px-0 custom_btn_company mh-100 w-100 " style={{
                    backgroundColor: 'purple', border: " #af1f1f", border: '1px solid',
                    borderRadius: '21px', color: "white"
                  }}>
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
          {/* <div className="col-sm-6 col-xs-6 p-3">
            <div className="card w-100 " id="Card1">
              <div className="card-body" onClick={() => { history.push(`/chat/${11}`) }}>
                <h5 className="card-title">Traffic Info</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>




                <div onClick={() => { history.push(`/chat/${11}`) }} className="Home-buttons btn btn-secondary float-end">
                  <BsFillArrowRightSquareFill />
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-sm-6 col-xs-6 p-3">
            <div className="card w-100 " id="Card2">
              <div className="card-body" onClick={() => { history.push(`/chatroom`) }}>
                <h5 className="card-title">Bolog Chat Room</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="" className="Home-buttons btn btn-secondary float-end" >
                  <BsFillArrowRightSquareFill />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-6 col-xs-6 p-3">
            <div className="card w-100" id="Card3">
              <div className="card-body" onClick={() => { history.push(`/transfer/${3}`) }}>
                <h5 className="card-title">Transfers</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="" className="Home-buttons btn btn-secondary float-end">
                  <BsFillArrowRightSquareFill />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xs-6 p-3">
            <div className="card w-100" id="Card4">
              <div className="card-body" onClick={() => { history.push(`/routesinfo/${4}`) }}>
                <h5 className="card-title">Routes</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="" className="Home-buttons btn btn-secondary float-end">
                  <BsFillArrowRightSquareFill />
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
