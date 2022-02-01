import React from 'react'
import './CarInput.css'
import camra from "../carinput/camra.png"
import { useState } from "react";
import firebase from "../../components/utils/firebase";
import { useHistory } from "react-router";
import { IoMdArrowBack } from "react-icons/io";
import { storage } from '../utils/firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CarInput() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [year, setYear] = useState("");
  const [km, setKm] = useState("");
  const [make, setMake] = useState("");
  const [fuel, setFuel] = useState("");
  const [regisration, setRegisteration] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [number, setNumber] = useState("");
  const [progress, setProgress] = useState("");
  const [url, setUrl] = useState("");
  const [url2, setUrl2] = useState("");
  const [url3, setUrl3] = useState("");
  const [url4, setUrl4] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);



  const handleChange = (e, check) => {
    setLoading(true)
    console.log("check1");
    if (e.target.files[0]) {
      console.log("check2");
      const image = e.target.files[0];


      handleUpload(image, check);


    }
  }
  const handleUpload = (image, check) => {
    setLoading(false)
    const uploadTask = storage.ref(`imges/${image.name}`).put(image);
    uploadTask.on('state_changed',
      (snapshot) => {
        console.log("check 3")

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
          console.log("check 4", check);

          if (check == "first") {
            setUrl(url);
          }
          if (check == "2nd") {
            setUrl2(url)
          }
          if (check == "3rd") {
            setUrl3(url)
          }
          if (check == "4th") {
            setUrl4(url)
          }

        })
      });


  }

  const handleSendMessage = () => {

    const firestore = firebase.database().ref("/CarInput");
    let data = {
      title: title,
      description: description,
      year: year,
      km: km,
      make: make,
      fuel: fuel,
      regisration: regisration,
      condition: condition,
      price: price,
      number: number,
      url: url ? url : "",
      url2: url2 ? url2 : "",
      url3: url3 ? url3 : "",
      url4: url4 ? url4 : "",

    };
    if (!data.title && !data.description) {
      alert("please fill the filed!")
      return;
    }
    console.log("Data pyaload", data);
    firestore
      .push(data)
      .then((res) => {
        history.push('/Services');
        console.log("res after", res);
      })
      .catch((e) => {
        console.log("error in pushing data :", e);
      });

  };
  return (
    <div className="container-fluid-carinput">
      <button
       className="btnsss ms-3 mt-1 mb-1 " 
      onClick={() => history.goBack()}>
        <IoMdArrowBack />
        </button>
      <h1 style={{ textAlign: "center" }}>POST YOUR AD</h1>
      <div className="container-carinput">
        <div className="row-header ms-3 mt-1">
          <h3 >SELECTED CATEGORY</h3>
          <p className="form-text text-muted mt-4" > Vehicles / Cars</p>
        </div>
        <div className="row-main ms-3">
          <h3>INCLUDE SOME DETAILS</h3>
          <div className="form-group">
            <p>Ad title</p>

            <input 
            className="form-controlsss" 
            id="exampleInputtext" 
            aria-describedby="textHelp" 
            placeholder="" onChange={(e) => {
              setTitle(e.target.value);
            }} />
            <p className="form-text text-muted">Mention the key features of your item (e.g. brand, model, age, type)</p>
          </div>
          <div className="form-group">
            <p>Description</p>
            
            <textarea onChange={(e) => {
              setdescription(e.target.value);
            }} 
            id="description" name="description"
              spellcheck="false" 
              className="form-contrlsss" 
              maxlength="4096" autocomplete="off">
            </textarea>
            
            <p className="form-text text-muted">Include condition, features and reason for selling</p>
          </div>
          <p className="form-text text-muted">Year</p>
          <input onChange={(e) => {
            setYear(e.target.value);
          }} type="" className="form-controlsss"
            id="exampleInputtext"
            aria-describedby="textHelp"
            placeholder="" />
          <br />
          <br />
          <p className="form-text text-muted">KM's Driven</p>
          <input onChange={(e) => {
            setKm(e.target.value);
          }}
            type="" className="form-controlsss"
            id="exampleInputtext"
            aria-describedby="textHelp"
            placeholder="" />
          <br />
          <br />
          <p className="form-text text-muted">Make</p>
          <select className="selectes mt-2"
            name="Job"
            id="Job"
            onChange={(e) => {
              setMake(e.target.value);
            }}>

            <option value="other">  </option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
            <option value="Honda">Honda</option>
            <option value="Daewoo">Daewoo</option>
            <option value="Changan">Changan</option>
            <option value="toyota">toyota</option>
            <option value="Other Brands ">Other Brands</option>
          </select>
          <br />
          <br />
          <div className="row-Condition mt-3">
            <p className="form-text text-muted">Fuel</p>
            <select className="Conditions mt-2"
              name="Job"
              id="Job"
              onChange={(e) => {
                setFuel(e.target.value);
              }}>
              <option className="abc" value="other" >  </option>
              <option className="abc" value="CNG">CNG</option>
              <option className="abc" value="Diesel">Diesel</option>
              <option className="abc" value="Petrol">Petrol</option>
              <option className="abc" value="Hybrid">Hybrid</option>
              <option className="abc" value="LPG">LPG</option>
            </select>
          </div>
          <br />
          <p className="form-text text-muted">Registered in</p>
          <select className="selectes mt-2"
            name="Job"
            id="Job" onChange={(e) => {
              setRegisteration(e.target.value);
            }}>
            <option value="space">  </option>
            <option value="abbottabad">Abbottabad</option>
            <option value="ahmadpureast">Ahmadpur East</option>
            <option value="alimasjid">Ali Masjid</option>
            <option value="arifwala">Arifwala</option>
            <option value="askoley">Askoley</option>
            <option value="attock">Attock</option>
            <option value="badin">Badin</option>
            <option value="bagh">Bagh</option>
            <option value="bahawalnagar">Bahawalnagar</option>
            <option value="bahawalpur">Bahawalpur</option>
            <option value="bannu">Bannu</option>
            <option value="batagram">Batagram</option>
            <option value="bela">Bela</option>
            <option value="bhakkar">Bhakkar</option>
            <option value="bhimber">Bhimber</option>
            <option value="buner">Buner</option>
            <option value="burewala">Burewala</option>
            <option value="charsadda">Charsadda</option>
            <option value="chichawatni">Chichawatni</option>
            <option value="chilas">Chilas</option>
            <option value="chiniot">Chiniot</option>
            <option value="chishtianmandi">Chishtian Mandi</option>
            <option value="chitral">Chitral</option>
            <option value="dadu">Dadu</option>
            <option value="darraadamkhel">Darra Adam Khel</option>
            <option value="daska">Daska</option>
            <option value="deraghazikhan">Dera Ghazi Khan</option>
            <option value="deraismailkhan">Dera Ismail Khan</option>
            <option value="faisalabad">Faisalabad</option>
            <option value="ghanche">Ghanche</option>
            <option value="ghizer">Ghizer</option>
            <option value="gilgit">Gilgit</option>
            <option value="gojra">Gojra</option>
            <option value="gujranwala">Gujranwala</option>
            <option value="gujrat">Gujrat</option>
            <option value="gwadar">Gwadar</option>
            <option value="hafizabad">Hafizabad</option>
            <option value="hala">Hala</option>
            <option value="hangu">Hangu</option>
            <option value="haripur">Haripur</option>
            <option value="hasilpur">Hasilpur</option>
            <option value="havelilakha">Haveli lakha</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="islamabad">Islamabad</option>
            <option value="jacobabad">Jacobabad</option>
            <option value="jamrud">Jamrud</option>
            <option value="jamshoro">Jamshoro</option>
            <option value="jandola">Jandola</option>
            <option value="jaranwala">Jaranwala</option>
            <option value="jhangsadar">Jhang Sadar</option>
            <option value="jhelum">Jhelum</option>
            <option value="jiwani">Jiwani</option>
            <option value="kalat">Kalat</option>
            <option value="kamoke">Kamoke</option>
            < option value="kandhura">Kandhura</option>
            <option value="karachi">Karachi</option>
            <option value="karak">Karak</option>
            <option value="kasur-punjab">Kasur</option>
            <option value="khairpur">Khairpur</option>
            <option value="khanewal">Khanewal</option>
            <option value="khanpur">Khanpur</option>
            <option value="khaplu">Khaplu</option>
            <option value="khushab">Khushab</option>
            <option value="khuzdar">Khuzdar</option>
            <option value="kohat">Kohat</option>
            <option value="kohistan">Kohistan</option><
              option value="kot-addu">Kot Addu</option>
            <option value="lahore">Lahore</option>
            <option value="lakkimarwat">Lakki Marwat</option>
            <option value="landikotal">Landi Kotal</option>
          </select>
          <br />
          <br />
        </div>

        <div className="row-Condition ms-3 mt-3">
          <p className="form-text text-muted">Condition</p>
          <select className="Conditions mt-2"
            name="Job"
            id="Job"
            onChange={(e) => {
              setCondition(e.target.value);
            }}>
            <option className="abc" value="other">  </option>
            <option className="abc" value="New">New</option>
            <option className="abc" value="Used">Used</option>
          </select>
        </div>
        <br />
        <br />
        <h3 className="price ms-3">SET A PRICE</h3>

        <div className="form-group ms-3">
          <p>Price</p>

          <input onChange={(e) => {
            setPrice(e.target.value);
          }}
            className="form-controlsss"
            id="exampleInputtext"
            aria-describedby="textHelp"
            placeholder="Rs" />
        </div>

        <h3 className="upload ms-3 mt-3">UPLOAD UP TO 4 PHOTOS</h3>

        <div className="row-camra pb-3 d-flex">
          <div className="col-camra sm-4">
            <div className="camra ms-3 mt-4">
              <input className={loading ? "loading" : "input-cars"}
                style={{ height: "100%", width: "100%", }}
                type="file"
                onClick={(e) => handleChange(e, "first")} />
            </div>
          </div>

          <div className="col-camra sm-4">
            <div className="camra ms-3 mt-4 ">
              <input className={loading ? "loading" : "input-cars"}
                style={{ height: "100%", width: "100%" }}
                type="file"
                onClick={(e) => handleChange(e, "2nd")} />
            </div>
          </div>

          <div className="col-camra sm-4">
            <div className="camra d-flex ms-3 mt-4">
              <input className={loading ? "loading" : "input-cars"}
                style={{ height: "120%", width: "120%" }}
                type="file"
                onClick={(e) => handleChange(e, "3rd")} />
            </div>
          </div>

          <div className="col-camra ">
            <div className="camra d-flex ms-3 mt-4">
              <input className={loading ? "loading" : "input-cars"}
                style={{ height: "100%", width: "100%" }}
                type="file"
                onClick={(e) => handleChange(e, "4th")} />
            </div>
          </div>
        </div>

        <div className="let mt-3 ms-3">
          <h4>Let's verify your account</h4>
          <p>We will send you a confirmation code by sms on the next step.</p>

          <p className="form-text text-muted mt-3">Mobile Phone Number</p>

          <input onChange={(e) => {
            setNumber(e.target.value);
          }} type="number"
            className="form-controlsss"
            id="exampleInputtext"
            aria-describedby="textHelp"
            placeholder="+92" />
          <p>Show my phone number in ads</p>
        </div>

        <center>
          <button onClick={() => {
            handleSendMessage();
          }} className="btnnss"><b>Post now</b></button>
        </center>

        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
    </div>
  )
}

export default CarInput
