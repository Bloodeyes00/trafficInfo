import React from 'react'
import firebase from 'firebase'
import { auth } from '../components/utils/firebase'
import { Button } from '@material-ui/core'
import { FcGoogle } from 'react-icons/fc'
import './Sign.css'

function SignIn() {

    

    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div className='signin' style={{ }}>
          
            <button className='btnsignin'
            onClick={signInWithGoogle}>  
             <FcGoogle/> &nbsp;
             Google
            </button>
        </div>
    )
}

export default SignIn

