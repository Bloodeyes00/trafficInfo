import React, {useState ,useEffect } from "react";
import { SiAddthis } from "react-icons/si";
import { useHistory } from 'react-router'
import "./JobFooter.css"
import { AiFillHome } from "react-icons/ai";
import { FaServicestack } from "react-icons/fa";


function JobFooter() {

  let history = useHistory()
  return (
    <div className='container-fluid-jobfooter'>
      <div className='row-jobfooter'>
      <div className='col-d ms-2'>
          <AiFillHome
            onClick={() => { history.push("/Home") }}
          />
          <br />
          <b onClick={() => { history.push("/Home") }}>Home</b>
        </div>

      <div className='col-b'>
          <SiAddthis
            onClick={() => {
              history.push(`/taxijobs`)
            }} />
          <br />
          <b onClick={() => {
            history.push(`/taxijobs`)
          }}>
            Post jobs
          </b>
        </div>

        <div className='col-b'>
          <SiAddthis
            onClick={() => {
              history.push(`/jobseeker`)
            }} />
          <br />
          <b onClick={() => {
            history.push(`/jobseeker`)
          }}>
            Request Job
          </b>
        </div>

        <div className='col-d'>
          <FaServicestack
            onClick={() => { 
            history.push("/MainPage") }}/>
          <br />
          <b onClick={() => { 
            history.push("/MainPage") }}>Services</b>
        </div>

  
      </div>
   
    </div>
  )
}

export default JobFooter
