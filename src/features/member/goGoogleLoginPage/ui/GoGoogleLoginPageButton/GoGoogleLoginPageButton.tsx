import { goGoogleLoginPage } from '../../libs'
import styles from './index.module.scss'

export const GoGoogleLoginPageButton: React.FC = () => {
  return (
    <div onClick={goGoogleLoginPage} className={styles['google-login-button']}>
      <div className={styles['google-login-content']}>
        <div className={styles['google-logo']}></div>
        <div className={styles['google-login']}>구글로 로그인</div>
      </div>
    </div>
  )
}
