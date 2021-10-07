import React from "react";
import './login.css'
import { useState } from "react";
import firebase from "../../components/utils/firebase";
import { useHistory } from "react-router-dom";
export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [companyName, setcompanyName] = useState("");

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
        // alert("Logged In.");
        // history.push('/dashboard')
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  return (
    <div className=" col flex-coloumn col-sm-12">
      <div className="Login">
        <div className="Profile d-flex flex-column justify-content-center align-items-center ">
          <div className="Heading d-flex justify-content-center mt-5">
            <h1>
              <b>Login</b>
            </h1>
          </div>
          <div className="Data d-flex   align-items-center pt-4">
          <div class="mb-3 col-sm-4"> 
              <label for="exampleInputPassword1" class="form-label float-start ps-1">
                <b> Email Address </b>
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
            <div class="mb-3 col-sm-4"> 
              <label for="exampleInputPassword1" class="form-label float-start ps-1">
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
            <div class="mb-3 col-sm-4"> 
              <label for="exampleInputPassword1" class="form-label float-start ps-1">
                <b> Company Name </b>
              </label>
              &nbsp;
              <input
                type="text"
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
              className=" Button form-control btn btn-danger mt-3 mb-3 col-sm-4"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
