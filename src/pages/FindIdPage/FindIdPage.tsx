import InfoInputPage from '#features/FindId/ui/InfoInputArea/InfoInputArea'
import React from 'react'
import style from './FindIdPage.module.css'

const LoginPage: React.FC = () => {
  return (
    <div className={style['frame-']}>
      <InfoInputPage />
    </div>
  )
}
export default LoginPage
