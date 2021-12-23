import React from 'react'
import './Footer.css'
import { HiUsers } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { AiFillWechat } from "react-icons/ai";
import { RiTrafficLightFill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";




function Footer() {
    return (
        <div className='container-fluid-footer'>
                <div className='row-footer'>
                    <div className='col-a'>
                        <AiFillHome />
                        <br/>
                        <b>Home</b>
                        </div>
                    <div className='col-b'><RiTrafficLightFill />
                    <br />
                    <b>icon</b>
                    </div>
                    <div className='col-c'><AiFillWechat />
                    <br />
                    <b>Company Chat</b>
                    </div>
                    <div className='col-d'><GrServices />
                    <br />
                     <b>Services</b>
                    </div>
                   
                </div>
        </div>
    )
}

export default Footer
