import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const SignupRedirectPage: React.FC = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/change/nickname')
  }, [])

  return <></>
}
