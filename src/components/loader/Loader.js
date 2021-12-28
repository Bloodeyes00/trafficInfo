import React from "react";
import '../loader/loader.css'
import loader from "../../images/loader.gif"
function Loader( ) {
    return (
        <div className="loaderContainer flex flex-col"
           >
            <img
                className="loader"
                src={loader} alt="" />
           
        </div>
    )
}

export default Loader;