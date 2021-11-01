import React from "react";
import "./Registration.css";
import { useState } from "react";
import firebase from "../../components/utils/firebase";
import { useHistory } from "react-router";
export default function Registration(props) {
  const history = useHistory();
  let { setCurrentPageLogin } = props;
  const [email, setEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [Name, setName] = useState("");
  const [Number, setNumber] = useState("");
  const [companyName, setcompanyName] = useState("");
  const handleSendMessage = () => {
    const firestore = firebase.database().ref("/UserInfo");
    let data = {
      email: email,
      userPassword: userPassword,
      companyName: companyName,
      Name: Name,
      Number: Number,
    };
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, userPassword)
      .then((res) => {

        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            let uid = user.uid;
            data["uid"] = uid;
            firestore.push(data).then((res) => {
              console.log("res ;", res);
              alert("SignUp Successfully!");
              history.push('/login')
            })
              .catch((e) => {
                alert(e.message);
                console.log("error in pushing data :", e);
              });

          }
        });

        console.log("res after registration", res);

      })
      .catch((e) => [console.log(e)]);


  };

  return (


    <div>
      <div className=''>
        <div className="Profile d-flex flex-column justify-content-center align-items-center pb-5">
          <div className="Heading d-flex justify-content-center mt-3">
            <h1>
              <b>Registration</b>
            </h1>
          </div>
          <div>
            <div className="Data d-flex flex-column justify-content-center align-items-center py-5 mt-5  ">
              <div className="mb-3 input">
                <label
                  for="exampleInputText1"
                  className="form-label float-start ps-1"
                >
                  <b>Full Name</b>
                </label>
                <input
                  type="text"
                  className="form-control ps-4"
                  id="exampleInputText1"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3 input">
                <label
                  for="exampleInpuEmail1"
                  className="form-label float-start ps-2 "
                >
                  <b> Enter Email </b>
                </label>
                <input
                  type="email"
                  className="form-control ps-3"
                  id="exampleInpuEmail1"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3 input">
                <label
                  for="exampleInputNumber"
                  className="form-label float-start ps-1"
                >
                  <b> Enter Number </b>
                </label>
                <input
                  type="number"
                  className="form-control ps-1"
                  id="exampleInputNumber"
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3 input">
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
                  onChange={(e) => {
                  setUserPassword(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3 input">
                <label
                  for="exampleAddress"
                  className="form-label float-start ps-1"
                >
                  <b> Company Name</b>
                </label>
                <input
                  type="text"
                  className="form-control ps-1"
                  id="exampleAddress"
                  onChange={(e) => {
                  setcompanyName(e.target.value);
                  }}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className=" Button form-control mt-3 mb-5 "
                  onClick={() => {
                    handleSendMessage();

                  }}
                >
                  Register
                </button >

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
