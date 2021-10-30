import React, { useEffect, useRef, useState } from 'react'
import { db, auth } from '../components/utils/firebase'
import firebase from 'firebase'
import { Input, Button } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { BsCardImage } from 'react-icons/bs'
import Sendimage from './Sendimage'
function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('');
    const [curImageUrl, setCurrentImgUrl] = useState('');
    const { id } = useParams();


    useEffect(() => {
        console.log("curImageUrl", curImageUrl);
    }, [curImageUrl])

    async function sendMessage(e) {
        e.preventDefault()

        console.log("id : ", id)
        if (id == "11") {
            send('messages');
        }
        if (id == "2") {
            send('company');
        }
        if (id == '4') {
            send('Teamcompany');
        }
        if (id == '5') {

            send('Staxicompany');
        }
        if (id == '6') {
            send('Taxicompany');
        }
        if (id == '7') {
            send('Kuricompany');
        }
        if (id == '8') {
            send('Skancompany');
        }
        if (id == "3") {
            send('transinfo');
        }
        else {
            send('routesinfo');
        }

    }
    async function send(event) {
        const { uid, photoURL } = auth.currentUser;
        let payload = {
            text: msg,
            photoURL,
            curImageUrl,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        console.log("paylod : ",payload);
        await db.collection(event).add(payload).then(res => {
            console.log("msg sent succesfuly");
            setCurrentImgUrl("");
            // this.fileRef.value = "";
        }).catch(e => {
            console.log("Err sending msg : ", e);
        })
        setMsg('')
        scroll = () => {
            this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        };


        // scroll.current.scrollIntoView({ behavior: 'smooth' })
    }

    function reset(ref) {
        // ref.value = ""
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <div>
                        <Button type="input" >
                            <BsCardImage />

                            <Sendimage setCurrentImgUrl={setCurrentImgUrl} curImageUrl={curImageUrl} reset={reset} />
                        </Button>

                    </div>
                    {/* <input type="file"  />
                    <button type="submit">UPLOAD</button> */}
                    <br />
                    <Input style={{
                        width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px',
                        marginBottom: '-3px'
                    }} placeholder='Message...'
                        type="text" value={msg} onChange={e => setMsg(e.target.value)} />

                    <Button style={{
                        width: '18%', fontSize: '15px', fontWeight: '550',
                        margin: '4px 5% -13px 5%', maxWidth: '200px'
                    }} type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
