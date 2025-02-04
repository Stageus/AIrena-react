import InfoInputArea from '#features/Signup/ui/InfoInputArea/InfoInputArea'
import React from 'react'
import styles from './SignupPage.module.css'

const LoginPage: React.FC = () => {
  return (
    <div className={styles['frame-']}>
      <InfoInputArea />
    </div>
  )
}
export default LoginPage
