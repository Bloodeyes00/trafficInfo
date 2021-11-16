import React, { useEffect } from "react";
import "../navbar/Navbar.css";
import "react-pro-sidebar/dist/css/styles.css";
import { Offcanvas } from "react-bootstrap";
import { useState, } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/Navbar/profile.png";
import { IoIosHome } from "react-icons/io";
import { MdGroup } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdOutlineSupportAgent, MdAppRegistration } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import { IoLogInOutline } from "react-icons/all"
import { RiInboxArchiveFill } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { auth, db } from "../utils/firebase";
import firebase from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
export default function Navbar() {
  useEffect(() => {

    const firestore = firebase.database().ref("/UserInfo");
    firestore.on('value', (snapshot) => {
      let data = { ...snapshot.val() };
      data = Object.values(data);
      // let uid = auth?.currentUser.uid;
      if (auth?.currentUser?.uid) {
        let currentUserDetails = data.find(item => item.uid == auth?.currentUser?.uid);
        console.log("data : ", data);
        console.log("currentUserDetails : ", currentUserDetails);
        setuserdetails(currentUserDetails);
      }
    });

    // db.collection('messages').orderBy('createdAt').onSnapshot(snapshot => {
    //   setMessages(snapshot.docs.map(doc => doc.data()))
    // });
    return {

    }
  }, [])
  const [show, setShow] = useState(false);
  const [messages, setMessages] = useState(false);
  const [userdetails, setuserdetails] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let history = useHistory();
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="rowss pt-1 d-flex justify-content-center">
            <div className="col-2  pt-1">
              <a onClick={handleShow}>
                <span className="navspan" style={{ fontSize: '40px', color:"white", marginLeft:"10px" }}>
                  <IoMdMenu />
                </span>
              </a>
            </div>

            <div className="col-10 pt-4">
              <h3 className="info" style={{color:"white"}}>TRAFFIC INFO</h3>
            </div>

          </div>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header>
              <Offcanvas.Title>
                <div className="ms-4 mt-3" style={{marginLeft:"20px"}}>
                  <img
                    style={{marginLeft:"50px",width: "80px", height: "75px", marginTop: 'auto' }}
                    // src={messages[0]?.url ? messages[0].url : Logo}
                    src={userdetails?.url ? userdetails?.url : Logo}
                  />
                  <br />
                  <br />
                  {/* <span style={{ marginLeft: "30px" }}>Traffic Info</span> */}
                  <h2 style={{ marginLeft:"50px" }}>{userdetails?.Name}</h2>
                  {/* <span style={{ marginLeft: "30px" }}>Traffic Info</span> */}
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="container">
                <div className="row">
                  <div className="offset-1">
                    <div className="btn-nav">
                    <span type="button" style={{color:"white", fontSize: '25px' }} onClick={() => {
                      history.push("/home")
                    }} >
                      < IoIosHome />
                    </span>
                    <a type="button"
                      onClick={() => {
                        history.push("./home")
                      }}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      &nbsp;&nbsp;
                      HOME
                    </a>
                    </div>
                    <br />
                    <div className="btn-nav">
                    <span type="button" style={{color:"white", fontSize: '25px' }} onClick={() => {
                      history.push("/group")
                    }} >
                      <MdGroup />
                    </span>
                    <a type="button"
                      onClick={() => {
                        history.push("/group")
                      }}
                      style={{ color: "white", textDecoration: "none" }}
                    > &nbsp;&nbsp;
                      MY GROUPS
                    </a>
                    </div>
                    <br />
                    <div className="btn-nav">
                    <span type="button" style={{color: "white", fontSize: '25px' }} onClick={() => {
                      history.push("/groupchat")


                    }} >
                      <CgProfile />
                    </span>
                    <a type="button"
                      onClick={() => {
                        history.push("/profile")
                      }}
                      style={{ color: "white", textDecoration: "none" }}
                    > &nbsp;&nbsp;
                      PROFILE
                    </a>
                   </div>
                    <br />
                    <div className="btn-nav">
                    <span type="button" style={{color: "white", fontSize: '25px' }} onClick={() => {
                      history.push("./inbox")
                    }} >
                      <RiInboxArchiveFill />
                    </span>
                    <a type="button"
                      onClick={() => {
                        history.push("./groupchat")
                      }}
                      style={{ color: "white", textDecoration: "none" }}
                    > &nbsp;&nbsp;
                      INBOX
                    </a>
                  </div>
                    <br />
                    <div className="btn-nav">
                    <span type="button" style={{color: "white", fontSize: '25px' }} onClick={() => {
                      history.push("./chatroom")
                    }} >
                      <BsFillChatDotsFill />
                    </span>
                    <a type="button"
                      onClick={() => {
                        history.push("./chatroom")
                      }}
                      style={{color: "white", textDecoration: "none" }}
                    > &nbsp;&nbsp;
                      CHATROOM
                    </a>
                    </div>
                    <br />
                    {!user?.uid && <br />}
                    {!user?.uid && <div>
                      <div className="btn-nav">
                      <span type="button" style={{color: "white", fontSize: '25px' }} onClick={() => {
                        history.push("/login")
                      }} >
                        <IoLogInOutline />
                      </span>
                      <a type="button"
                        onClick={() => {
                          history.push("./login")
                        }}
                        style={{ color: "white", textDecoration: "none" }}
                      > &nbsp;&nbsp;
                        Login
                      </a>
                      </div>
                    </div>}
                    
                  
                    <div className="btn-nav">
                    <span type="button" style={{color: "white", fontSize: '25px' }} onClick={() => {
                      history.push("/registration")
                    }} >
                      <MdAppRegistration />
                    </span>
                    <a type="button"
                      onClick={() => {
                        history.push("/registration")
                      }}
                      style={{color: "white", textDecoration: "none" }}
                    > &nbsp;&nbsp;
                      Registration
                    </a>
                    </div>
                    <br />
                    <div className="btn-nav">
                    <span type="button" style={{color: "white", fontSize: '25px' }} onClick={() => {
                      history.push("/support")
                    }} >
                      <MdOutlineSupportAgent />
                    </span>
                    <a type="button"
                      onClick={() => {
                        history.push("/support")
                      }}
                      style={{color: "white", textDecoration: "none" }}
                    > &nbsp;&nbsp;
                      SUPPORT
                    </a>
                    </div>
                    <br />
                    {user && <div>
                      <div className="btn-nav">
                      <span type="button" style={{color: "white", fontSize: '25px' }} onClick={() => {
                        auth.signOut();
                      }} >
                        <GoSignOut />
                      </span>
                      <a type="button"
                        onClick={() => {
                          auth.signOut();
                        }}
                        style={{color: "white", textDecoration: "none" }}
                      > &nbsp;&nbsp;
                        SIGN OUT
                      </a>
                      </div>
                    </div>}
                  </div>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
}
