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
             
              toast.success("login Successfully");
             
              setLoading(false);
              history.push('/profile')
          
            }
          });
       
        })
        
        
 
        .catch((e) => {
          toast.error(e.message);
          console.log("email: ", email);
          setLoading(false);
        });
        
    };
    
      
  return (
    <div className="container-fluid-login">
     
      
      {loading && <Loader />}
      {curPageLogin && <div className=" col flex-coloumn col-sm-12">
        <div className="Login">
          <div className="Profile d-flex flex-column justify-content-center align-items-center ">
            <div className="Heading d-flex justify-content-center mt-3 mb-5">
            </div>
            <div className="Data d-flex align-items-center  mb-5">
              <div className="mb-3 ">
                
                &nbsp;
                <input
                  type="text  " placeholder="Email Address"
                  className="input form-control "
                  id="exampleInputPassword1"
                  required
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
             
              <div className="mb-3">
                <input
                  type="password" placeholder="Enter Password"
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
            

              >
                <b>Login</b>
              </button>
              
              <SignIn />
                  
              <br />
              <a type="button" style={{ marginBottom: '40px' }}
                onClick={() => setCurrentPageLogin(false)}

              >
                <h7 className="textss">Don't have an Account?<b className="signup-in"> SignUp</b> </h7>
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
