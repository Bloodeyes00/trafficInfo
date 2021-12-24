import React from 'react'
import './UploadAds.css';
import { storage } from '../utils/firebase'
import { useState } from "react";
import firebase from "../../components/utils/firebase";
import { useHistory } from "react-router";

function UploadAds() {
  const history = useHistory();
     const [url, setUrl] = useState("");
  const [url2, setUrl2] = useState("");
  const [url3, setUrl3] = useState("");
  const [url4, setUrl4] = useState("");
  const [progress, setProgress] = useState(""); 

  
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
    const uploadTask = storage.ref(`imges/${image}`).put(image);
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
        storage.ref('imges').child(image).getDownloadURL().then(url => {
          console.log(url);
          console.log("check", check);

          if (check == "first") {
            setUrl(url);
          }
         
          // this.props.setCurrentImgUrl(url);
          // this.ref = "";
          // this.setState({ loading: false })
        })
      });
    }
      const  handleSendMessage = () => {

        const firestore = firebase.database().ref("/Home");
        let data = {
         
        
          url: url ? url : "",
          url2: url2 ? url2 : "",
          url3: url3 ? url3 : "",
          url4: url4 ? url4 : "",
    
        };
      
        console.log("image");
        firestore
          
          .then((res) => {
            history.push('/UploadAds');
            console.log("res after", res);
          })
       

  };
    return (
        <div className="container-fluid-uploads">
                <div className="container-uploads">
                <div className="col-camra sm-4">
            <div className="camra d-flex ms-3 mt-4">
              <input className="input-cars" style={{ height: "50px", width: "100px",marginLeft:"150px", }} type="file" onClick={(e) => handleChange(e)} />
              <center>
          <button onClick={() => {
            handleSendMessage();

          }} className="btnnss"><b>Post now</b></button>
          
        </center>
           
            </div>
          </div>
                <div className="row-uploads">
            
                    
                    
                    </div>    
                

        </div>
        </div>
    )
}
export default UploadAds
