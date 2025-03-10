import { PasswordIcon } from '#shared/icons'
import React from 'react'
import styles from './Password.module.scss'

interface PasswordProps {
  setPassword: (text: string) => void
}

export const Password: React.FC<PasswordProps> = ({ setPassword }) => {
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
