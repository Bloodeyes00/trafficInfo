import React from "react";
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
    <div>
      <div className="Login">
        <div className="Profile d-flex flex-column justify-content-center align-items-center ">
          <div className="Heading d-flex justify-content-center mt-5">
            <h1>
              <b>Login</b>
            </h1>
          </div>
          <div className="Data d-flex justify-content-center  align-items-center py-4">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label float-start">
                <b>Email address</b>
              </label>
              <input
                type="email"
                class="form-control  d-flex  justify-content-center align-items-center "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label float-start">
                <b> Password </b>
              </label>
              <input
                type="password"
                class="form-control d-flex justify-content-center align-items-center"
                id="exampleInputPassword1"
                required
                onChange={(event) => {
                  setUserPassword(event.target.value);
                }}
              />
            </div>
            <div class="mb-3">
              <label for="exampleAddress" class="form-label float-start">
                <b>Company Name</b>
              </label>
              <input
                type="text"
                class="form-control d-flex justify-content-center align-items-center"
                id="exampleAddress"
                aria-describedby="emailHelp"
                required
                onChange={(event) => {
                  setcompanyName(event.target.value);
                }}
              />
            </div>
            <button
              onClick={() => login()}
              class=" Button form-control btn btn-danger mt-3 mb-3"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
