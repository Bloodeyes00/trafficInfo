import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../utils/firebase'
import SendMessage from '../SendMessage'
function CompanyChat() {
    const scroll = useRef()
    const [company, setMessages] = useState([])
    useEffect(() => {
        db.collection('company').orderBy('createdAt').limit(1000).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div>
            <div className="msgs">
                {company.map(({ id, text, photoURL, uid }) => (
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

export default CompanyChat
