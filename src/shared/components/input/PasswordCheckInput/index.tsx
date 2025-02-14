import { ReactComponent as PasswordIcon } from '#assets/icons/password_icon.svg'
import React from 'react'
import styles from './index.module.scss'

interface PasswordCheckInputProps {
  setPasswordCheck: (text: string) => void
}

const PasswordCheckInput: React.FC<PasswordCheckInputProps> = ({
  setPasswordCheck,
}) => {
  return (
    <div className={styles['password-check-input-box']}>
      <input
        type="password"
        onChange={(e) => setPasswordCheck(e.target.value)}
        placeholder="비밀번호 확인"
        className={styles['password-check-text']}
      />
      <PasswordIcon className={styles['password-icon']} />
    </div>
  )
}

export default PasswordCheckInput
