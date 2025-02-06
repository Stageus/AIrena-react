import SharedButton from '#shared/components/button/StandardButton/StandardButton'
import EmailInput from '#shared/components/input/EmailInput'
import IdInput from '#shared/components/input/IdInput'
import PasswordCheckInput from '#shared/components/input/PasswordCheckInput'
import PasswordInput from '#shared/components/input/PasswordInput'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const SignupForm: React.FC = () => {
  const navigate = useNavigate()
  const goEmailVerificationGuidePage = () => {
    navigate('/email-verification-guide')
  }
  return (
    <div className={styles['signup-form']}>
      <div className={styles['info-input-area']}>
        <IdInput />
        <PasswordInput />
        <PasswordCheckInput />
        <EmailInput />
      </div>
      <SharedButton name="회원가입" onClick={goEmailVerificationGuidePage} />
    </div>
  )
}
export default SignupForm
