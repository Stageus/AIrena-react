import SharedButton from '#shared/ui/button/Standard/Standard'
import { InfoInput } from '#widgets/member/InfoInput'
import React from 'react'
import { signup } from '../model'
import styles from './index.module.scss'

export const SignupPage: React.FC = () => {
  const [id, setId] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordCheck, setPasswordCheck] = React.useState('')
  const [email, setEmail] = React.useState('')

  return (
    <div className={styles['narrow-background']}>
      <div className={styles['signup-form']}>
        <InfoInput
          setId={setId}
          setPassword={setPassword}
          setPasswordCheck={setPasswordCheck}
          setEmail={setEmail}
        />
        <SharedButton
          name="회원가입"
          onClick={() => {
            signup(id, password, passwordCheck, email)
          }}
        />
      </div>
    </div>
  )
}
