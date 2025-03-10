import { EmailIcon } from '#shared/icons'
import React from 'react'
import styles from './Email.module.scss'

interface EmailProps {
  setEmail: (text: string) => void
}

export const Email: React.FC<EmailProps> = ({ setEmail }) => {
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
