import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, auth = false, ...rest }) => (
    <Route {...rest} render={props => (
        auth
            ? <Component {...props} />
            : <Redirect to="/auth" />
    )
    } />
)