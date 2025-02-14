import React from 'react'
import { Navigate } from 'react-router-dom'

const SignupRedirectPage: React.FC = () => {
  return <Navigate to="/change/nickname" replace />
}

export default SignupRedirectPage
