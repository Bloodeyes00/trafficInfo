import React from 'react'
import '../navbar/Navbar.css'
import 'react-pro-sidebar/dist/css/styles.css';
import { Offcanvas } from 'react-bootstrap';
import { useState } from 'react';
import Logo from '../../assets/Navbar/Logo.png'
import abc from '../../assets/Navbar/abc.png'
export default function Navbar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
         <div className='container-fluid'>
            <div className='container'>
                <div className='row mt-3'>
                    <div className='col-sm-3'>
                        <a onClick={handleShow}>
                        
                        <button type="button" class="btn btn-light">Side Menu</button>
                        </a>
                    </div>
                    <div className='col-sm-6 text-center'>
                        <h2>Trafic Info Dashboard</h2>
                       

                    </div>
                    <div className='col-sm-2 d-flex justify-content-end'>
                    </div>
                </div>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                   
                        <Offcanvas.Title>
                        <img src={abc}/>
                             <span>Traffic Info</span></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>

                    <div className='container'>
                      <div className='row'>
                        <div className='offset-3'>
                       
                        <a href="/#" style={{ color: "black", textDecoration: "none" }}>HOME</a>
                        <br/><br/>
                        <a href="/" style={{ color: "black" ,textDecoration: "none" }}>MY GROUPS</a>
                        <br/><br/>
                        <a href="/#" style={{ color: "black", textDecoration: "none" }}>PROFILE</a>
                        <br/><br/>
                        <a href="/" style={{ color: "black",textDecoration: "none" }}>INBOX</a>
                        <br/><br/>
                        <a href="/#" style={{ color: "black", textDecoration: "none" }}>GENERAL CHAT</a>
                        <br/><br/>
                        <a href="/" style={{ color: "black" ,textDecoration: "none"}}>SUPPORT</a>
                        <br/><br/>
                        <a href="/" style={{ color: "black",textDecoration: "none" }}>SIGN OUT</a>
                       </div>
                        </div>
                      </div>
                       
                      
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>
        </>
    )
}
