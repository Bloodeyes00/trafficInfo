import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../utils/firebase'
import { css } from '@emotion/css';
import ScrollToBottom from 'react-scroll-to-bottom';
import SendMessage from '../SendMessage'
import { useHistory, useParams } from 'react-router'
import { IoMdArrowBack } from "react-icons/io";
import Loader from "../loader/Loader";
import './CompanyChat.css';
function CompanyChat() {

    let history = useHistory();
    const scroll = useRef(null)
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(false)
    const [lastMessagesLimit, setLastMessagesLimit] = useState(20);
    const { id } = useParams();

    const ROOT_CSS = css({
        height: 700,
        width: '100%'
    });
    const loadCompanyChat = () => {
        setLoading(true)
        if (scroll) {
            scroll.current.scrollIntoView({
                // top: 100,
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
        console.log("id ", id);
        console.log("company ", company);

        db.collection(company).orderBy('createdAt').limit(lastMessagesLimit).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()));
            setLoading(false);
            console.log("messages in company chat : ", messages);
        })
        scroll.current.scrollIntoView({ behavior: 'smooth' });
    }
    
    function loadMore(e) {
        if (window.innerHeight > 700) {
            setLastMessagesLimit(lastMessagesLimit + 20);
            console.log("more images loaded", lastMessagesLimit);
        }
        console.log("event : ", e);
        console.log("window.innerHeight: ", window.innerHeight);
        console.log(" document.scrollingElement.scrollHeight : ", document.scrollingElement.scrollHeight);
        console.log("  document.documentElement.scrollTop: ", document.documentElement.scrollTop);
    }

    useEffect(() => {
        window.addEventListener('scroll', loadMore());
        loadCompanyChat();
    }, [window.innerHeight, document.scrollingElement.scrollHeight]);

    return (
        <div className="container-fluid-chats" onScroll={(e) => { loadMore(e) }} >
            {loading && <Loader />}
            {/* <button className="btnsss ms-3 "  onClick={() => history.goBack()}><IoMdArrowBack /></button> */}
            <ScrollToBottom className={ROOT_CSS} onScroll={(e) => { loadMore(e) }}>
                <div className="msgs" onScroll={(e) => { loadMore(e) }}>
                    {messages?.map(({ id, text, photoURL, curImageUrl, uid }) => (
                        <div className="comchats">
                            {< div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                                {photoURL &&
                                    <img src={photoURL} alt="" />}
                                {curImageUrl &&
                                    <img className="imgcard" src={curImageUrl} alt="no img" style={{ height: '270px', width: '270px', borderRadius: '0px' }} />}
                                {text != " " &&
                                    <p>{text}</p>}
                            </div>}

                        </div>
                    ))}
                    <div ref={scroll}></div>
                </div>
                <SendMessage scroll={scroll} />
            </ScrollToBottom>
        </div>
    )
}

export default CompanyChat
