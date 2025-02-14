import { ReactComponent as PasswordIcon } from '#assets/icons/password_icon.svg'
import React from 'react'
import styles from './index.module.scss'

interface PasswordInputProps {
  setPassword: (text: string) => void
}

const PasswordInput: React.FC<PasswordInputProps> = ({ setPassword }) => {
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

export default PasswordInput
