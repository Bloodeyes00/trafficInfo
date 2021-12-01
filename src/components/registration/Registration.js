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

  const SaveUserDetails = () => {
    const firestore = firebase.database().ref("/UserInfo");
    let data = {
      email: email,
      password: password,
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


      })
      .catch(alert);

  };


  return (


    <div>
      <ToastContainer />
      <div className=''>
        <div className="Profile d-flex flex-column justify-content-center align-items-center pb-5">
          <div className="Heading d-flex justify-content-center mt-3">
            <h1>
              <b>Registration</b>
            </h1>
          </div>
          <div>
            <div className="Data d-flex flex-column justify-content-center align-items-center py-5 mt-2  ">
              <div className="mb-1 input">


              </div>
              <div className="mb-1 input">
                <label
                  for="exampleInpuEmail1"
                  className="form-label float-start ps-2 "
                >
                  <b> Enter Email </b>
                </label>
                <input
                  type="email"
                  className="form-control ps-5 "
                  id="exampleInputpassword"
                  onChange={(e) => { setemail(e.target.value) }}>
                </input>

              </div>

              <div className="mb-1 input">
                <label
                  for="exampleInputpassword"
                  className="form-label float-start ps-2"
                >
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className="form-control ps-5 "
                  id="exampleInputpassword"
                  onChange={(e) => { setpassword(e.target.value) }}
                />

              </div>

              <div>
                <button
                  type="submit"
                  className=" Button form-control mt-3 mb-3 "
                  //    onClick={notify}
                  onClick={() => {
                    signup();

                  }}
                >
                  Register
                </button >
                <ToastContainer />
              </div>
              <a

                onClick={() => setCurrentPageLogin(true)}>Already have an Account!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
