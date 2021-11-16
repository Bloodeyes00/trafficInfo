import React, { useState } from 'react'
import './Logopage.css'
import trafikinfo from "../../components/Logopage/trafikinfo.png"
import { useHistory } from 'react-router'
import Socialservices from '../soicialsevices/Socialservices';
import Agree from '../agreepage/Agree';
function Logopage(props) {
    let { setOlduserState } = props;
    const [currentPage, setCurrentPage] = useState("1");
    return (
        <>
            {currentPage == "1" && <div className="Container-fluid-logopage">
                <div className="Container-fluid-images">
                    <h2><b>Welcome to Trafik info</b></h2>
                    <br />

                    <img className="imgsss" src={trafikinfo} style={{ textAlign: "center", alignItems: "center", height: "45%", width: "45%", border: "none", }} />
                </div>
                <br />
                <br />
                <br />
                <br />


                <button onClick={() => {
                    // history.push("/socialservices")
                    setCurrentPage("2");
                }} className="btnn1"><b>Next</b></button>
            </div>}
            {currentPage == "2" && <Socialservices setCurrentPage={setCurrentPage} />}
            {currentPage == "3" && <Agree setOlduserState={setOlduserState} />}
        </>
    )
}

export default Logopage
