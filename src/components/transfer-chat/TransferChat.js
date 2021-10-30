import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../utils/firebase'
import SendMessage from '../SendMessage'


function TransferChat() {
    const scroll = useRef()
    const [transinfo, setMessages] = useState([])
    useEffect(() => {
        db.collection('transinfo').orderBy('createdAt').limit(10000000000).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div>
        <div className="msgs">
            {transinfo.map(({ id, text, photoURL, curImageUrl, uid }) => (
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

export default TransferChat
