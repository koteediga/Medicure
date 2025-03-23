import React from 'react'
import Login from './Login'
import { Outlet } from "react-router-dom";
import * as authService from './../../services/AuthService';

const RequiredAuth = () => {
  return (
    authService.getCurrentUser() == null ?
      <Outlet></Outlet> : 
      <Login />

  )
}

export default RequiredAuth