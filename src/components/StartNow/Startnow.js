import React from 'react'
import './Startnow.css'
import {useState} from "react"

function Startnow() {
    const [Number, setNumber] = useState("");
    
    return (
        <div className="container-fluid-start">
            <div className="row-start mt-5 pt-4 ms-4">
                <h1><b>START NOW</b></h1>
           
            <h5>Sign Up To Taxi Info With Your Phone Number.
                Simple, Right?  </h5>
                </div>
            <div className="input-start ps-4">
                <div className="mb-1 inputs ps-4 mt-5">
                <label
                  for="exampleInputNumber"
                  className="form-label float-start"
                >
                  <b> Enter Number </b>
                </label>
                <input
                  type="number"
                  className="form-control ps-3"
                  id="exampleInputNumber"
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                />
              </div>   
              </div>         
        </div>
    )
}

export default Startnow
