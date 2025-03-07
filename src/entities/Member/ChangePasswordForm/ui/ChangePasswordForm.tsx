import SharedButton from '#shared/components/button/StandardButton'
import PasswordCheckInput from '#shared/components/input/PasswordCheckInput'
import PasswordInput from '#shared/components/input/PasswordInput'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { changePassword } from '../model'
import styles from './index.module.scss'

export const ChangePasswordForm: React.FC = () => {
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  const token = searchParams.get('token') as string

  return (
    <div className={styles['change-password-form']}>
      <div className={styles['input-area']}>
        <PasswordInput setPassword={setPassword} />
        <PasswordCheckInput setPasswordCheck={setPasswordCheck} />
      </div>
      <SharedButton
        name="비밀번호 변경"
        onClick={() => {
          changePassword(password, passwordCheck, token)
        }}
      />
    </div>
  )
}
