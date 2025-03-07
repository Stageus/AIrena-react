import NormalLoginForm from '#entities/Authentication/NormalLoginForm/ui'
import SocialLoginArea from '#entities/Authentication/SocialLoginArea/ui'
import React from 'react'
import styles from './index.module.scss'

const LoginPage: React.FC = () => {
  return (
    <div className={styles['narrow-background']}>
      <div className={styles['info-input-area']}>
        <NormalLoginForm />
        <SocialLoginArea />
      </div>
    </div>
  )
}
export default LoginPage
