import React from "react";
import '../loader/loader.css'
import loader from "../../images/loader.gif"
function Loadimage({ backgroundColor, text }) {
    return (
        <div className="loaderContainer flex flex-col"
            style={{
                top:20,
                bottom:0,
                border: ' 0px solid white',
                position:"absolute",
                backgroundColor: "rgba(0,0,0,0.5)",
                background: "none",
                height: "20px", width: "20px",
                justifyContent: "center", alignItems: "center", display: "flex"
            }}>
            <img
                className="loader"
                src={loader} alt="" style={{border:'0px',marginRight:'20px',marginBottom:'2px'}} />
            {
                text &&
                <p>{text}</p>
            }
        </div>
    )
}

export default Loadimage;