import SharedButton from '#shared/components/button/StandardButton'
import { ErrorMessage } from '#shared/components/ErrorMessage'
import PasswordCheckInput from '#shared/components/input/PasswordCheckInput'
import PasswordInput from '#shared/components/input/PasswordInput'
import { Password, PasswordSchema } from '#shared/model/input'
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { requestChangePassword } from '../api'
import styles from './index.module.scss'

const ChangePasswordForm: React.FC = () => {
  const [password, setPassword] = useState<Password>({ password: '' })
  const [passwordCheck, setPasswordCheck] = useState<Password>({
    password: '',
  })
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState<{
    password: string | null
    passwordCheck: string | null
  }>({
    password: null,
    passwordCheck: null,
  })
  const token = searchParams.get('token') as string

  const validatePassword = (newPassword: Password) => {
    const parsed = PasswordSchema.safeParse(newPassword)
    if (parsed.success) {
      setErrorMessage((prev) => {
        prev.password = null
        return prev
      })
      return true
    } else {
      setErrorMessage((prev) => {
        prev.password = parsed.error.issues[0].message
        return prev
      })
      return false
    }
  }

  const validatePasswordCheck = (newPasswordCheck: Password) => {
    if (password.password === newPasswordCheck.password) {
      setErrorMessage((prev) => {
        prev.passwordCheck = null
        return prev
      })
      return true
    } else {
      setErrorMessage((prev) => {
        prev.passwordCheck = '비밀번호가 일치하지 않습니다.'
        return prev
      })
      return false
    }
  }

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = { password: e.target.value }
    setPassword(newPassword)
    validatePassword(newPassword)
  }

  const onPasswordCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPasswordCheck = { password: e.target.value }
    setPasswordCheck(newPasswordCheck)
    validatePasswordCheck(newPasswordCheck)
  }

  const handleClick = () => {
    const isPasswordValid = validatePassword(password)
    const isPasswordCheckValid = validatePasswordCheck(passwordCheck)
    if (!isPasswordValid || !isPasswordCheckValid) {
      return
    }
    const fetchData = async () => {
      const result = await requestChangePassword({
        password: password.password,
        passwordCheck: passwordCheck.password,
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
        <PasswordInput onChange={onPasswordChange} />
        {errorMessage.password && (
          <ErrorMessage message={errorMessage.password} />
        )}
        <PasswordCheckInput onChange={onPasswordCheckChange} />
        {errorMessage.passwordCheck && (
          <ErrorMessage message={errorMessage.passwordCheck} />
        )}
      </div>
      <SharedButton name="비밀번호 변경" onClick={handleClick} />
    </div>
  )
}
export default ChangePasswordForm
