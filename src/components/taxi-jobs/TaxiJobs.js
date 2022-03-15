import React, { useState } from 'react'
import { Textarea } from 'react-bootstrap-icons'
import "./TaxiJobs.css"
import Trafficinfo1 from "../../images/Trafficinfo1.png"
import { useHistory } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import firebase from "../../components/utils/firebase";
import { toast } from 'react-toastify';
import { useFormik } from "formik";
import * as yup from "yup";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import {db} from './../utils/firebase'
import JobSeeker from './JobSeeker';



function TaxiJobs() {
    
    const [companyName, setcompanyName] = useState("");
    const [detail, setDetail] = useState("");
    const [cellnumber, setCellNumber] = useState("");
    const [email, setEmail] = useState("");
    const [expernices, setExpernices] = useState("");
    let history = useHistory()
   
    const addDatas = (e) => {
        // e.preventDefault();
        db.collection("taxiJob").add({
           
            detail: detail,
            cellnumber: cellnumber,
           email:email,
            companyName: companyName,
     
        });
      
        setDetail("");
        setCellNumber("");
        setEmail("");
     setcompanyName("");

    };
    



    return (

        <div className='container-taxijobs'>
            <div className='container-taxi'>
                <button style={{ color: "black" }}
                    className="btnsss ms-3 mt-1 mb-1 "
                    onClick={() => history.goBack()}>
                    <IoMdArrowBack />
                </button>
                <br />
                <Tabs
                    defaultActiveKey="home"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Job Giver">
                        <div className='row-taxijobs ms-5 mt-5'>

                            <br />
                            <br />

                            <div className='col-4 mt-3'>
                                <button className='btnstaxi' onClick={() => history.push("./taxijob")}>Taxi Jobs</button>
                            </div>
                            <div className='col-4 imgcol '>
                                <img className='imgtxii' src={Trafficinfo1} />
                            </div>

                        </div>


                        <br />
                        <div className='row-taxidetails ms-3'>
                            <div className='row-dt ms-5 mt-5'>
                                <div className='col-8 dt'>
                                    <p>Details</p>
                                    <textarea className='textarea'
                                        id='detail'
                                        onChange={(e) => {
                                            setDetail(e.target.value);
                                        }}
                                        value={detail}

                                        rows="" cols="">

                                    </textarea>
                                </div>

                                <div className='col-4 cmpny'>
                                    <select className="cmpnyname"
                                        onChange={(e) => { let value = e.target.value; setcompanyName(value) }} value={companyName}>
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


                            <div className='row-useredit mt-4'>
                                <div className='col-4 ms-4 mt-3'>
                                    <button className='btadd' onClick={() => {
                                        addDatas();
                                    }}>Add User</button>

                                </div>


                                <div className='col-8'>
                                    <div className='contact d-flex'>
                                        <h6>Contact Number</h6> &nbsp;&nbsp;
                                        <input onChange={(e) => {
                                            setCellNumber(e.target.value);
                                        }} value={cellnumber} className='inputsss' type="number" />
                                    </div>
                                    <br />
                                    <div className='email d-flex'>
                                        <h6>Email</h6> &nbsp;
                                        <input onChange={(e) => {
                                            setEmail(e.target.value);
                                        }} value={email} className='inputsss' type="text" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Job Seeker">
                      <JobSeeker />
                    </Tab>

                </Tabs>

            </div>
        </div>
    )
}

export default TaxiJobs