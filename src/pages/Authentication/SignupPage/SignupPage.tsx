import InfoInputArea from '#features/Authentication/Signup/ui/InfoInputArea/InfoInputArea'
import React from 'react'
import styles from './SignupPage.module.css'

const LoginPage: React.FC = () => {
  return (
    <div className={styles['narrow-background']}>
      <InfoInputArea />
    </div>
  )
}
export default LoginPage
