import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { login } = React.useContext(UserContext);

   

    if (!login) {
      return <Navigate to={"/login"} />
    }

    return <Route {...rest} render={props => (<Component {...props} />)} />
}

export default PrivateRoute;