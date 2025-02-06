import { ReactComponent as PasswordIcon } from '#assets/icons/password_icon.svg'
import React from 'react'
import styles from './index.module.scss'

const PasswordCheckInput: React.FC = () => {
  return (
    <div className={styles['password-check-input-box']}>
      <div className={styles['password-check-text']}>비밀번호 확인</div>
      <PasswordIcon className={styles['password-icon']} />
    </div>
  )
}

export default PasswordCheckInput
