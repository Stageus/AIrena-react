import { ReactComponent as PasswordIcon } from '#assets/icons/password_icon.svg'
import React from 'react'
import styles from './index.module.scss'

interface PasswordInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PasswordInput: React.FC<PasswordInputProps> = ({ onChange }) => {
  return (
    <div className={styles['password-input-box']}>
      <input
        type="password"
        onChange={onChange}
        placeholder="비밀번호"
        className={styles['password-text']}
        maxLength={16}
      />
      <PasswordIcon className={styles['password-icon']} />
    </div>
  )
}

export default PasswordInput
