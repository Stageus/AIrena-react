import { FindPasswordForm } from '#widgets/member'
import React from 'react'
import style from './FindPasswordPage.module.scss'

export const FindPasswordPage: React.FC = () => {
  return (
    <div className={style['narrow-background']}>
      <FindPasswordForm />
    </div>
  )
}
