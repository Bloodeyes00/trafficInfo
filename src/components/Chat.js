import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../components/utils/firebase'
import SendMessage from './SendMessage'
function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            // let values= snapshot.docs.entries
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    console.log("mesgsegae", messages);
    return (
        <div>
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>

                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat
