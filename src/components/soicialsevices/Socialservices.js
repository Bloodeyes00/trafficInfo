import React from 'react'
import './Socialservices.css'
import socialservices from '../../images/socialtraffic.jpg'


function Socialservices() {
    return (
        <div className="container-fluid-social">
            <h2><b>This app Provides Some Social Services jobs, advertisment</b></h2>
            <div className="row-social ms-5 mt-4">
                <img src={socialservices} className="imgsss" />
            </div>
            <div className="row1-social d-flex">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc iaculis ipsum vel tincidunt lacinia. Nam porta lectus et dui accumsan consectetur.
                    </p>

                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nunc iaculis ipsum vel tincidunt lacinia. Nam porta lectus et dui accumsan consectetur.
                 .</p>
            </div>
            <br/>
            <div className="row2-branch">
            <button className="btnn1 ms-3"><b>Next</b></button>
            
            </div>
        </div>
    )
}

export default Socialservices
