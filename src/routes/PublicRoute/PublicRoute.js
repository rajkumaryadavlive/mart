import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {Auth}  from '../../middleware/auth';
const PublicRoute = ({ component: Component ,restricted ,...rest }) => (
    

    <Route {...rest} render={props => (Auth() && restricted ? 
    <Redirect to="/home" /> : <Component {...props} />)} />
)


export default PublicRoute;