import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {

  const logged = {'token': false}

  return (
    !logged.token ? <Outlet /> : <Navigate to='/' />
  )
}

export default PrivateRoutes;
