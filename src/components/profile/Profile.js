import React, { useEffect } from "react";
import { useState } from "react";
import firebase from "../../components/utils/firebase";
import "../profile/Profile.css";
import { MdAddAPhoto } from "react-icons/md";
import { auth } from "../utils/firebase";
export default function Profile() {
  const [email, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [adress, setAdress] = useState("");
  const [userdetails, setuserdetails] = useState(null);

  useEffect(() => {

    const firestore = firebase.database().ref("/UserInfo");
    firestore.on('value', (snapshot) => {
      let data = { ...snapshot.val() };
      data = Object.values(data);
      console.log("data : ", data);

      if (auth?.currentUser?.uid) {
        console.log("auth uids: ", auth.currentUser.uid);
        let currentUserDetails = data.find(item => item.uid == auth?.currentUser.uid);
        // console.log("item.uid : ", item.uid);
        console.log("currentUserDetails : ", currentUserDetails);
        setuserdetails(currentUserDetails);
        setEmail(currentUserDetails.email);
      }
    });
    return {

    }
  }, [])

  const handleSendMessage = () => {
    const firestore = firebase.database().ref("/UserInfo");
    let data = {
      email: email,
      userPassword: userPassword,
      adress: adress,
    };
    firestore
      .update(data)
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
          <input type="file" id="files" class="hidden" />
          <MdAddAPhoto />
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
                value={email}
                aria-describedby="emailHelp" onChange={(e) => { setEmail(e.target.value) }}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" className="form-label offset-3 float-start ps-1">
                <b> Password </b>
              </label>
              <input
                type="password"
                class="form-control d-flex justify-content-center align-items-center"
                id="exampleInputPassword1" onChange={(e) => { setUserPassword(e.target.value) }}
              />
            </div>
            <div class="mb-3">
              <label for="exampleAddress" className="form-label offset-3 float-start ps-1">
                <b> Address</b>
              </label>
              <input

                type="text"
                class="form-control d-flex justify-content-center align-items-center"
                id="exampleAddress"
                aria-describedby="emailHelp" onChange={(e) => { setAdress(e.target.value) }}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="Button form-control my-3 " onClick={() => { handleSendMessage() }}>
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
