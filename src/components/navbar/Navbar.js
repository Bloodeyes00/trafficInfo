import React from "react";
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
import { MdOutlineSupportAgent , MdAppRegistration } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import {IoLogInOutline} from "react-icons/all"
import { RiInboxArchiveFill } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
export default function Navbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let history =  useHistory();
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="rowss pt-1 d-flex justify-content-center">
            <div className="col-2  pt-1">
              <a onClick={handleShow}>
              <span style={{ fontSize:'40px' }}>
                  <IoMdMenu/>
                  </span>
              </a>
              </div>
            
              <div className="col-10 pt-4">
              <h2 className="info">TRAFFIC INFO</h2>
         </div>
            
          </div>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header>
              <Offcanvas.Title>
                <div className="ms-4 mt-3">
                  <img
                    style={{ marginLeft: "30px", width: "75px",height:"50px" }}
                    src={Logo}
                  />
                  <br />
                  <br />
                  <span style={{ marginLeft: "30px" }}>Traffic Info</span>
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="container">
                <div className="row">
                  <div className="offset-1">
                    <span style={{ fontSize:'25px' }} onClick={()=>{
                          history.push("./home")
                        }} >
                      <IoIosHome />
                    </span>
                    <a 
                      onClick={()=>{
                        history.push("./home")
                      }} 
                      style={{ color: "black", textDecoration: "none" }}
                    >
                        &nbsp;&nbsp;
                      HOME
                    </a>
                    <br />
                    <br />
                    <span style={{ fontSize:'25px' }} onClick={()=>{
                          history.push("./group")
                        }} >
                      <MdGroup />
                    </span>
                    <a
                    onClick={()=>{
                      history.push("./group")
                    }}
                      style={{ color: "black", textDecoration: "none" }}
                    > &nbsp;&nbsp;
                      MY GROUPS
                    </a>
                    <br />
                    <br />
                    <span style={{ fontSize:'25px' }}onClick={()=>{
                          history.push("./groupchat")
                        }} >
                      <CgProfile />
                    </span>
                    <a
                      onClick={()=>{
                        history.push("./profile")
                      }} 
                      style={{ color: "black", textDecoration: "none" }}
                    > &nbsp;&nbsp;
                      PROFILE
                    </a>
                    <br />
                    <br />
                    <span style={{ fontSize:'25px' }}onClick={()=>{
                          history.push("./inbox")
                        }} >
                      <RiInboxArchiveFill />
                    </span>
                    <a 
                      onClick={()=>{
                        history.push("./groupchat")
                      }}
                      style={{ color: "black", textDecoration: "none" }}
                    > &nbsp;&nbsp;
                      INBOX
                    </a>
                    <br />
                    <br />
                    <span style={{ fontSize:'25px' }}onClick={()=>{
                          history.push("./chatroom")
                        }} >
                      <BsFillChatDotsFill />
                    </span>
                    <a 
                      onClick={()=>{
                        history.push("./chatroom")
                      }}
                      style={{ color: "black", textDecoration: "none" }}
                    > &nbsp;&nbsp;
                      CHATROOM
                    </a>
                    <br />
                    <br />
                    <span style={{ fontSize:'25px'}}onClick={()=>{
                          history.push("./login")
                        }} >
                      <IoLogInOutline />
                    </span>
                    <a 
                      onClick={()=>{
                        history.push("./login")
                      }}
                      style={{ color: "black", textDecoration: "none" }}
                    > &nbsp;&nbsp;
                      LOGIN
                    </a>
                    {/* <span style={{ fontSize:'25px'}}onClick={()=>{
                          history.push("./registration")
                        }} >
                      <MdAppRegistration />
                    </span> */}
                    {/* <a 
                      onClick={()=>{
                        history.push("./registration")
                      }}
                      style={{ color: "black", textDecoration: "none" }}
                    > &nbsp;&nbsp;
                      Registration
                    </a> */}
                    <br />
                    <br />
                    <span style={{ fontSize:'25px'}}onClick={()=>{
                          history.push("./support")
                        }} >
                      <MdOutlineSupportAgent />
                    </span>
                    <a 
                      onClick={()=>{
                        history.push("./support")
                      }}
                      style={{ color: "black", textDecoration: "none" }}
                    > &nbsp;&nbsp;
                      SUPPORT
                    </a>
                    <br />
                    <br />
                    <span style={{fontSize:'25px' }} onClick={()=>{
                          history.push("./signout")
                        }} >
                      <GoSignOut />
                    </span>
                    <a 
                      onClick={()=>{
                        history.push("./signout")
                      }}
                      style={{ color: "black", textDecoration: "none" }}
                    > &nbsp;&nbsp;
                      SIGN OUT
                    </a>
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
