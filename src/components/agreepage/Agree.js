import React from 'react'
import './Agree.css'
import { useHistory } from 'react-router';
function Agree(props) {

    let { setOlduserState } = props;
    let history = useHistory();

    return (
        <div className="container-fluid-agree">
            <div className="row-agree mt-5">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc iaculis ipsum vel tincidunt lacinia. Nam porta lectus et dui accumsan consectetur</p>
            </div>
            <div className="row1-agree">
                <button className="btnn1" onClick={() => {
                    // history.push("/SignwithPohone");
                    localStorage.setItem("oldUser", true);
                    setOlduserState(true);
                    console.log("true")
                }} >Dis Agree</button>

                &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;

                <button onClick={() => {
                    // history.push("/SignwithPohone");
                    localStorage.setItem("oldUser", true);
                    setOlduserState(true);
                    console.log("true")
                }} className="btnn2">Agree</button>
            </div>
        </div>
    )
}
export default Agree
