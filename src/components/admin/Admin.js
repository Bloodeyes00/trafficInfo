import React from 'react'
import './Admin.css';
import { useHistory } from 'react-router';
import { IoMdArrowBack } from "react-icons/io";
import Footer from '../footer/Footer';


function Admin() {

  
  let history = useHistory();

  return (
    <div className="container-fluid-admin">
            <button className="btnsss ms-3 mt-1 mb-1 " onClick={() => history.goBack()}><IoMdArrowBack /></button>

      <div className="row px-0">
        <center>
          <div className="Admintext"><b style={{color:"white"}}>Admin</b></div>
        </center>
      </div>
      <div className="container  py-2">


        <div className="container">
          <div className="row ">
            <div className='col '>
              <button type="button" 
              className="home-btn btn-primary btn-lg " 
              onClick={() => { 
                history.push(`/manageuser`) }}>
                <b>Manage Users</b>
              </button>
            </div>

            <div className='col px-0'>
              <button type="button" 
              onClick={() => { 
                history.push("/managecompnayuser") }}
                className="home-btn btn-primary btn-lg mh-100 w-100" >
                <b>Company User</b>
              </button>
            </div>

            <div className='col order-last'>
              <button type="button" 
              onClick={() => { 
                history.push("/uploadads") }}
                className="home-btn btn-success px-0 custom_btn_company mh-100 w-100 ">
                <b>Upload Ad`s</b>
              </button>
            </div>

          </div>
        </div>
        <div className="container-fluid ">
          <h2 style={{ textAlign: 'center',color:"white" }}>
            Ads Components
          </h2>
          <div className=" Dat d-flex justify-content-center  align-items-center py-4 flex-wrap">
          </div>

        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Admin
