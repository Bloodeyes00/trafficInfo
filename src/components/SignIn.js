import React from 'react'
import firebase from 'firebase'
import { auth } from '../components/utils/firebase'
import { Button } from '@material-ui/core'
import { FcGoogle } from 'react-icons/fc'
<<<<<<< HEAD

=======
>>>>>>> ba4770a24f9c8d9cfbb99bfa47d5c2e6069b2501

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
<<<<<<< HEAD
        <div style={{ display: 'flex', justifyContent: 'center', height: '10%', alignItems: 'center' }}> 
        <i class="fab fa-google"></i>
            <Button  style={{ padding: '7px', fontSize: '15px', borderRadius: '20px',backgroundColor: 'white', color:'black',font:'small-caption'}} onClick={signInWithGoogle}> <FcGoogle /> &nbsp; Google</Button>
=======
        <div style={{ display: 'flex', justifyContent: 'center', height: '10%', alignItems: 'center' }}>
          
            <Button style={{ padding: '7px', fontSize: '15px', borderRadius: '20px',backgroundColor: 'white', color:'black',font:'small-caption'}} onClick={signInWithGoogle}>   <FcGoogle/> &nbsp; Google</Button>
>>>>>>> ba4770a24f9c8d9cfbb99bfa47d5c2e6069b2501
        </div>
    )
}

export default SignIn

