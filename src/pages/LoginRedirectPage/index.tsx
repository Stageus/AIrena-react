import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginRedirectPage: React.FC = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/mock/list')
  }, [])

  return <></>
}

export default LoginRedirectPage
