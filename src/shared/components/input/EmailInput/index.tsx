import { ReactComponent as EmailIcon } from '#assets/icons/email_icon.svg'
import React from 'react'
import styles from './index.module.scss'

const EmailInput: React.FC = () => {
  return (
    <div className={styles['email-input-box']}>
      <div className={styles['email-text']}>이메일</div>
      <EmailIcon className={styles['email-icon']} />
    </div>
  )
}

export default EmailInput
