
import React from 'react';
import { auth } from '../components/utils/firebase'
const Mainpage = () => {

    const logout = () => {
        auth.signOut();
    }

    return (
        <div style={{ marginTop: 250 }}>
            <center>
                {auth && auth?.currentUser && auth?.currentUser?.phoneNumber && <h3>Welcome {auth?.currentUser?.phoneNumber}</h3>}
                <button style={{ "marginLeft": "20px" }}
                    onClick={logout}>Logout</button>
            </center>
        </div>
    );
}

export default Mainpage;