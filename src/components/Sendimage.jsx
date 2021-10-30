import React, { Component } from 'react';
import { ArrowRight } from 'react-bootstrap-icons';

import { storage } from '../components/utils/firebase'
class Sendimage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0
        }
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
            this.handleUpload(image);
        }
    }
    handleUpload = (image) => {
        //   const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                // progrss function ....
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ progress });
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
                })
            });
    }
    render() {
        return (
            <div>
                {/* <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/>
       */}
                <input type="file" onChange={this.handleChange} ref={(e) => { this.ref = e; this.props.reset(this.ref) }} />
                {/* <button onClick={this.handleUpload}>Upload</button> */}
                {/* <progress value={this.state.progress} max="100"/> */}
            </div>
        )
    }
}

export default Sendimage;