import FindPasswordForm from '#entities/Authentication/FindPasswordForm/ui'
import React from 'react'
import style from './index.module.scss'

const LoginPage: React.FC = () => {
  return (
    <div className={style['narrow-background']}>
      <FindPasswordForm />
    </div>
  )
}
export default LoginPage
