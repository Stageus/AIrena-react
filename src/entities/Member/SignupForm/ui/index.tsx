import SharedButton from '#shared/components/button/StandardButton'
import EmailInput from '#shared/components/input/EmailInput'
import IdInput from '#shared/components/input/IdInput'
import PasswordCheckInput from '#shared/components/input/PasswordCheckInput'
import PasswordInput from '#shared/components/input/PasswordInput'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { requestSignup } from '../api'
import styles from './index.module.scss'

const SignupForm: React.FC = () => {
  const navigate = useNavigate()
  const goEmailVerificationGuidePage = () => {
    navigate(`/signup/email-verification-guide?email=${email}`)
  }

  const [id, setId] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordCheck, setPasswordCheck] = React.useState('')
  const [email, setEmail] = React.useState('')

  const handleClick = () => {
    const fetchData = async () => {
      const result = await requestSignup({ id, password, passwordCheck, email })
      if (result.status === 201) {
        goEmailVerificationGuidePage()
      }
    }

    fetchData()
  }

  return (
    <div className={styles['signup-form']}>
      <div className={styles['info-input-area']}>
        <IdInput setId={setId} />
        <PasswordInput setPassword={setPassword} />
        <PasswordCheckInput setPasswordCheck={setPasswordCheck} />
        <EmailInput setEmail={setEmail} />
      </div>
      <SharedButton name="회원가입" onClick={handleClick} />
    </div>
  )
}
export default SignupForm
