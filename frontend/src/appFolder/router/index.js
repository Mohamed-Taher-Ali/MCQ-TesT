import {lazy} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const
    Login = lazy(()=>import('../pages/Login')),
    Error = lazy(()=>import('../pages/Error')),
    Questions = lazy(()=>import('../pages/Questions'))

export default () => (
    <Router>
        <Switch>
            <PublicRoute exact path='/' restrected component={Login} />
            <PrivateRoute exact path='/questions' component={Questions} />
            <PublicRoute exact path='/error' component={Error} />
            <Redirect exact to='/error' />
        </Switch>
    </Router>
)