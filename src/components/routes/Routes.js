import React from 'react'
import { Switch, Route } from "react-router-dom";
import Login from '../login/Login';
import Profile from "../profile/Profile";
export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/profile" component={Profile}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </div>
    )
}
