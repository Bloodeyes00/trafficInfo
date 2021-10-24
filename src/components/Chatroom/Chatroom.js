import React from 'react'
import './Chatroom.css';
import logo from '../../assets/logo.png'

export default function Chatroom() {
    return (
        <div>
            <div className="container-fluid-chatroom">
                <div className="main mt-5">
                 
                    <h2 className="heading2 pt-4 ps-2 pb-2">
                       <b> COMPANY CHAT ROOM </b>
                    </h2>
                </div>
                <div className="hello mt-5 col-sm-10 offset-1">
                    <div className="img ps-2 pt-2"><img src={logo}  className="image" /></div>
                   <div className="col-8 ps-4 pt-3"> <h5 className="taxi ">Taxi 97</h5>
                    <p  className="taxi ">Description of Taxi 97</p></div>
                </div>
                <div className="hello mt-5 col-sm-10 offset-1">
                    <div className="img ps-2 pt-2"><img src={logo}  className="image" /></div>
                   <div className="col-8 ps-4 pt-3"> <h5 className="taxi ">Free Akare</h5>
                    <p  className="taxi ">Description of  Free Akare</p></div>
                </div>
                <div className="hello mt-5 col-sm-10 offset-1">
                    <div className="img ps-2 pt-2"><img src={logo}  className="image" /></div>
                   <div className="col-8 ps-4 pt-3"> <h5 className="taxi ">Taxi 23</h5>
                    <p  className="taxi ">Description of chatroom Taxi 23</p></div>
                </div>
                <div className="hello mt-5 col-sm-10 offset-1">
                    <div className="img ps-2 pt-2"><img src={logo}  className="image" /></div>
                   <div className="col-8 ps-4 pt-3"> <h5 className="taxi ">Taxi 59</h5>
                    <p  className="taxi ">Description of chatroom Taxi 59</p></div>
                </div>
                <div className="hello mt-5 col-sm-10 offset-1">
                    <div className="img ps-2 pt-2"><img src={logo}  className="image" /></div>
                   <div className="col-8 ps-4 pt-3"> <h5 className="taxi ">Taxi 1212</h5>
                    <p  className="taxi ">Description of chatroom Taxi 1212</p></div>
                </div>
                
            </div>
        </div>
    )
}
