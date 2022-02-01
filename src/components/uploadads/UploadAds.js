import React from 'react'
import './UploadAds.css';
import { storage } from '../utils/firebase'
import { useState } from "react";
import { useHistory } from "react-router";
import firebase from "../../components/utils/firebase";
import { IoMdArrowBack } from "react-icons/io";


function UploadAds() {
  const history = useHistory();
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const [progress, setProgress] = useState("");

    const handleChange = (e, check) => {
    setLoading(true);
    console.log("check1");
    if (e.target.files[0]) {
      console.log("check2");
      const image = e.target.files[0];
      handleUpload(image, check);
    }
  }

  const handleUpload = (image, check) => {
    const uploadTask = storage.ref(`imges/${image.name}`).put(image);
    uploadTask.on('state_changed',
      (snapshot) => {

        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        setLoading(false)
      },
      () => {
        storage.ref('imges').child(image.name).getDownloadURL().then(url => {
          console.log(url);
          console.log("check", check);
          setUrl(url);
          setLoading(false)
        })
      });


  }

  const handleSendMessage = () => {
    const firestore = firebase.database().ref("/UploadAds");
    let data = {
      url: url ? url : "",

    };

    console.log("Data pyaload", data);
    firestore
      .push(data)
      .then((res) => {
        console.log("res after", res);
      })
      .catch((e) => {
        console.log("error in pushing data :", e);
      });

  };


  return (
    <div className="container-fluid-uploads">
            <button className="btnsss ms-3 mt-1 mb-1 " onClick={() => history.goBack()}><IoMdArrowBack /></button>

      <div className="container-uploads">
        <div className="col-camra sm-4">
          <div className="camra d-flex ms-3 mt-4">
            <input className={loading ? "loading0" : "input-cars"}
              style={{ height: "50px", width: "100px", marginLeft: "33%", }} type="file"
              onClick={(e) => handleChange(e)} />
          </div>
          <center>
            <button onClick={() => {
              handleSendMessage();

            }} className="btnnss"><b>Post now</b></button>

          </center>
        </div>
        <div className="row-uploads">



        </div>


      </div>
    </div>
  )
}

export default UploadAds
