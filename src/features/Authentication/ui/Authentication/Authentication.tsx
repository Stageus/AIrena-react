import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '#app/store'
import styles from './Authentication.module.css'
import Greeting from '#features/Authentication/ui/Greeting/Greeting'
import LoginForm from '#features/Authentication/ui/NormalLoginForm/NormalLoginForm'
import OAuthLoginForm from '#features/Authentication/ui/OAuthLoginForm/OAuthLoginForm'

const Authentication: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth)

  return (
    <div className={styles['authentication-container']}>
      {user ? (
        <Greeting user={user} />
      ) : (
        <div>
          <LoginForm />
          <p className={styles['orDivisor']}>or</p>
          <OAuthLoginForm />
        </div>
      )}
    </div>
  )
}

export default Authentication
