import React, { useEffect, useRef } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { requestSignupVerify } from './api'

const SignupVerifyPage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const hasFetched = useRef(false)
  const token = searchParams.get('token') as string

  useEffect(() => {
    if (hasFetched.current) return
    hasFetched.current = true

    const fetchData = async () => {
      const result = await requestSignupVerify({ token })
      if (result.status === 201) {
        navigate('/change/nickname')
      }
    }

    fetchData()
  }, [navigate, token])

  return <></>
}

export default SignupVerifyPage
