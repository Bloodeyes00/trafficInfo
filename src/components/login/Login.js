import React from "react";
import './login.css'
import { useState } from "react";
import firebase from "../../components/utils/firebase";
import { useHistory } from "react-router-dom";
import GoogleLogin from "../googlelogin/GoogleLogin";
import SignIn from "../SignIn";
import Registration from "../registration/Registration";
export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [curPageLogin, setCurrentPageLogin] = useState(true);
  const login = () => {
    
    firebase
      .auth()
      .signInWithEmailAndPassword(email, userPassword)
      .then((res) => {
        console.log("login res : ", res);
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            let curuserid = firebase.auth().currentUser.uid;
            console.log("curuserid", curuserid);
            // dispatch({
            //   type: "SET_ID",
            //   payload: curuserid,
            // });
            firebase
              .database()
              .ref("/userRoles")
              .on("value", (snapshot) => {
                let main = snapshot.val();
                main = Object.values(main);
                console.log("user Roles :", main);
                let checkRole = main.map((role) => {
                  console.log("role ", role);
                  if (role.student == email) {
                    history.push("/dashboardstudent");
                    // return "student"
                  }
                  if (role.admin == email) {
                    history.push("/dashboard");
                    // return "admin"
                  } else {
                    return "notfound";
                  }
                });
                console.log("check role ", checkRole);
                // if(main.students.stuent)
              });
          }
        });
        alert("Logged In.");
        history.push('/home')
      })
      .catch((e) => {
        // console.log("eeeerrr : login : ", e);
        console.log("email: ", email);
        alert(e.message);
      });
  };
  return (
    <div>
      {curPageLogin && <div className=" col flex-coloumn col-sm-12">
        <div className="Login">
          <div className="Profile d-flex flex-column justify-content-center align-items-center ">
            <div className="Heading d-flex justify-content-center mt-3 mb-5">
              <h1>
                <b>Login</b>
              </h1>
            </div>
            <div className="Data d-flex align-items-center pt-4 mb-5">
              <div class="mb-3 ">
                <label for="exampleInputPassword1" class="ms-5 form-label float-start ps-1">
                  <b> Email Address </b>
                </label>
                &nbsp;
                <input
                  type="text  "
                  class="input form-control "
                  id="exampleInputPassword1"
                  required
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class=" ms-5 form-label float-start ps-1">
                  <b> Enter Password </b>
                </label>
                &nbsp;
                <input
                  type="password"
                  class="input form-control "
                  id="exampleInputPassword1"
                  required
                  onChange={(event) => {
                    setUserPassword(event.target.value);
                  }}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="ms-5 form-label float-start ps-1">
                  <b> Company Name </b>
                </label>
                &nbsp;
                <input
                  type="text  "
                  class="input form-control "
                  id="exampleInputPassword1"
                  required
                  onChange={(event) => {
                    setUserPassword(event.target.value);
                  }}
                />
              </div>
              <button
                onClick={() => login()}
                className=" Button form-control mt-3 mb-3 "
              >
                Login
              </button>
              <a
                onClick={() => setCurrentPageLogin(false)}
                // className=" Button form-control mt-3 mb-3 "
              >
                Don't have an Account!
              </a>
              <SignIn />
              {/* <GoogleLogin /> */}
              <br />
            </div>
            <button 
              onClick={() => login()}
              className=" Button form-control mt-3 mb-3 "
            >
              LOGIN
            </button>
            <SignIn />
            {/* <GoogleLogin /> */}
            <br/>
          </div>
        </div>
      </div>}
      {!curPageLogin && <div>
        <Registration setCurrentPageLogin={setCurrentPageLogin} />
      </div>}
    </div>
  );
}
