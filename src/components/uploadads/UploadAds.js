import React from 'react'
import './UploadAds.css';
import { storage } from '../utils/firebase'
import { useState } from "react";
import { useHistory } from "react-router";
import firebase from "../../components/utils/firebase";


function UploadAds() {
  const history = useHistory();
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  
  
  const [progress, setProgress] = useState("");

  const handleChange = (e, check) => {
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

        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progress);
        // this.setState({ loading: true })
      },
      (error) => {
        console.log(error);
      },
      () => {
        // complete function ....
        storage.ref('imges').child(image.name).getDownloadURL().then(url => {
          console.log(url);
          console.log("check", check);
          setUrl(url);
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
        // history.push('/Home');
        console.log("res after", res);
      })
      .catch((e) => {
        console.log("error in pushing data :", e);
      });

  };


  return (
    <div className="container-fluid-uploads">
      
      <div className="container-uploads">
        <div className="col-camra sm-4">
          <div className="camra d-flex ms-3 mt-4">
            <input className="input-cars" style={{ height: "50px", width: "100px", marginLeft: "150px", }} type="file"
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
