import React from "react";
import "../navbar/Navbar.css";
import "react-pro-sidebar/dist/css/styles.css";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import Logo from "../../assets/Navbar/profile.png";
import { IoIosHome } from "react-icons/io";
import { MdGroup } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import { RiInboxArchiveFill } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
export default function Navbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row mt-3">
            <div className="col-sm-2">
              <a onClick={handleShow}>
              <span style={{ fontSize:'50px' }}>
                  <IoMdMenu/>
                  </span>
                {/* <button type="button" class="btn btn-light">
                  Side Menu
                </button> */}
              </a>
            </div>
            <div className="col-sm-6 text-center">
              <h2>Trafic Info Dashboard</h2>
            </div>
            <div className="col-sm-2 d-flex justify-content-end"></div>
          </div>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <div className="ms-3 mt-2">
                  <img
                    style={{ marginLeft: "30px", width: "70px" }}
                    src={Logo}
                  />
                  <br />
                  <br />
                  <span style={{ marginLeft: "30px" }}>Sohrab khan</span>
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="container">
                <div className="row">
                  <div className="offset-1">
                    <span style={{ fontSize:'25px' }}>
                      <IoIosHome />
                    </span>
                    <a
                      href="/#"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                        &nbsp;&nbsp;
                      HOME
                    </a>
                    <br />
                    <br />
                    <span style={{ fontSize:'25px' }}>
                      <MdGroup />
                    </span>
                    <a
                      href="my groups"
                      style={{ color: "black", textDecoration: "none" }}
                    > &nbsp;&nbsp;
                      MY GROUPS
                    </a>
                    <br />
                    <br />
                    <span style={{ fontSize:'25px' }}>
                      <CgProfile />
                    </span>
                    <a
                      href="profile"
                      style={{ color: "black", textDecoration: "none" }}
                    > &nbsp;&nbsp;
                      PROFILE
                    </a>
                    <br />
                    <br />
                    <span style={{ fontSize:'25px' }}>
                      <RiInboxArchiveFill />
                    </span>
                    <a
                      href="groupchat"
                      style={{ color: "black", textDecoration: "none" }}
                    > &nbsp;&nbsp;
                      INBOX
                    </a>
                    <br />
                    <br />
                    <span style={{ fontSize:'25px' }}>
                      <BsFillChatDotsFill />
                    </span>
                    <a
                      href="general chat"
                      style={{ color: "black", textDecoration: "none" }}
                    > &nbsp;&nbsp;
                      GENERAL CHAT
                    </a>
                    <br />
                    <br />
                    <span style={{ fontSize:'25px'}}>
                      <MdOutlineSupportAgent />
                    </span>
                    <a
                      href="support"
                      style={{ color: "black", textDecoration: "none" }}
                    > &nbsp;&nbsp;
                      SUPPORT
                    </a>
                    <br />
                    <br />
                    <span style={{fontSize:'25px' }}>
                      <GoSignOut />
                    </span>
                    <a
                      href="sign out"
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
