import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../components/utils/firebase'
import SendMessage from './SendMessage'
function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(10000).onSnapshot(snapshot => {
            // let values= snapshot.docs.entries
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    console.log("messages", messages);
    return (
        <div>
        <div className="msgs">
            {messages.map(({ id, text, photoURL, curImageUrl, uid }) => (
                <div style={{borderBottom:"solid 0.0px gray"}}>
                    { < div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                        {photoURL && <img src={photoURL} alt="" />}
                        {curImageUrl && <img src={curImageUrl} alt="no img"  style={{height:'270px', width:'270px', borderRadius:'0px'}} />}
                        {text != " " && <p>{text}</p>}
                    </div>}
                </div>
            ))}
        </div>
        <SendMessage scroll={scroll} />
        <div ref={scroll}></div>
    </div>
    )
}

export default Chat
