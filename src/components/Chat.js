import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../components/utils/firebase'
import SendMessage from './SendMessage'
import { css } from '@emotion/css';
import { IoMdArrowBack } from "react-icons/io";
import { useHistory } from 'react-router';
// import './App.css'
import ScrollToBottom from 'react-scroll-to-bottom';
import { Recorder } from 'react-voice-recorder'
import Loader from './loader/Loader';
function Chat() {

    let history = useHistory();
    const scroll = useRef()
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [lastMessagesLimit, setLastMessagesLimit] = useState(20);
    const ROOT_CSS = css({
        height: "98%",
        width: '100%'
    });

    const loadMessages = () => {
        setLoading(true);
        db.collection('messages').orderBy('createdAt').limitToLast(lastMessagesLimit).onSnapshot(snapshot => {
            // let values= snapshot.docs.entries
            let msgs = snapshot.docs.map(doc => doc.data());
            let lastVisible = msgs.length - 10;
            setMessages(snapshot.docs.map(doc => doc.data()));
            setLoading(false)
        })
        // .catch(e =>{
        //     setLoading(false)
        // })
        const infiniteScrollElem = document.querySelector('infinite-scroll');
        infiniteScrollElem.addEventListener('infinite-scroll-fetch', handleInfiniteScrollFetchRequest);
    }

    useEffect(() => {
        loadMessages();
    }, []);

    function handleInfiniteScrollFetchRequest() {
        console.log("afdasfdsad")
    }
    console.log("messages", messages);
    return (

        <div className="container-fluid-msgs" style={{ height: "80vh" }}>
            {/* <button className="btnsss ms-3 mt-1 mb-1 " onClick={() => history.goBack()}><IoMdArrowBack /></button> */}
        {loading && <Loader />}
            <ScrollToBottom className={ROOT_CSS}>
                <infinite-scroll data-height="300" data-threshold="0.8">
                    <div className="msgs ">
                        {messages.map(({ id, image, text, photoURL, curImageUrl, uid, voice }) => (
                            <div style={{ borderBottom: "solid 0.0px gray" }}>
                                {< div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                                    {photoURL && <img src={photoURL} alt="" />}
                                    {curImageUrl && <img src={curImageUrl} alt="no img" style={{ height: '271px', width: '321px', borderRadius: '0px' }} />}
                                    {text != " " && <p>{text}</p>}
                                    {image && <img src={image} style={{ height: '176px', width: '294px', borderRadius: '0px' }} />}

                                    {voice && <audio controls>
                                        <source src={voice} type={"audio/webm"} />
                                    </audio>}
                                    {/* {voice && <Recorder
                                    record={true}
                                    audioURL={voice}
                                    showUIAudio
                                    mimeTypeToUseWhenRecording={`audio/webm`} // For specific mimetype.
                                />} */}
                                </div>}

                            </div>
                        ))}
                        <div ref={scroll}></div>
                    </div>
                    <SendMessage />
                </infinite-scroll>
            </ScrollToBottom>
        </div>

    )
}

export default Chat