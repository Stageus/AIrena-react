import React from 'react'
import styles from './OAuthLoginForm.module.css'
import {
  goGoogleLoginPage,
  goKakaoLoginPage,
} from '#features/Authentication/model/oAuthService'
import googleLoginLogo from '#assets/images/google_login_logo.png'
import kakaoLoginLogo from '#assets/images/kakao_login_logo.png'

const OAuthLoginForm: React.FC = () => {
  const handleGoogleLogin = () => {
    goGoogleLoginPage()
  }

  const handleKakaoLogin = () => {
    goKakaoLoginPage()
  }

  return (
    <div className={styles.oauthContainer}>
      <img
        src={googleLoginLogo}
        alt="Google Logo"
        className={styles.oauthButton}
        onClick={handleGoogleLogin}
      />
      <img
        src={kakaoLoginLogo}
        alt="Kakao Logo"
        className={styles.oauthButton}
        onClick={handleKakaoLogin}
      />
    </div>
  )
}

export default OAuthLoginForm
