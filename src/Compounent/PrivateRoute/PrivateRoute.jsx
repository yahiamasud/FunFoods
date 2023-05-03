import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const PrivateRoute = ( {Children}) => {
    const {user} = useContext(AuthContext);
    if(user){
        return Children;
    }

    return <navigator></navigator>
};

export default PrivateRoute;