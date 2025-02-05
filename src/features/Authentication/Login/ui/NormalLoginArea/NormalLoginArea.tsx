import SharedButton from '#shared/components/Button/SharedButton'
import IdInput from '#shared/components/Input/IdInput/IdInput'
import PasswordInput from '#shared/components/Input/PasswordInput/PasswordInput'
import { useNavigate } from 'react-router-dom'
import styles from './NormalLoginArea.module.css'

const Root = ({}) => {
  const navigate = useNavigate()

  const goFindPassword = () => {
    navigate('/find/password')
  }

  const goFindId = () => {
    navigate('/find/id')
  }

  const goSignup = () => {
    navigate('/signup')
  }

  return (
    <div className={styles['normal-login-area']}>
      <IdInput />
      <PasswordInput />
      <div className={styles['auth-buttons']}>
        <div onClick={goFindId} className={styles['find-id-button']}>
          아이디 찾기
        </div>
        <div className={styles['divisor']}>|</div>
        <div
          onClick={goFindPassword}
          className={styles['find-password-button']}
        >
          비밀번호 찾기
        </div>
        <div className={styles['divisor-1']}>|</div>
        <div onClick={goSignup} className={styles['register-button']}>
          회원가입
        </div>
      </div>
      <SharedButton name="로그인" onClick={() => {}} />
    </div>
  )
}
export default Root
