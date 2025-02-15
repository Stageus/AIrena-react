import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SignupRedirectPage: React.FC = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('change/nickname')
  }, [])

  return <></>
}

export default SignupRedirectPage
