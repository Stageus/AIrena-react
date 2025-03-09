import { goFindIdPage, goFindPasswordPage, goSignupPage } from '../../../libs'
import styles from './AuthButtons.module.scss'

export const AuthButtons: React.FC = () => {
  return (
    <div className={styles['auth-button-area']}>
      <div onClick={goFindIdPage} className={styles['find-id-button']}>
        아이디 찾기
      </div>
      <div className={styles['divisor']}>|</div>
      <div
        onClick={goFindPasswordPage}
        className={styles['find-password-button']}
      >
        비밀번호 찾기
      </div>
      <div className={styles['divisor-1']}>|</div>
      <div onClick={goSignupPage} className={styles['register-button']}>
        회원가입
      </div>
    </div>
  )
}
