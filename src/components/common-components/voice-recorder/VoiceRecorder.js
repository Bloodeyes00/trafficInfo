import { auth } from '../../utils/firebase'
import React, { Component } from 'react'
import { Recorder } from 'react-voice-recorder'
import { storage } from '../../utils/firebase'
import "./voice-recorder.css"
import 'react-voice-recorder/dist/index.css'
import { VscClose } from 'react-icons/vsc'

export default class VoiceRecorder extends Component {
    state = {
        audioDetails: {
            url: null,
            blob: null,
            chunks: null,
            duration: {
                h: 0,
                m: 0,
                s: 0
            }
        }
    }
    handleAudioStop(data) {
        console.log("handle audio stop  ", data)
        this.setState({ audioDetails: data });
    }
    handleAudioUpload(file) {
        console.log("handle audio Upload  ", file)
        const uploadTask = storage.ref(`voice/${auth?.currentUser?.uid}`).put(file);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
              
            },
            (error) => {
                console.log(error);
            },
            () => {
                storage.ref(`voice/${auth?.currentUser?.uid}`).getDownloadURL().then(url => {
                    console.log(url);
                    this.props.sendMessage(null, url);
                    this.props.setRecordVisible(false);
                })
            });
    }
    handleReset() {
        const reset = {
            url: null,
            blob: null,
            chunks: null,
            duration: {
                h: 0,
                m: 0,
                s: 0
            }
        };
        this.setState({ audioDetails: reset });
    }

    render() {
        return (
            <div className=" recorder-main">
                <button className='closebtn' onClick={() => { this.props.setRecordVisible(false) }}> <VscClose /></button>

                <Recorder
                    record={this.props?.recording}
                    audioURL={this.state.audioDetails.url}
                    showUIAudio
                    handleAudioStop={data => this.handleAudioStop(data)}
                    handleAudioUpload={data => this.handleAudioUpload(data)}
                    handleReset={() => this.handleReset()}

                    mimeTypeToUseWhenRecording={`audio/webm`} 
                />


            </div>
        )
    }
}
