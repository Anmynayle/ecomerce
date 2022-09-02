import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  return (
    <Outlet/>
  )
}

export default ProtectedRoutes