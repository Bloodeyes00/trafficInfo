import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../utils/firebase'
import { css } from '@emotion/css';
import ScrollToBottom from 'react-scroll-to-bottom';
import SendMessage from '../SendMessage'
import { useHistory, useParams } from 'react-router'
import { IoMdArrowBack } from "react-icons/io";
import Loader from "../loader/Loader";
import './CompanyChat.css'
function CompanyChat() {

    let history = useHistory ();
    const scroll = useRef(null)
    const [company, setMessages] = useState([])
    const [loading, setLoading] = useState(false)

    const { id } = useParams();

    const ROOT_CSS = css({
        height: 700,
        width: '100%'
      });
   const loadCompanyChat = () => {
    setLoading(true)
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

   }
     useEffect(() => {
         loadCompanyChat();
    }, [])
    return (
        <div className="container-fluid-chats">
            {loading && <Loader /> }
         {/* <button className="btnsss ms-3 "  onClick={() => history.goBack()}><IoMdArrowBack /></button> */}
        <ScrollToBottom className={ROOT_CSS}>
            <div className="msgs">
                {company.map(({ id, text, photoURL, curImageUrl, uid }) => (
                    <div className="comchats">
                        {< div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            {photoURL &&
                             <img src={photoURL} alt="" />}
                            {curImageUrl && 
                            <img className="imgcard" src={curImageUrl} alt="no img" />}
                            {text != " " && 
                            <p>{text}</p>}
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
