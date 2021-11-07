import React from 'react'
import './Job.css'
import accountss from '../job/accountss.png'


function Job() {
    return (
        <div className="container-fluid-job mt-3">
            <h1  style={{textAlign:"center"}}>POST YOUR AD</h1>
            <div className="container-job ms-3">
                <div className="row-header ms-3 mt-1">
<h3 >SELECTED CATEGORY</h3>
<p className="form-text text-muted mt-4" > Vehicles / Cars</p>
                </div>
                <div className="row-main ms-3">
                    <h3>INCLUDE SOME DETAILS</h3>
                    <div className="form-group">
    <p>Ad title</p>
    <input className="form-controlsss" id="exampleInputtext" aria-describedby="textHelp" placeholder="" />
    <p className="form-text text-muted">Mention the key features of your item (e.g. brand, model, age, type)</p>
  </div>
  
  <div className="form-group">
    <p>Description</p>
    <textarea id="description" name="description" spellcheck="false" className="form-contrlsss" maxlength="4096" autocomplete="off"></textarea>
    <p className="form-text text-muted">Include condition, features and reason for selling</p>
  </div>

                </div>
                <div className="row-salary ms-3">
                
                   <p><b>Salary</b></p>
                   <p className="form-text text-muted">Salary from</p>
                   <input type="30000-35000" className="form-controlsss" id="exampleInputtext" aria-describedby="textHelp" placeholder="" />
                
                   <p className="form-text text-muted mt-3">Salary to</p>
                   <input type="30000-35000" className="form-controlsss" id="exampleInputtext" aria-describedby="textHelp" placeholder="" />
              
                </div>
                <div className="row-type mt-3 ms-3"> 
                <div for="Job"><b>Position Type</b></div>

<select className="selects mt-2" name="Job" id="Job">
  <option value="other">other</option>
  <option value="Day">Day</option>
  <option value="Night">Night</option>

</select>
<br/>
<br/>
                </div>
                 <div className="row-loction ms-3 mt-3">
                 <h3>CONFIRM YOUR LOCATION</h3>
                 <div for="Job"><b>State</b></div>

<select className="location mt-2" name="Job" id="Job">
  <option className="abc" value="other">Khyber Pakhtunkhwa</option>
  <option className="abc" value="Day">Islamabad</option>
  <option className="abc" value="Night">Sindh</option>
  <option className="abc" value="Night">Punjab</option>
  <option className="abc" value="Night">Balochistan</option>

</select>
<br/>
                <br/>
                </div>
                <h3 className="textt ms-3 mt-3">REVIEW YOUR DETAILS</h3>
                <div className="row-detail ms-3 mt-3">
                  
             
              
                <p className="form-text text-muted mt-3">Name</p>
                
                   <input type="" className="form-name" id="exampleInputtext" aria-describedby="textHelp" placeholder="Name" />
        
                </div>
                <div className="let mt-3 ms-3">
                <h4>Let's verify your account</h4>
                <p>We will send you a confirmation code by sms on the next step.</p>

                <p className="form-text text-muted mt-3">Mobile Phone Number</p>
                   <input type="number" className="form-controlsss" id="exampleInputtext" aria-describedby="textHelp" placeholder="+92" />
                <p>Show my phone number in ads</p>
                </div>
                <center>
                <button className="btnnss"><b>Post now</b></button>
                </center>
                <br/>
                <br/>
               
            </div>
            
        </div>
    )
}

export default Job
