import React, { useContext } from 'react';
import { AuthContext } from '../Authprovider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const Privateroute = ({ children }) => {
    const { users, spinner } = useContext(AuthContext)
    const location = useLocation()
    if (spinner) {
       return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
     
    }

    if (users) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login'></Navigate>
};

export default Privateroute;