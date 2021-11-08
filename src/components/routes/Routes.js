import React from 'react'
import { Switch, Route } from "react-router-dom";
import Login from '../login/Login';
import Chatroom from '../Chatroom/Chatroom';
import Socialservices from '../soicialsevices/Socialservices';
import FindurBranch from '../FindurBranch/FindurBranch';
import Startnow from '../StartNow/Startnow';

import Job from '../job/Job'
import Agree from '../agreepage/Agree';
import Logopage from '../Logopage/Logopage';
import Profile from "../profile/Profile";
import Registration from '../registration/Registration';
import Home from '../Home/Home';
import Groupchat from '../groupchat/Groupchat';
import Chat from '../Chat';
import CompanyChat from '../company-chat/CompanyChat';
import TransferChat from '../transfer-chat/TransferChat';
import RoutesinfoChat from '../routesInforChat/RoutesInforChat';
import SignOut from '../SignOut';
import Mainpage from '../main';
import Services from '../Services/Services';
import Jobs from '../Jobs/Jobs';
export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/job" component={Job}/>    
                <Route path="/Agree" component={Agree}/>
                <Route path="/Socialservices" component={Socialservices}/>
                <Route path="/findurbranch" component={FindurBranch}/>
                <Route path="/Startnow" component={Startnow}/>  
                <Route path="/logopage" component={Logopage}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/login" component={Login}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/Groupchat" component={Groupchat}/>
                <Route path="/SignOut " component={SignOut}/>
                <Route path="/transfer/:id" component={TransferChat}/>
                <Route path="/chatroom" component={Chatroom}/>
                <Route path="/company/:id" component={CompanyChat}/>
                <Route path="/routesinfo/:id" component={RoutesinfoChat}/>
                <Route path="/logged-out" component={Mainpage}/>
                <Route path="/chat/:id" component={Chat}/>
                <Route path="/Services" component={Services}/>
                <Route path="/Jobs" component={Jobs}/>
                <Route path ="/" component={Home}/>
            </Switch>
        </div>
    )
}
