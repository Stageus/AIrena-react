import NormalLoginArea from '#features/Login/ui/NormalLoginArea/NormalLoginArea'
import SocialLoginArea from '#features/Login/ui/SocialLoginArea/SocialLoginArea'
import React from 'react'
import styles from './LoginPage.module.css'

const LoginPage: React.FC = () => {
  return (
    <div className={styles['frame-div']}>
      <div className={styles['frame-']}>
        <div className={styles['frame-div-1']}>
          <NormalLoginArea />
          <SocialLoginArea />
        </div>
      </div>
    </div>
  )
}
export default LoginPage
