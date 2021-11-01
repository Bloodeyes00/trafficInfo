import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../utils/firebase'
import { css } from '@emotion/css';
import ScrollToBottom from 'react-scroll-to-bottom';
import SendMessage from '../SendMessage'
import { useParams } from 'react-router'
import './CompanyChat.css'
function CompanyChat() {
    const scroll = useRef(null)
    const [company, setMessages] = useState([])
    const { id } = useParams();

    const ROOT_CSS = css({
        height: 700,
        width: '100%'
      });
   
    useEffect(() => {
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

        db.collection(company).orderBy('createdAt').limit(1000).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()));
            console.log("messages in company chat : ", company);
        })
        scroll.current.scrollIntoView({ behavior: 'smooth' });
    }, [])
    return (
        <div className="container-fluid-chats">
        <ScrollToBottom className={ROOT_CSS}>
            <div className="msgs">
                {company.map(({ id, text, photoURL, curImageUrl, uid }) => (
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
            </div>
    )
}

export default CompanyChat
