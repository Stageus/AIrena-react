import SharedButton from '#shared/components/button/StandardButton'
import { ErrorMessage } from '#shared/components/ErrorMessage'
import EmailInput from '#shared/components/input/EmailInput/ui'
import IdInput from '#shared/components/input/IdInput'
import PasswordCheckInput from '#shared/components/input/PasswordCheckInput'
import PasswordInput from '#shared/components/input/PasswordInput'
import { Email, EmailSchema } from '#shared/model/input'
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
  const [email, setEmail] = React.useState<Email>({ email: '' })
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)

  const handleClick = () => {
    const fetchData = async () => {
      const result = await requestSignup({
        id,
        password,
        passwordCheck,
        email: email.email,
      })
      if (result.status === 201) {
        goEmailVerificationGuidePage()
      }
    }

    fetchData()
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = { email: e.target.value }
    const parsed = EmailSchema.safeParse(newEmail)
    if (parsed.success) {
      setEmail(parsed.data)
      setErrorMessage(null)
    } else {
      setErrorMessage(parsed.error.issues[0].message)
    }
  }

  return (
    <div className={styles['signup-form']}>
      <div className={styles['info-input-area']}>
        <IdInput setId={setId} />
        {errorMessage && <ErrorMessage message={errorMessage} />}
        <PasswordInput setPassword={setPassword} />
        {errorMessage && <ErrorMessage message={errorMessage} />}
        <PasswordCheckInput setPasswordCheck={setPasswordCheck} />
        {errorMessage && <ErrorMessage message={errorMessage} />}
        <EmailInput onChange={onChange} />
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </div>
      <SharedButton name="회원가입" onClick={handleClick} />
    </div>
  )
}
export default SignupForm
