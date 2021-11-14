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
import { TiCameraOutline } from "react-icons/ti";
import { SiMinutemailer } from "react-icons/si";
import { lightBlue } from '@material-ui/core/colors'
function SendMessage({ scroll }) {
    const webcamRef = React.useRef(null);
    const [image, setImage] = useState('');
    const [progress, setProgress] = useState('');
    const [url, setUrl] = useState('');
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
        console.log("check1",e);
        console.log("check2",JSON.parse(e));
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
            image,
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

            <form onSubmit={sendMessage}>
                <div className="webcam-container">
                    {openCamera && <div className="webcam-img">
                        {image == '' ? <Webcam
                            audio={false}
                            height={300}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            width={320}
                            videoConstraints={videoConstraints}
                        /> : 
                        <img src={image} style={{ height: "225px", width: "225px", borderRadius: '2px' }} />}
                    </div>}
                </div>
            
                <div className="sendMsg" style={{border:"2px solid lightgray",borderRadius:"5px",height:"90px", marginBottom:"0px",backgroundColor:"white"}}>
                    {openCamera &&
                     <div>
                        {image != '' ?
                            <button onClick={(e) => {
                                e.preventDefault();
                                setImage('');
                            }}
                                className="webcam-btn"  style={{height:"35px",width:"45px", marginTop:"10px",marginLeft:"10px", backgroundColor:"revert",border:"none" ,borderRadius:"10px",alignItems:"center",textAlign:"center" }}>
                                <TiArrowSync /></button> :
                            <button onClick={(e) => {
                                e.preventDefault();
                                capture();
                                // setOpenCamera(false);
                            }}
                                className="webcam-btn " style={{height:"35px",width:"45px", marginTop:"10px",marginLeft:"10px", backgroundColor:"revert",border:"none" ,borderRadius:"10px",alignItems:"center",textAlign:"center"}}> <AiTwotoneCamera /> </button>
                        }
                    </div>}
                    {!openCamera && <button onClick={() => { setOpenCamera(true) }} style={{height:"35px",width:"75px", marginTop:"22px",marginLeft:"10px",color:"black", backgroundColor:"revert",border:"none" ,borderRadius:"10px",alignItems:"center",textAlign:"center" }}><TiCameraOutline /> </button>}
                    <div className='imagesend'>
                        <Button >
                            <Sendimage setCurrentImgUrl={setCurrentImgUrl} curImageUrl={curImageUrl} reset={reset} />
                        </Button>
                    </div>
                    <br />
                    <Input style={{
                        width: '100%', fontSize: '15px', fontWeight: '550', marginLeft: '-45px',
                        marginBottom:"-18px",marginTop:"10px", border:"0px solid gray",padding:"10px",
                    }} placeholder='Message...'
                        type="text" value={msg} onChange={e => setMsg(e.target.value)} />

                    <Button className="sendbutton" style={{
                        width: '10%',height:"35px" , fontSize: '13px', fontWeight: '550',
                        margin: '4px 5% -13px 5%', maxWidth: '200px',backgroundColor:"white",border:"1px solid #279cca",color: "#279cca"
                    ,marginTop:"20px" }} type="submit"><SiMinutemailer/></Button>
                    <ToastContainer />
                </div>
             
            </form>
        </div>
    )
}
export default SendMessage
