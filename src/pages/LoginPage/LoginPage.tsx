import LoginContainer from '#features/Login/ui/LoginContainer/LoginContainer'
import IntroductionSection from '#shared/components/IntroductionSection/IntroductionSection'
import React from 'react'
import styles from './LoginPage.module.css'

const LoginPage: React.FC = () => {
  return (
    <div className={styles['frame--']}>
      <IntroductionSection />
      <LoginContainer />
    </div>
  )
}
export default LoginPage
