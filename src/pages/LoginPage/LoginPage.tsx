import NormalLoginArea from '#features/Login/ui/NormalLoginArea/NormalLoginArea'
import SocialLoginArea from '#features/Login/ui/SocialLoginArea/SocialLoginArea'
import React from 'react'
import style from './LoginPage.module.css'

const LoginPage: React.FC = () => {
  return (
    <div className={style['frame-']}>
      <div className={style['frame-div']}>
        <NormalLoginArea />
        <SocialLoginArea />
      </div>
    </div>
  )
}
export default LoginPage
