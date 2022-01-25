import React, { useEffect, useState } from 'react'
import './Chatroom.css';
import sveaTaxi from '../../assets/images/SveaTaxi.png'
import microsoftteams from '../../assets/images/MicrosoftTeams.png'
import sverigetaxi from '../../assets/images/Sverigetaxi.jpg'
import T1212 from '../../assets/images/T1212.jpg'
import TKurir from '../../assets/images/TKurir.jpg'
import TSkane from '../../assets/images/TSkane.jpg'
import { useHistory } from 'react-router';
import firebase, { db } from '../utils/firebase';
import { auth } from '../utils/firebase';
import { IoMdArrowBack } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import Loader from '../loader/Loader';
export default function Chatroom() {
    let history = useHistory();
    const [userdetails, setuserdetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [unreadLength, setUnreadLength] = useState(0);



    const loadChatroom = () => {
        setLoading(true)
        const firestore = firebase.database().ref("/UserProfile");
        firestore.on('value', (snapshot) => {
            let data = { ...snapshot.val() };
            data = Object.values(data);
            console.log("data : ", data);

            if (auth?.currentUser?.uid) {
                console.log("auth uids: ", auth.currentUser.uid);
                let currentUserDetails = data.find(item => item.uid == auth?.currentUser.uid);
                console.log("currentUserDetails in profile : ", currentUserDetails);
                setuserdetails(currentUserDetails);
                setLoading(false)
                let msgsLength = localStorage.getItem("msgsLength");

                db.collection("company").onSnapshot(snapshot => {
                    let data = snapshot.docs.map(doc => doc.data());
                    if ((data.length - msgsLength) > 0) {
                        setUnreadLength(data.length - msgsLength);
                    }
                    else { setUnreadLength(0) }
                })

                db.collection("Teamcompany").onSnapshot(snapshot => {
                    let data = snapshot.docs.map(doc => doc.data());
                    if ((data.length - msgsLength) > 0) {
                        setUnreadLength(data.length - msgsLength);
                    } else { setUnreadLength(0) }
                })

                db.collection("Staxicompany").onSnapshot(snapshot => {
                    let data = snapshot.docs.map(doc => doc.data());
                    if ((data.length - msgsLength) > 0) {
                        setUnreadLength(data.length - msgsLength);
                    } else { setUnreadLength(0) }
                })


                db.collection("Taxicompany").onSnapshot(snapshot => {
                    let data = snapshot.docs.map(doc => doc.data());
                    if ((data.length - msgsLength) > 0) {
                        setUnreadLength(data.length - msgsLength);
                    } else { setUnreadLength(0) }
                })

                db.collection("Kuricompany").onSnapshot(snapshot => {
                    let data = snapshot.docs.map(doc => doc.data());
                    if ((data.length - msgsLength) > 0) {
                        setUnreadLength(data.length - msgsLength);
                    } else { setUnreadLength(0) }
                })

                db.collection("Skancompany").onSnapshot(snapshot => {
                    let data = snapshot.docs.map(doc => doc.data());
                    if ((data.length - msgsLength) > 0) {
                        setUnreadLength(data.length - msgsLength);
                    } else { setUnreadLength(0) }
                })
            }
        });
    }

    useEffect(() => {
        loadChatroom();
        return {

        }
    }, [])
    const allowuserforchat = (compName, companyID) => {
        if (userdetails.role && userdetails?.companyName == compName) {
            userdetails?.companyName == compName && history.push(`/company/${companyID}`)
        } else {
            alert("Kindly contact your admin for access. You don't have permission.")
        }

    }

    let companyName;
    return (
        <div>
            <div className="container-fluid-chatroom">

                {loading && <Loader />}
                <div className="main">
                    <br />
                    <br />

                    <h2 className="heading2  pb-3">
                        <button
                            className="btnsss"
                            onClick={() => history.goBack()}>
                            <IoMdArrowBack />
                        </button>

                        <b style={{ color: "white", fontSize: "18px" }}> COMPANY CHAT ROOM </b>
                    </h2>
                </div>
                {<div style={userdetails?.companyName !== "Svea Taxi" ?
                    { opacity: 0.5 } : { opacity: 1 }}
                    className="hello mt-5 col-sm-10 offset-1"
                    onClick={() => {
                        allowuserforchat("Svea Taxi", 2) 
                    }}>
                    <div className="img ms-2 mt-4">
                        <img src={sveaTaxi} className="image" />
                    </div>
                    <div className="col-8 ps-4 pt-3">
                        <h5 className="taxi ">Svea Taxi</h5>
                        <p className="taxi ">Description of Taxi 97</p>
                    </div>
                    <div className='col-2 icnss pt-3 mt-3'>
                        <IoMdNotifications />
                        <div className='counter'>{unreadLength}</div>
                    </div>
                </div>}

                {<div style={userdetails?.companyName !== "Microsoft Teams" ?
                    { opacity: 0.5 } : { opacity: 1 }}
                    className="hello mt-5 col-sm-10 offset-1"
                    onClick={() => {
                        allowuserforchat("Microsoft Teams", 4)
                    }}>

                    <div
                        className="img ms-2  mt-4">
                        <img src={microsoftteams}
                            className="image" />
                    </div>

                    <div
                        className="col-8 ps-4 pt-3">
                        <h5 className="taxi ">Microsoft Teams</h5>
                        <p className="taxi ">Description of  Free Akare</p>
                    </div>

                    <div className='col-2 icnss pt-3 mt-3'>
                        <IoMdNotifications />
                        <div className='counter'>{unreadLength}</div>
                    </div>
                </div>}

                {<div
                    style={userdetails?.companyName !== "Sverige Taxi" ?
                        { opacity: 0.5 } : { opacity: 1 }}
                    className="hello mt-5 col-sm-10 offset-1"
                    onClick={() => {
                        allowuserforchat("Sverige Taxi", 5)
                    }}>

                    <div
                        className="img ms-2 mt-4">
                        <img src={sverigetaxi}
                            className="image" />
                    </div>

                    <div
                        className="col-8 ps-4 pt-3">
                        <h5 className="taxi ">
                            Sverige Taxi</h5>
                        <p className="taxi ">Description of chatroom Taxi 23</p></div>
                    <div className='col-2 icnss pt-3 mt-3'>
                        <IoMdNotifications />
                        <div className='counter'>{unreadLength}</div>
                    </div>
                </div>}

                {<div style={userdetails?.companyName !== "Taxii 1212" ?
                    { opacity: 0.5 } : { opacity: 1 }}
                    className="hello mt-5 col-sm-10 offset-1"
                    onClick={() => {
                        allowuserforchat("Taxii 1212", 6)
                    }}>

                    <div
                        className="img ms-2 mt-4">
                        <img src={T1212} className="image" />
                    </div>

                    <div
                        className="col-8 ps-4 pt-3">
                        <h5 className="taxi ">Taxi 1212</h5>
                        <p className="taxi ">Description of chatroom Taxi 59</p>
                    </div>

                    <div
                        className='col-2 icnss pt-3 mt-3'>
                        <IoMdNotifications />
                        <div className='counter'>{unreadLength}</div>
                    </div>
                </div>}

                {<div
                    style={userdetails?.companyName !== "Taxi Kurir" ?
                        { opacity: 0.5 } : { opacity: 1 }}
                    className="hello mt-5 col-sm-10 offset-1"
                    onClick={() => {
                        allowuserforchat("Taxi Kurir", 7)
                    }}>

                    <div
                        className="img ms-2 mt-4">
                        <img src={TKurir} className="image" />
                    </div>

                    <div className="col-8 ps-4 pt-3">
                        <h5 className="taxi ">Taxi kurir</h5>
                        <p className="taxi ">Description of chatroom Taxi 1212</p>
                    </div>
                    <div
                        className='col-2 icnss pt-3 mt-3'>
                        <IoMdNotifications />
                        <div className='counter'>{unreadLength}</div>
                    </div>
                </div>}

                {<div style={userdetails?.companyName !== "Taxi Skane" ?
                    { opacity: 0.5 } : { opacity: 1 }}
                    className="hello mt-5 col-sm-10 offset-1"
                    onClick={() => {
                        allowuserforchat("Taxi Skane", 8)
                    }}>

                    <div
                        className="img ms-2 mt-4">
                        <img src={TSkane}
                            className="image" />
                    </div>

                    <div className="col-8 ps-4 pt-3">
                        <h5 className="taxi ">Taxi Skane</h5>
                        <p className="taxi ">Description of chatroom Taxi 1212</p>
                    </div>
                    <div className='col-2 icnss pt-3 mt-3'>
                        <IoMdNotifications />
                        <div className='counter'>{unreadLength}</div>
                    </div>
                </div>}
                <br />
                <br />
                <br />
                <br />
            </div>
        </div >
    )
}
