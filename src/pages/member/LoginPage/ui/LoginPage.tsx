import { NormalLoginForm } from '#widgets/member/NormalLoginForm'
import { SocialLoginArea } from '#widgets/member/SocialLoginArea'
import React from 'react'
import styles from './LoginPage.module.scss'

export const LoginPage: React.FC = () => {
  return (
    <div className={styles['narrow-background']}>
      <div className={styles['info-input-area']}>
        <NormalLoginForm />
        <SocialLoginArea />
      </div>
    </div>
  )
}
