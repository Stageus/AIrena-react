import { FindIdResult } from '#entities/member'
import SharedButton from '#shared/components/button/StandardButton'
import EmailInput from '#shared/components/input/EmailInput'
import React, { useState } from 'react'
import { FindIdResponse } from '../api'
import { getRequestFindIdResult } from '../model'
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
    <FindIdResult id={findIdResponse.id} />
  ) : (
    <div className={styles['find-id-form']}>
      <EmailInput setEmail={setEmail} />
      <SharedButton name="아이디 찾기" onClick={setFindIdResponseState} />
    </div>
  )
}
