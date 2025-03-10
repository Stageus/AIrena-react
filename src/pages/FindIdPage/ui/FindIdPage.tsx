import { FindIdResult } from '#entities/member'
import SharedButton from '#shared/ui/button/Standard/Standard'
import EmailInput from '#shared/ui/input/Email/Email'
import React, { useState } from 'react'
import { FindIdResponse } from '../api'
import { getRequestFindIdResult } from '../model'
import styles from './FindIdPage.module.scss'

export const FindIdPage: React.FC = () => {
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

  return (
    <div className={styles['narrow-background']}>
      {findIdResponse ? (
        <FindIdResult id={findIdResponse.id} />
      ) : (
        <div className={styles['find-id-form']}>
          <EmailInput setEmail={setEmail} />
          <SharedButton name="아이디 찾기" onClick={setFindIdResponseState} />
        </div>
      )}
    </div>
  )
}
