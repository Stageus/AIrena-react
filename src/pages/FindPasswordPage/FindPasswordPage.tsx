import InfoInputArea from '#features/FindPassword/ui/InfoInputArea/InfoInputArea'
import React from 'react'
import style from './FindPasswordPage.module.css'

const LoginPage: React.FC = () => {
  return (
    <div className={style['narrow-background']}>
      <InfoInputArea />
    </div>
  )
}
export default LoginPage
