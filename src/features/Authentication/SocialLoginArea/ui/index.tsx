import { goGoogleLoginPage, goKakaoLoginPage } from '../model/oAuthService'
import styles from './index.module.scss'

const SocialLoginArea: React.FC = () => {
  return (
    <div className={styles['social-login-area']}>
      <div className={styles['simple-login-content']}>
        <div className={styles['divisor']}></div>
        <div className={styles['simple-login-box']}>
          <div className={styles['simple-login-text']}>간편 로그인</div>
        </div>
      </div>
      <div onClick={goKakaoLoginPage} className={styles['kakao-login-button']}>
        <div className={styles['kakao-login-content']}>
          <div className={styles['kakao-logo']}></div>
          <div className={styles['kako-login-text']}>카카오로 로그인</div>
        </div>
      </div>
      <div
        onClick={goGoogleLoginPage}
        className={styles['frame-google-login-button']}
      >
        <div className={styles['google-login-content']}>
          <div className={styles['google-logo']}></div>
          <div className={styles['google-login']}>구글로 로그인</div>
        </div>
      </div>
    </div>
  )
}
export default SocialLoginArea
