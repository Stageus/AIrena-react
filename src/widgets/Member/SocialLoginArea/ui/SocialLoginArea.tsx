import { GoGoogleLoginPageButton } from '#features/member/goGoogleLoginPage'
import { GoKakaologinPageButton } from '#features/member/goKaKaoLoginPage'
import styles from './index.module.scss'

export const SocialLoginArea: React.FC = () => {
  return (
    <div className={styles['social-login-area']}>
      <div className={styles['simple-login-content']}>
        <div className={styles['divisor']}></div>
        <div className={styles['simple-login-box']}>
          <div className={styles['simple-login-text']}>간편 로그인</div>
        </div>
      </div>
      <GoKakaologinPageButton />
      <GoGoogleLoginPageButton />
    </div>
  )
}
