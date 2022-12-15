import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {

  const logged = {'token': true}

  return (
    !logged.token ? <Outlet /> : <Navigate to='/about' />
  )
}

export default PrivateRoutes;
