import {
  EmailInput,
  IdInput,
  PasswordCheckInput,
  PasswordInput,
} from '#shared/ui'
import React from 'react'
import styles from './InfoInput.module.scss'

interface InfoInputProps {
  setId: (id: string) => void
  setPassword: (password: string) => void
  setPasswordCheck: (passwordCheck: string) => void
  setEmail: (email: string) => void
}

export const InfoInput: React.FC<InfoInputProps> = ({
  setId,
  setPassword,
  setPasswordCheck,
  setEmail,
}) => {
  return (
    <div className={styles['info-input-area']}>
      <IdInput setId={setId} />
      <PasswordInput setPassword={setPassword} />
      <PasswordCheckInput setPasswordCheck={setPasswordCheck} />
      <EmailInput setEmail={setEmail} />
    </div>
  )
}
