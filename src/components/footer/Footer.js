import React, { useEffect } from "react";
import firebase from "../utils/firebase";
import './Footer.css'
import { HiUsers } from "react-icons/hi";
import { useState, } from "react";
import { MdOutlineSupportAgent, MdAppRegistration } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import { AiFillHome } from "react-icons/ai";
import { AiFillWechat } from "react-icons/ai";
import { BsAppIndicator } from "react-icons/bs";
import { FaServicestack } from "react-icons/fa";
import { useHistory } from 'react-router'
import { MdOutlineStorage } from "react-icons/md";
import { auth, db } from "../utils/firebase";
import { BsFillChatDotsFill } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { IoLogInOutline } from "react-icons/all"
import { Offcanvas, NavDropdown, Nav, Form, FormControl } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import Logo from "../../assets/Navbar/profile.png";
import { IoIosHome } from "react-icons/io";
import { MdGroup } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiInboxArchiveFill } from "react-icons/ri";
import Loader from "../loader/Loader";
import jobs from "../../images/jobs.png"
 
function Footer() {
  const [unreadLength, setUnreadLength] = useState(0);

  const loadFooter = () => {
    // setLoading(true)
    const firestore = firebase.database().ref("/UserProfile");
    firestore.on('value', (snapshot) => {
      let data = { ...snapshot.val() };
      data = Object.values(data);
      // let uid = auth?.currentUser.uid;
      if (auth?.currentUser?.uid) {
        let currentUserDetails = data.find(item => item.uid == auth?.currentUser?.uid);
        console.log("data : ", data);
        console.log("currentUserDetails : ", currentUserDetails);
        setuserdetails(currentUserDetails);
        setLoading(false)
      }
    });

  }

  useEffect(() => {
    loadFooter();

    return {

    }
  }, [])

  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [user] = useAuthState(auth);
  const handleClose = () => setShow(false);
  const [userdetails, setuserdetails] = useState(false);


  let history = useHistory()
  const loadChatroom = () => {
    setLoading(true)
    const firestore = firebase.database().ref("/UserProfile");
    firestore.on('value', (snapshot) => {
      let data = { ...snapshot.val() };
      data = Object.values(data);

      if (auth?.currentUser?.uid) {
        console.log("auth uids: ", auth.currentUser.uid);
        let currentUserDetails = data.find(item => item.uid == auth?.currentUser.uid);
        console.log("currentUserDetails in profile : ", currentUserDetails);
        setuserdetails(currentUserDetails);
        setLoading(false)
        let msgsLength = localStorage.getItem("msgsLength");

        db.collection("company").onSnapshot(snapshot => {
          let data = snapshot.docs.map(doc => doc.data());
          if ((data.length - msgsLength) > 0) {
            setUnreadLength(data.length - msgsLength);
          }
          else { setUnreadLength(0) }
        })

        db.collection("Teamcompany").onSnapshot(snapshot => {
          let data = snapshot.docs.map(doc => doc.data());
          if ((data.length - msgsLength) > 0) {
            setUnreadLength(data.length - msgsLength);
          } else { setUnreadLength(0) }
        })

        db.collection("Staxicompany").onSnapshot(snapshot => {
          let data = snapshot.docs.map(doc => doc.data());
          if ((data.length - msgsLength) > 0) {
            setUnreadLength(data.length - msgsLength);
          } else { setUnreadLength(0) }
        })


        db.collection("Taxicompany").onSnapshot(snapshot => {
          let data = snapshot.docs.map(doc => doc.data());
          if ((data.length - msgsLength) > 0) {
            setUnreadLength(data.length - msgsLength);
          } else { setUnreadLength(0) }
        })

        db.collection("Kuricompany").onSnapshot(snapshot => {
          let data = snapshot.docs.map(doc => doc.data());
          if ((data.length - msgsLength) > 0) {
            setUnreadLength(data.length - msgsLength);
          } else { setUnreadLength(0) }
        })

        db.collection("Skancompany").onSnapshot(snapshot => {
          let data = snapshot.docs.map(doc => doc.data());
          if ((data.length - msgsLength) > 0) {
            setUnreadLength(data.length - msgsLength);
          } else { setUnreadLength(0) }
        })
      }
    });
  }

  useEffect(() => {
    loadChatroom();
    return {

    }
  }, [])

  return (
    <div className='container-fluid-footer'>
      <div className='row-footer'>

        <div className="col-a  pt-1">

          <span onClick={handleShow} className="navspan">
            <MdOutlineStorage className='sidebaricon' />
          </span>

        </div>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <div className="ms-4 mt-3">
                <img className="off-canvas-image"
                  src={userdetails?.url ? userdetails?.url : Logo}
                />
                <br />
                <br />
                <h2 style={{ marginLeft: '20px' }}>{userdetails?.Name}</h2>
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="container">
              <div className="row">
                <div className="offset-1">
                  <div className="btn-nav">
                    <span className="sidemenu-icons" type="button" onClick={() => {
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
                    <span className="sidemenu-icons" type="button" onClick={() => {
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
                      MY GROUP
                    </a>
                  </div>
                  <br />
                  <div className="btn-nav">
                    <span className="sidemenu-icons" type="button" onClick={() => {
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
                    <span className="sidemenu-icons" type="button" onClick={() => {
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
                    <span className="sidemenu-icons" type="button" onClick={() => {
                      history.push("./chatroom")
                    }} >
                      <BsFillChatDotsFill />
                    </span>
                    <a type="button"
                      onClick={() => {
                        history.push("./chatroom")
                      }}
                      style={{ color: "white", textDecoration: "none" }}
                    > &nbsp;&nbsp;
                      CHATROOM
                    </a>
                    <br />
                    <br />
                    <div>

                    <div className="btn-nav">
                        <span style={{ color: "white" }} className="sidemenu-icons"
                          type="button" onClick={() => {
                            history.push("/taxijob")
                          }} >
                          <img className="jobimags" src={jobs} />
                        </span>
                        <a type="button"
                          onClick={() => {
                            history.push("/taxijob")
                          }}
                          style={{ color: "white", textDecoration: "none" }}
                        > &nbsp;&nbsp;
                          JOBS
                        </a>
                      </div>
                      <br />
                   
                      <div className="btn-nav">
                        <span style={{ color: "white" }} className="sidemenu-icons"
                          type="button" onClick={() => {
                            history.push("/admin")
                          }} >
                          <RiAdminFill />
                        </span>
                        <a type="button"
                          onClick={() => {
                            history.push("./admin")
                          }}
                          style={{ color: "white", textDecoration: "none" }}
                        > &nbsp;&nbsp;
                          ADMIN
                        </a>
                      </div>
                    </div>
                  </div>
                  {!user?.uid && <br />}
                  {!user?.uid && <div>
                    <div className="btn-nav">
                      <span className="sidemenu-icons" type="button" onClick={() => {
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
                  <br />
                  <div className="btn-nav">
                    <span className="sidemenu-icons" type="button" onClick={() => {
                      history.push("/registration")
                    }} >
                      <MdAppRegistration />
                    </span>
                    <a type="button"
                      onClick={() => {
                        history.push("/registration")
                      }}
                      style={{ color: "white", textDecoration: "none" }}
                    > &nbsp;&nbsp;
                      Registration
                    </a>
                  </div>
                  <br />
                  <div className="btn-nav">
                    <span className="sidemenu-icons" type="button" onClick={() => {
                      history.push("/support")
                    }} >
                      <MdOutlineSupportAgent />
                    </span>
                    <a type="button"
                      onClick={() => {
                        history.push("/support")
                      }}
                      style={{ color: "white", textDecoration: "none" }}
                    > &nbsp;&nbsp;
                      SUPPORT
                    </a>
                  </div>
                  <br />
                  {user && <div>
                    <div className="btn-nav">
                      <span className="sidemenu-icons" type="button" onClick={() => {
                        auth.signOut();
                      }} >
                        <GoSignOut />
                      </span>
                      <a type="button"
                        onClick={() => {
                          auth.signOut();
                        }}
                        style={{ color: "white", textDecoration: "none" }}
                      > &nbsp;&nbsp;
                        SIGN OUT
                      </a>
                    </div>
                    <br />
                  </div>}
                </div>
              </div>
            </div>

          </Offcanvas.Body>
        </Offcanvas>

        <div className='col-d'>
          <AiFillHome
            onClick={() => { history.push("/Home") }}
          />
          <br />
          <b onClick={() => { history.push("/Home") }}>Home</b>
        </div>

      

        <div className='col-b'>
          <AiFillWechat
            onClick={() => {
              history.push(`/chatroom`)
            }} />
          <br />
          <b onClick={() => {
            history.push(`/chatroom`)
          }}>
          Compnay Chat
          </b>
          <div className='counters'>{unreadLength}</div>
        </div>

        <div className='col-d'>
          <FaServicestack
            onClick={() => { 
            history.push("/MainPage") }}/>
          <br />
          <b onClick={() => { 
            history.push("/MainPage") }}>Services</b>
        </div>

      </div>
    </div>
  )
}

export default Footer
