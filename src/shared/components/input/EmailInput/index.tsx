import { ReactComponent as EmailIcon } from '#assets/icons/email_icon.svg'
import React from 'react'
import styles from './index.module.scss'

interface EmailInputProps {
  setEmail: (text: string) => void
}

const EmailInput: React.FC<EmailInputProps> = ({ setEmail }) => {
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

export default EmailInput
