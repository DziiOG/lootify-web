import React from 'react';
import {Route, Redirect} from 'react-router-dom'

const AuthRoute = ({component: Component, isTokenValid, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props)=>(
            isTokenValid() === false ? <Redirect to="/" /> : <Component {...props} />
        )}
        />
    );
}

export default AuthRoute;
