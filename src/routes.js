import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'

import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncidents from './pages/NewIncident'

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Logon }></Route>
                <Route path="/register" component={ Register }></Route>
                <Route path="/profile" component={ Profile }></Route>
                <Route path="/incidents/new" component={ NewIncidents }></Route>
            </Switch>
        </BrowserRouter>
    )
}