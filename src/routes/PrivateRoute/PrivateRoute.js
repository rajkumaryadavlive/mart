import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {Auth}  from '../../middleware/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
     
    <Route {...rest} render={props => ( Auth()?<Component {...props} />
            : <Redirect to="/" />
    )} />
)

export default PrivateRoute;