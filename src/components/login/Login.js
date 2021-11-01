import React from "react";
import './login.css'
import { useState } from "react";
import firebase from "../../components/utils/firebase";
import { useHistory } from "react-router-dom";
import SignIn from "../SignIn";
import Registration from "../registration/Registration";
export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  // const [Number, setNumber] = useState("");
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

            firebase
              .database()
              .ref("/userRoles")
              .on("value", (snapshot) => {
                // let main = snapshot.val();
                 Object.values(snapshot?.val());
                console.log("user Roles :", snapshot?.val());
                let checkRole = snapshot?.val().map((role) => {
                  console.log("role ", role);
                  if (role.student == email) {
                    history.push("/dashboardstudent");
                  }
                  if (role.admin == email) {
                    history.push("/dashboard");
                  } else {
                    return "notfound";
                  }
                });
                console.log("check role ", checkRole);
              });
          }
        });
        alert("Logged In.");
        history.push('/home')
      })
      .catch((e) => {
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
                <label for="exampleInputPassword1" class="ms-2 form-label float-start ps-1">
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
                <label for="exampleInputText1" class=" ms-2 form-label float-start ps-1">
                  <b> Enter Number </b>
                </label>
                &nbsp;
                <input
                  type="number"
                  class="input form-control "
                  id="exampleInputText1"
                  placeholder="+92-3120908499"
                  required
                  onChange={(event) => {
                    setUserPassword(event.target.value);
                  }}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="ms-2 form-label float-start ps-1">
                  <b> Enter Password </b>
                </label>
                &nbsp;
                <input
                  type="password"
                  class="input form-control "
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
              >
                Login
              </button>
              
              <SignIn />
                  
              <br />
              <a style={{ marginBottom: '40px' }}
                onClick={() => setCurrentPageLogin(false)}

              >
                Don't have an Account? SignUp
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
