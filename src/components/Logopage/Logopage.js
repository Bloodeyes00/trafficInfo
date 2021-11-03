import React from 'react'
import './Logopage.css'
import trafikinfo from "../../components/Logopage/trafikinfo.png"
function Logopage() {
    return (
        <div className="Container-fluid-logopage">
        <div className="Container-fluid-images">
            <h2><b>Welcome to Trafik info</b></h2>
        <br/>
        <br/>
        <br/>
            <img className="imgsss" src={trafikinfo} style={{textAlign:"center",alignItems:"center", height: "50%", width: "50%", }} />
        </div>
        </div>
    )
}

export default Logopage
