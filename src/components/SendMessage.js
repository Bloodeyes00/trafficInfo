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
import { SiMinutemailer } from "react-icons/si";
import { lightBlue } from '@material-ui/core/colors'
import "./send-message/send-message.css"
import VoiceRecorder from './common-components/voice-recorder/VoiceRecorder'
import 'react-voice-recorder/dist/index.css'

function SendMessage({ scroll }) {

    const webcamRef = React.useRef(null);
    const [image, setImage] = useState('');
    const [progress, setProgress] = useState('');
    const [url, setUrl] = useState('');
    const [recordVisible, setRecordVisible] = useState(false);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc);
            // handleChange(imageSrc);
        });
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };
    const notify = (message) => toast(message);
    const [msg, setMsg] = useState('');
    const [openCamera, setOpenCamera] = useState(false);
    const [curImageUrl, setCurrentImgUrl] = useState('');
    const { id } = useParams();


    useEffect(() => {
        console.log("curImageUrl", curImageUrl);
        if (scroll) {
            scroll?.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest'
            });
        }


    }, [curImageUrl, msg]);

    const handleChange = (e, check) => {
        console.log("check1", e);
        console.log("check2", JSON.parse(e));
        if (e.target.files[0]) {
            console.log("check2");
            const image = e.target.files[0];
            // setImage(() => ({ image }));
            // setImage(image)
            handleUpload(image, check);
        }
    }
    const handleUpload = (image, check) => {
        const uploadTask = storage.ref(`imges/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
                // this.setState({ loading: true })
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

            if (scroll) {
                scroll.current.scrollIntoView({
                    // top: 100,
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'nearest'
                });
            }
        }).catch((e) => {
            notify(e.message);
        });
        setMsg('')
    }
    function reset(ref) {

    }
    return (
        <div>
            {recordVisible && <VoiceRecorder sendMessage={sendMessage} setRecordVisible={setRecordVisible} />}
            <form onSubmit={sendMessage}>
                <div className="webcam-container">

                    {openCamera &&
                        <div className="webcam-img">
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
            

                <div className="sendMsg">
                    {openCamera &&
                        <div>
                            
                            {image != '' ?
                                <button className="retake" onClick={(e) => {
                                    e.preventDefault();
                                    setImage('');
                                }}
                                    className="webcam-btn" style={{ height: "40px", width: "15%", color: "rgb(39, 156, 202)", marginTop: "12px",
                                    marginLeft: "15px", backgroundColor: "white", borderRadius: "40px", 
                                    alignItems: "center", textAlign: "center" }}>
                                    <TiArrowSync /></button> :
                                <button style={{ height: "40px", width: "15%", color: "rgb(39, 156, 202)", marginTop: "12px",
                                marginLeft: "15px", backgroundColor: "white", border: "", borderRadius: "40px", 
                                alignItems: "center", textAlign: "center" }} onClick={(e) => {
                                    e.preventDefault();
                                    capture();
                                    
                                }}
                                ><TiCameraOutline /></button>
                            }
                           
                        </div>}




                    

                        {!openCamera && 
                        <button style={{ height: "40px", width: "15%", color: "rgb(39, 156, 202)", marginTop: "12px",
                         marginLeft: "10px", backgroundColor: "white", border: "", borderRadius: "40px", 
                         alignItems: "center", textAlign: "center" }} className="cemra" onClick={() => { setOpenCamera(true) }}><AiTwotoneCamera/> </button>}
                    
                    
                        <Sendimage setCurrentImgUrl={setCurrentImgUrl} curImageUrl={curImageUrl} reset={reset} />
                      
                    {!recordVisible && <>

                       
                    

                      
                        <br />
                        
                        <textarea style={{
                            width: '100%', backgroundColor:"white", padding: "4px", fontSize: '15px', fontWeight: '550', marginLeft: '-px',
                            marginTop: '15px', border: "none", borderRadius: "5px", height: "40px",marginRight:"-10px",outline:"none"
                        }} placeholder='Message...'
                            type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                            
                        <button  style={{
                            width: "6%", marginLeft: "13px", height: "40px", marginTop: "12px", border: "none",
                            backgroundColor: "white", color: "rgb(39, 156, 202)", borderRadius: "22px"
                        }}
                            onClick={() => setRecordVisible(true)}><MdKeyboardVoice /></button>
                       
                        <Button style={{
                            width: '6%', marginTop: "14px", fontSize: 'px', fontWeight: '550',
                            maxWidth: '200px', marginRight: "0px", color: "rgb(39, 156, 202)", border: "none",
                            height: "40px",marginRight:""}} type="submit"><SiMinutemailer /></Button>
                    </>}
                    <ToastContainer />
                </div>
            </form>
        </div>
    )
}
export default SendMessage
