import React from 'react'
import { Switch, Route } from "react-router-dom";
import Login from '../login/Login';
import Profile from "../profile/Profile";
import Registration from '../registration/Registration';
export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/profile" component={Profile}/>
                <Route path="/login" component={Login}/>
                <Route path="/registration" component={Registration}/>
            </Switch>
        </div>
    )
}
