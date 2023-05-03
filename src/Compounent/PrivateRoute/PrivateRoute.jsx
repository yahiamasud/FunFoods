import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ( {Children}) => {
    const {user,loading ,} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return<div>Please wait........</div>
    }
    if(user){
        return Children;
    }

    return <Navigate to="/Login" state={{from:location}}replace></Navigate>
};

export default PrivateRoute;