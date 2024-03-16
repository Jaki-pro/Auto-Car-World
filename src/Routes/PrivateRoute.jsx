import React, { Children, useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading) return <div className='flex justify-center'><span className="loading loading-bars loading-lg"></span></div>
    return children;
};

export default PrivateRoute;