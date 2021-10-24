import React from "react";
import "./Registration.css";
import { useState } from "react";
import firebase from "../../components/utils/firebase";
export default function Registration() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [companyName, setcompanyName] = useState("");
  //function for sending message
  const handleSendMessage = () => {
    const firestore = firebase.database().ref("/UserInfo");
    let data = {
      userName: userName,
      email: email,
      userPassword: userPassword,
      retypePassword: retypePassword,
      companyName: companyName,
    };
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, userPassword)
      .then((res) => console.log("dfd"))
      .catch((e) => [console.log(e)]);

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
      <div>
        <div className="Profile d-flex flex-column justify-content-center align-items-center pb-5">
          <div className="Heading d-flex justify-content-center mt-3">
            <h1>
              <b>Registration</b>
            </h1>
          </div>
          <div>
            <div className="Data d-flex flex-column justify-content-center align-items-center py-5 mt-5 mb-5 ">
              <div className="mb-3 input">
                <label
                  for="exampleInputEmail1"
                  className="form-label float-start ps-1"
                >
                  <b>UserName</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3 input">
                <label
                  for="exampleInputPassword1"
                  className="form-label float-start ps-1"
                >
                  <b> Password </b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    setUserPassword(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3 input">
                <label
                  for="exampleInputPassword1"
                  className="form-label float-start ps-1">
                 <b>Re-type Password </b>
                  </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    setRetypePassword(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3 input">
                <label
                  for="exampleAddress"
                  className="form-label float-start ps-1"
                >
                  <b> Company Name</b>
                </label>
                <input
                  type="text"
                  className="form-control "
                  id="exampleAddress"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    setcompanyName(e.target.value);
                  }}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className=" Button form-control mt-4 mb-2 "
                  onClick={() => {
                    handleSendMessage();
                  }}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
