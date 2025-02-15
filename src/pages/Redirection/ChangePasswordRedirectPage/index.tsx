import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const ChangePasswordRedirectPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const navigate = useNavigate()

  useEffect(() => {
    const token = searchParams.get('token') as string
    if (!token) {
      return
    }
    navigate(`/change/password?token=${token}`)
  }, [])

  return <></>
}

export default ChangePasswordRedirectPage
