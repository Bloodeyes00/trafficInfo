import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../components/utils/firebase'
import SendMessage from './SendMessage'
import { css } from '@emotion/css';
import { IoMdArrowBack } from "react-icons/io";
import { useHistory } from 'react-router';
import "../../src/App.css"
import ScrollToBottom from 'react-scroll-to-bottom';
import { Recorder } from 'react-voice-recorder'
import Loader from './loader/Loader';
import yellow from "../images/yellow.png"
import green from "../images/green.png"
import red from "../images/red.png"
import orange from "../images/orange.png"  
import blue from "../images/blue.png"

function Chat() {

    let history = useHistory();
    const scroll = useRef()
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [lastMessagesLimit, setLastMessagesLimit] = useState(20);
    const [shortCut, setShortCut] = useState("");
    const ROOT_CSS = css({
        height: "106%",
        width: '100%',
        backgroundColor: 'white'
        
    });

    const loadMessages = () => {
        setLoading(true);
        db.collection('messages').orderBy('createdAt').limitToLast(lastMessagesLimit).onSnapshot(snapshot => {
            let msgs = snapshot.docs.map(doc => doc.data());
            let lastVisible = msgs.length - 10;
            setMessages(snapshot.docs.map(doc => doc.data()));
            setLoading(false)
        })
        const infiniteScrollElem = document.querySelector('infinite-scroll');
        infiniteScrollElem.addEventListener('infinite-scroll-fetch', handleInfiniteScrollFetchRequest);
    }

    function loadMore(e) {
        if (window.innerHeight > 700) {
        }
       
    }

    useEffect(() => {
        window.addEventListener('scroll', loadMore());
    }, [window.innerHeight, document.scrollingElement.scrollHeight]);

    useEffect(() => {
        loadMessages();
    }, []);

    function handleInfiniteScrollFetchRequest() {
    }

    const setButton = (setMsg) => {
        setMsg(shortCut);
    }
    return (

        <div className="container-fluid-msgs" style={{ height: "70vh" }} onScroll={(e) => { loadMore(e) }} >
            <button className="btnsss ms-3 mt-1 mb-1 " style={{color:"black"}} onClick={() => history.goBack()}><IoMdArrowBack />
            </button>
            <div className="row-chats">
            <img className="img-icons" src={green} onClick={() =>  setShortCut("data 1") }/>
            <img className="img-icons" src={orange} onClick={() =>  setShortCut("data 2") }/>
            <img className="img-icons" src={blue} onClick={() =>  setShortCut("data 3") }/>
            <img className="img-icons" src={red} onClick={() =>  setShortCut("data 4") }/>
            <img className="img-icons" src={yellow} onClick={() =>  setShortCut("data 5") }/>
</div>
            {loading && <Loader />}
            <ScrollToBottom  
            className={ROOT_CSS} 
            
            onScroll={(e) => { loadMore(e) }} 
            >
                <infinite-scroll className="chatscroll"
                 pageStart={0} useWindow={false}
                  loadMore={loadMore()} data-height="300" data-threshold="0.8" onScroll={(e) => { loadMore(e) }}
                   >
                    <div className="msgs " 
                    onScroll={(e) => { loadMore(e) }} 
                    >
                        {messages.map(({ id, image, text, photoURL, curImageUrl, uid, voice }) => (
                            <div style={{ borderBottom: "solid 0.0px gray" }}>
                                {< div key={id} 
                                className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                                    {photoURL && <img src={photoURL} alt="" />}
                                    {curImageUrl && <img src={curImageUrl} 
                                    alt="no img" style={{ height: '271px', width: '321px', borderRadius: '0px' }} />}
                                    {text != " " && 
                                    <p>{text}</p>}
                                    {image && 
                                    <img src={image} 
                                    style={{ height: '176px', width: '294px', borderRadius: '0px' }} />}

                                    {voice && <audio controls>
                                        <source src={voice}
                                         type={"audio/webm"} />
                                    </audio>}
                                   
                                </div>}

                            </div>
                        ))}
                        <div ref={scroll}></div>
                    </div>
                    <SendMessage  setButton={setButton}/>
                </infinite-scroll>
            </ScrollToBottom>
        </div>

    )
}

export default Chat