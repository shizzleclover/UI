import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LoadingSpinner from './LoadingSpinner';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!isAuthenticated) {
        // Save the attempted URL for redirecting after login
        return (
            <Navigate to="/login" state={{ from: location.pathname }} replace />
        );
    }

    return children;
};

export default ProtectedRoute;
