import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../utils/firebase'
import SendMessage from '../SendMessage'
import { css } from '@emotion/css';
import ScrollToBottom from 'react-scroll-to-bottom';

function RoutesinfoChat() {
    const scroll = useRef()
    const [routesinfo, setMessages] = useState([])
    const ROOT_CSS = css({
        height: 600,
        width: '100%'
      });
    useEffect(() => {
        db.collection('routesinfo').orderBy('createdAt').limit(10000000000).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <ScrollToBottom className={ROOT_CSS}>
            <div className="msgs">
                {routesinfo.map(({ id, text, photoURL, curImageUrl, uid }) => (
                    <div style={{ borderBottom: "solid 0.0px gray" }}>
                        {< div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            {photoURL && <img src={photoURL} alt="" />}
                            {curImageUrl && <img src={curImageUrl} alt="no img" style={{ height: '270px', width: '270px', borderRadius: '0px' }} />}
                            {text != " " && <p>{text}</p>}
                        </div>}
                        
                    </div>
                ))}
                <div  ref={scroll}></div>
            </div>
            <SendMessage scroll={scroll} />
            </ScrollToBottom>
    )
}

export default RoutesinfoChat
