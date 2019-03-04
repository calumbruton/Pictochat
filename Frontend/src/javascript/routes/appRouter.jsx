import { Route, Switch } from "react-router-dom";

import HomePage from '../pages/homePage';
import LandingPage from '../pages/landingPage';

import React, { Component } from 'react'

class AppRouter extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/home" component={HomePage} />
                {/* when none of the above match, <NoMatch> will be rendered */}
                {/* <Route component={NoMatch} /> */}
            </Switch>
        )
    }
}


export default AppRouter;
