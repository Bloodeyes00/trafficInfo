import React from "react";
import "../Home/Home.css";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
export default function Home() {
  return (
    <div className="container-fluid custom_bg_Home pb-5">
      <div className="container  py-5">
        <h3 class="text-center">Start Socialising</h3>
        <h4 class="text-center my-3">Join Groups</h4>
        <div className="row">
          <div className="col-sm-6 col-xs-6 p-3">
            <div class="card w-100 " id="Card1">
              <div class="card-body">
                <h5 class="card-title">Traffic Info</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="Home-buttons btn btn-secondary float-end">
                  <BsFillArrowRightSquareFill />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xs-6 p-3">
            <div class="card w-100 " id="Card2">
              <div class="card-body">
                <h5 class="card-title">Bolog Chat Room</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="Home-buttons btn btn-secondary float-end">
                  <BsFillArrowRightSquareFill />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-6 col-xs-6 p-3">
            <div class="card w-100" id="Card3">
              <div class="card-body">
                <h5 class="card-title">Transfers</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="Home-buttons btn btn-secondary float-end">
                  <BsFillArrowRightSquareFill />
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xs-6 p-3">
            <div class="card w-100" id="Card4">
              <div class="card-body">
                <h5 class="card-title">Routes</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" class="Home-buttons btn btn-secondary float-end">
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
