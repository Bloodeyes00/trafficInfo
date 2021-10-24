import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

export class googleLogin extends Component {

    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj)
    }
    render() {
        return (
            <div>
                <GoogleLogin 
                clientId="978341166555-dcmh5timniock2huql4s8ubvr45n74ph.apps.googleusercontent.com"
                buttonText="Login with Gmail"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}

                />
            </div>
        )
    }
}

export default googleLogin
