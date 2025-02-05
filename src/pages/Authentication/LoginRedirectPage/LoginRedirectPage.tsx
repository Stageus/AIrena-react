import React from 'react'
import { Navigate } from 'react-router-dom'

const LoginRedirectPage: React.FC = () => {
  return <Navigate to="/admin" replace />
}

export default LoginRedirectPage
