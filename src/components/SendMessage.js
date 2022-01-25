import React, { useEffect, useRef, useState } from 'react'
import { db, auth } from '../components/utils/firebase'
import firebase, { storage } from 'firebase'
import { Input, Button } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Webcam from "react-webcam";
import Sendimage from './Sendimage'
import { AiTwotoneCamera } from "react-icons/ai";
import { TiArrowSync } from "react-icons/ti";
import { MdKeyboardVoice } from "react-icons/md";
import { TiCameraOutline } from "react-icons/ti";
import { IoSend } from "react-icons/io5";
import { lightBlue } from '@material-ui/core/colors'
import "./send-message/send-message.css"
import VoiceRecorder from './common-components/voice-recorder/VoiceRecorder'
import 'react-voice-recorder/dist/index.css'

function SendMessage(props) {
    let { scroll, Ahmad, setButton } = props;
    const webcamRef = React.useRef(null);
    const [image, setImage] = useState('');
    const [progress, setProgress] = useState('');
    const [url, setUrl] = useState('');
    const [recordVisible, setRecordVisible] = useState(false);
    const notify = (message) => toast(message);
    const [msg, setMsg] = useState('');
    const [openCamera, setOpenCamera] = useState(false);
    const [curImageUrl, setCurrentImgUrl] = useState('');
    const { id } = useParams();

    useEffect(() => {
        setButton(setMsg);
    }, [
        
    ])


    useEffect(() => {
        if (scroll) {
            scroll?.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest'
            });
        }


    }, [curImageUrl, msg]);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc);
        });
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };

    const handleChange = (e, check) => {
        console.log("check1", e);
        console.log("check2", JSON.parse(e));
        if (e.target.files[0]) {
            console.log("check2");
            const image = e.target.files[0];
            handleUpload(image, check);
        }
    }
    const handleUpload = (image, check) => {
        const uploadTask = storage.ref(`imges/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage.ref('imges').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    console.log("check", check);

                    if (check == "first") {
                        setUrl(url);
                    }
                })
            });
    }

    async function sendMessage(e, voice) {
        e?.preventDefault()

        console.log("id : ", id)
        if (id == "11") {
            send('messages', voice);
        }
        if (id == "2") {
            send('company', voice);
        }
        if (id == '4') {
            send('Teamcompany', voice);
        }
        if (id == '5') {

            send('Staxicompany', voice);
        }
        if (id == '6') {
            send('Taxicompany', voice);
        }
        if (id == '7') {
            send('Kuricompany', voice);
        }
        if (id == '8') {
            send('Skancompany', voice);
        }
        if (id == "3") {
            send('transinfo', voice);
        }
        if (id == "4") {
            send('routesinfo', voice);
        }

    }
    async function send(event, voice) {
        const { uid, photoURL } = auth.currentUser;
        let payload = {
            text: msg,
            photoURL,
            curImageUrl,
            uid,
            image,
            voice: voice ? voice : null,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        console.log("paylod : ", payload);
        await db.collection(event).add(payload).then(res => {
            console.log("msg sent succesfuly");
            setCurrentImgUrl("");
            setOpenCamera(false);
            setImage("");
            setMsg('')

            if (scroll) {
                scroll.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'nearest'
                });
            }
        }).catch((e) => {
            notify(e.message);
            setMsg('')
        });
    }
    function reset(ref) {

    }
    return (
        <div className="container-sendmessagess">
            <div className="webcam-container">

                {openCamera &&
                    <div className="webcam-img" style={{ position: "relative" }}>
                        {image == '' ? <Webcam
                            audio={false}
                            height={200}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={300}
                            videoConstraints={videoConstraints}
                        /> :
                            <img src={image} style={{ height: "100%", width: "100%", borderRadius: '2px' }} />}
                    </div>}
            </div>
            <div style={{ position: "relative", height: "15%", marginTop: "8%", }}>
                {recordVisible && <VoiceRecorder sendMessage={sendMessage} setRecordVisible={setRecordVisible} />}
                <form onSubmit={sendMessage}>



                    <div className="sendMsg">
                        {openCamera &&
                            <div>

                                {image != '' ?
                                    <button className="retake" onClick={(e) => {
                                        e.preventDefault();
                                        setImage('');
                                    }}
                                        className="webcam-btn">
                                        <TiArrowSync />
                                    </button> :
                                    <button className='ticamra'
                                        onClick={(e) => {
                                            e.preventDefault();
                                            capture();
                                        }}
                                    ><TiCameraOutline /></button>
                                }
                            </div>}

                        {!openCamera &&
                            <button className="aicamra" style={{

                            }} onClick={() => { setOpenCamera(true) }}><AiTwotoneCamera /> </button>}


                        <Sendimage setCurrentImgUrl={setCurrentImgUrl} curImageUrl={curImageUrl} reset={reset} />

                        {!recordVisible && <>





                            <br />


                            <textarea className="txtarea rounded-0"
                                placeholder='Message..'
                                type="text"
                                value={msg}
                                onChange={e => setMsg(e.target.value)}
                                rows="3">
                            </textarea>

                            <button className='voicee'
                                onClick={() => setRecordVisible(true)}><MdKeyboardVoice /></button>

                            <button className='iosend' style={{

                            }} type="submit"><IoSend /></button>
                        </>}
                        <ToastContainer />

                    </div>

                </form>
            </div>
        </div>
    )
}
export default SendMessage
