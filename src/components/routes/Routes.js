import React from 'react'
import { Switch, Route } from "react-router-dom";
import Login from '../login/Login';
import Chatroom from '../Chatroom/Chatroom';
import Profile from "../profile/Profile";
import Registration from '../registration/Registration';
import Home from '../Home/Home';
import Groupchat from '../groupchat/Groupchat';
import Chat from '../Chat';
import CompanyChat from '../company-chat/CompanyChat';
import TransferChat from '../transfer-chat/TransferChat';
import RoutesinfoChat from '../routesInforChat/RoutesInforChat';
import SignOut from '../SignOut';
export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/profile" component={Profile}/>
                <Route path="/login" component={Login}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/Groupchat" component={Groupchat}/>
                <Route path="/SignOut " component={SignOut}/>
                <Route path="/transfer/:id" component={TransferChat}/>
                <Route path="/company/:id" component={CompanyChat}/>
                <Route path="/routesinfo/:id" component={RoutesinfoChat}/>
                <Route path="/chat/:id" component={Chat}/>
                <Route path ="/" component={Home}/>
            </Switch>
        </div>
    )
}
