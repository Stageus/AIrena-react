import SharedButton from '#shared/components/button/StandardButton'
import { ErrorMessage } from '#shared/components/ErrorMessage'
import EmailInput from '#shared/components/input/EmailInput/ui'
import IdInput from '#shared/components/input/IdInput'
import { Email, EmailSchema } from '#shared/model/input'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { requestFindPassword } from '../api'
import styles from './index.module.scss'

const FindPasswordForm: React.FC = () => {
  const [id, setId] = useState('')
  const [email, setEmail] = useState<Email>({ email: '' })
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const navigate = useNavigate()
  const goEmailVerificationGuidePage = () => {
    navigate(`/find/password/email-verification-guide?email=${email.email}`)
  }

  const handleFindPassword = () => {
    const parsed = EmailSchema.safeParse(email)
    if (id === '' || !parsed.success) {
      setErrorMessage('아이디 또는 이메일을 입력해주세요.')
      return
    }

    const fetch = async () => {
      const result = await requestFindPassword({ id, email: parsed.data.email })
      if (result.status === 200) {
        goEmailVerificationGuidePage()
      }
    }

    fetch()
  }

  const onIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value)
  }

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <div className={styles['find-password-form']}>
      <div className={styles['input-area']}>
        <IdInput onChange={onIdChange} />
        <EmailInput onChange={onEmailChange} />
        {errorMessage && <ErrorMessage message={errorMessage} />}
      </div>
      <SharedButton name="비밀번호 찾기" onClick={handleFindPassword} />
    </div>
  )
}
export default FindPasswordForm
