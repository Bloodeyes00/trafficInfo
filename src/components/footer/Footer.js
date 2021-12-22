import React from 'react'
import './Footer.css'
import { HiUsers } from "react-icons/hi";



function Footer() {
    return (
        <div className='container-fluid-footer'>
                <div className='row-footer'>
                    <div className='col-a'>
                        <HiUsers />
                        <br/>
                        icon
                        </div>
                    <div className='col-b'><HiUsers />
                    <br />
                    icon
                    </div>
                    <div className='col-c'><HiUsers />
                    <br />
                    icon
                    </div>
                    <div className='col-d'><HiUsers />
                    <br />
                    icon
                    </div>
                    <div className='col-e'><HiUsers />
                    <br />
                    icon
                    </div>
                </div>
        </div>
    )
}

export default Footer
