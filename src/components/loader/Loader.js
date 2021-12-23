import React from "react";
import '../loader/loader.css'
import loader from "../../images/loader.gif"
function Loader( ) {
    return (
        <div className="loaderContainer flex flex-col"
            style={{
                top:0,
                bottom:0,
                position:"absolute",
                backgroundColor: "rgba(0,0,0,0.5)",
                height: "100vh", width: "100vw",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                border: "none"
            }}>
            <img
                className="loader"
                src={loader} alt="" style={{border:"none",height:"40px",width:'40px'}} />
           
        </div>
    )
}

export default Loader;