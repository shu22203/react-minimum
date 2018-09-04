import { createBrowserHistory } from 'history';
import * as React from 'react';
import { Route, Switch } from "react-router";
import { ConnectedRouter } from 'react-router-redux';
import Home from "../components/Home";
import CounterContainer from "../containers/Counter";

const history = createBrowserHistory();

export default class Router extends React.Component {
    public render() {
        return (
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact={true} path='/' component={Home}/>
                    <Route path='/counter' component={CounterContainer}/>
                </Switch>
            </ConnectedRouter>
        )
    }
}
