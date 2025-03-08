import SharedButton from '#shared/components/button/StandardButton'
import IdInput from '#shared/components/input/IdInput'
import PasswordInput from '#shared/components/input/PasswordInput'
import { useEffect, useState } from 'react'
import {
  checkLoginWithNavigate,
  goFindIdPage,
  goFindPasswordPage,
  goSignupPage,
  normalLoginWithNavigate,
} from '../model'
import styles from './index.module.scss'

export const NormalLoginForm: React.FC = ({}) => {
  const [id, setId] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    checkLoginWithNavigate()
  }, [])

  return (
    <div className={styles['normal-login-form']}>
      <IdInput setId={setId} />
      <PasswordInput setPassword={setPassword} />
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
      <SharedButton
        name="로그인"
        onClick={() => {
          normalLoginWithNavigate(id, password)
        }}
      />
    </div>
  )
}
