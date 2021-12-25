import React from 'react'
import './Footer.css'
import { HiUsers } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { AiFillWechat } from "react-icons/ai";
import { RiTrafficLightFill } from "react-icons/ri";
import { FaServicestack } from "react-icons/fa";
import { useHistory } from 'react-router'




function Footer() {
    let history = useHistory()
    return (
        <div className='container-fluid-footer'>
                <div className='row-footer'>
                    <div className='col-a'>
                    <span className="" type="button" onClick={() => {
                      history.push("/home")
                    }} >
                      < AiFillHome />
                    </span>
                    <br />
                    <a type="button"
                      onClick={() => {
                        history.push("./home")
                      }}
                     
                    >
                    
                      <b  onClick={() => {
                        history.push("./home")
                      }}>Home</b>
                    </a>
                        </div>
                    <div className='col-b'><RiTrafficLightFill onClick={() => { history.push(`/chatroom`) }}/>
                    <br />
                    <b onClick={() => { history.push(`/chatroom`) }}>Traffic Room</b>
                    </div>
                    <div className='col-c'><AiFillWechat  onClick={() => { history.push(`/chat/${11}`) }}  />
                    <br />
                    <b onClick={() => { history.push(`/chat/${11}`) }}>Company Chat</b>
                    </div>
                    <div className='col-d'><FaServicestack  onClick={() => { history.push("/MainPage") }}/>
                    <br />
                     <b onClick={() => { history.push("/MainPage") }}>Services</b>
                    </div>
                   
                </div>
        </div>
    )
}

export default Footer
