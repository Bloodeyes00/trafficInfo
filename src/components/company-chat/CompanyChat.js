import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../utils/firebase'
import SendMessage from '../SendMessage'
import { useParams } from 'react-router'
function CompanyChat() {
    const scroll = useRef()
    const [company, setMessages] = useState([])
    const { id } = useParams();

    useEffect(() => {
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
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }, [company])
    return (
        <div>
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
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default CompanyChat
