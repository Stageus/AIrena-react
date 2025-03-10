import { PasswordIcon } from '#shared/icons'
import React from 'react'
import styles from './PasswordCheck.module.scss'

interface PasswordCheckProps {
  setPasswordCheck: (text: string) => void
}

export const PasswordCheck: React.FC<PasswordCheckProps> = ({
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
      <PasswordIcon className={styles['password-check-icon']} />
    </div>
  )
}
