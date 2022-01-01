import React from "react";
import "./Registration.css";
import { auth } from '../../components/utils/firebase'
import { useState } from "react";
import firebase from "../../components/utils/firebase";
import { useHistory } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "../login/Login";
export default function Registration(props) {

  //  const notify = () => toast("loading please wait!");
  const notify = (message) => toast(message);
  const history = useHistory();
  let { setCurrentPageLogin } = props;
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState("");

  const SaveUserDetails = (userCredential) => {
    const firestore = firebase.database().ref("/UserProfile");
    let data = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      uid: auth?.currentUser?.uid,
    };

    firestore
      .push(data)
      .then((res) => {
        console.log("res after registration", res);
        userCredential.user.sendEmailVerification();
        auth.signOut();
        alert("Email sent");
        history.push('/login')
      })
      .catch((e) => {
        console.log("error in pushing data :", e);
      });
  };

  const signup = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // send verification mail.
        SaveUserDetails();
        // store data in firebase
        history.push('/profile')

      })
      .catch((e) => {
        toast.error(e.message);
      });

  };
  function check() {
    var password = document.getElementById("exampleInputpassword").value;
    var confirmPassword = document.getElementById("exampleInputCpassword").value;

    if (password == confirmPassword) {
      document.getElementById("wrong").innerHTML = "Form is submitted";
      signup();
      // return true;
    }
    else {
      document.getElementById("wrong").innerHTML = " Password did not match";
      return false;
    }
  }


  return (


    <div>
      {/* <ToastContainer /> */}
      <div className=''>
        <div className="Profile d-flex flex-column justify-content-center align-items-center pb-5">
          <div className="Heading d-flex justify-content-center mt-3">
            <h1>
              <b>Registration</b>
            </h1>
          </div>
          <br />

          <div>
            <div className="Data d-flex flex-column justify-content-center align-items-center py-5 mt-2  ">
              <div className="mb-1 input">


              </div>
              <div className="mb-1 input">

                <input
                  type="email" placeholder="Enter Email"
                  className="form-control "
                  id="exampleInputEpassword"
                  onChange={(e) => { setemail(e.target.value) }}>
                </input>

              </div>

              <div className="mb-1 input">

                <input
                  type="password" placeholder="Password"
                  className="form-control "
                  id="exampleInputpassword"
                  onChange={(e) => { setpassword(e.target.value) }}
                />

              </div>


              <div className="mb-1 input">

                <input
                  type="password" placeholder="Confirm Password"
                  className="form-control"
                  id="exampleInputCpassword"
                  onChange={(e) => { setConfirmPassword(e.target.value) }}
                />
                <label id="wrong" style={{ color: "red" }}></label>

              </div>
              <div>
                <button
                  type="submit"
                  className=" Btn4  mt-3 mb-3 "
                  //    onClick={notify}
                  onClick={() => { check(); }}
                >
                  Register
                </button >

              </div>
              <br />
              <a type="button"

                onClick={() => setCurrentPageLogin(true)}>Already have an Account?<b className="signup-in" > SignIn</b></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}