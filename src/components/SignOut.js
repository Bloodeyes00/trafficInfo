import React from 'react'
import { auth } from '../components/utils/firebase'
import { Button } from '@material-ui/core'
import './Sign.css'
function SignOut() {
    return (
        <div className='signout'>
            <button className='btnsignout'
            onClick={() => auth.signOut()}>
                Sign Out
            </button>
        </div>
    )
}

export default SignOut
