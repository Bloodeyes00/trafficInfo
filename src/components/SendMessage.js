import React, { useState } from 'react'
import { db, auth } from '../components/utils/firebase'
import firebase from 'firebase'
import { Input, Button } from '@material-ui/core'
import { useParams } from 'react-router-dom'


function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('');
    const { id } = useParams();
    async function sendMessage(e) {
        e.preventDefault()

        console.log("id : ", id)
        if (id == "11") {
            send('messages');
        }
        if (id == "2") {
            send('company');
        }
        if (id == "3") {
            send('transinfo');
        }
        else {
            send('routesinfo');
        }
    }
    async function send(event) {
        const { uid, photoURL } = auth.currentUser
        await db.collection(event).add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <Button style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px' }} type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
