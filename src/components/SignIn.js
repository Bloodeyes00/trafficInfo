import React from 'react'
import firebase from 'firebase'
import { auth } from '../components/utils/firebase'
import { Button } from '@material-ui/core'

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '10%', alignItems: 'center' }}>
            <Button style={{ padding: '10px', fontSize: '15px', borderRadius: '20px',backgroundColor: 'purple', color:'white',font:'small-caption'}} onClick={signInWithGoogle}>Sign In With Google</Button>
        </div>
    )
}

export default SignIn

