
import firebase from 'firebase'
import './SignwithPohone.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { auth } from '../components/utils/firebase'

const SignwithPohone = () => {
    const [mynumber, setnumber] = useState("");
    const [value, setValue] = useState();
    const [otp, setotp] = useState('');
    const [show, setshow] = useState(false);
    const [final, setfinal] = useState('');

    let history = useHistory();
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

    const ValidateOtp = () => {
        if (otp === null || final === null)
            return;
        final.confirm(otp).then((result) => {
            history.push("/profile");
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
                </div>
                <br />
                <center>

                    <div style={{ display: !show ? "block" : "none" }}>
                            <div>
                             <PhoneInput className="" style={{ width: "50%",}}
                              international
                              defaultCountry="SE"
                            placeholder="Enter phone number"
                            value={mynumber}
                            onChange={setnumber}/> 
                             {setnumber}
                            </div>
                           
                        <br /><br />
                        <div id="recaptcha-container"></div>
                        <button className='btnsss btn' onClick={signin}>Send OTP</button>
                    </div>
                    <div style={{ display: show ? "block" : "none" }}>
                        <input type="number" placeholder={"- - - - - -"}
                            onChange={(e) => { setotp(e.target.value) }}></input>
                        <br /><br />
                        <button className="btnsss" onClick={ValidateOtp}>Verify</button>
                    </div>
                </center>
            </div>
            <br />

        </div>
    )
}
export default SignwithPohone;