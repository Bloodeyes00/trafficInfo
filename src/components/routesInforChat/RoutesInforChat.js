import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../utils/firebase'
import SendMessage from '../SendMessage'


function RoutesinfoChat() {
    const scroll = useRef()
    const [routesinfo, setMessages] = useState([])
    useEffect(() => {
        db.collection('routesinfo').orderBy('createdAt').limit(10000000000).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div>
            <div className="msgs">
                {routesinfo.map(({ id, text, photoURL, uid }) => (
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

export default RoutesinfoChat
