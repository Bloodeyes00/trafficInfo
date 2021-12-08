import React from "react";
import './login.css'
import { useState } from "react";
import firebase from "../../components/utils/firebase";
import { useHistory } from "react-router-dom";
import SignIn from "../SignIn";
import Registration from "../registration/Registration";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from '../loader/Loader';
export default function Login(props) {
  let { setLoggedIn } = props;
  const notifyf = () => toast("login succesfully!");
  const notify = (message) => toast(message);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [userPassword, setUserPassword] = useState("");
  // const [Number, setNumber] = useState("");
  const [curPageLogin, setCurrentPageLogin] = useState(true);
  const login = () => {
    setLoading(true);
    firebase
      .auth()

      .signInWithEmailAndPassword(email, userPassword)
      .then((res) => {
        console.log("login res : ", res);
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            // let curuserid = firebase?.auth()?.currentUser?.uid;
            // console.log("curuserid", curuserid);
            notify("User data added succefully");
            // setLoggedIn(true);
            setLoading(false);
            history.push('/profile')
            // notify("Logged In");
            // firebase
            //   .database()
            //   .ref("/userRoles")
            //   .on("value", (snapshot) => {
            //     // let main = snapshot.val();
            //     if (snapshot && snapshot?.val && snapshot?.val() != undefined && snapshot?.val() != null ) {
            //       Object.values(snapshot?.val());
            //       console.log("user Roles :", snapshot?.val());
            //       let checkRole = snapshot?.val().map((role) => {
            //         console.log("role ", role);
            //         notify("User data added succefully");
            //         setLoggedIn(true);
            //         setLoading(false);
            //         // if (role.student == email) {
            //         //   history.push("");
            //         // }
            //         // if (role.admin == email) {
            //         //   history.push("");
            //         // } else {
            //         //   return "notfound";
            //         // }
            //       });
            //       console.log("check role ", checkRole);
            //     }
            //   });
          }
        });
        // alert("You have succesfully Logged!")
        // history.push('/home')
      })
      .catch((e) => {
        notify(e.message);
        console.log("email: ", email);
        setLoading(false);
      });
  };
  return (
    <div>
      <ToastContainer />
      {loading && <Loader />}
      {curPageLogin && <div className=" col flex-coloumn col-sm-12">
        <div className="Login">
          <div className="Profile d-flex flex-column justify-content-center align-items-center ">
            <div className="Heading d-flex justify-content-center mt-3 mb-5">
              <h1>
                <b>Login</b>
              </h1>
            </div>
            <div className="Data d-flex align-items-center pt-4 mb-5">
              <div className="mb-3 ">
                <label for="exampleInputPassword1" className="ms-2 form-label float-start ps-1">
                  <b> Email Address </b>
                </label>
                &nbsp;
                <input
                  type="text  "
                  className="input form-control "
                  id="exampleInputPassword1"
                  required
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputText1" className=" ms-2 form-label float-start ps-1">
                  <b> Enter Number </b>
                </label>
                &nbsp;
                <input
                  type="text"
                  className="input form-control "
                  id="exampleInputText1"
                  placeholder="+92-3120908499"
                  required
                  onChange={(event) => {
                    setUserPassword(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="ms-2 form-label float-start ps-1">
                  <b> Enter Password </b>
                </label>
                &nbsp;
                <input
                  type="password"
                  className="input form-control "
                  id="exampleInputPassword"
                  required
                  onChange={(event) => {
                    setUserPassword(event.target.value);
                  }}
                />
              </div>
              <button
                onClick={() => login()}
                className=" Button form-control mt-3 mb-3 "
              // onClick={notifyf}

              >
                Login
              </button>
              
              <SignIn />
                  
              <br />
              <a type="button" style={{ marginBottom: '40px' }}
                onClick={() => setCurrentPageLogin(false)}

              >
                Don't have an Account?<b className="signup-in"> SignUp</b> 
              </a>
            </div>
          </div>
        </div>
      </div>}
      {!curPageLogin && <div>
        <Registration setCurrentPageLogin={setCurrentPageLogin} />
      </div>}
    </div>
  );
}
