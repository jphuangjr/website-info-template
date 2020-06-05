import React from 'react';
import { Route, Switch } from "react-router-dom";

import { Home, Donate } from "./pages";

const Routes = () => (
    <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/donate" component={Donate}/>
    </Switch>
)

export default Routes;