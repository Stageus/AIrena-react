import { ReactComponent as PasswordIcon } from '#assets/icons/password_icon.svg'
import React from 'react'
import styles from './PasswordCheckInput.module.css'

const PasswordCheckInput: React.FC = () => {
  return (
    <div className={styles['component----']}>
      <div className={styles['text--']}>비밀번호 확인</div>
      <PasswordIcon className={styles['path']} />
    </div>
  )
}

export default PasswordCheckInput
