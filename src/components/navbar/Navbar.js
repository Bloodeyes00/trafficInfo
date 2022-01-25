import React, { useEffect } from "react";
import "react-pro-sidebar/dist/css/styles.css";
// import { Offcanvas } from "react-bootstrap";
import { useState, } from "react";
import "../navbar/Navbar.css";
import { useHistory } from "react-router-dom";
import { auth, db } from "../utils/firebase";
import firebase from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "../loader/Loader";


export default function Navbar() {
 
const loadNavbar =() => {
  // setLoading(true)
  const firestore = firebase.database().ref("/UserProfile");
  firestore.on('value', (snapshot) => {
    let data = { ...snapshot.val() };
    data = Object.values(data);
    // let uid = auth?.currentUser.uid;
    if (auth?.currentUser?.uid) {
      let currentUserDetails = data.find(item => item.uid == auth?.currentUser?.uid);
      console.log("data : ", data);
      console.log("currentUserDetails : ", currentUserDetails);
      setuserdetails(currentUserDetails);
      setLoading(false)
    }
  });

 }
 
  useEffect(() => {
  loadNavbar();
  
    return {

    }
  }, [])
  const [loading, setLoading] = useState(false);
  const [userdetails, setuserdetails] = useState(false);
  let history = useHistory();
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="container-fluid-navbar">
        {loading && <Loader />}
        <div className="container">
          <div className="rowss pt-1 d-flex justify-content-center">
 

            <div className="col-10 pt-4">
              <h3 className="info"><b>TRAFFIC INFO</b></h3>

            </div>

          </div>

          
        </div>
      </div>
    </>
  );
}
