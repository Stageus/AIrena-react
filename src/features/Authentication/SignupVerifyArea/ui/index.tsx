import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { requestSignupVerify } from '../api'

const SignupVerifyArea: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const goNicknameChangePage = () => {
    navigate('/change/nickname')
  }

  const token = searchParams.get('token') as string

  useEffect(() => {
    const fetchData = async () => {
      const result = await requestSignupVerify({ token })
      if (result.status === 201) {
        goNicknameChangePage()
      }
    }

    fetchData()
  }, [])

  return <></>
}
export default SignupVerifyArea
