import SharedButton from '#shared/components/button/StandardButton'
import EmailInput from '#shared/components/input/EmailInput'
import WeightedTextOutput from '#shared/components/WeightedTextOutput'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FindIdResponse, requestFindId } from '../api'
import { Email, schema } from '../model'
import styles from './index.module.scss'

const FindIdArea: React.FC = () => {
  const [email, setEmail] = useState<Email>({ email: '' })
  const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>(
    {},
  )
  const [findIdResponse, setFindIdResponse] = useState<FindIdResponse | null>(
    null,
  )

  const fetch = async () => {
    const result = await requestFindId(email)
    if (!result) {
      return
    }
    if (result) {
      setFindIdResponse(result)
    }
  }
  const handleOnClick = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const result = schema.safeParse(email)

    if (!result.success) {
      const newErrorMessage: { [key: string]: string } = {}
      result.error.issues.forEach((issue) => {
        newErrorMessage[issue.path[0]] = issue.message
      })
      setErrorMessage(newErrorMessage)
      return
    } else {
      setErrorMessage({})
      fetch()
    }
  }

  const navigate = useNavigate()

  const goLoginPage = (): void => {
    navigate('/')
  }

  return findIdResponse ? (
    <div className={styles['find-id-result-area']}>
      <div className={styles['find-id-result']}>아이디 찾기 결과</div>
      <WeightedTextOutput text={findIdResponse.id} />
      <SharedButton name="로그인페이지로 이동" onClick={goLoginPage} />
    </div>
  ) : (
    <form className={styles['find-id-form']} onSubmit={handleOnClick}>
      <EmailInput setEmail={setEmail} />
      {errorMessage && (
        <div className={styles['error-message']}>{errorMessage.email}</div>
      )}
      <SharedButton name="아이디 찾기" type="submit" />
    </form>
  )
}
export default FindIdArea
