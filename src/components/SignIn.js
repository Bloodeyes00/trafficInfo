import React from 'react'
import firebase from 'firebase'
import { auth } from '../components/utils/firebase'
import { Button } from '@material-ui/core'
import { FcGoogle } from 'react-icons/fc'

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '10%', alignItems: 'center' }}>
          
            <Button style={{ padding: '7px', fontSize: '15px', borderRadius: '20px',backgroundColor: 'white', color:'black',font:'small-caption'}} onClick={signInWithGoogle}>   <FcGoogle/> &nbsp; Google</Button>
        </div>
    )
}

export default SignIn

