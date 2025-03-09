import SignupForm from '#features/Member/SignupForm/ui/SignupForm'
import React from 'react'
import styles from './index.module.scss'

const SignupPage: React.FC = () => {
  return (
    <div className={styles['narrow-background']}>
      <SignupForm />
    </div>
  )
}
export default SignupPage
