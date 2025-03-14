import { ReactComponent as EmailIcon } from '#assets/icons/email_icon.svg'
import React from 'react'
import styles from './index.module.scss'

interface EmailInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const EmailInput: React.FC<EmailInputProps> = ({ onChange }) => {
  return (
    <>
      <div className={styles['email-input-box']}>
        <input
          type="text"
          onChange={onChange}
          placeholder="이메일"
          className={styles['email-text']}
          maxLength={100}
        />
        <EmailIcon className={styles['email-icon']} />
      </div>
    </>
  )
}

export default EmailInput
