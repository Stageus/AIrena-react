import SharedButton from '#shared/ui/button/StandardButton'
import EmailInput from '#shared/ui/input/EmailInput'
import IdInput from '#shared/ui/input/IdInput'
import PasswordCheckInput from '#shared/ui/input/PasswordCheckInput'
import PasswordInput from '#shared/ui/input/PasswordInput'
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
