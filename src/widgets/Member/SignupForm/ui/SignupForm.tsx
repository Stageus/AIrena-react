import SharedButton from '#shared/components/button/StandardButton'
import EmailInput from '#shared/components/input/EmailInput'
import IdInput from '#shared/components/input/IdInput'
import PasswordCheckInput from '#shared/components/input/PasswordCheckInput'
import PasswordInput from '#shared/components/input/PasswordInput'
import React from 'react'
import { signup } from '../model'
import styles from './index.module.scss'

export const SignupForm: React.FC = () => {
  const [id, setId] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordCheck, setPasswordCheck] = React.useState('')
  const [email, setEmail] = React.useState('')

  return (
    <div className={styles['signup-form']}>
      <div className={styles['info-input-area']}>
        <IdInput setId={setId} />
        <PasswordInput setPassword={setPassword} />
        <PasswordCheckInput setPasswordCheck={setPasswordCheck} />
        <EmailInput setEmail={setEmail} />
      </div>
      <SharedButton
        name="회원가입"
        onClick={() => {
          signup(id, password, passwordCheck, email)
        }}
      />
    </div>
  )
}
