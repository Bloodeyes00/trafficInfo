import React from "react";
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
      <div className="registration">
        <div className="Profile d-flex flex-column justify-content-center align-items-center ">
          <div className="Heading d-flex justify-content-center mt-3">
            <h1>
              <b>Registration</b>
            </h1>
          </div>
          <div>
            <div className="Data d-flex justify-content-center  align-items-center py-4">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label float-start">
                  <b>UserName</b>
                </label>
                <input
                  type="text"
                  class="form-control  d-flex  justify-content-center align-items-center "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label float-start">
                  <b>Email</b>
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
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label float-start"
                >
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
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label float-start"
                >
                  <b>Re-type Password </b>
                </label>
                <input
                  type="password"
                  class="form-control d-flex justify-content-center align-items-center"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    setRetypePassword(e.target.value);
                  }}
                />
              </div>
              <div class="mb-3">
                <label for="exampleAddress" class="form-label float-start">
                  <b> Company Name</b>
                </label>
                <input
                  type="text"
                  class="form-control d-flex justify-content-center align-items-center"
                  id="exampleAddress"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    setcompanyName(e.target.value);
                  }}
                />
              </div>

              <button
                type="submit"
                class=" Button form-control btn btn-danger mt-3 mb-3"
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
  );
}
