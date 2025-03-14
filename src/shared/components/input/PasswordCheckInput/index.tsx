import { ReactComponent as PasswordIcon } from '#assets/icons/password_icon.svg'
import React from 'react'
import styles from './index.module.scss'

interface PasswordCheckInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PasswordCheckInput: React.FC<PasswordCheckInputProps> = ({
  onChange,
}) => {
  return (
    <div className={styles['password-check-input-box']}>
      <input
        type="password"
        onChange={onChange}
        placeholder="비밀번호 확인"
        className={styles['password-check-text']}
        maxLength={16}
      />
      <PasswordIcon className={styles['password-icon']} />
    </div>
  )
}

export default PasswordCheckInput
