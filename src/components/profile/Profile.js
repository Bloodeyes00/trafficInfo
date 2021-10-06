import React from "react";
import { useState } from "react";
import firebase from "../../components/utils/firebase";
import "../profile/Profile.css";
import { MdAddAPhoto } from "react-icons/md";
export default function Profile() {
  const [email, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [adress, setAdress] = useState("");
  //function for sending message
  const handleSendMessage = () => {
    const firestore = firebase.database().ref("/UserInfo");
    let data = {
      email: email,
      userPassword: userPassword,
      adress: adress,
    };
    firestore
      .push(data)
      .then((res) => {
        console.log("res ;", res);
      })
      .catch((e) => {
        console.log("error in pushing data :", e);
      });
  };
  return (
    <div>
      <div className="Profile d-flex flex-column justify-content-center align-items-center pb-5">
        <div className="Heading d-flex justify-content-center  mt-3">
          <h1>
            <b>Profile</b>
          </h1>
        </div>
        <div className="photoicon d-flex flex-column align-items-center shadow-sm p-3  rounded-circle my-2">
          <input type="file" id="files" class="hidden" />
          <a>
            <MdAddAPhoto />
          </a>
        </div>
        <div className="Data d-flex flex-column justify-content-center  align-items-center py-4">
          <div class="mb-3 w-50">
            <label for="exampleInputEmail1" class="form-label float-start">
              <b>Email address</b>
            </label>
            <input
              type="email"
              class="form-control  d-flex  justify-content-center align-items-center "
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div class="mb-3 w-50">
            <label for="exampleInputPassword1" class="form-label float-start">
              <b> Password </b>
            </label>
            <input
              type="password"
              class="form-control d-flex justify-content-center align-items-center"
              id="exampleInputPassword1"
              onChange={(e) => {
                setUserPassword(e.target.value);
              }}
            />
          </div>
          <div class="mb-3 w-50">
            <label for="exampleAddress" class="form-label float-start">
              <b> Address</b>
            </label>
            <input
              type="email"
              class="form-control d-flex justify-content-center align-items-center"
              id="exampleAddress"
              aria-describedby="emailHelp"
              onChange={(e) => {
                setAdress(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            class=" Button w-25 form-control btn btn-danger mt-3 mb-3"
            onClick={() => {
              handleSendMessage();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
