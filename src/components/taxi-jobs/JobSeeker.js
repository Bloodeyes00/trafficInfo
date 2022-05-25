import React, { useState } from 'react'
import { db } from './../utils/firebase'
import Trafficinfo1 from "../../images/Trafficinfo1.png"
import { useHistory } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { auth } from './../utils/firebase'
import JobFooter from '../jobfooter/JobFooter';
import "./TaxiJobs.css"

function JobSeeker() {
    let history = useHistory()

    const [detail, setDetail] = useState("");
    const [cellnumber, setCellNumber] = useState("");
    const [email, setEmail] = useState("");
    const [expernices, setExpernices] = useState("");
    const [profision, setProfision] = useState("");
    const [selectcompnay, setSelectCompnay] = useState("");



    const addData = (e) => {
        // e.preventDefault();
        db.collection("JobSeeker").add({
            profision: profision,
            detail: detail,
            cellnumber: cellnumber,
            email: email,
            selectcompnay: selectcompnay,
            posterdID: auth?.currentUser?.uid

        });
        setSelectCompnay("");
        setProfision("");
        setDetail("");
        setCellNumber("");
        setEmail("");


    };
    return (
        <div className='container-jobseeker12'>
            <div className='d-flex '>
                <div className='col-3 mt-4'>
                    <button style={{ color: "black" }}
                        className="btnsss ms-3 mt-1 mb-1 "
                        onClick={() => history.goBack()}>
                        <IoMdArrowBack />
                    </button>
                </div>
                <br />
                <div className='col-6 mt-5 '>
                    <h2>JOB SEEKER</h2>
                </div>
                <div className='col-3 imgcol mt-2'>
                    <img className='imgtxii' src={Trafficinfo1} />
                </div>
            </div>
            <div className='row-taxijobs ms-5'>

                <br />
                <br />

                <div className='col-8'>
                </div>
            </div>
            <br />
            <div className='row-taxidetails ms-3'>
                <h5 className='ms-2 mt-2' style={{ color: "#af0e0c" }}>Taxi Driver</h5>

                <div className='profision '>
                    <div className="work mt-1">
                        <div className="addcmpny d-flex"  >
                            <p className='textproinput'>Work As</p>
                            <select className="workas" onChange={(e) => { let value = e.target.value; setSelectCompnay(value) }} >
                                <option>Taxi Driver</option>
                                <option>Truck, Bud and Bus Driver</option>
                                <option>Mechanic</option>
                                <option>Factory, Warehouse and Worker</option>
                                <option>Construction and Painters</option>
                                <option>Technicians and IT</option>
                            </select>

                        </div>
                    </div>
                    <h5 className='textproinput mt-1'>Input profession</h5>
                    <input type="text" className='profision-input' placeholder='' onChange={(e) => {
                        setProfision(e.target.value);
                    }} value={profision} />
                </div>

                <div className='row-dt ms-4'>
                    <div className=' dt'>
                        <p>Details</p>
                        <textarea className='textareas'
                            id='detail'
                            onChange={(e) => {
                                setDetail(e.target.value);
                            }}
                            value={detail}
                            rows="" cols="">
                        </textarea>
                    </div>
                </div>

                <div className='row-useredit ms-3 mt-1'>
                    <div className='col-6 contact'>
                        <h6 className='ms-2'>Contact Number</h6> &nbsp;&nbsp;
                        <input onChange={(e) => {
                            setCellNumber(e.target.value);
                        }} value={cellnumber} className='inputsss' type="number" />
                    </div>
                    <br />
                    <div className='col-6 email'>
                        <h6 className='ms-1 '>Email</h6> &nbsp;
                        <input onChange={(e) => {
                            setEmail(e.target.value);
                        }} value={email} className='inputsss' type="text" />
                    </div>
                </div>
                <div className='rowbutton ms-4 mt-2'>
                    <button style={{ fontSize: "12px" }} className='btadd' onClick={() => {
                        addData(); history.push("/taxijob")
                    }}>Request Jobs</button>

                </div>
            </div>
            <JobFooter />
        </div>
    )
}

export default JobSeeker