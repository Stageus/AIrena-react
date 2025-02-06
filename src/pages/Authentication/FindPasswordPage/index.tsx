import InfoInputArea from '#features/Authentication/FindPasswordForm/ui/InfoInputArea/InfoInputArea'
import React from 'react'
import style from './index.module.scss'

const LoginPage: React.FC = () => {
  return (
    <div className={style['narrow-background']}>
      <InfoInputArea />
    </div>
  )
}
export default LoginPage
