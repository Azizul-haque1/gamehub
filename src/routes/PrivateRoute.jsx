import React, { Children, use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../componets/Loader';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)


    const location = useLocation();
    if (loading) {
        return <Loader />
    }

    if (user && user?.email) {
        return children
    }

    else {
        return <Navigate to='/auth/login' replace state={location.pathname}></Navigate>
    }
};

export default PrivateRoute;