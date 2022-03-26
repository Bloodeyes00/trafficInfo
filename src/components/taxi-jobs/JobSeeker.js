import React, { useState } from 'react'
import { db } from './../utils/firebase'
import Trafficinfo1 from "../../images/Trafficinfo1.png"
import { useHistory } from 'react-router-dom';

function JobSeeker() {
    let history = useHistory()

    const [companyName, setcompanyName] = useState("");
    const [detail, setDetail] = useState("");
    const [cellnumber, setCellNumber] = useState("");
    const [email, setEmail] = useState("");
    const [expernices, setExpernices] = useState("");


    const addData = (e) => {
        e.preventDefault();
        db.collection("JobSeeker").add({
            expernices: expernices,
            detail: detail,
            cellnumber: cellnumber,
            email: email,


        });
        setExpernices("");
        setDetail("");
        setCellNumber("");
        setEmail("");


    };
    return (
        <div>

            <div className='row-taxijobs ms-5 mt-5'>

                <br />
                <br />

                <div className='col-4 mt-3'>
                    <button className='btnstaxi' onClick={() => history.push("./taxijobseeker")}>Taxi Jobs</button>
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
                        <p>Expernices</p>
                        <textarea className='textarea'
                            id='detail'
                            onChange={(e) => {
                                setExpernices(e.target.value);
                            }}
                            value={expernices}

                            rows="" cols="">

                        </textarea>

                    </div>

                </div>


                <div className='row-useredit mt-4'>
                    <div className='col-4 ms-4 mt-3'>
                        <button className='btadd' onClick={
                            addData
                        }>Add User</button>

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
        </div>
    )
}

export default JobSeeker