import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }: PrivateRouteProps) => {
    const TOKEN = localStorage.getItem('token');

    return TOKEN ? <Route {...rest}>{children}</Route> : <Redirect to="/login" />;
};

interface PrivateRouteProps {
    children: React.ReactNode;
    path: string;
    exact?: boolean;
}

export default PrivateRoute;