import React from 'react'
import './Chatroom.css';
import sveaTaxi from '../../assets/images/SveaTaxi.png'
import microsoftteams from '../../assets/images/MicrosoftTeams.png'
import sverigetaxi from '../../assets/images/Sverigetaxi.jpg'
import T1212 from '../../assets/images/T1212.jpg'
import TKurir from '../../assets/images/TKurir.jpg'
import TSkane from '../../assets/images/TSkane.jpg'
import { useHistory } from 'react-router';
export default function Chatroom() {
    let history = useHistory();
    return (
        <div>
            <div className="container-fluid-chatroom">
                <div className="main mt-5">

                    <h2 className="heading2 pt-4 ps-2 pb-2">
                        <b> COMPANY CHAT ROOM </b>
                    </h2>
                </div>
                <div className="hello mt-5 col-sm-10 offset-1" onClick={() => history.push(`/company/${2}`)}>
                    <div className="img ps-2 pt-2 mt-4"><img src={sveaTaxi} className="image" /></div>
                    <div className="col-8 ps-4 pt-3"> <h5 className="taxi ">Svea Taxi</h5>
                        <p className="taxi ">Description of Taxi 97</p></div>
                </div>
                <div className="hello mt-5 col-sm-10 offset-1">
                    <div className="img ps-2 pt-2 mt-4"><img src={microsoftteams} className="image" /></div>
                    <div className="col-8 ps-4 pt-3"> <h5 className="taxi ">Microsoft Teams</h5>
                        <p className="taxi ">Description of  Free Akare</p></div>
                </div>
                <div className="hello mt-5 col-sm-10 offset-1">
                    <div className="img ps-2 pt-2 mt-4"><img src={sverigetaxi} className="image" /></div>
                    <div className="col-8 ps-4 pt-3"> <h5 className="taxi ">Sverige Taxi</h5>
                        <p className="taxi ">Description of chatroom Taxi 23</p></div>
                </div>
                <div className="hello mt-5 col-sm-10 offset-1">
                    <div className="img ps-2 pt-2 mt-4"><img src={T1212} className="image" /></div>
                    <div className="col-8 ps-4 pt-3"> <h5 className="taxi ">Taxi 1212</h5>
                        <p className="taxi ">Description of chatroom Taxi 59</p></div>
                </div>
                <div className="hello mt-5 col-sm-10 offset-1">
                    <div className="img ps-2 pt-2 mt-4"><img src={TKurir} className="image" /></div>
                    <div className="col-8 ps-4 pt-3"> <h5 className="taxi ">Taxi kurir</h5>
                        <p className="taxi ">Description of chatroom Taxi 1212</p></div>
                </div>
                <div className="hello mt-5 col-sm-10 offset-1">
                    <div className="img ps-2 pt-2 mt-4"><img src={TSkane} className="image" /></div>
                    <div className="col-8 ps-4 pt-3"> <h5 className="taxi ">Taxi kurir</h5>
                        <p className="taxi ">Description of chatroom Taxi 1212</p></div>
                </div>

            </div>
        </div>
    )
}
