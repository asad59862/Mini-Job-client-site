import React from 'react';
import {  useLocation, useNavigate } from 'react-router';
import { useAuth } from '../Hook/authHook';

const PrivateRoute = ({ children }) => {
  const location = useLocation()
  const navigate=useNavigate()
  const { user } = useAuth();
  if (!user) {
    return navigate(location.state?.from?.pathname || '/')
  }
  return children;
};

export default PrivateRoute;