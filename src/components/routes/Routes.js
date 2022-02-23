import React from 'react'
import { Switch, Route } from "react-router-dom";
import Login from '../login/Login';
import Chatroom from '../Chatroom/Chatroom';
import Socialservices from '../soicialsevices/Socialservices';
import Startnow from '../StartNow/Startnow';
import CarInput from '../carinput/CarInput'
import Job from '../job/Job'
import Agree from '../agreepage/Agree';
import Logopage from '../Logopage/Logopage';
import Profile from "../profile/Profile";
import Registration from '../registration/Registration';
import Home from '../../components/Home/Home';
import Groupchat from '../groupchat/Groupchat';
import Chat from '../Chat';
import CompanyChat from '../company-chat/CompanyChat';
import TransferChat from '../transfer-chat/TransferChat';
import RoutesinfoChat from '../routesInforChat/RoutesInforChat';
import SignOut from '../SignOut';
import Mainpage from '../main';
import Services from '../Services/Services';
import Jobs from '../Jobs/Jobs';
import Admin from '../admin/Admin';
import ManageUser from '../manageuser/ManageUser';  
import ManageCompnayUser from "../managecompnayuser/ManageCompnayUser";
import UploadAds from "../uploadads/UploadAds";
import MainPage from '../Services/MainPage';
import VehiclesServices from '../Services/VehiclesServices'
import EmergencyService from '../Services/EmergencyService'
import OtherItem from '../otheritem/OtherItem'
import JobInput from '../Services/JobInput'
import { SecuredRoute } from '../../App';
import ImportantContacts from '../Services/ImportantContacts';
import TaxiJobs from '../taxi-jobs/TaxiJobs';
import Taxijob from '../taxi-jobs/Taxijob';
export default function Routes(props) {
    let {user, isLoggedin} = props
    
    return (
        <div>
            <Switch>
                <Route path="/jobinput" component={JobInput} />   
                <Route path="/taxijobs" component={TaxiJobs} /> 
                <Route path="/taxijob" component={Taxijob} />   
                <Route path="/otheritem" component={OtherItem} />
                <Route path="/importantcontacts" component={ImportantContacts} />
                <Route path="/VehiclesServices" component={VehiclesServices} />
                <Route path="/EmergencyService" component={EmergencyService} />
                <Route path="/mainpage" component={MainPage} />
                <SecuredRoute path="/uploadads" component={UploadAds} user={user} />
                <SecuredRoute path="/ManageCompnayUser" component={ManageCompnayUser} user={user} />
                <SecuredRoute path="/manageuser" component={ManageUser} user={user} />
                <Route path="/admin" component={Admin}  />
                <Route path="/carinput" component={CarInput}/>    
                <Route path="/job" component={Job}/>    
                <Route path="/Agree" component={Agree}/>
                <Route path="/Socialservices" component={Socialservices}/>
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
                <Route path="/logopage" component={Logopage}/>
                <Route path="/socialservices" component={Socialservices}/>
                <Route path="/Agree" component={Agree}/>
                <Route path="/" component={Home} />
            </Switch>
           
        </div>
    )
}
