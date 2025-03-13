import SharedButton from '#shared/components/button/StandardButton'
import IdInput from '#shared/components/input/IdInput'
import PasswordInput from '#shared/components/input/PasswordInput'
import React from 'react'
import { useNavigate } from 'react-router-dom'
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
    navigate('/login/redirect')
  }

  return (
    <div className={styles['normal-login-form']}>
      <IdInput />
      <PasswordInput />
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
      <SharedButton name="로그인" onClick={goLoginRedirect} />
    </div>
  )
}
export default NormalLoginForm
