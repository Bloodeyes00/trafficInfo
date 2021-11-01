import React from "react";
import '../loader/loader.css'
import loader from "../../images/loader.gif"
function Loader({ backgroundColor, text }) {
    return (
        <div className="loaderContainer flex flex-col"
            style={{
                top:0,
                bottom:0,
                position:"absolute",
                backgroundColor: "rgba(0,0,0,0.5)",
                height: "100vh", width: "100vw",
                justifyContent: "center", alignItems: "center", display: "flex"
            }}>
            <img
                className="loader"
                src={loader} alt="" />
            {
                text &&
                <p>{text}</p>
            }
        </div>
    )
}

export default Loader;