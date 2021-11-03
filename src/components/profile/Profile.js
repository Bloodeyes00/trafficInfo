import React, { useEffect } from "react";
import { useState } from "react";
import firebase from "../../components/utils/firebase";
import "../profile/Profile.css";
import { MdAddAPhoto } from "react-icons/md";
import { auth } from "../utils/firebase";
import ImageUpload from "../ImageUpload";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useHistory } from "react-router";
export default function Profile() {
  const [Name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [userdetails, setuserdetails] = useState(null);
  const [companyName, setcompanyName] = useState("");
  let history = useHistory();

  useEffect(() => {

    const firestore = firebase.database().ref("/UserInfo");
    firestore.on('value', (snapshot) => {
      let data = { ...snapshot.val() };
      data = Object.values(data);
      console.log("data : ", data);

      if (auth?.currentUser?.uid) {
        console.log("auth uids: ", auth.currentUser.uid);
        let currentUserDetails = data.find(item => item.uid == auth?.currentUser.uid);
        console.log("currentUserDetails : ", currentUserDetails);
        setuserdetails(currentUserDetails);
        // setEmail(currentUserDetails.email);
      }
    });
    return {

    }
  }, [])

  const handleSendMessage = () => {
    const firestore = firebase.database().ref("/UserInfo");
    let data = {
      Name: Name,
      companyName: companyName,
      adress: adress,
    };
    firestore
      .push(data)
      .then((res) => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            let uid = user.uid;
            data["uid"] = uid;
            firestore.push(data).then((res) => {
              console.log("res ;", res);
              // alert("SignUp Successfully!");
              // notify("Successfuly!");

              history.push('/home')
            })
              .catch((e) => {
                // notify(e.message);
                console.log("error in pushing data :", e);
              });

          }
        });

        console.log("res after registration", res);

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
          <ImageUpload />
          <MdAddAPhoto />
        </div>

        <div className="Data d-flex justify-content-center  align-items-center py-4 flex-wrap">
          <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label  offset-1 ps-1">
              <b>Enter Full Name</b>
            </label>
            <input
              type="text"
              class="form-control  d-flex 
              justify-content-center align-items-center "
              value={Name}
              aria-describedby="emailHelp" onChange={(e) => { setName(e.target.value) }}
            />
          </div>
          <div class="mb-3">
            <label className="form-label float-start offset-1 ps-1" style={{marginLeft:'55px'}}>
              <b> Add Company </b>
            </label>
            <div style={{ display: 'flex'  }}>
              <select onChange={(e) => { let value = e.target.value; setcompanyName(value) }} style={{marginLeft:'10px',borderRadius:'10px'}}>
              
                <option>Svea Taxi</option>
                <option>Sverige taxi</option>
                <option>Taxii 1212</option>
                <option>Taxi Kurir</option>
                <option>Taxi Skane</option>
              </select>

            </div>
          </div>
          <div class="mb-3">
            <label for="exampleAddress" className="form-label offset-1 ps-1">
              <b> Enter Full Address</b>
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
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
