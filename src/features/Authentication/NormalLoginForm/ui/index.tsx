import SharedButton from '#shared/components/button/StandardButton'
import { ErrorMessage } from '#shared/components/ErrorMessage'
import IdInput from '#shared/components/input/IdInput'
import PasswordInput from '#shared/components/input/PasswordInput'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { requestCheckLogin, requestNormalLogin } from '../api'
import styles from './index.module.scss'

const NormalLoginForm: React.FC = () => {
  const navigate = useNavigate()

  const goFindPassword = () => {
    navigate('/find/password')
  }

  const goFindId = () => {
    navigate('/find/id')
  }

  const goSignup = () => {
    navigate('/signup')
  }

  const goLoginRedirect = () => {
    navigate('/redirect/login')
  }

  const [id, setId] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      const result = await requestCheckLogin()
      if (result.status === 200) {
        goLoginRedirect()
      }
    }

    fetchData()
  }, [])

  const handleClick = () => {
    if (id === '' || password === '') {
      setErrorMessage('아이디 또는 비밀번호를 입력해주세요.')
      return
    }
    const fetchData = async () => {
      const result = await requestNormalLogin({ id, password })
      if (result.status === 200) {
        goLoginRedirect()
      }
    }

    fetchData()
  }
  return (
    <div className={styles['normal-login-form']}>
      <IdInput setId={setId} />
      <PasswordInput setPassword={setPassword} />
      <div className={styles['auth-button-area']}>
        <div onClick={goFindId} className={styles['find-id-button']}>
          아이디 찾기
        </div>
        <div className={styles['divisor']}>|</div>
        <div
          onClick={goFindPassword}
          className={styles['find-password-button']}
        >
          비밀번호 찾기
        </div>
        <div className={styles['divisor-1']}>|</div>
        <div onClick={goSignup} className={styles['register-button']}>
          회원가입
        </div>
      </div>
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <SharedButton name="로그인" onClick={handleClick} />
    </div>
  )
}
export default NormalLoginForm
