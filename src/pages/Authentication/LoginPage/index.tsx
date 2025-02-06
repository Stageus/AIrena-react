import NormalLoginArea from '#features/Authentication/Login/ui/NormalLoginArea/NormalLoginArea'
import SocialLoginArea from '#features/Authentication/Login/ui/SocialLoginArea/SocialLoginArea'
import React from 'react'
import styles from './LoginPage.module.scss'

const LoginPage: React.FC = () => {
  return (
    <div className={styles['narrow-background']}>
      <div className={styles['info-input-area']}>
        <NormalLoginArea />
        <SocialLoginArea />
      </div>
    </div>
  )
}
export default LoginPage
