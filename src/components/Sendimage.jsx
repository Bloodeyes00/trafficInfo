import React, { Component } from 'react';
import { storage } from '../components/utils/firebase'
import "./send-message/send-message.css"
import { SiMinutemailer } from "react-icons/si";
import Loadimage from '../../src/components/loader/Loadimage';
class Sendimage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0,
            loading: false
///

        }
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    setLoading() {
        // this.setState({ loading: !this.state.loading });
        this.setState({ loading: true });
    }
    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
            this.handleUpload(image);
        }
    }
    handleUpload = (image) => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {

                // progrss function ....
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ progress });
                this.setState({ loading: true })
            },
            (error) => {
                // error function ....
                console.log(error);
            },
            () => {
                // complete function ....
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({ url });
                    this.props.setCurrentImgUrl(url);
                    this.ref = "";
                    this.setState({ loading: false })
                })    
            });

      
    }
    render() {
        return (

            <div className="send-image-container" style={{border: "",height:"40px", width:"12%",marginTop:"12px", paddingTop:"0px",
            paddingBottom:"10px",marginLeft:"-10px"}}>
               
                {this.state.loading && <Loadimage/> }
               &nbsp;

                <input value={''} type="file" id=""className="custom-file-input " 
                    onChange={this.handleChange} ref={(e) => { this.ref = e; this.props.reset(this.ref) }}
                > 
                </input>
               
                &nbsp;

            </div>
        )
    }
}

export default Sendimage;