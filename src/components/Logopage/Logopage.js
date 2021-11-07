import React from 'react'
import './Logopage.css'
import trafikinfo from "../../components/Logopage/trafikinfo.png"
function Logopage() {
    return (
        <div className="Container-fluid-logopage">
        <div className="Container-fluid-images">
            <h2><b>Welcome to Trafik info</b></h2>
        <br/>
        
            <img className="imgsss" src={trafikinfo} style={{textAlign:"center",alignItems:"center", height: "45%", width: "45%",border:"none", }} />
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
       
        
        <button className="btnn1"><b>Next</b></button>
        </div>
    )
}

export default Logopage
