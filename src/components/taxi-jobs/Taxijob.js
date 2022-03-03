import React, { isValidElement } from 'react'
import { Textarea } from 'react-bootstrap-icons'
import "./Taxijob.css"
import Trafficinfo1 from "../../images/Trafficinfo1.png"
import { useHistory } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";

function TaxiJobs() {

let history= useHistory()

    return (

        <div className='container-taxijobs'>
            <div className='container-taxi'>
            <button style={{color:"black"}} 
            className="btnsss ms-3 mt-1 mb-1 " 
            onClick={() => history.goBack()}>
                <IoMdArrowBack />
                </button>

                <div className='row-taxijobs ms-5 mt-5'>
                    <br />
                    <br /><div className='col-10 mt-3 bttnss'>
                        <button className='btnstaxi'>Taxi Jobs</button>
                        </div>
                        <div className='col-2'>
                            <img className='imgtxi' src={Trafficinfo1} />
                        </div>
                </div>
                <br />
                <div className='row-taxidetails ms-3'>
                    <div className='row-dt ms-5 mt-5'>
                        <div className='col-8 dt'>
                            <p>Details</p>
                            <textarea className='textarea' rows="" cols=""></textarea>
                        </div>
                        <div className='col-4 cmpny'>
                            <select className="cmpnyname">
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
                        <div className='col-4'>
                        </div>
                        <div className='col-8'>
                            <div className='contact d-flex'>
                                <h6>Contact Number</h6> &nbsp;&nbsp;
                                <input className='inputsss' type="number" />
                            </div>
                            <br />
                            
                            <div className='email d-flex'>
                                <h6>Email</h6> &nbsp;
                                <input className='inputsss' type="number" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TaxiJobs