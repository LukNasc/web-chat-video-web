import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Login from './pages/Login'
import Room from './pages/Room'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch >
                <Route exact path="/" component={Login} />
                <Route path="/room" component={Room} />
            </Switch>
        </BrowserRouter>)


}
