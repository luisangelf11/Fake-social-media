import React from 'react'
import { Navigate } from 'react-router-dom'
import {useAuth} from '../context/AuthProvider'

export default function RouteProtected({children}) {
    const {user} = useAuth();
  if(!user) return <Navigate to="/login"></Navigate>
  if(user) return <>{children}</>
}
