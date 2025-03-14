import SharedButton from '#shared/components/button/StandardButton'
import { ErrorMessage } from '#shared/components/ErrorMessage'
import EmailInput from '#shared/components/input/EmailInput/ui'
import IdInput from '#shared/components/input/IdInput'
import PasswordCheckInput from '#shared/components/input/PasswordCheckInput'
import PasswordInput from '#shared/components/input/PasswordInput'
import {
  Email,
  EmailSchema,
  Id,
  IdSchema,
  Password,
  PasswordSchema,
} from '#shared/model/input'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { requestSignup } from '../api'
import styles from './index.module.scss'

const SignupForm: React.FC = () => {
  const [id, setId] = React.useState<Id>({ id: '' })
  const [password, setPassword] = React.useState<Password>({ password: '' })
  const [passwordCheck, setPasswordCheck] = React.useState<Password>({
    password: '',
  })
  const [email, setEmail] = React.useState<Email>({ email: '' })
  const [errorMessage, setErrorMessage] = React.useState<{
    id: string | null
    password: string | null
    passwordCheck: string | null
    email: string | null
  }>({
    id: null,
    password: null,
    passwordCheck: null,
    email: null,
  })

  const navigate = useNavigate()
  const goEmailVerificationGuidePage = () => {
    navigate(`/signup/email-verification-guide?email=${email.email}`)
  }

  const validateEmail = (newEmail: Email) => {
    const parsed = EmailSchema.safeParse(newEmail)
    if (parsed.success) {
      setErrorMessage({
        ...errorMessage,
        email: null,
      })
      return true
    } else {
      setErrorMessage({
        ...errorMessage,
        email: parsed.error.issues[0].message,
      })
      return false
    }
  }

  const validateId = (newId: Id) => {
    const parsed = IdSchema.safeParse(newId)
    if (parsed.success) {
      setErrorMessage((prev) => {
        prev.id = null
        return prev
      })
      return true
    } else {
      setErrorMessage((prev) => {
        prev.id = parsed.error.issues[0].message
        return prev
      })
      return false
    }
  }

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
  const onIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newId = { id: e.target.value }
    setId(newId)
    validateId(newId)
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

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = { email: e.target.value }
    setEmail(newEmail)
    validateEmail(newEmail)
  }

  const handleClick = () => {
    const isIdValid = validateId(id)
    const isPasswordValid = validatePassword(password)
    const isPasswordCheckValid = validatePasswordCheck(passwordCheck)
    const isEmailValid = validateEmail(email)

    if (
      !isIdValid ||
      !isPasswordValid ||
      !isPasswordCheckValid ||
      !isEmailValid
    ) {
      return
    }
    const fetchData = async () => {
      const result = await requestSignup({
        id: id.id,
        password: password.password,
        email: email.email,
        passwordCheck: passwordCheck.password,
      })
      if (result.status === 201) {
        goEmailVerificationGuidePage()
      }
    }
    fetchData()
  }

  return (
    <div className={styles['signup-form']}>
      <div className={styles['info-input-area']}>
        <IdInput onChange={onIdChange} />
        {errorMessage.id && <ErrorMessage message={errorMessage.id} />}
        <PasswordInput onChange={onPasswordChange} />
        {errorMessage.password && (
          <ErrorMessage message={errorMessage.password} />
        )}
        <PasswordCheckInput onChange={onPasswordCheckChange} />
        {errorMessage.passwordCheck && (
          <ErrorMessage message={errorMessage.passwordCheck} />
        )}
        <EmailInput onChange={onEmailChange} />
        {errorMessage.email && <ErrorMessage message={errorMessage.email} />}
      </div>
      <SharedButton name="회원가입" onClick={handleClick} />
    </div>
  )
}
export default SignupForm
