import React from 'react'
import { Switch, Route } from "react-router-dom";
import Profile from "../profile/Profile";
export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/profile" component={Profile}/>

            </Switch>
        </div>
    )
}
