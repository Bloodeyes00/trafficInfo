import React from 'react'
import './UploadAds.css';
import { storage } from '../utils/firebase'
import { useState } from "react";

function UploadAds() {
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
           
              // this.props.setCurrentImgUrl(url);
              // this.ref = "";
              // this.setState({ loading: false })
            })
          });
    
    
      }
    

    return (
        <div className="container-fluid-uploads">
                <div className="container-uploads">
                <div className="col-camra sm-4">
            <div className="camra d-flex ms-3 mt-4">
              <input className="input-cars" style={{ height: "50px", width: "100px",marginLeft:"150px", }} type="file" onClick={(e) => handleChange(e)} />
            </div>
          </div>
                <div className="row-uploads">
            
                    
                    
                    </div>    
                

        </div>
        </div>
    )
}

export default UploadAds
