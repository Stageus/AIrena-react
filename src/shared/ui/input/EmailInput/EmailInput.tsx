import { EmailIcon } from '#shared/icons'
import React from 'react'
import styles from './EmailInput.module.scss'

interface EmailInputProps {
  setEmail: (text: string) => void
}

export const EmailInput: React.FC<EmailInputProps> = ({ setEmail }) => {
  return (
    <div className={styles['email-input-box']}>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일"
        className={styles['email-text']}
      />
      <EmailIcon className={styles['email-icon']} />
    </div>
  )
}
