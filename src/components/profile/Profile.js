import React from "react";
import "../profile/Profile.css";
// import {AiFillPicture } from "react-icons/ai";
// import Logo from "../../assets/Profile/Icon.jpg"
export default function Profile() {
  return (
    <div>
      <div classNam="Profile d-flex justify-content-center  align-items-center border border-info ">
        <div className="Heading d-flex justify-content-center border border-danger">
          <h1>Profile</h1>
        </div>

        {/* <div className="ProPic d-flex justify-content-center">
            <img src={Logo}></img>
            </div> */}

        <div className="Data d-flex justify-content-center  align-items-center">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control w-50 d-flex justify-content-center"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control w-50 d-flex justify-content-center"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleAddress" class="form-label">
                Address
              </label>
              <input
                type="email"
                class="form-control w-50 d-flex justify-content-center"
                id="exampleAddress"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your Address with anyone else.
              </div>
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
