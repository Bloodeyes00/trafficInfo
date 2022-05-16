import React, { useState } from 'react'
import "./ConstructionGiver.css"
import Trafficinfo1 from "../../images/Trafficinfo1.png"
import { useHistory } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { db, auth } from '../utils/firebase'
import JobFooterConstruction from '../jobfooter/JobFooterConstruction';

function ConstructionGiver() {

    const [companyName, setcompanyName] = useState("");
    const [detail, setDetail] = useState("");
    const [cellnumber, setCellNumber] = useState("");
    const [email, setEmail] = useState("");
    const [profision, setProfision] = useState("");

    let history = useHistory()

    const addDatas = (e) => {
        db.collection("ConstructionGiverData").add({
            profision: profision,
            detail: detail,
            cellnumber: cellnumber,
            email: email,
            companyName: companyName,
            posterdID: auth?.currentUser?.uid

        });
        setProfision("");
        setDetail("");
        setCellNumber("");
        setEmail("");
        setcompanyName("");
    };

    return (
        <div className='container-taxijobs'>
            <div className='container-taxi'>
                <div className='d-flex'>
                    <div className='col-3 mt-4'>
                        <button style={{ color: "black" }}
                            className="btnsss ms-3 mt-1 mb-1 "
                            onClick={() => history.goBack()}>
                            <IoMdArrowBack />
                        </button>
                    </div>
                    <br />
                    <div className='col-6 mt-5 '>
                        <h2>JOB GIVER</h2>
                    </div>
                    <div className='col3 imgcol ms-3 mt-2 '>
                        <img className="imgtxii" src={Trafficinfo1} />
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
                    <h5 className='ms-2 mt-2'  style={{color:"#af0e0c"}}> Construction and Painters </h5>
                    <div className='profision mt-3'>
                        <h5 className='textproinput'>Input profession</h5>
                        <input type="text" className='profision-input' placeholder='' onChange={(e) => {
                                setProfision(e.target.value);
                            }}    value={profision} />
                    </div>

                    <div className='row-dt ms-4 mt-3'>
                        <div className=' dt'>
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
                    </div>

                    <div className='row-useredit ms-3 mt-4'>
                        <div className='col-6 contact '>
                            <h6 className='ms-2'>Contact Number</h6> &nbsp;&nbsp;
                            <input onChange={(e) => {
                                setCellNumber(e.target.value);
                            }} value={cellnumber} className='inputsss' type="numeric" />
                        </div>
                        <br />
                        <div className='col-6 email'>
                            <h6 className='ms-1'>Email</h6> &nbsp;
                            <input onChange={(e) => {
                                setEmail(e.target.value);
                            }} value={email} className='inputsss' type="text" />
                        </div>
                    </div>
                    <div className='rowbutton ms-4 mt-5'>
                        <button className='btadd' onClick={() => {
                            addDatas(); history.push("/taxijob")
                        }}>Post Job</button>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>      
            </div>
            <JobFooterConstruction />
        </div>

    )
}

export default ConstructionGiver