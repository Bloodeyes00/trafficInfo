import React, { useEffect, useRef, useState } from 'react'
import { db, auth } from '../components/utils/firebase'
import firebase from 'firebase'
import { Input, Button } from '@material-ui/core'
import { useParams } from 'react-router-dom'

import Sendimage from './Sendimage'
function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('');
    const [curImageUrl, setCurrentImgUrl] = useState('');
    const { id } = useParams();


    useEffect(() => {
        console.log("curImageUrl", curImageUrl);
        if (scroll) {
            scroll?.current?.scrollIntoView({
                // top: 100,
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest'
            });
        }
    }, [curImageUrl,msg])

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
        if (id == "4") {
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
        console.log("paylod : ", payload);
        await db.collection(event).add(payload).then(res => {
            console.log("msg sent succesfuly");
            setCurrentImgUrl("");
            if (scroll) {
                scroll.current.scrollIntoView({
                    // top: 100,
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'nearest'
                });
            }
            // window.scrollTo({
            //     top: 500,
            //     left: 0,
            //     behavior: 'smooth'
            //   });
            // this.fileRef.value = "";
        }).catch(e => {
            console.log("Err sending msg : ", e);
        })
        setMsg('')
        // scroll = () => {
        //     this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        //     scroll.current.scrollIntoView({
        //         behavior: 'smooth',
        //         block: 'end',
        //         inline: 'nearest'
        //     })
        // };
        // scroll.current.scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'end',
        //     inline: 'nearest'
        // })

    }

    function reset(ref) {
        // ref.value = ""
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <div className='imagesend'>
                        <Button >
                            <Sendimage setCurrentImgUrl={setCurrentImgUrl} curImageUrl={curImageUrl} reset={reset} />
                        </Button>
                    </div>
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
