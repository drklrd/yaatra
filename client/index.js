import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory,IndexRoute} from 'react-router';
import Landing from './_partials/landing';
import Main from './main';
import Dash from './_partials/dash';
import Home from './_partials/home';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Main} >
            <IndexRoute component = {Landing} />
            <Route path = "dashboard" component = {Dash} />
            <Route path = "home" component = {Home} />
        </Route>
    </Router>


),document.getElementById('app'));
