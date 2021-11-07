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
        </div>
    )
}

export default Startnow
