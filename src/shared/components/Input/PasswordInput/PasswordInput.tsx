import { ReactComponent as PasswordIcon } from '#assets/icons/password_icon.svg'
import React from 'react'
import styles from './PasswordInput.module.css'

const PasswordInput: React.FC = () => {
  return (
    <div className={styles['password-input-box']}>
      <div className={styles['password-text']}>비밀번호</div>
      <PasswordIcon className={styles['password-icon']} />
    </div>
  )
}

export default PasswordInput
