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
import Loader from "../loader/Loader";
import { toast } from 'react-toastify';


export default function Profile() {
  const [Name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [userdetails, setuserdetails] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const notifyf = () => toast("login succesfully!");



  const [progress, setProgress] = useState("");
  let history = useHistory();
  const [url, setUrl] = useState("");
  // const [url2, setUrl2] = useState("");
  // const [url3, setUrl3] = useState("");
  // const [url4, setUrl4] = useState("");
  // const [image, setImage] = useState("");

  const loadProfile = () => {
    setLoading(true)
    const firestore = firebase.database().ref("/UserProfile");
    firestore.on('value', (snapshot) => {
      if (snapshot.val()) {
        let data = { ...snapshot?.val() };
        data = Object?.values(data);
        let keys = Object?.keys(snapshot?.val());
        data.map((item, index) => {
          item["key"] = keys[index]
        })
        console.log("data updated in profile : ", data);
        console.log("keys : ", keys);
        if (auth?.currentUser?.uid) {
          // console.log("auth uids: ", auth.currentUser.uid);
          let currentUserDetails = data.find(item => item?.uid == auth?.currentUser?.uid);
          console.log("currentUserDetails in profile : ", currentUserDetails);
          setuserdetails(currentUserDetails);
          setLoading(false)
          // setEmail(currentUserDetails.email);
          // setName(currentUserDetails.name);
        }
      }
      else {
        setLoading(false);
        alert("no data found");

      }
    });
  }

  useEffect(() => {
    loadProfile();
    return {

    }
  },
    [])
  const handleChange = (e, check) => {
    setImageLoading(true)
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
    setImageLoading(false)
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
        setImageLoading(false)
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

  const updateProfile = () => {
    console.log("check 1")
    const firestore = firebase.database().ref("/UserProfile");

    let data = {
      Name: Name,
      companyName: companyName,
      adress: adress,
      uid: auth?.currentUser?.uid,
      url: url ? url : "",
    };
    console.log("check 2 userdetails", userdetails);
    if (userdetails) {
      firestore.child(userdetails?.key)
        .update(data)
        .then((res) => {
          history.push('/home');
          console.log("res after registration", res);
          toast.success("Profile Updated")
        })
        .catch((e) => {
          console.log("error in pushing data :", e);
        });
    } else {
      firestore.push(data).then(res => {
        console.log("res : ", res);
        toast.success("New Profile created.")
      }).catch(e => {
        console.log("e", e)
      })
    }
  };
  return (
    <div>
      {loading && <Loader />}
      <div className="Profile ">
      <button className="btnsss ms-3 mt-1 mb-1 " onClick={() => history.goBack()}><IoMdArrowBack /></button>
      
        <div className="prof">
          <div className="Heading d-flex justify-content-center">
            <h1>
              <b style={{color:"white"}}>Profile</b>
            </h1>
          </div>

          <div className=" d-flex justify-content-center  shadow-sm p-3 mb-3  rounded-circle ">


            <input className={imageLoading ? "loading" : "input-profile"}
              style={{ height: "60px", backgroundSize: "70px", }}
              type="file"
              onClick={(e) => handleChange(e, "first")}>

            </input>
          </div>
          <div className="Datas d-flex justify-content-center  align-items-center py-4 flex-wrap">
            <div class="mb-3">

              <input
                type="text" placeholder="Full Name"
                class="form-control  d-flex 
              justify-content-center align-items-center "
                value={Name}
                aria-describedby="emailHelp" onChange={(e) => { setName(e.target.value) }}
              />
            </div>

            <div class="mb-3">
              <input
                type="number" placeholder="Phone Number"
                class="form-control d-flex justify-content-center align-items-center"
                id="exampleAddress"
                aria-describedby="emailHelp" onChange={(e) => { setAdress(e.target.value) }}
              />
            </div>

            <div class="mb-3">
              <label className="form-label float-start ms-1" >
                <b style={{color:"white",fontSize:"15px"}}> Add Company </b>&nbsp;
              </label>
              <div className="addcmpny">
                <select className="selectws" onChange={(e) => { let value = e.target.value; setcompanyName(value) }} >
                  <option>Select</option>
                  <option>Svea Taxi</option>
                  <option>Microsoft Teams</option>
                  <option>Sverige Taxi</option>
                  <option>Taxii 1212</option>
                  <option>Taxi Kurir</option>
                  <option>Taxi Skane</option>
                </select>

              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="Btn4 my-3 " style={{}}
                onClick={() => { updateProfile() }}>
                <b> Save  </b>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
