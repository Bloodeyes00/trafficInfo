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

        <div className=" d-flex justify-content-center  shadow-sm p-3 mb-3  rounded-circle ">
          <input type="file" id="files" class="hidden"  />
            <MdAddAPhoto/>
            </div>

        <div className="Data d-flex justify-content-center  align-items-center py-4 flex-wrap">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" className="form-label float-start offset-3 ps-1">
                <b>Email address</b>
              </label>
              <input
                type="email"
                class="form-control  d-flex  justify-content-center align-items-center "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"  onChange={(e) => { setEmail(e.target.value) }}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" className="form-label offset-3 float-start ps-1">
               <b> Password </b>
              </label>
              <input
                type="password"
                class="form-control d-flex justify-content-center align-items-center"
                id="exampleInputPassword1"  onChange={(e) => { setUserPassword(e.target.value) }}
              /> 
            </div>
            <div class="mb-3">
              <label for="exampleAddress" className="form-label offset-3 float-start ps-1">
               <b> Address</b>
              </label>
              <input
                type="email"
                class="form-control d-flex justify-content-center align-items-center"
                id="exampleAddress"
                aria-describedby="emailHelp"  onChange={(e) => { setAdress(e.target.value) }}
              />
            </div>
           <div className="d-flex justify-content-center">
            <button type="submit" className="Button form-control my-3 " onClick={() => {handleSendMessage()}}>
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
