import { ReactComponent as EmailIcon } from '#assets/icons/email_icon.svg'
import React from 'react'
import styles from './EmailInput.module.css'

const EmailInput: React.FC = () => {
  return (
    <div className={styles['instance---']}>
      <div className={styles['text-']}>이메일</div>
      <EmailIcon className={styles['path']} />
    </div>
  )
}

export default EmailInput
