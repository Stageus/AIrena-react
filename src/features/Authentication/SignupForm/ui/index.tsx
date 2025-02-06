import EmailInput from '#shared/components/Input/EmailInput/EmailInput'
import IdInput from '#shared/components/Input/IdInput/IdInput'
import PasswordCheckInput from '#shared/components/Input/PasswordCheckInput/PasswordCheckInput'
import PasswordInput from '#shared/components/Input/PasswordInput/PasswordInput'
import SharedButton from '#shared/components/StandardButton/StandardButton'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const SignupForm: React.FC = () => {
  const navigate = useNavigate()
  const goEmailVerificationGuidePage = () => {
    navigate('/email-verification-guide')
  }
  return (
    <div className={'signup-form'}>
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
