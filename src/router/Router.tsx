import * as React from 'react';
import { createBrowserHistory } from 'history';
import { Route, Switch } from "react-router";
import { ConnectedRouter } from 'react-router-redux';

import Home from "../components/Home";
import UserContainer from "../containers/userContainer";

const history = createBrowserHistory();

export default class Router extends React.Component {
    public render() {
        return (
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact={true} path='/' component={Home}/>
                    <Route path='/user' component={UserContainer}/>
                </Switch>
            </ConnectedRouter>
        )
    }
}
