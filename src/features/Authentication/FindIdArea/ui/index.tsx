import SharedButton from '#shared/components/button/StandardButton'
import { ErrorMessage } from '#shared/components/ErrorMessage'
import EmailInput from '#shared/components/input/EmailInput/ui'
import WeightedTextOutput from '#shared/components/WeightedTextOutput'
import { Email, EmailSchema } from '#shared/model/input'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { requestFindId } from '../api'
import styles from './index.module.scss'

const FindIdArea: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState<Email>({ email: '' })
  const [id, setId] = useState<string | null>(null)
  const [errorMessage, setErrorMessage] = useState<{
    email: string | null
  }>({
    email: null,
  })

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

  const handleFindId = () => {
    if (!validateEmail(email)) {
      return
    }
    const fetchFindId = async () => {
      const response = await requestFindId({ email: email.email })
      setId(response.id)
    }
    fetchFindId()
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = { email: e.target.value }
    setEmail(newEmail)
    validateEmail(newEmail)
  }

  const goLoginPage = () => {
    navigate('/')
  }

  return id ? (
    <div className={styles['find-id-result-area']}>
      <div className={styles['find-id-result']}>아이디 찾기 결과</div>
      <WeightedTextOutput text={id} />
      <SharedButton name="로그인 페이지로 이동" onClick={goLoginPage} />
    </div>
  ) : (
    <div className={styles['find-id-form']}>
      <EmailInput onChange={onChange} />
      {errorMessage.email && <ErrorMessage message={errorMessage.email} />}
      <SharedButton name="아이디 찾기" onClick={handleFindId} />
    </div>
  )
}
export default FindIdArea
