import React, { useEffect, useState } from 'react'
import './Chatroom.css';
import sveaTaxi from '../../assets/images/SveaTaxi.png'
import microsoftteams from '../../assets/images/MicrosoftTeams.png'
import sverigetaxi from '../../assets/images/Sverigetaxi.jpg'
import T1212 from '../../assets/images/T1212.jpg'
import TKurir from '../../assets/images/TKurir.jpg'
import TSkane from '../../assets/images/TSkane.jpg'
import { useHistory } from 'react-router';
import firebase from '../utils/firebase';
import { auth } from '../utils/firebase';
import { IoMdArrowBack } from "react-icons/io";
export default function Chatroom() {
    let history = useHistory();
    const [userdetails, setuserdetails] = useState(null);
    useEffect(() => {

        const firestore = firebase.database().ref("/UserInfo");
        firestore.on('value', (snapshot) => {
            let data = { ...snapshot.val() };
            data = Object.values(data);
            console.log("data : ", data);

            if (auth?.currentUser?.uid) {
                console.log("auth uids: ", auth.currentUser.uid);
                let currentUserDetails = data.find(item => item.uid == auth?.currentUser.uid);
                console.log("currentUserDetails in profile : ", currentUserDetails);
                setuserdetails(currentUserDetails);
                // setEmail(currentUserDetails.email);
            }
        });
        return {

        }
    }, [])

    let companyName;
    return (
        <div>
            <div className="container-fluid-chatroom">
                <div className="main mt-2">
                    <button className="btnsss ms-3 "  onClick={() => history.goBack()}><IoMdArrowBack /></button>
                    <br/>
                    <br/>

                    <h2 className="heading2 ps-3 pb-3">
                        <b style={{color:"#2C2E43"}}> COMPANY CHAT ROOM </b>
                    </h2>
                </div>
                {<div  style={userdetails?.companyName !== "Svea Taxi" ? { opacity: 0.5 } : { opacity: 1 }} className="hello mt-5 col-sm-10 offset-1" onClick={() => { userdetails?.companyName == "Svea Taxi" && history.push(`/company/${2}`)}}>
                    <div className="img ms-2 mt-4"><img src={sveaTaxi} className="image" /></div>
                    <div className="col-8 ps-4 pt-3"> <h5 className="taxi ">Svea Taxi</h5>
                        <p className="taxi ">Description of Taxi 97</p></div>
                </div>}
                {<div style={userdetails?.companyName !== "Microsoft Teams" ? { opacity: 0.5 } : { opacity: 1 }} className="hello mt-5 col-sm-10 offset-1" onClick={() => { userdetails?.companyName == "Microsoft Teams" && history.push(`/company/${4}`) }}>
                    <div className="img ms-2  mt-4"><img src={microsoftteams} className="image" /></div>
                    <div className="col-8 ps-4 pt-3"> <h5 className="taxi ">Microsoft Teams</h5>
                        <p className="taxi ">Description of  Free Akare</p></div>
                </div>}

                {<div style={userdetails?.companyName !== "Sverige Taxi" ? { opacity: 0.5 } : { opacity: 1 }} className="hello mt-5 col-sm-10 offset-1" onClick={() => { userdetails?.companyName == "Sverige Taxi" && history.push(`/company/${5}`)}}>
                    <div className="img ms-2 mt-4"><img src={sverigetaxi} className="image" /></div>
                    <div className="col-8 ps-4 pt-3"> <h5 className="taxi ">Sverige Taxi</h5>
                        <p className="taxi ">Description of chatroom Taxi 23</p></div>
                </div>}
                {<div style={userdetails?.companyName !== "Taxii 1212" ? { opacity: 0.5 } : { opacity: 1 }} className="hello mt-5 col-sm-10 offset-1" onClick={() => { userdetails?.companyName == "Taxii 1212" && history.push(`/company/${6}`)}}>
                    <div className="img ms-2 mt-4"><img src={T1212} className="image" /></div>
                    <div className="col-8 ps-4 pt-3"> <h5 className="taxi ">Taxi 1212</h5>
                        <p className="taxi ">Description of chatroom Taxi 59</p></div>
                </div>}
                {<div style={userdetails?.companyName !== "Taxi kurir" ? { opacity: 0.5 } : { opacity: 1 }} className="hello mt-5 col-sm-10 offset-1" onClick={() =>  { userdetails?.companyName == "Taxi kurir" && history.push(`/company/${7}`)}}>
                    <div className="img ms-2 mt-4"><img src={TKurir} className="image" /></div>
                    <div className="col-8 ps-4 pt-3"> <h5 className="taxi ">Taxi kurir</h5>
                        <p className="taxi ">Description of chatroom Taxi 1212</p></div>
                </div>}
                {<div style={userdetails?.companyName !== "Taxi Skane" ? { opacity: 0.5 } : { opacity: 1 }} className="hello mt-5 col-sm-10 offset-1" onClick={() =>  { userdetails?.companyName == "Taxi Skane" && history.push(`/company/${8}`)}}>
                    <div className="img ms-2 mt-4"><img src={TSkane} className="image" /></div>
                    <div className="col-8 ps-4 pt-3"> <h5 className="taxi ">Taxi Skane</h5>
                        <p className="taxi ">Description of chatroom Taxi 1212</p></div>
                </div>}
                <br/>

            </div>
        </div >
    )
}
