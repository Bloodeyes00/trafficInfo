import React from 'react'
import './Admin.css';
import { useHistory } from 'react-router';

function Admin() {
  let history = useHistory();

  return (
    <div className="container-fluid-home px-0 custom_bg_Home pb-3">
      <div className="row px-0">
        <center>
          <div className="Admintext"><b>Admin</b></div>
        </center>
      </div>
      <div className="container  py-2">


        <div className="container">
          <div className="row ">
            <div className='col '>
              <button type="button" className="home-btn btn-primary btn-lg " onClick={() => { history.push(`/manageuser`) }}
              >
                <b>Manage Users</b>
              </button>
            </div>
            <div className='col px-0'>
              <button type="button" onClick={() => { history.push("/blockuser") }}
                className="home-btn btn-primary btn-lg mh-100 w-100" >
                <b>Block User</b>
              </button>
            </div>
            <div className='col order-last'>
              <button type="button" onClick={() => { history.push("/uploadads") }}
                className="home-btn btn-success px-0 custom_btn_company mh-100 w-100 ">
                <b>Upload Ad`s</b>
              </button>
            </div>

          </div>
        </div>
        <div className="container-fluid ">
          <h2 style={{ textAlign: 'center' }}>
            Ads Components
          </h2>
          <div className=" Dat d-flex justify-content-center  align-items-center py-4 flex-wrap"></div>

        </div>
      </div>
    </div>

  )
}

export default Admin
