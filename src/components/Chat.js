import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../components/utils/firebase'
import SendMessage from './SendMessage'
import { css } from '@emotion/css';
// import './App.css'
import ScrollToBottom from 'react-scroll-to-bottom';
import { Recorder } from 'react-voice-recorder'
function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    const ROOT_CSS = css({
        height: "98%",
        width: '100%'
    });
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(10000).onSnapshot(snapshot => {
            // let values= snapshot.docs.entries
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    console.log("messages", messages);
    return (
        
        <div className="container-fluid-msgs">
            <ScrollToBottom className={ROOT_CSS}>
                <div className="msgs ">
                    {messages.map(({ id, image, text, photoURL, curImageUrl, uid, voice }) => (
                        <div style={{ borderBottom: "solid 0.0px gray" }}>
                            {< div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                                {photoURL && <img src={photoURL} alt="" />}
                                {curImageUrl && <img src={curImageUrl} alt="no img" style={{ height: '271px', width: '321px', borderRadius: '0px' }} />}
                                {text != " " && <p>{text}</p>}
                                {image && <img src={image} style={{ height: '260px', width: '270px', borderRadius: '0px' }} />}
                               
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
                <SendMessage scroll={scroll} />
            </ScrollToBottom>
        </div>
        
    )
}

export default Chat
