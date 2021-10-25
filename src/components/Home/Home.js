import React from "react";
import "../Home/Home.css";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { useHistory } from 'react-router'
export default function Home() {
  let history = useHistory();
  return (
    <div className="container-fluid-home custom_bg_Home pb-3">
      <div className="container  py-5">
        <h3>START SOCIALISING</h3>
        <h4 className="mt-3">Join Groups </h4> <span>For All The Information!</span>
        {/* <p style={{margin:'0px',padding:'0px'}}>For All The Information!</p> */}
        <div className="row">
          <div className="col-sm-6 col-xs-6 p-3">
            <div className="card w-100 " id="Card1">
              <div className="card-body">
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
          </div>
          <div className="col-sm-6 col-xs-6 p-3">
            <div className="card w-100 " id="Card2">
              <div className="card-body" onClick={() => { history.push(`/chatroom/${2}`) }}>
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
          </div>
        </div>
      </div>
    </div>
  );
}
