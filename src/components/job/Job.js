import React from 'react'
import './Job.css'
import { useState } from "react";
import firebase from "../../components/utils/firebase";
import { useHistory } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Job() {
  const notify = (message) => toast(message);
  const history = useHistory();
  // let { setCurrentPageLogin } = props;
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [salaryForm, setSalaryForm] = useState("");
  const [salaryto, setSalaryTO] = useState("");
  const [positionType, setPosition] = useState("");
  const [state, setState] = useState("");
  const [cNumber, setCnumber] = useState("");

  const handleSendMessage = () => {

    const firestore = firebase.database().ref("/Jobs");
    let data = {
      title: title,
      description: description,
      salaryForm: salaryForm,
      salaryto: salaryto,
      salaryto: salaryto,
      positionType: positionType,
      state: state,
      cNumber: cNumber,


    };
    console.log("Data pyaload", data);
    firestore
      .push(data)
      .then((res) => {
        history.push('/Jobs');
        console.log("res after registration", res);
      })
      .catch((e) => {
        console.log("error in pushing data :", e);
      });

  };

  return (
    <div className="container-fluid-job mt-3">
      <h1 style={{ textAlign: "center" }}>POST YOUR AD</h1>
      <div className="container-job ms-3">
        <div className="row-header ms-3 mt-1">
          <h3 >SELECTED CATEGORY</h3>
          <p className="form-text text-muted mt-4" > Vehicles / Cars</p>
        </div>
        <div className="row-main ms-3">
          <h3>INCLUDE SOME DETAILS</h3>
          <div className="form-group">
            <p>Ad title</p>
            <input className="form-controlsss" id="exampleInputtext" aria-describedby="textHelp" placeholder="" onChange={(e) => {
              setTitle(e.target.value);
            }}
            />
            <p className="form-text text-muted">Mention the key features of your item (e.g. brand, model, age, type)</p>
          </div>

          <div className="form-group">
            <p>Description</p>
            <textarea onChange={(e) => {
              setdescription(e.target.value);
            }} id="description" name="description" spellcheck="false" className="form-contrlsss" maxlength="4096" autocomplete="off"></textarea>
            <p className="form-text text-muted">Include condition, features and reason for selling</p>
          </div>

        </div>
        <div className="row-salary ms-3">

          <p><b>Salary</b></p>
          <p className="form-text text-muted">Salary from</p>
          <input type="30000-35000" className="form-controlsss"  aria-describedby="textHelp" placeholder="" onChange={(e) => {
            setSalaryForm(e.target.value);
          }}
          />

          <p className="form-text text-muted mt-3">Salary to</p>
          <input type="30000-35000" className="form-controlsss"  aria-describedby="textHelp" placeholder="" onChange={(e) => {
            setSalaryTO(e.target.value);
          }} />

        </div>
        <div className="row-type mt-3 ms-3">
          <div for="Job"><b>Position Type</b></div>

          <select className="selects mt-2" name="Job" id="Job" onChange={(e) => { let value = e.target.value; setPosition(value) }}
          >
            <option value="other">other</option>
            <option value="Day">Day</option>
            <option value="Night">Night</option>

          </select>
          <br />
          <br />
        </div>
        <div className="row-loction ms-3 mt-3">
          <h3>CONFIRM YOUR LOCATION</h3>
          <div for="Job"><b>State</b></div>

          <select className="location mt-2" onChange={(e) => {
            let value = e.target.value;
            setState(value);
            console.log("set state", state);
            console.log("set state value", value);
          }}
          >
            <option className="abc" value="Khyber Pakhtunkhwa">Select</option>
            <option className="abc" value="Islamabad">Islamabad</option>
            <option className="abc" value="Sindh">Sindh</option>
            <option className="abc" value="Punjab">Punjab</option>
            <option className="abc" value="Balochistan">Balochistan</option>

          </select>
          <br />
          <br />
        </div>
        <div className="let mt-3 ms-3">
          <p className="form-text text-muted mt-3">Mobile Phone Number</p>
          <input type="number" className="form-controlsss" id="exampleInputtext" aria-describedby="textHelp" placeholder="+92" onChange={(e) => {
            setCnumber(e.target.value);
          }}
          />
        </div>
        <center>
          <button onClick={() => {
            handleSendMessage();

          }} className="btnnss mt-2"><b>Post now</b></button>
        </center>
        <br />
        <br />

      </div>

    </div>
  )
}

export default Job
