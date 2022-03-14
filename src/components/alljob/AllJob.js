import React from 'react'
import { useHistory } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { TiPlus } from "react-icons/ti";
import Footer from '../footer/Footer';
import jobss from '../../images/jobss.png'




function AllJob() {

let history = useHistory()

    return (
        <div className='container-fluid-oitem'>
            
        <div className='container-oitem'>
       
            <div className='row-oitem'>
            
            <div className='col-bak' >
            <button className="btnsss mt-1 mb-1 " onClick={() => history.goBack()}><IoMdArrowBack /></button>
            </div>
                <div  className='col-oitem'>
                <h1 style={{color:"white"}}><b>JOBS</b></h1>
                </div>
            </div>
            <div className='row-carss'>
                <div className='plus'> <TiPlus /></div>
                <div type="button" className='find'><h2  onClick={() => { history.push("/taxijob") }}>Job Giver</h2></div>
                <div className='imgssss'>
                    <img onClick={() => { history.push() }}  style={{border:"none",borderRadius:"2px",}} src={jobss} />
                </div>
                
            </div>

            <div className='row-carss'>
                <div className='plus '> <TiPlus /></div>
                <div type="button" className='find'><h2 onClick={() => { history.push("/taxijob") }}>Job Seeker</h2></div>
                <div className='imgssss'>
                <img onClick={() => { history.push() }} style={{border:"none",borderRadius:"2px",}} src={jobss} />                    </div>
                
            </div>

            
              </div>   
            <Footer />
    </div>  
    )
}

export default AllJob
