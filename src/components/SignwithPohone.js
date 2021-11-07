
import firebase from 'firebase'
import './SignwithPohone.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { auth } from '../components/utils/firebase'

const SignwithPohone = () => {
    const [mynumber, setnumber] = useState("");
    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');

    let history = useHistory();
    // Sent OTP
    const signin = () => {

        if (mynumber === "" || mynumber.length < 10) return;

        let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        auth.signInWithPhoneNumber(mynumber, verify).then((result) => {
            setfinal(result);
            alert("code sent")
            setshow(true);
            console.log("result : ", result);
        })
            .catch((err) => {
                alert(err);
                window.location.reload()
            });
    }

    // Validate OTP
    const ValidateOtp = () => {
        if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
            // success
            history.push("/profile")
        }).catch((err) => {
            alert("Wrong code");
        })
    }
    return (
    <div style={{ "marginTop": "20px" }}>
        <div className="container-fluid-start">
            <div className="row-start mt-5 pt-4 ms-4">
                <h1><b>START NOW</b></h1>
                <h5>Sign Up To Taxi Info With Your Phone Number.
                    Simple, Right?  </h5>
            </div>

            <div className="tel-box">
                {/* <div className="select-box">
                <select id="country_list"> </select>

                    </div> */}
            </div>
       <br/>
        <center>
            
            <div style={{ display: !show ? "block" : "none" }}>
            {/* <img className="immgss" src={pakistan} /> */}
                <input className="form-controlss ps-5" style={{width:"50%"}} value={mynumber} onChange={(e) => {
                    setnumber(e.target.value)    
                }}
                placeholder="+46" />
                <br />
                <div id="recaptcha-container"></div>
                <button className='btn btn' onClick={signin}>Send OTP</button>
            </div>
            <div style={{ display: show ? "block" : "none" }}>
                <input type="number" placeholder={"- - - - - -"}
                    onChange={(e) => { setotp(e.target.value) }}></input>
                <br /><br />
                <button onClick={ValidateOtp}>Verify</button>
            </div>
        </center>
        </div>
    </div>
    )
}
export default SignwithPohone;