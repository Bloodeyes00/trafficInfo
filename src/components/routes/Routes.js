import React from 'react'
import { Switch, Route } from "react-router-dom";
import Chatroom from '../Chatroom/Chatroom';
import Profile from "../profile/Profile";
export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/profile" component={Profile}/>
                <Route path="/chatroom" component={Chatroom}/>
            </Switch>
        </div>
    )
}
