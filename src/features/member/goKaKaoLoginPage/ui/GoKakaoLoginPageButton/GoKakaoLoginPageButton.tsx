import { goKakaoLoginPage } from '../../libs'
import styles from './index.module.scss'

export const GoKakaologinPageButton: React.FC = () => {
  return (
    <div onClick={goKakaoLoginPage} className={styles['kakao-login-button']}>
      <div className={styles['kakao-login-content']}>
        <div className={styles['kakao-logo']}></div>
        <div className={styles['kako-login-text']}>카카오로 로그인</div>
      </div>
    </div>
  )
}
