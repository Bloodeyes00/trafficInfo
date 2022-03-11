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



function TaxiJobs() {
    const [companyName, setcompanyName] = useState("");
    const [detail, setDetail] = useState("");
    const [cellnumber, setCellNumber] = useState("");
    const [email, setEmail] = useState("");


 
    let history = useHistory()


    const handleUserEdit = () => {

        const firestore = firebase.database().ref("/TaxiJobs");
        let data = {
            companyName: companyName,
            detail: detail,
            cellnumber: cellnumber,
            email: email


        };
        if (!data.companyName && !data.detail) {
            toast("please fill the filed!")
            return;
        }
        firestore
            .push(data)
            .then((res) => {
                history.push('/Taxijob');
                console.log("res after", res);
            })
            .catch((e) => {
                console.log("error in pushing data :", e);
            });


        }

    return (

        <div className='container-taxijobs'>
            <div className='container-taxi'>
                <button style={{ color: "black" }} 
                className="btnsss ms-3 mt-1 mb-1 " 
                onClick={() => history.goBack()}>
                    <IoMdArrowBack />
                    </button>

                <div className='row-taxijobs ms-5 mt-5'>
                    <br />
                    <br />

                    <div className='col-4 checkbox'>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Job Giver</label>
                        </div>

                        <br />
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Job Seeker</label>
                        </div>

                    </div>

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
                    
                            rows="" cols="">
                               
                            </textarea>
                        </div>

                        <div className='col-4 cmpny'>
                            <select className="cmpnyname"
                                onChange={(e) => { let value = e.target.value; setcompanyName(value) }}>
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
                                handleUserEdit();
                            }}>Add User</button>

                        </div>


                        <div className='col-8'>
                            <div className='contact d-flex'>
                                <h6>Contact Number</h6> &nbsp;&nbsp;
                                <input onChange={(e) => {
                                    setCellNumber(e.target.value);
                                }} className='inputsss' type="number" />
                            </div>
                            <br />
                            <div className='email d-flex'>
                                <h6>Email</h6> &nbsp;
                                <input onChange={(e) => {
                                    setEmail(e.target.value);
                                }} className='inputsss' type="text" />
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default TaxiJobs