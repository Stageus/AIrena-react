import SignupEmailVerificationGuide from '#entities/Authentication/SignupEmailVerificationGuide/ui'
import React from 'react'
import styles from './index.module.scss'

const SignupEmailVerificationGuidePage: React.FC = () => {
  return (
    <div className={styles['container']}>
      <SignupEmailVerificationGuide />
    </div>
  )
}
export default SignupEmailVerificationGuidePage
