import SharedButton from '#shared/components/button/StandardButton'
import EmailInput from '#shared/components/input/EmailInput'
import WeightedTextOutput from '#shared/components/WeightedTextOutput'
import React, { useState } from 'react'
import { FindIdResponse } from '../api'
import { getRequestFindIdResult, goLoginPage } from '../model'
import styles from './FindIdArea.module.scss'

export const FindIdArea: React.FC = () => {
  const [email, setEmail] = useState('')
  const [findIdResponse, setFindIdResponse] = useState<FindIdResponse | null>(
    null,
  )

  const setFindIdResponseState = () => {
    const fetch = async () => {
      const result = await getRequestFindIdResult(email)
      setFindIdResponse(result)
    }
    fetch()
  }

  return findIdResponse ? (
    <div className={styles['find-id-result-area']}>
      <div className={styles['find-id-result']}>아이디 찾기 결과</div>
      <WeightedTextOutput text={findIdResponse.id} />
      <SharedButton name="로그인페이지로 이동" onClick={goLoginPage} />
    </div>
  ) : (
    <div className={styles['find-id-form']}>
      <EmailInput setEmail={setEmail} />
      <SharedButton name="아이디 찾기" onClick={setFindIdResponseState} />
    </div>
  )
}
