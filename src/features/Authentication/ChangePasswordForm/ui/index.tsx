import SharedButton from '#shared/components/button/StandardButton'
import PasswordCheckInput from '#shared/components/input/PasswordCheckInput'
import PasswordInput from '#shared/components/input/PasswordInput'
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { requestChangePassword } from '../api'
import styles from './index.module.scss'

const ChangePasswordForm: React.FC = () => {
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const token = searchParams.get('token') as string

  const handleClick = () => {
    const fetchData = async () => {
      const result = await requestChangePassword({
        password,
        passwordCheck,
        token,
      })
      if (result.status === 200) {
        alert('비밀번호가 변경되었습니다. 다시 로그인 해주세요.')
        navigate('/')
      }
    }

    fetchData()
  }

  return (
    <div className={styles['change-password-form']}>
      <div className={styles['input-area']}>
        <PasswordInput setPassword={setPassword} />
        <PasswordCheckInput setPasswordCheck={setPasswordCheck} />
      </div>
      <SharedButton name="비밀번호 변경" onClick={handleClick} />
    </div>
  )
}
export default ChangePasswordForm
