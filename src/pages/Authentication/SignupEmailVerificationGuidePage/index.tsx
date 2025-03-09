import { SignupEmailVerificationGuide } from '#features/Member/SignupEmailVerificationGuide'
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
