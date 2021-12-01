import React, { useEffect } from "react";
import { useState } from "react";
import firebase from "../../components/utils/firebase";
import "../profile/Profile.css";
import { MdAddAPhoto } from "react-icons/md";
import { auth } from "../utils/firebase";
import ImageUpload from "../ImageUpload";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useHistory } from "react-router";
import { IoMdArrowBack } from "react-icons/io";
import { storage } from '../utils/firebase'
export default function Profile() {
  const [Name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [userdetails, setuserdetails] = useState(null);
  const [companyName, setcompanyName] = useState("");
  const [progress, setProgress] = useState("");
  let history = useHistory();
  const [url, setUrl] = useState("");
  // const [url2, setUrl2] = useState("");
  // const [url3, setUrl3] = useState("");
  // const [url4, setUrl4] = useState("");
  // const [image, setImage] = useState("");

  useEffect(() => {

    const firestore = firebase.database().ref("/UserInfo");
    firestore.on('value', (snapshot) => {
      let data = { ...snapshot.val() };
      data = Object.values(data);
      console.log("data : ", data);

      if (auth?.currentUser?.uid) {
        console.log("auth uids: ", auth.currentUser.uid);
        let currentUserDetails = data.find(item => item.uid == auth?.currentUser.uid);
        console.log("currentUserDetails in profile : ", currentUserDetails);
        setuserdetails(currentUserDetails);
        // setEmail(currentUserDetails.email);
        // setName(currentUserDetails.name);

      }
    });
    return {

    }
  }, [])
   const handleChange = (e, check) => {
    console.log("check1");
    if (e.target.files[0]) {
      console.log("check2");
      const image = e.target.files[0];
      // setImage(() => ({ image }));
      // setImage(image)
    
      handleUpload(image, check);
     
    
    }
  }
  const handleUpload = (image, check) => {
    const uploadTask = storage.ref(`imges/${image.name}`).put(image);
    uploadTask.on('state_changed',
      (snapshot) => {

        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progress);
        // this.setState({ loading: true })
      },
      (error) => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage.ref('imges').child(image.name).getDownloadURL().then(url => {
          console.log(url);
          console.log("check", check);

          if (check == "first") {
            setUrl(url);
          }
          // if (check == "2nd") {
          //   setUrl2(url)
          // }
          // if (check == "3rd") {
          //   setUrl3(url)
          // }
          // if (check == "4th") {
          //   setUrl4(url)
          // }
          // this.props.setCurrentImgUrl(url);
          // this.ref = "";
          // this.setState({ loading: false })
        })
      });


  }

  const handleSendMessage = () => {
    console.log("check 1")
    const firestore = firebase.database().ref("/UserProfile");
    console.log("check 2")
    let data = {
      Name: Name,
      companyName: companyName,
      adress: adress,
      uid: auth?.currentUser?.uid,
      url: url ? url : "",
    };
    console.log("check 3")
    firestore
    .push(data)
    .then((res) => {
        console.log("check 4")
        history.push('/home');
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
          {/* <ImageUpload /> */}
          {/* <MdAddAPhoto /> */}
          <input className="input-profile" style={{height:"60px",backgroundSize:"70px",color:"white"}} type="file"  onClick={(e) => handleChange(e, "first")}></input>
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
            <label className="form-label float-start">
              <b> Add Company </b>
            </label>
            <div className="addcmpny">
              <select className="selectws" onChange={(e) => { let value = e.target.value; setcompanyName(value) }} >
              <option>Select</option>
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
          <button className="btnsss ms-3 mt-2 mb-2"  onClick={() => history.goBack()}><IoMdArrowBack /></button>

        </div>
      </div>
    </div>
  );
}
