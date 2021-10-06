import React from 'react'
import { Switch, Route } from "react-router-dom";
import Login from '../login/Login';
import Chatroom from '../Chatroom/Chatroom';
import Profile from "../profile/Profile";
import Registration from '../registration/Registration';
import Groupchat from '../groupchat/Groupchat';
import Home from '../Home/Home';
export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/profile" component={Profile}/>
                <Route path="/login" component={Login}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/chatroom" component={Chatroom}/>
                <Route path="/Groupchat" component={Groupchat}/>
                <Route path="/" component={Home}/>
            </Switch>
        </div>
    )
}
