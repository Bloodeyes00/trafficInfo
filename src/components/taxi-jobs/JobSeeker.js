import React, { useState } from 'react'
import { db } from './../utils/firebase'
import Trafficinfo1 from "../../images/Trafficinfo1.png"
import { useHistory } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { auth } from './../utils/firebase'

function JobSeeker() {
    let history = useHistory()

    const [detail, setDetail] = useState("");
    const [cellnumber, setCellNumber] = useState("");
    const [email, setEmail] = useState("");
    const [expernices, setExpernices] = useState("");


    const addData = (e) => {
        // e.preventDefault();
        db.collection("JobSeeker").add({
            expernices: expernices,
            detail: detail,
            cellnumber: cellnumber,
            email: email,
            posterdID: auth?.currentUser?.uid

        });
        setExpernices("");
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
                <div className='row-dt ms-4 mt-5'>
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


                <div className='row-useredit ms-3 mt-4'>
                    <div className='col-6 contact'>
                        <h6 className='ms-3'>Contact Number</h6> &nbsp;&nbsp;
                        <input onChange={(e) => {
                            setCellNumber(e.target.value);
                        }} value={cellnumber} className='inputsss' type="number" />
                    </div>
                    <br />
                    <div className='col-6 email'>
                        <h6 className='ms-3'>Email</h6> &nbsp;
                        <input onChange={(e) => {
                            setEmail(e.target.value);
                        }} value={email} className='inputsss' type="text" />
                    </div>
                </div>
                <div className='rowbutton ms-4 mt-5'>
                    <button style={{ fontSize: "12px" }} className='btadd' onClick={() => {
                        addData(); history.push("/taxijob")
                    }}>Request Jobs</button>

                </div>
            </div>
        </div>
    )
}

export default JobSeeker