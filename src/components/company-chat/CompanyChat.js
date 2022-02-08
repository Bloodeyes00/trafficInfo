import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../utils/firebase'
import { css } from '@emotion/css';
import ScrollToBottom from 'react-scroll-to-bottom';
import SendMessage from '../SendMessage'
import { useHistory, useParams } from 'react-router'
import { IoMdArrowBack } from "react-icons/io";
import Loader from "../loader/Loader";
import yellow from "../../images/yellow.png"
import green from "../../images/green.png"
import red from "../../images/red.png"
import orange from "../../images/orange.png"
import blue from "../../images/blue.png"
import './CompanyChat.css';
function CompanyChat() {

    let history = useHistory();
    const scroll = useRef(null)
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(false)
    const [shortCut, setShortCut] = useState("");
    const [lastMessagesLimit, setLastMessagesLimit] = useState(20);
    const [state, setstate] = useState({ data: "" })
    const { id } = useParams();

    const ROOT_CSS = css({
        height: 540,
        width: '100%',
        backgroundColor: 'white'
    });
    const loadCompanyChat = () => {
        setLoading(true)
        if (scroll) {
            scroll.current.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest'
            });
        }
        let company = "Teamcompany";
        if (id == '2') {
            company = "company";
        }
        if (id == '4') {
            company = "Teamcompany";
        }
        if (id == '5') {
            company = "Staxicompany";
        }
        if (id == '6') {
            company = "Taxicompany";
        }
        if (id == '7') {
            company = "Kuricompany";
        }
        if (id == '8') {
            company = "Skancompany";
        }
        

        db.collection(company)
        .orderBy('createdAt')
        .limit(lastMessagesLimit)
        .onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()));
            let msgs = snapshot.docs.map(doc => doc.data());
            localStorage.setItem("msgsLength", msgs.length);


 
            setLoading(false);
        
        })
        scroll.current.scrollIntoView({ behavior: 'smooth' });
    }

    function loadMore(e) {
        if (window.innerHeight > 700) {
            setLastMessagesLimit(lastMessagesLimit + 20);
        
        }
        
    }

    useEffect(() => {
        window.addEventListener('scroll', loadMore());
        loadCompanyChat();
    }, [window.innerHeight, document.scrollingElement.scrollHeight]);


    

    const setButton = (setMsg) => {
        setMsg(shortCut);
    }

    return (
        <div className="container-fluid-chats" 
             onScroll={(e) => { loadMore(e) }} >
            {loading && <Loader />}
                 <button className="btnsss ms-3 "
                     style={{color:"black",}}
                     onClick={() => history.goBack()}>
                    <IoMdArrowBack />
                    </button>
        
            <div className="row-compnaychat">
                <img className="img-icons" src={green} onClick={() =>  setShortCut("data 1") } />
                <img className="img-icons" src={orange} onClick={() => setShortCut("data 2") } />
                <img className="img-icons" src={blue} onClick={() => setShortCut("data 3") }/>
                <img className="img-icons" src={red} onClick={() =>  setShortCut("data 4") }/>
                <img className="img-icons" src={yellow} onClick={() => setShortCut("data 5") } />
            </div>

                <ScrollToBottom
                className={ROOT_CSS}
                onScroll={(e) => {
                    loadMore(e)
                }}>

                <div className="msgs"
                        onScroll={(e) => {
                        loadMore(e)
                    }}>

                    {messages?.map(({ id, text, photoURL, curImageUrl, uid }) => (

                        <div className="comchats">
                                {< div key={id}
                                className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                                {photoURL &&
                                    <img src={photoURL} alt="" />}
                                {curImageUrl &&
                                        <img className="imgcard"
                                        src={curImageUrl} alt="no img"
                                        style={{ height: '270px', width: '270px', borderRadius: '0px' }} />}
                                {text != " " &&
                                    <p>{text}</p>}
                            </div>}
                        </div>
                    ))}
                
                    <div ref={scroll}></div>
                </div>

                <SendMessage setButton={setButton}  scroll={scroll} />
            </ScrollToBottom>
        </div>
    )
}

export default CompanyChat
