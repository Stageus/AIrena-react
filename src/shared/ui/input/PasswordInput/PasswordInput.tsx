import { PasswordIcon } from '#shared/icons'
import React from 'react'
import styles from './PasswordInput.module.scss'

interface PasswordInputProps {
  setPassword: (text: string) => void
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  setPassword,
}) => {
  return (
    <div className={styles['password-input-box']}>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호"
        className={styles['password-text']}
      />
      <PasswordIcon className={styles['password-icon']} />
    </div>
  )
}
