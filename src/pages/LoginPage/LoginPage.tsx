import NormalLoginArea from '#features/Login/ui/NormalLoginArea/NormalLoginArea'
import SocialLoginArea from '#features/Login/ui/SocialLoginArea/SocialLoginArea'
import React from 'react'
import styles from './LoginPage.module.css'

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
